import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';
import { MastersetupComponent } from './mastersetup/mastersetup.component';
import { AccountsComponent } from './accounts/accounts.component';
import { SoudaComponent } from './souda/souda.component';
import { SoudaupdateComponent } from './soudaupdate/soudaupdate.component';
import { ReportsComponent } from './reports/reports.component';
import { CompanydetailsComponent } from './mastersetup/companydetails/companydetails.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MastersetupComponent,
    AccountsComponent,
    SoudaComponent,
    SoudaupdateComponent,
    ReportsComponent,
    CompanydetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
