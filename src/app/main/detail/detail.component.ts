import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DetailService } from './detail.service';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: any;
  allList: any;
  object: any;
  image: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private detailService: DetailService,
  ) { }

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    this.id = this.activatedRoute.snapshot.params['id'];
    this.detailService.getFullDetail()
    .subscribe(data => {
      this.allList = data;
      console.log(data);
      for ( const i of this.allList) {
        if (i.id == this.id) {
          console.log('Working');
          this.object = i.show;
          console.log(this.object);
        }
      }
    });
  }

  goBack(){
    this.route.navigate([`/main/`]);
  }

}