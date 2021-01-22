import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { ProblemRoutingModule } from './problem-routing.module';
import { ProblemComponent } from './problem.component';
import { ProblemListComponent } from './problem/problem-list.component';




@NgModule({
  declarations: [
ProblemComponent,
ProblemListComponent
  
],
  imports: [
    CommonModule,
    FormsModule,
    ProblemRoutingModule,
    SharedModule,



  ]
})
export class ProblemModule { }
