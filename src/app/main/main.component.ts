import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  allList: any;

  constructor(
    private mainService: MainService,
    private router: Router) {
   }

  ngOnInit() {
    this.mainService.getFullDetail()
    .subscribe(data => {
      this.allList = data;
      console.log(this.allList);
    });
    }

    cardDetails(id) {
      console.log(id);
      this.router.navigate([`/main/card-detail/${id}`]);
    }

}
