import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { HomeimageRoutingModule } from './homeimage-routing.module';
import { homeimageComponent } from './homeimage.component';
import { HomeimageListComponent } from './homeimage/homeimage-list.component';





@NgModule({
  declarations: [
homeimageComponent,
HomeimageListComponent



  
],
  imports: [
    CommonModule,
    HomeimageRoutingModule,
   FormsModule,
    SharedModule,
  


  ]
})
export class HomeimageModule { }
