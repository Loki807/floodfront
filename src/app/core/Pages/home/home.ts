import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from '../../services/request';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 currentYear = new Date().getFullYear();

  urgencyCounts = { High: 0, Medium: 0, Low: 0 };

  constructor(
    private router: Router,
    private requestService: Request
  ) {}

  ngOnInit() {
    this.loadUrgencyCounts();
  }

  loadUrgencyCounts() {
    this.requestService.getAllRequests().subscribe(res => {
      this.urgencyCounts.High = res.filter(r => r.urgency === 'High').length;
      this.urgencyCounts.Medium = res.filter(r => r.urgency === 'Medium').length;
      this.urgencyCounts.Low = res.filter(r => r.urgency === 'Low').length;
    });
  }
  

  goToSubmit() {
    this.router.navigate(['/submit']);
  }

  goToVolunteer() {
    this.router.navigate(['/dashboard11']);
  }

  Privacy() {
    this.router.navigate(['/privacy']);
  }


   goToUrgency(level: string) {
    this.router.navigate(['/filter/urgency', level]);
  }

}
