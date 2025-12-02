import { Component, OnInit } from '@angular/core';
import { Request } from '../../services/request';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';

@Component({
  selector: 'app-maindashboard',
  imports: [CommonModule],
  templateUrl: './maindashboard.html',
  styleUrl: './maindashboard.css',
})
export class Maindashboard {

 requests: any[] = [];

  districtCounts: any = {};
  urgencyCounts = { High: 0, Medium: 0, Low: 0 };

  districts = [
    "Colombo", "Gampaha", "Kalutara",
    "Kandy", "Matale", "Nuwara Eliya",
    "Galle", "Matara", "Hambantota",
    "Jaffna", "Kilinochchi", "Mannar",
    "Vavuniya", "Mullaitivu", "Batticaloa",
    "Ampara", "Trincomalee",
    "Kurunegala", "Puttalam",
    "Anuradhapura", "Polonnaruwa",
    "Badulla", "Monaragala",
    "Ratnapura", "Kegalle"
  ];

  constructor(
    private router: Router,
    private requestService: Request
  ) {}

  ngOnInit() {
    this.loadCounts();
  }

  loadCounts() {
    this.requestService.getAllRequests().subscribe({
      next: (res: any[]) => {
        this.requests = res;
        this.calculateDistrictCounts();
        this.calculateUrgencyCounts();
      },
      error: err => console.error("Load failed:", err)
    });
  }

  calculateDistrictCounts() {
    this.districtCounts = {};

    for (let d of this.districts) {
      this.districtCounts[d] = this.requests.filter(r =>
        r.district?.toLowerCase() === d.toLowerCase()
      ).length;
    }
  }

  calculateUrgencyCounts() {
    this.urgencyCounts = { High: 0, Medium: 0, Low: 0 };

    for (let r of this.requests) {
      if (r.urgency === "High") this.urgencyCounts.High++;
      if (r.urgency === "Medium") this.urgencyCounts.Medium++;
      if (r.urgency === "Low") this.urgencyCounts.Low++;
    }
  }

  goToDistrict(d: string) {
    this.router.navigate(['/filter/district', d]);
  }

  goToUrgency(level: string) {
    this.router.navigate(['/filter/urgency', level]);
  }}