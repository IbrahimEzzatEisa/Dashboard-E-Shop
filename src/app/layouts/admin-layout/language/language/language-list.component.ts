import { Component, OnInit } from '@angular/core';
import { City } from '../../../../shared/models/city.model';
import { LanguagesService } from '../../../../shared/services/api/languages.service';
import { SwalService } from '../../../../shared/services/swal.service';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.scss']
})
export class LanguageListComponent implements OnInit {

  //MAIN-OBJECT
    city: City;

 cityList: City[]=[];

  editObj :City = new City();
  index : number
  data=[];
  pagenumber=0;
  pageTitle=1;

  constructor( private languageServices: LanguagesService ,
    private swalService: SwalService) { }

  ngOnInit(): void {
    this.city = new City();

    this.getAllData();
  }
 // get all data of category
 getAllData(){
  this.languageServices.getAll('' ,'1','100').subscribe(res =>{
      this.data = []
      let a  = (res.result.length /100)+1;
      
      for (let index = 1; index <= a; index++) {
         this.data.push(index)     }
      this.cityList = res.result;
    
  })

}


 //fill
 fill(prop: City) {
  this.city.id = prop.id;
  this.city.name = prop.name;

}
reset(){
this.city.id = 0;
this.city.name = '';

}
open(){
this.reset();
}
save(){

this.languageServices.create(this.city).subscribe(res =>{
 this.swalService.Notifier(' تم الحفظ بنجاح .. شكرا لك ');
 this.reset();
 this.getAllData();

}, err => {
 let errorMessage =  err.data || ' حدث خطأ اثناء الحفظ .. من فضلك حاول مرة آخري    ';
 this.swalService.NotifierError(errorMessage)
})
}

delete( index: number ) {
this.editObj = {...this.cityList[index]}
this.index = index;
 this.swalService.showRemoveConfirmation(index).then(
   result => {
     if (result.value) {
       this.languageServices.delete(this.editObj.id).subscribe(
     
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
this.languageServices.update( this.city).subscribe(
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
