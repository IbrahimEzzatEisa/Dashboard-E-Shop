import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from '../../../../shared/models/supplier.model';
import { City } from '../../../../shared/models/city.model';
import { Products } from '../../../../shared/models/peoducts.model';
import { ProductsService } from '../../../../shared/services/api/products.service';
import { SwalService } from '../../../../shared/services/swal.service';
import { LanguagesService } from '../../../../shared/services/api/languages.service';
import { SuppliersService } from '../../../../shared/services/api/suppliers.service';


@Component({
  selector: 'app-stars-list',
  templateUrl: './stars-list.component.html',
  styleUrls: ['./stars-list.component.scss']
})
export class StarsListComponent implements OnInit {


  // main object
  supplier: Supplier;

  //array list 
  supplierList: Supplier[] = [];
  //MAIN-OBJECT

  cityList: City[] = [];

  city: City = new City();
  CityName: string;

  // main object
  artist: Products;

  //array list 
  artistList: Products[] = [];
  SupplierName: string;

  isEdit: boolean = false;
  index: number
  editObj: Products = new Products();

  
  formSubmitted: boolean = false;
  data = [];
  pagenumber = 0;
  pageTitle = 1;



  constructor(private artistServoces: ProductsService,
    private swalService: SwalService,
    private route: Router,
    private supplierServices: SuppliersService,
    private cityServices: LanguagesService,

  ) { }

  ngOnInit(): void {
    this.getAllData();
    this.city = new City();
    this.getAllCity();
    // get all city to get supplier

  }


  // get all data of annonce
  getAllData() {
    this.artistServoces.getAll('', '', '', '1', '100').subscribe(res => {
      this.data = []
      let a = (res.result.length / 100) + 1;
      for (let index = 1; index <= a; index++) {
        this.data.push(index)
      }
      this.artistList = res.result.map(item => {
        item.imagePath = 'http://eshop5827-001-site3.etempurl.com' + item.imagePath;

        return item
      })
    })

  }
  // load more
  navigate(item) {
    this.pagenumber = item - 1
    this.pageTitle = item;
    this.getAllData();
  }

  // delete 
  delete(index: number) {
    this.editObj = { ...this.artistList[index] }
    this.index = index;
    this.swalService.showRemoveConfirmation(index).then(
      result => {
        if (result.value) {
          this.artistServoces.delete(this.editObj.id).subscribe(
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

  navigateToEdit(id: number) {
    this.route.navigate([`./pages/stars/edit/${id}`], { queryParams: { isAdd: false } })
  }

  navigateToAdd() {
    this.route.navigate([`./pages/stars/edit/false`], { queryParams: { isAdd: true } })
  }





  // get all city
  // select data
  getFilterSubsctypes(item: City) {
    this.CityName = item.name;
    let cityId = item.id
    this.supplierServices.getAll(String(cityId), '','', '1', '100').subscribe(res => {
      this.data = []
      let a = (res.result.length / 100) + 1;
      for (let index = 1; index <= a; index++) {
        this.data.push(index)
      }
      this.supplierList = res.result;
      if (this.supplierList.length == 0) {
        this.SupplierName = ''

      }

    })

  }



  // get all city
  getAllCity() {
    this.cityServices.getAll('', '1', '1000').subscribe(res => {
      this.cityList = res.result;
      this.CityName = this.cityList[0].name;
      this.supplierServices.getAll(String(this.cityList[0].id), '','', '1', '100').subscribe(res => {
        this.data = []
        let a = (res.result.length / 100) + 1;
        for (let index = 1; index <= a; index++) {
          this.data.push(index)
        }
        this.supplierList = res.result;
      })

    })

  }


  getDataFromSupplier(item: Supplier) {
    this.SupplierName = item.name;
    let supplierId = item.id;
    this.artistServoces.getAll(String(supplierId), '', '', '1', '100').subscribe(res => {
      this.data = []
      let a = (res.result.length / 100) + 1;

      for (let index = 1; index <= a; index++) {
        this.data.push(index)
      }
      this.artistList = res.result.map(item => {
        item.imagePath = 'http://eshop5827-001-site3.etempurl.com' + item.imagePath;
        return item
      })
    })
  }



}
