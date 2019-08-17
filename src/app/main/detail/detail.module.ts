import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';

import { DetailService } from './detail.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    DetailRoutingModule,
  ],
  providers: [DetailService],
  declarations: [DetailComponent]
})
export class DetailModule { }
