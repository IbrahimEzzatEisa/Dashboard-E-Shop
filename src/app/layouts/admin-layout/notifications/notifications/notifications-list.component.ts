import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Notifications } from '../../../../shared/models/notification.model';
import { NotificationService } from '../../../../shared/services/api/notification.service';
import { SwalService } from '../../../../shared/services/swal.service';


interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.scss']
})
export class NotificationsListComponent implements OnInit {


  @ViewChild('SlideImg', { static: false }) SlideImg: ElementRef;

// main object
  notification: Notifications


  notificationList: Notifications[]=[];

  editObj :Notifications = new Notifications();
  index : number
  data=[];
  pagenumber=0;
  pageTitle=1;


  image: string;

  //chang image flag
  isChangeImage : boolean = false;
 
  isEdit : boolean = false;
  
 
  updateimg: boolean =true;
  toupdate: boolean = false;
  apearButton: boolean = true;
  ResetButton: boolean = false;
 

  constructor(
    private notificationServices: NotificationService ,
    private swalService :SwalService ,
    private renderer2: Renderer2,
  ) { }

  ngOnInit(): void {
    this.notification = new Notifications();
    this.getAllData();

  }
  
  
  //post
  create(){
    this.notificationServices.create(this.notification).subscribe(
      res=> {
        this.cancel();
        this.getAllData();
        this.swalService.Notifier('تم  الحفظ بنجاح');

      }, err => {
        let errorMessage = err.message || 'حدث خطأ قي استلام البيانات';
        this.swalService.NotifierError(errorMessage)
      })
  }
  cancel(){
    this.notification.text ='';
    this.notification.id =0;
  }


   // get all data of category
 getAllData(){
  this.notificationServices.getAll('' ,'1','100').subscribe(res =>{
      this.data = []
      let a  = (res.result.length /100)+1;
      
      for (let index = 1; index <= a; index++) {
         this.data.push(index)     }
      this.notificationList = res.result.map(item =>{
        item.imagePath = 'http://eshop5827-001-site3.etempurl.com'+item.imagePath
        return item
      })
  
    
  })

}


 //fill
 fill(prop: Notifications) {
  this.notification.id = prop.id;
  this.notification.text = prop.text;
  this.notification.imagePath ='http://eshop5827-001-site3.etempurl.com'+prop.text 

}

open(){
  this.cancel();
  }


  delete( index: number ) {
    this.editObj = {...this.notificationList[index]}
    this.index = index;
     this.swalService.showRemoveConfirmation(index).then(
       result => {
         if (result.value) {
           this.notificationServices.delete(this.editObj.id).subscribe(
         
             res => {
               this.swalService.Notifier('تم مسح البيانات بنجاح ');
               this.cancel();
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

    onFileChanged(event: HTMLInputEvent ,  prop: string) {
      this.isChangeImage = true;
      const file = event.target.files[0];
      let el = event.target.parentNode as HTMLElement;
      this.renderer2.removeClass(el, 'services-image')
      let reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onload = () => {
       this.notification.imageBase64 = reader.result as string;
       this.notification.imageBase64 = this.notification.imageBase64.split(',')[1];
       
       this.renderer2.setStyle(el,
        'background-image', `url(${reader.result ? reader.result : this.notification.imageBase64})`)
      this.renderer2.setStyle(el, 'background-size', 'cover')
      this.renderer2.setStyle(el, 'background-position', 'center')
      this.renderer2.setStyle(el, 'border', '3px solid black')
  
      }
    }
    
    changebackground(el: ElementRef, prop: string, isclear?: boolean, clsProp?: string) {
      if (isclear) {
        if (prop == 'UserImageURL') {
          this.renderer2.setStyle(el, 'background-image', `url('../../../../../assets/img/user-image.png)`)
          this.notification[clsProp] = "Deleted"
          return
        } 
      }
      if (this.notification[prop] === null) return
      this.renderer2.setStyle(el.nativeElement,
        'background-image', `url('${this.notification.imagePath}')`);
          this.renderer2.setStyle(el.nativeElement, 'background-size', 'cover')
      this.renderer2.setStyle(el.nativeElement, 'background-position', 'center')
      this.renderer2.setStyle(el.nativeElement, 'border', '3px solid black')
      this.renderer2.removeClass(el.nativeElement, 'services-image')
    }
    
    update( ) {
      this.notification.imageExtension ="png"

      this.isChangeImage?this.notification.imageBase64 = this.notification.imageBase64:this.notification.imageBase64 = null;
      this.notification.imagePath = null;

      this.notificationServices.update(this.notification).subscribe(res => {
        this.swalService.Notifier('تم  الحفظ بنجاح');
        // this.router.navigate([`./pages/home/list`])

      }, err => {
        let errorMessage = err.message || 'حدث خطأ قي استلام البيانات';
        this.swalService.NotifierError(errorMessage)
      })
    }

}
