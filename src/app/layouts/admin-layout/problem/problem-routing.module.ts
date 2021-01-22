import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  ProblemComponent } from './problem.component';
import { ProblemListComponent } from './problem/problem-list.component';




const routes: Routes = [{
  path: '',
  component: ProblemComponent,
      children: [
        {
          path: '',
          redirectTo: 'list',
          pathMatch: 'full'
        },
        {
          path: 'list',
          component: ProblemListComponent,

        },

      ]    
  
}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProblemRoutingModule { }
