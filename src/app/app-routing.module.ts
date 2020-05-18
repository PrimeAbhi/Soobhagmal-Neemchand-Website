import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanydetailsComponent } from '../app/mastersetup/companydetails/companydetails.component'
import { MastersetupComponent } from './mastersetup/mastersetup.component';
import { TimeComponent } from './mastersetup/time/time.component';

import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component'

const routes: Routes = [
  {
    path: 'masterdetails', component: MastersetupComponent,
    children: [
      {
        path: 'companydetails',
        component: CompanydetailsComponent
      },
      {
        path: 'time',
        component: TimeComponent
      }

    ]
  },
  { path: '', redirectTo: '/masterdetails/companydetails', pathMatch: 'full' }, // redirect to `companydetails`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
