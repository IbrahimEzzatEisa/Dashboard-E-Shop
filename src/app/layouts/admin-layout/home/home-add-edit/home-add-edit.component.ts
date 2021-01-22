import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from '../../../../shared/models/supplier.model';
import { City } from '../../../../shared/models/city.model';

import { SuppliersService } from '../../../../shared/services/api/suppliers.service';
import { SwalService } from '../../../../shared/services/swal.service';
import { LanguagesService } from '../../../../shared/services/api/languages.service';
import { Categories } from '../../../../shared/models/categories.model';
import { CategoriesCategoriesService } from '../../../../shared/services/api/album-categories.service';


interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}


@Component({
  selector: 'app-home-add-edit',
  templateUrl: './home-add-edit.component.html',
  styleUrls: ['./home-add-edit.component.scss']
})
export class HomeAddEditComponent implements OnInit {


  
  @ViewChild('SlideImg', { static: false }) SlideImg: ElementRef;

 //list
 supplierList : Supplier[] = [];

 isAdd: boolean;
 formSubmitted: boolean = false;

 isBusy: boolean = false;

 index : number
 supplier :Supplier = new Supplier();

 image: string;

 //chang image flag
 isChangeImage : boolean = false;

 isEdit : boolean = false;
 

 updateimg: boolean =true;
 toupdate: boolean = false;
 apearButton: boolean = true;
 ResetButton: boolean = false;


   //MAIN-OBJECT

   cityList: City[]=[];
  
   city :City = new City();
   CityName:string;

    nameSupplier:string;


            // city :City = new City();
            categoryNames:string;
 

            // category: Categories;
        categoryList: Categories[]=[];
      
      
        category :Categories = new Categories();
  constructor(private route: ActivatedRoute,
    private renderer2: Renderer2,
    private swalService: SwalService,
    private supplierSerivrces: SuppliersService ,
    private cityServices: LanguagesService,
    private router: Router ,
    private albumcategoryServices: CategoriesCategoriesService ,
    ) { }

  ngOnInit(): void {

    this.supplier = new Supplier();
    this.city = new City();

    if (this.route.snapshot.queryParams.isAdd === 'true' || this.route.snapshot.routeConfig.path === 'Add') {
      this.isAdd = true;

    } else {
      this.supplier.id = this.route.snapshot.params.id;
      
      this.getSlide(this.supplier.id)
      this.isAdd = false
    }
    this.getAllData();
    this.getAllcategory();
  }


  getSlide(id) {
    this.supplierSerivrces.get(id).subscribe(res => {
       this.supplier = Object.values(res)[2];
       this.CityName = this.supplier.cityName;
        this.nameSupplier = this.supplier.name
       this.supplier.imagePath = 'http://eshop5827-001-site3.etempurl.com'+res.imagePath;
      this.changebackground( this.SlideImg , 'UserImageURL')


    })
  }
  // get all city
  getAllData(){
    this.cityServices.getAll('' ,'1','100').subscribe(res =>{
        this.cityList = res.result;
      
    })
  
  }

// select data
 getFilterSubsctypes(item: City) {
    this.CityName = item.name;
   let citynumber = item.id
  this.supplier.cityId =citynumber;
  let namecity  = item.name;
  this.supplier.cityName = namecity ;


 }


   // select data
   getFilterSubsctypesCategory(item: Categories) {
    this.categoryNames = item.name;
   let categorynumber = item.id
  this.supplier.categoryId = categorynumber;
  let namecategory  = item.name;
  this.supplier.categoryName = namecategory ;
  
  
  }
  


//save data

  save(...args: boolean[]) {
    this.formSubmitted = true;
    let a;
    args.map(item => {
      if (item === true) {
        a = true
        this.swalService.NotifierError('قم بادخال الحقول المطلوبه');
      }
    })
    if (a) return

    if (this.isAdd) {
      this.isBusy = true
      this.supplierSerivrces.create(this.supplier).subscribe(res => {
        this.isBusy = false
        this.swalService.Notifier('تم  الحفظ بنجاح');
        this.reset()
        this.formSubmitted = false;
        // this.router.navigate([`./pages/home/list`])

      }, err => {
        this.isBusy = false
        let errorMessage = err.message || 'حدث خطأ قي استلام البيانات';
        this.swalService.NotifierError(errorMessage)
      })
    } else {
      this.isBusy = true
      this.supplier.imageExtension ="png"

      this.isChangeImage?this.supplier.imageBase64 = this.supplier.imageBase64:this.supplier.imageBase64 = null;
      this.supplier.imagePath = null;

      this.supplierSerivrces.update(this.supplier).subscribe(res => {
        this.isBusy = false;
        this.reset()
        this.swalService.Notifier('تم  الحفظ بنجاح');
        this.formSubmitted = false;
        // this.router.navigate([`./pages/home/list`])

      }, err => {
        this.isBusy = false;
        let errorMessage = err.message || 'حدث خطأ قي استلام البيانات';
        this.swalService.NotifierError(errorMessage)
      })

    }
  }
  onFileChanged(event: HTMLInputEvent ,  prop: string) {
    this.isChangeImage = true;
    const file = event.target.files[0];
    let el = event.target.parentNode as HTMLElement;
    this.renderer2.removeClass(el, 'services-image')
    let reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = () => {
     this.supplier.imageBase64 = reader.result as string;
     this.supplier.imageBase64 = this.supplier.imageBase64.split(',')[1];
     
     this.renderer2.setStyle(el,
      'background-image', `url(${reader.result ? reader.result : this.supplier.imageBase64})`)
    this.renderer2.setStyle(el, 'background-size', 'cover')
    this.renderer2.setStyle(el, 'background-position', 'center')
    this.renderer2.setStyle(el, 'border', '3px solid black')

    }
  }
  
  changebackground(el: ElementRef, prop: string, isclear?: boolean, clsProp?: string) {
    if (isclear) {
      if (prop == 'UserImageURL') {
        this.renderer2.setStyle(el, 'background-image', `url('../../../../../assets/img/user-image.png)`)
        this.supplier[clsProp] = "Deleted"
        return
      } 
    }
    if (this.supplier[prop] === null) return
    this.renderer2.setStyle(el.nativeElement,
      'background-image', `url('${this.supplier.imagePath}')`);
        this.renderer2.setStyle(el.nativeElement, 'background-size', 'cover')
    this.renderer2.setStyle(el.nativeElement, 'background-position', 'center')
    this.renderer2.setStyle(el.nativeElement, 'border', '3px solid black')
    this.renderer2.removeClass(el.nativeElement, 'services-image')
  }

  reset(){
    this.supplier.id =0;
    this.supplier.name =''  ;
    this.supplier.phoneNumber = ''  ;
    this.supplier.cityName =''  ;
    this.CityName = ''; 
    this.categoryNames = ''

  
  }
  cancel(){
    this.reset()
  }


          // get all data of annonce
          getAllcategory(){
            this.albumcategoryServices.getAll('', '1','100').subscribe(res =>{
              this.categoryList = res.result;
            
          })
        
          }
}
