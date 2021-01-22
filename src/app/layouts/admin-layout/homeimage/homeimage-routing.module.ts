import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeimageListComponent } from './homeimage/homeimage-list.component';
import { homeimageComponent } from './homeimage.component';




const routes: Routes = [{
  path: '',
  component: homeimageComponent,
      children: [
        {
          path: '',
          redirectTo: 'list',
          pathMatch: 'full'
        },
        {
          path: 'list',
           component: HomeimageListComponent,

        },
 
      ]     
  
}];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeimageRoutingModule { }
