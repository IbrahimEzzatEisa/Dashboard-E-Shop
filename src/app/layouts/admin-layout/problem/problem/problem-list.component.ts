import { Component, OnInit } from '@angular/core';
import { ResetPasswordService } from '../../../../shared/services/api/reset-password.service';
import {  Problem } from '../../../../shared/models/problem.model';
import { SwalService } from '../../../../shared/services/swal.service';


@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.scss']
})
export class ProblemListComponent implements OnInit {

// main object
  problem: Problem


  problemList: Problem[]=[];

  editObj :Problem = new Problem();
  index : number
  data=[];
  pagenumber=0;
  pageTitle=1;


  constructor(
    private problemServices: ResetPasswordService ,
    private swalService :SwalService
  ) { }

  ngOnInit(): void {
    this.problem = new Problem();
    this.getAllData();

  }
  
  

   // get all data of category
 getAllData(){
  this.problemServices.getAll('' ,'1','100').subscribe(res =>{
      this.data = []
      let a  = (res.result.length /100)+1;
      
      for (let index = 1; index <= a; index++) {
         this.data.push(index)     }
      this.problemList = res.result;
    
  })

}



  delete( index: number ) {
    this.editObj = {...this.problemList[index]}
    this.index = index;
     this.swalService.showRemoveConfirmation(index).then(
       result => {
         if (result.value) {
           this.problemServices.delete(this.editObj.id).subscribe(
         
             res => {
               this.swalService.Notifier('تم مسح البيانات بنجاح ');
               this.getAllData();
    
             },
             err => {
               let errorMessage = err.message || ' خطآ في مسح البيانات  ';
               this.swalService.NotifierError(errorMessage)
             }
           )
         }
       }
     );
    }
    


}
