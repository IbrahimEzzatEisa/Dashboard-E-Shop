import { Component, OnInit } from '@angular/core';
import { Categories } from '../../../../shared/models/categories.model';
import { CategoriesCategoriesService } from '../../../../shared/services/api/album-categories.service';
import { SwalService } from '../../../../shared/services/swal.service';
 
@Component({
  selector: 'app-albumcategory-list',
  templateUrl: './albumcategory-list.component.html',
  styleUrls: ['./albumcategory-list.component.scss']
})
export class AlbumcategoryListComponent implements OnInit {


  // category: Categories;
  categoryList: Categories[]=[];


  category :Categories = new Categories();
  index : number
  data=[];
  pagenumber=0;
  pageTitle=1;
  constructor(
    private albumcategoryServices: CategoriesCategoriesService ,
    private swalService: SwalService
  ) { }

  ngOnInit(): void {

    // ini obj
    this.category = new Categories();
    this.getAllData();
  }


  // get all data of category
  getAllData(){
    this.albumcategoryServices.getAll('', '1','100').subscribe(res =>{
        this.data = []
        let a  = (res.result.length /100)+1;
        
        for (let index = 1; index <= a; index++) {
           this.data.push(index)     }
        this.categoryList = res.result;
      
    })

  }


   //fill
   fill(prop: Categories) {
    this.category.id = prop.id;
    this.category.name = prop.name;
 
}
reset(){
  this.category.id = 0;
  this.category.name = '';

}
open(){
  this.reset();
}
 save(){
  this.albumcategoryServices.create(this.category).subscribe(res =>{
   this.swalService.Notifier(' تم الحفظ بنجاح .. شكرا لك ');
   this.reset();
   this.getAllData();

 }, err => {
   let errorMessage =  err.data || ' حدث خطأ اثناء الحفظ .. من فضلك حاول مرة آخري    ';
   this.swalService.NotifierError(errorMessage)
  })
 }

 delete(index: number ) {
  this.category = {...this.categoryList[index]}
  this.index = index;
   this.swalService.showRemoveConfirmation(index).then(
     result => {
       if (result.value) {
         this.albumcategoryServices.delete(this.category.id).subscribe(
       
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
  this.albumcategoryServices.update(this.category).subscribe(
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
