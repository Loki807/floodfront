import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy',
  imports: [],
  templateUrl: './privacy.html',
  styleUrl: './privacy.css',
})
export class Privacy {

   constructor(private router: Router) {}

   back()
   {
     this.router.navigate(['/home']);
   }
}
