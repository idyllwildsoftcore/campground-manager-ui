import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SitesComponent } from './sites/sites.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SiteDetailsComponent } from './site-details/site-details.component';
import { SiteUpdateComponent } from './site-update/site-update.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SitesComponent,
    ReservationsComponent,
    SiteDetailsComponent,
    SiteUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
