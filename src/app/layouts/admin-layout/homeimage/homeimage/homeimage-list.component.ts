import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Image } from '../../../../shared/models/image.model';
import { SwalService } from '../../../../shared/services/swal.service';
import { ImageService } from '../../../../shared/services/api/image.service';



interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}



@Component({
  selector: 'app-homeimage-list',
  templateUrl: './homeimage-list.component.html',
  styleUrls: ['./homeimage-list.component.scss']
})
export class HomeimageListComponent implements OnInit {

  @ViewChild('SlideImg', { static: false }) SlideImg: ElementRef;

  //MAIN-OBJECT
    homeimage: Image;

    homeimageList: Image[]=[];

  editObj :Image = new Image();
  index : number
  data=[];
  pagenumber=0;
  pageTitle=1;


  image: string;

  //chang image flag
  isChangeImage : boolean = false;
 
  isEdit : boolean = false;
  

  constructor( private homeimageServices: ImageService ,
    private swalService: SwalService ,
    private renderer2: Renderer2,
    ) { }

  ngOnInit(): void {
    this.homeimage = new Image();

    this.getAllData();
  }
 // get all data of category
   // get all data of category
   getAllData(){
    this.homeimageServices.getAll('' ,'1','100').subscribe(res =>{
        this.data = []
        let a  = (res.result.length /100)+1;
        
        for (let index = 1; index <= a; index++) {
           this.data.push(index)     }
        this.homeimageList = res.result.map(item =>{
          item.imagePath = 'http://eshop5827-001-site3.etempurl.com'+item.imagePath
          return item
        })
    
      
    })
  
  }
  
  
   //fill
   fill(prop: Image) {
    this.homeimage.id = prop.id;
    this.homeimage.title = prop.title;
    this.homeimage.imagePath ='http://eshop5827-001-site3.etempurl.com'+prop.imagePath 
  
  }
  
reset(){
this.homeimage.id = 0;
this.homeimage.title = '';

}
open(){
this.reset();
}


delete( index: number ) {
this.editObj = {...this.homeimageList[index]}
this.index = index;
 this.swalService.showRemoveConfirmation(index).then(
   result => {
     if (result.value) {
       this.homeimageServices.delete(this.editObj.id).subscribe(
     
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


  //post
  create(){
    this.homeimageServices.create(this.homeimage).subscribe(
      res=> {
        this.cancel();
        this.getAllData();
        this.swalService.Notifier('تم  الحفظ بنجاح');

      }, err => {
        let errorMessage = err.message || 'حدث خطأ قي استلام البيانات';
        this.swalService.NotifierError(errorMessage)
      })
  }

saveupdate(){
this.update();
}


cancel(){
this.reset();

}


onFileChanged(event: HTMLInputEvent ,  prop: string) {
  this.isChangeImage = true;
  const file = event.target.files[0];
  let el = event.target.parentNode as HTMLElement;
  this.renderer2.removeClass(el, 'services-image')
  let reader = new FileReader();
  reader.readAsDataURL(file)
  reader.onload = () => {
   this.homeimage.imageBase64 = reader.result as string;
   this.homeimage.imageBase64 = this.homeimage.imageBase64.split(',')[1];
   
   this.renderer2.setStyle(el,
    'background-image', `url(${reader.result ? reader.result : this.homeimage.imageBase64})`)
  this.renderer2.setStyle(el, 'background-size', 'cover')
  this.renderer2.setStyle(el, 'background-position', 'center')
  this.renderer2.setStyle(el, 'border', '3px solid black')

  }
}

changebackground(el: ElementRef, prop: string, isclear?: boolean, clsProp?: string) {
  if (isclear) {
    if (prop == 'UserImageURL') {
      this.renderer2.setStyle(el, 'background-image', `url('../../../../../assets/img/user-image.png)`)
      this.homeimage[clsProp] = "Deleted"
      return
    } 
  }
  if (this.homeimage[prop] === null) return
  this.renderer2.setStyle(el.nativeElement,
    'background-image', `url('${this.homeimage.imagePath}')`);
      this.renderer2.setStyle(el.nativeElement, 'background-size', 'cover')
  this.renderer2.setStyle(el.nativeElement, 'background-position', 'center')
  this.renderer2.setStyle(el.nativeElement, 'border', '3px solid black')
  this.renderer2.removeClass(el.nativeElement, 'services-image')
}

update( ) {
  this.homeimage.imageExtension ="png"

  this.isChangeImage?this.homeimage.imageBase64 = this.homeimage.imageBase64:this.homeimage.imageBase64 = null;
  this.homeimage.imagePath = null;

  this.homeimageServices.update(this.homeimage).subscribe(res => {
    this.swalService.Notifier('تم  الحفظ بنجاح');
    // this.router.navigate([`./pages/home/list`])

  }, err => {
    let errorMessage = err.message || 'حدث خطأ قي استلام البيانات';
    this.swalService.NotifierError(errorMessage)
  })
}

}
