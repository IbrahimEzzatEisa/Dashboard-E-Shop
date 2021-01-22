import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataWithRanking } from '../../models/data-with-ranking.model';
import { Products } from '../../models/peoducts.model';
import { Observable } from 'rxjs';
import { END_POINTS } from './globals/global-config';

const API_URL = END_POINTS.ProductGetAll;
const API_URL_update = END_POINTS.ProductUpadte;
const API_URL_Delete = END_POINTS.ProductDelete;
const API_URL_create = END_POINTS.Productcreate;
const API_URL_ById = END_POINTS.ProductByID;


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  create(model: Products): Observable<Products> {
    return this.http.post<Products>(API_URL_create, model);
  }
    // get Album search
    getAll(SupplierId: string,CategoryId:string ,SearchTerm:string,offset: string , limit: string  ): Observable<DataWithRanking<Products>> {
      let params = new HttpParams();
      
      params = params.append('SupplierId' , SupplierId);
      params = params.append('CategoryId' , CategoryId);
      params = params.append('SearchTerm' , SearchTerm);
      params = params.append('offset' , offset);
      params = params.append('limit' , limit);
      return this.http.get<DataWithRanking<Products>>(API_URL  ,{params:params}  ) }

  
      get(id: string): Observable<Products> {
        let params = new HttpParams();
        params = params.append('id' , id);
      return this.http.get<Products>(API_URL_ById  ,{params:params}  );
      }

   update( model: Products): Observable<DataWithRanking<Products>> {
    const options ={
      id: Number(model.id),
      name:model.name,
      imagePath: model.imagePath,
      order : model.order,
      categoryId : model.categoryId,
      supplierId : model.supplierId,
      categoryName :  model.categoryName,
      supplierName :  model.supplierName,
      imageExtension :  model.imageExtension,
      imageBase64 :  model.imageBase64,
     };
    return this.http.put<DataWithRanking<Products>>(API_URL_update , options);
  }
  
  delete(id): Observable<Products>{
    return this.http.delete<Products>(API_URL_Delete + `/${id}`);
  }
}
