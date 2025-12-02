import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Request } from '../../services/request';

@Component({
  selector: 'app-submit-request',
  imports: [CommonModule,FormsModule],
  templateUrl: './submit-request.html',
  styleUrl: './submit-request.css',
})
export class SubmitRequest {

model: any = {
  categories: [],
  urgency: '',
  

};
  router: any;

onCategoryChange(category: string, event: any) {
  if (event.target.checked) {
    this.model.categories.push(category);
  } else {
    this.model.categories = this.model.categories.filter((c: string) => c !== category);
  }
}
urgencyList = [
  { name: "High" },
  { name: "Medium" },
  { name: "Low" }
];

// ⭐ Full District List
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

  constructor(private requestService: Request) {}

  submit() {
    this.requestService.createRequest(this.model).subscribe({
      next: () => {
        alert("Request Submitted Successfully!");
        this.model = {};
          // Wait 2 seconds then navigate
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 2000);
      },
      
      
      error: () => {
        alert("Failed to submit request.");this.onCategoryChange
      }
    });
  }

  
  
}
