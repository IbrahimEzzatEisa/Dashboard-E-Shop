import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PharmaComponent } from './pharma.component';
import { PharmaListComponent } from './pharma/pharma-list.component';




const routes: Routes = [{
  path: '',
  component: PharmaComponent,
      children: [
        {
          path: '',
          redirectTo: 'list',
          pathMatch: 'full'
        },
        {
          path: 'list',
          component: PharmaListComponent,

        },
 
      ]     
  
}];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmaRoutingModule { }
