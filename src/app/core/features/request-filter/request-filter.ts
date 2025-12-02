import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Request } from '../../services/request';

@Component({
  selector: 'app-request-filter',
  imports: [],
  templateUrl: './request-filter.html',
  styleUrl: './request-filter.css',
})
export class RequestFilter {

  allRequests: any[] = [];
  filteredRequests: any[] = [];
  activeFilter: string = '';

  constructor(
    private route: ActivatedRoute,
    private requestService: Request
  ) {}

  ngOnInit() {

    // READ DISTRICT OR URGENCY FROM URL
    const district = this.route.snapshot.paramMap.get('district');
    const urgency = this.route.snapshot.paramMap.get('urgency');

    // LOAD DATA
    this.requestService.getAllRequests().subscribe(res => {

      this.allRequests = res;

      // FILTER BY DISTRICT
      if (district) {
        this.activeFilter = "District: " + district;
        this.filteredRequests = res.filter(r =>
          r.district?.toLowerCase() === district.toLowerCase()
        );
        return;
      }

      // FILTER BY URGENCY
      if (urgency) {
        this.activeFilter = "Urgency: " + urgency;
        this.filteredRequests = res.filter(r =>
          r.urgency === urgency
        );
        return;
      }

      // DEFAULT → SHOW ALL
      this.filteredRequests = res;
    });
  }
}
