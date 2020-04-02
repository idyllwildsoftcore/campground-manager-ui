import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SitesComponent } from './sites/sites.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { SiteDetailsComponent } from './site-details/site-details.component';
import { SiteUpdateComponent } from './site-update/site-update.component';


const routes: Routes = [
  { path: 'sites',
    component: SitesComponent,
    data: { title: 'List of Sites' }
  },
  {
    path: 'details/:id',
    component: SiteDetailsComponent,
    data: { title: 'Site Details' }
  },
  {
    path: 'update/:id',
    component: SiteUpdateComponent,
    data: { title: 'Site Update' }
  },
  {
    path: 'reservations',
    component: ReservationsComponent,
    data: { title: 'Reserve a site' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'List of Sites' }
  },
  { path: '',
  redirectTo: 'sites',
  pathMatch: 'full'
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
