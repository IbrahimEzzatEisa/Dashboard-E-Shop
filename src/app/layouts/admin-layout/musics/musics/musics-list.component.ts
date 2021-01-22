import { Component, OnInit } from '@angular/core';

import { Delivery } from '../../../../shared/models/Delivery.model';
import { DeliveryService } from '../../../../shared/services/api/delivery.service';
import { SwalService } from '../../../../shared/services/swal.service';

@Component({
  selector: 'app-musics-list',
  templateUrl: './musics-list.component.html',
  styleUrls: ['./musics-list.component.scss']
})
export class MusicsListComponent implements OnInit {
 //MAIN-OBJECT
 delivery: Delivery;

 DeliveryList: Delivery[]=[];

  editObj :Delivery = new Delivery();
  index : number
  data=[];
  pagenumber=0;
  pageTitle=1;

  constructor( private DeliveryServices: DeliveryService ,
    private swalService: SwalService) { }

  ngOnInit(): void {
    this.delivery = new Delivery();

    this.getAllData();
  }
 // get all data of category
 getAllData(){
  this.DeliveryServices.getAll('' ,'1','100').subscribe(res =>{
      this.data = []
      let a  = (res.result.length /100)+1;
      
      for (let index = 1; index <= a; index++) {
         this.data.push(index)     }
      this.DeliveryList = res.result;
    
  })

}


 //fill
 fill(prop: Delivery) {
  this.delivery.id = prop.id;
  this.delivery.name = prop.name;
  this.delivery.fisrtPhone = prop.fisrtPhone;
  this.delivery.secondPhone = prop.secondPhone;
}
reset(){
this.delivery.id = 0;
this.delivery.name = '';
this.delivery.fisrtPhone = '';
this.delivery.secondPhone = '';


}
open(){
this.reset();
}
save(){

this.DeliveryServices.create(this.delivery).subscribe(res =>{
 this.swalService.Notifier(' تم الحفظ بنجاح .. شكرا لك ');
 this.reset();
 this.getAllData();

}, err => {
 let errorMessage =  err.data || ' حدث خطأ اثناء الحفظ .. من فضلك حاول مرة آخري    ';
 this.swalService.NotifierError(errorMessage)
})
}

delete( index: number ) {
this.editObj = {...this.DeliveryList[index]}
this.index = index;
 this.swalService.showRemoveConfirmation(index).then(
   result => {
     if (result.value) {
       this.DeliveryServices.delete(this.editObj.id).subscribe(
     
         res => {
           this.swalService.Notifier('تم مسح البيانات بنجاح ');
           this.reset();
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

saveupdate(){
this.update();
}

update( ) {
this.DeliveryServices.update( this.delivery).subscribe(
  res => {
    this.swalService.Notifier('تم حفظ التعديلات بنجاح ');
     this.reset();
    this.getAllData();
  },
  err => {
    let errorMessage = err.data || ' حدث خطأ اثناء الحفظ .. من فضلك حاول مرة آخري    ';
    this.swalService.NotifierError(errorMessage)

  }
)
}
cancel(){
this.reset();

}


}
