import { Component, OnInit } from '@angular/core';
import { SwalService } from '../../../../shared/services/swal.service';
import { About } from '../../../../shared/models/about.model';
import { AnnonceService } from '../../../../shared/services/api/annonce.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  //MAIN-OBJECT
  about: About;

  AboutList: About[]=[];
 
   editObj :About = new About();
   index : number
   data=[];
   pagenumber=0;
   pageTitle=1;

   content: string;
 
   constructor( private aboutServices: AnnonceService ,
     private swalService: SwalService) { }
 
   ngOnInit(): void {
     this.about = new About();
 
     this.getAllData();
   }
  // get all data of category
  getAllData(){
   this.aboutServices.get().subscribe(res =>{
       this.about.content  = Object.values(res)[2].content;

   })
 
 }
 
 


 save(){
 this.aboutServices.create(this.about).subscribe(res =>{
  this.swalService.Notifier(' تم الحفظ بنجاح .. شكرا لك ');
  // this.reset();
  this.getAllData();
 
 }, err => {
  let errorMessage =  err.data || ' حدث خطأ اثناء الحفظ .. من فضلك حاول مرة آخري    ';
  this.swalService.NotifierError(errorMessage)
 })
 }
 
 delete( index: number ) {
 this.editObj = {...this.about[index]}
 this.index = index;
  this.swalService.showRemoveConfirmation(index).then(
    result => {
      if (result.value) {
        this.aboutServices.delete(this.editObj.id).subscribe(
      
          res => {
            this.swalService.Notifier('تم مسح البيانات بنجاح ');
            // this.reset();
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
 this.aboutServices.update( this.about).subscribe(
   res => {
     this.swalService.Notifier('تم حفظ التعديلات بنجاح ');
     this.getAllData();
   },
   err => {
     let errorMessage = err.data || ' حدث خطأ اثناء الحفظ .. من فضلك حاول مرة آخري    ';
     this.swalService.NotifierError(errorMessage)
 
   }
 )
 }
}
