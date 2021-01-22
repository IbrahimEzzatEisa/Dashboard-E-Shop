import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { END_POINTS } from './globals/global-config';
import { DataWithRanking, Supplier } from '../../models';
import { RequestOptions } from '@angular/http';

const API_URL = END_POINTS.SupplierGetAll;
const API_URL_update = END_POINTS.SuppliertUpadte;
const API_URL_Delete = END_POINTS.SuppliertDelete;
const API_URL_create = END_POINTS.Suppliercreate;
const API_URL_ById = END_POINTS.SupplierByID;



@Injectable({
  providedIn: 'root'
})
export class SuppliersService {



  constructor(private http: HttpClient) { }

  create(model: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(API_URL_create, model);
  }
    // get Album search
    getAll(CityId:string ,CategoryId:string, SearchTerm:string,offset: string , limit: string  ): Observable<DataWithRanking<Supplier>> {
      let params = new HttpParams();
      params = params.append('CityId' , CityId);
      params = params.append('CategoryId' , CategoryId);
      params = params.append('SearchTerm' , SearchTerm);
      params = params.append('offset' , offset);
      params = params.append('limit' , limit);
      return this.http.get<DataWithRanking<Supplier>>(API_URL  ,{params:params}  ) }

  
    get(id: string): Observable<Supplier> {
      let params = new HttpParams();
      params = params.append('id' , id);
    return this.http.get<Supplier>(API_URL_ById  ,{params:params}  );
    }

   update(model: Supplier): Observable<DataWithRanking<Supplier>> {

    const options ={
     id:model.id,
     name:model.name,
     phoneNumber: model.phoneNumber,
     imagePath :  model.imagePath ,
     order : model.order,
     cityId : model.cityId,
     cityName :  model.cityName,
     imageExtension :  model.imageExtension,
     imageBase64 :  model.imageBase64,
     rate : model.rate
    };

    return this.http.put<DataWithRanking<Supplier>>(API_URL_update ,  options);
  }
  
  delete(id): Observable<Supplier>{
    return this.http.delete<Supplier>(API_URL_Delete + `/${id}`);
  }
}
