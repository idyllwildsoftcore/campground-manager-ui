import { Component, OnInit } from '@angular/core';
import { Site } from '../business-objects/site'
import { SiteService } from '../services/site.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-site-update',
  templateUrl: './site-update.component.html',
  styleUrls: ['./site-update.component.scss']
})
export class SiteUpdateComponent implements OnInit {

  submitted = false;
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

  updateSite() {
    this.ss.updateSite(this.id, this.site)
    .subscribe(data => {console.log(data);
      this.site = new Site();
      this.list();
    }, error => console.log(error));
    

  }

  list(){
    this.router.navigate(['sites']);
  }

  onSubmit() {
    this.submitted = true;
    this.updateSite();
  }

}
