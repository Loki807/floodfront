import { Routes } from '@angular/router';
import { SubmitRequest } from './core/features/submit-request/submit-request';

import { Dashboard } from './core/features/dashboard/dashboard';
import { Maindashboard } from './core/features/maindashboard/maindashboard';
import { Home } from './core/Pages/home/home';
import { Privacy } from './core/Pages/privacy/privacy';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component:Home },

  { path: 'submit', component:SubmitRequest},
  
  { path: 'dashboard', component:Dashboard },
   
   { path: 'dashboard11', component:Maindashboard },
     // ⭐ VOLUNTEER MAIN PAGE
  


{ path: 'privacy', component:Privacy},

    // ⭐ FILTER BY DISTRICT (lazy-loaded component)
  {
    path: 'filter/district/:district',
    loadComponent: () =>
      import('./core/features/request-filter/request-filter')
        .then(m => m.RequestFilter)
  },

  // ⭐ FILTER BY URGENCY (lazy-loaded component)
  {
    path: 'filter/urgency/:urgency',
    loadComponent: () =>
      import('./core/features/request-filter/request-filter')
        .then(m => m.RequestFilter)
  }

];
