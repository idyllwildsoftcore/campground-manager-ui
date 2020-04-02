import { Component, OnInit } from '@angular/core';
import { SiteService } from '../services/site.service'
import { Router, ActivatedRoute } from '@angular/router'
import { Site } from "../business-objects/site";

@Component({
  selector: 'app-site-details',
  templateUrl: './site-details.component.html',
  styleUrls: ['./site-details.component.scss']
})
export class SiteDetailsComponent implements OnInit {

  id: number;
  site: Site;

  constructor(private ss: SiteService, 
    private router : Router,
    private route : ActivatedRoute) { }

   ngOnInit() {
    this.site = new Site();

    this.id = this.route.snapshot.params['id'];
    
    this.ss.getSite(this.id)
      .subscribe(data => {
        console.log(data)
        this.site = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['sites']);
  }

}
