import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../../services/request';

@Component({
  selector: 'app-request-filter',
  imports: [],
  templateUrl: './request-filter.html',
  styleUrl: './request-filter.css',
})
export class RequestFilter {

  // ⭐ Store all API results
  allRequests: any[] = [];

  // ⭐ Store only filtered values (district / urgency)
  filteredRequests: any[] = [];

  // ⭐ Show on top of page (e.g., "District: Colombo")
  activeFilter: string = '';

  constructor(
    private route: ActivatedRoute,     // Read URL parameters
    private requestService: Request,   // Call API
    private router: Router             // Navigate to other pages
  ) {}

  ngOnInit() {

    // ⭐ Read route parameters
    const district = this.route.snapshot.paramMap.get('district');
    const urgency = this.route.snapshot.paramMap.get('urgency');

    // ⭐ Fetch all requests from backend
    this.requestService.getAllRequests().subscribe(res => {

      this.allRequests = res;

      // ⭐ If district filter is used
      if (district) {
        this.activeFilter = "District: " + district;
        this.filteredRequests = res.filter(r =>
          r.district?.toLowerCase() === district.toLowerCase()
        );
      }
      
      // ⭐ If urgency filter is used
      else if (urgency) {
        this.activeFilter = "Urgency: " + urgency;
        this.filteredRequests = res.filter(r =>
          r.urgency === urgency
        );
      }
      
      // ⭐ No filter → Show everything
      else {
        this.filteredRequests = res;
      }

      // ⭐ Always sort newest → oldest
      this.filteredRequests = this.filteredRequests.sort((a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

    });
  }

  // ⭐ Convert CreatedAt into "Today", "Yesterday", or readable date
  formatDate(dateString: string) {
    if (!dateString) return "-";

    const date = new Date(dateString);
    const now = new Date();

    const isToday =
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear();

    const yesterday = new Date();
    yesterday.setDate(now.getDate() - 1);

    const isYesterday =
      date.getDate() === yesterday.getDate() &&
      date.getMonth() === yesterday.getMonth() &&
      date.getFullYear() === yesterday.getFullYear();

    if (isToday) return "Today • " + date.toLocaleTimeString();
    if (isYesterday) return "Yesterday • " + date.toLocaleTimeString();

    return date.toLocaleString();
  }

  // ⭐ Back button → go to main dashboard
  goBack() {
    this.router.navigate(['/home']);
  }

 
  
}
