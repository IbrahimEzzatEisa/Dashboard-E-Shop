import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PharmaComponent } from './pharma.component';
import { PharmaListComponent } from './pharma/pharma-list.component';
import { PharmaRoutingModule } from './pharma-routing.module';
import { SharedModule } from '../../../shared/shared.module';




@NgModule({
  declarations: [
PharmaComponent,
PharmaListComponent


  
],
  imports: [
    CommonModule,
    PharmaRoutingModule,
   FormsModule,
    SharedModule,
  


  ]
})
export class PharmaModule { }
