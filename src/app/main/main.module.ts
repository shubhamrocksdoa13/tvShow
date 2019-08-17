import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

import { MainService } from './main.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MainRoutingModule,
  ],
  providers: [MainService],
  declarations: [MainComponent]
})
export class MainModule { }
