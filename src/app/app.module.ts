import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { FormsModule } from '@angular/forms';
import { MastersetupComponent } from './mastersetup/mastersetup.component';
import { AccountsComponent } from './accounts/accounts.component';
import { SoudaComponent } from './souda/souda.component';
import { SoudaupdateComponent } from './soudaupdate/soudaupdate.component';
import { ReportsComponent } from './reports/reports.component';
import { CompanydetailsComponent } from './mastersetup/companydetails/companydetails.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TimeComponent } from './mastersetup/time/time.component';

@NgModule({
  declarations: [
    AppComponent,
    MastersetupComponent,
    AccountsComponent,
    SoudaComponent,
    SoudaupdateComponent,
    ReportsComponent,
    CompanydetailsComponent,
    PageNotFoundComponent,
    TimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
