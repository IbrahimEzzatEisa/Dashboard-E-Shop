import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguagesService } from '../../../../shared/services/api/languages.service';
import { City } from '../../../../shared/models/city.model';
import { Supplier } from '../../../../shared/models/supplier.model';
import { SuppliersService } from '../../../../shared/services/api/suppliers.service';
import { SwalService } from '../../../../shared/services/swal.service';
import { CategoriesCategoriesService } from '../../../../shared/services/api/album-categories.service';
import { Categories } from '../../../../shared/models/categories.model';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit {


   //MAIN-OBJECT

   cityList: City[]=[];
  
   city :City = new City();
   CityName:string;
   SupplierName:string;
   
  // main object
supplier:Supplier;

//array list 
supplierList: Supplier[]=[];


isEdit : boolean = false;
index : number
editObj :Supplier = new Supplier();
formSubmitted: boolean= false;
data=[];
pagenumber=0;
pageTitle=1;
  

    // city :City = new City();
    categoryNames:string;
 

    // category: Categories;
categoryList: Categories[]=[];


category :Categories = new Categories();
constructor(private supplierServices: SuppliersService ,
  private swalService: SwalService,
  private route: Router,
  private cityServices: LanguagesService,
  private albumcategoryServices: CategoriesCategoriesService ,


) { }

  ngOnInit(): void {
    // this.getAllData();
    this.city = new City();
    this.getAllCity();
    this.getAllcategory();

  }


    // get all data of annonce
    // getAllData(){
    //   this.supplierServices.getAll('','','1','100').subscribe(res =>{
    //       this.data = []
    //       let a  = (res.result.length /100)+1;
          
    //       for (let index = 1; index <= a; index++) {
    //          this.data.push(index) 
          
            
    //       }
    //       this.supplierList = res.result.map(item =>{
    //       item.imagePath = 'http://eshop5827-001-site3.etempurl.com'+item.imagePath
    //       return item
    //     })
        
    //   })
  
    // }
    navigate(item){
      this.pagenumber= item -1
      this.pageTitle = item;
      this.getAllCity();
    }

  delete(  index: number ) {
    this.editObj = {...this.supplierList[index]}
    this.index = index;
    this.swalService.showRemoveConfirmation(index).then(
      result => {
        if (result.value) {
          this.supplierServices.delete(this.editObj.id).subscribe(
            res => {
              this.swalService.Notifier('Done ');
              this.getAllCity();

            },
            err => {
              let errorMessage = err.message || ' Error  ';
              this.swalService.NotifierError(errorMessage)
            }
          )
        }
      }
    );
  }
  


  navigateToEdit(id: number) {
    this.route.navigate([`./pages/home/edit/${id}`], { queryParams: { isAdd: false } })
  }
  navigateToAdd() {
    this.route.navigate([`./pages/home/edit/false`], { queryParams: { isAdd: true } })
  }


         // get all data of annonce
         getAllcategory(){
          this.albumcategoryServices.getAll('', '1','100').subscribe(res =>{
            this.categoryList = res.result;
          
        })
      
        }


        getFilterSubsctypesCategory(item: Categories) {
          this.categoryNames = item.name;
         let categorynumber = item.id
        this.supplier.categoryId = categorynumber;
        let namecategory  = item.name;
        this.supplier.categoryName = namecategory ;
        
        }

  // get all city
  getAllCity(){
    this.cityServices.getAll('' ,'1','1000').subscribe(res =>{
        this.cityList = res.result;

        this.CityName = this.cityList[0].name ;
        this.supplierServices.getAll(String(this.cityList[0].id),'' ,'','1','100').subscribe(res =>{
          this.data = []
          let a  = (res.result.length /100)+1;
          
          for (let index = 1; index <= a; index++) {
             this.data.push(index) 
          
            
          }
          this.supplierList = res.result.map(item =>{
          item.imagePath = 'http://eshop5827-001-site3.etempurl.com'+item.imagePath
          return item
        })
        
      })
      
    })
  
  }

  // select data
 getFilterSubsctypes(item: City) {
  this.CityName = item.name;
  let cityId = item.id
  this.supplierServices.getAll(String(cityId), '','','1','100').subscribe(res =>{
    this.data = []
    let a  = (res.result.length /100)+1;
    
    for (let index = 1; index <= a; index++) {
       this.data.push(index) 
    
      
    }
    this.supplierList = res.result.map(item =>{
    item.imagePath = 'http://eshop5827-001-site3.etempurl.com'+item.imagePath
    return item
  })
  
})

}




}
