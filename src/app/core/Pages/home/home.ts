import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  currentYear = new Date().getFullYear();

  constructor(private router: Router) {}

  goToSubmit() {
    this.router.navigate(['/submit']);
  }

  goToVolunteer() {
    this.router.navigate(['/dashboard11']);
  }

  
  Privacy() {
    this.router.navigate(['/privacy']);
  }

}
