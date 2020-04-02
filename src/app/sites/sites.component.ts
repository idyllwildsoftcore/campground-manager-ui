import { Component, OnInit } from '@angular/core';
import { SiteService } from '../services/site.service'
import { Site } from "../business-objects/site";
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent implements OnInit {

  sites: Observable<Site[]>;

  constructor( private ss: SiteService, 
    private router: Router) { }

   ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.sites = this.ss.getSitesList();
  } 

  deleteSite(id: number) {
    this.ss.deleteSite(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  siteDetails(id: number){
    this.router.navigate(['details', id]);
  }
  siteUpdate(id: number){
    this.router.navigate(['update', id]);
  }
}
