import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SwalService } from '../../../../shared/services/swal.service';
import {  ProductsService } from '../../../../shared/services/api/products.service';
import {  SuppliersService } from '../../../../shared/services/api/suppliers.service';

import { Products } from '../../../../shared/models/peoducts.model';
import { Supplier } from '../../../../shared/models/supplier.model';
import { CategoriesCategoriesService } from '../../../../shared/services/api/album-categories.service';
import { Categories } from '../../../../shared/models/categories.model';



interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}


@Component({
  selector: 'app-stars-add-edit',
  templateUrl: './stars-add-edit.component.html',
  styleUrls: ['./stars-add-edit.component.scss']
})
export class StarsAddEditComponent implements OnInit {


  @ViewChild('SlideImg', { static: false }) SlideImg: ElementRef;

 //main object
 artist: Products;
 //list
 artistList : Products[] = [];

 isAdd: boolean;
 formSubmitted: boolean = false;

 isBusy: boolean = false;

 index : number
 editObj :Products = new Products();

 image: string;

 //chang image flag
 isChangeImage : boolean = false;
 isChangeImagePath : boolean = false;


 isEdit : boolean = false;
 

 updateimg: boolean =true;
 toupdate: boolean = false;
 apearButton: boolean = true;
 ResetButton: boolean = false;



    //MAIN-OBJECT

    supplierList: Supplier[]=[];

    supplier:Supplier;

    // city :City = new City();
    supplierNames:string;

        // city :City = new City();
        categoryNames:string;
 

      // category: Categories;
  categoryList: Categories[]=[];


  category :Categories = new Categories();

  constructor( private route: ActivatedRoute,
    private renderer2: Renderer2,
    private swalService: SwalService,
    private artistServices: ProductsService ,
    private router: Router,
    private suppliersService: SuppliersService ,
    private albumcategoryServices: CategoriesCategoriesService ,
    
    ) { }

  ngOnInit(): void {

    this.artist = new Products();

    if (this.route.snapshot.queryParams.isAdd === 'true' || this.route.snapshot.routeConfig.path === 'Add') {
      this.isAdd = true;

    } else {
      this.artist.id = this.route.snapshot.params.id;
      this.getSlide(this.artist.id)
      this.isAdd = false
    }
    // this.getAllData();
    this.getAllcategory();
  }

    // get all data of annonce
    // getAllData(){
    //   this.suppliersService.getAll('','','','1','100').subscribe(res =>{
    //       this.supplierList = res.result
    //   })
    // }

        // get all data of annonce
        getAllcategory(){
          this.albumcategoryServices.getAll('', '1','100').subscribe(res =>{
            this.categoryList = res.result;
          
        })
      
        }

  // select data
 getFilterSubsctypes(item: Supplier) {
  this.supplierNames = item.name;
 let suppliernumber = item.id
this.artist.supplierId =suppliernumber;
let namesupplier  = item.name;
this.artist.supplierName = namesupplier ;


}

  // select data
  getFilterSubsctypesCategory(item: Categories) {
    this.categoryNames = item.name;
   let categorynumber = item.id
  this.artist.categoryId = categorynumber;
  let namecategory  = item.name;
  this.artist.categoryName = namecategory ;

  this.suppliersService.getAll('',String(categorynumber)  , '' , '1' ,'100').subscribe(
    res=> {
      this.supplierList = res.result
      console.log(this.supplierList)
    }
  )
  
  
  }
  

  getSlide(id) {
    this.artistServices.get(id).subscribe(res => {
       this.artist = Object.values(res)[2];
       this.artist.imagePath = 'http://eshop5827-001-site3.etempurl.com'+this.artist.imagePath;
       this.categoryNames = this.artist.categoryName;
       this.supplierNames = this.artist.supplierName;

      this.changebackground( this.SlideImg , 'UserImageURL')


    })
  }


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
      this.artistServices.create(this.artist).subscribe(res => {
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
      this.isBusy = true;
      this.artist.imageExtension ="png"
        this.isChangeImage?this.artist.imageBase64 = this.artist.imageBase64:this.artist.imageBase64 = this.artist.imagePath;

      this.artistServices.update( this.artist).subscribe(res => {
        this.isBusy = false;
        this.reset()
        // this.getAllData();
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
     this.artist.imageBase64 = reader.result as string;
     this.artist.imageBase64 = this.artist.imageBase64.split(',')[1];
     
     this.renderer2.setStyle(el,
      'background-image', `url(${reader.result ? reader.result : this.artist.imageBase64})`)
    this.renderer2.setStyle(el, 'background-size', 'cover')
    this.renderer2.setStyle(el, 'background-position', 'center')
    this.renderer2.setStyle(el, 'border', '3px solid black')

    }
  }
  
  changebackground(el: ElementRef, prop: string, isclear?: boolean, clsProp?: string) {
    if (isclear) {
      if (prop == 'UserImageURL') {
        this.renderer2.setStyle(el, 'background-image', `url('../../../../../assets/img/user-image.png)`)
        this.artist[clsProp] = "Deleted"
        return
      } 
    }
    if (this.artist[prop] === null) return
    this.renderer2.setStyle(el.nativeElement,
      'background-image', `url('${this.artist.imageBase64}')`);
        this.renderer2.setStyle(el.nativeElement, 'background-size', 'cover')
    this.renderer2.setStyle(el.nativeElement, 'background-position', 'center')
    this.renderer2.setStyle(el.nativeElement, 'border', '3px solid black')
    this.renderer2.removeClass(el.nativeElement, 'services-image')
  }

  reset(){
    this.artist.id =0;
    this.artist.name='';
    this.categoryNames = '';
    this.supplierNames = '';
    this.artist.price = null;

  
  }
  cancel(){
    this.reset()
  }



}
