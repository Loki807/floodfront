import { Component, OnInit } from '@angular/core';
import { Request } from '../../services/request';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit{
requests: any[] = [];

  constructor(private requestService: Request) {}

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests() {
    this.requestService.getAllRequests().subscribe({
      next: (res: any[]) => {
        this.requests = res;
      },
      error: (err) => console.error("Failed to load requests", err)
    });
  }

  
}
