import { Component, OnInit } from '@angular/core';
import { SwalService } from '../../../../shared/services/swal.service';
import { Pharma } from '../../../../shared/models/pharma.model';
import { NotificationService } from '../../../../shared/services/api/notification.service';

@Component({
  selector: 'app-pharma-list',
  templateUrl: './pharma-list.component.html',
  styleUrls: ['./pharma-list.component.scss']
})
export class PharmaListComponent implements OnInit {

// main object
pharma:Pharma;

//array list 
pharmaList: Pharma[]=[];

isEdit : boolean = false;
index : number
editObj :Pharma = new Pharma();
formSubmitted: boolean= false;
data=[];
pagenumber=0;
pageTitle=1;


  constructor(private notificationServices: NotificationService ,
    private swalService: SwalService,
  ) { }

  ngOnInit(): void {
    this.getAllData();

  }


  // get all data of annonce
  getAllData(){
    this.notificationServices.getPharma('','1','100').subscribe(res =>{
        this.data = []
        let a  = (res.result.length /100)+1;
        
        for (let index = 1; index <= a; index++) {
           this.data.push(index) 
        }
        this.pharmaList = res.result.map(item =>{
        item.imagePath = 'http://eshop5827-001-site3.etempurl.com'+item.imagePath
        return item
      })
  
    })

  }
  navigate(item){
    this.pagenumber= item -1
    this.pageTitle = item;
    this.getAllData();
  }

  delete(  index: number ) {
    this.editObj = {...this.pharmaList[index]}
    this.index = index;
    this.swalService.showRemoveConfirmation(index).then(
      result => {
        if (result.value) {
          this.notificationServices.delete(this.editObj.id).subscribe(
            res => {
              this.swalService.Notifier('Done ');
              this.getAllData();

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
  



}
