import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { DataWithRanking } from '../../models/data-with-ranking.model';
import { Delivery } from '../../models/Delivery.model';
import { Observable } from 'rxjs';
import { END_POINTS } from './globals/global-config';



const API_URL_getAll = END_POINTS.DeliveryGetAll;

const API_URL_Delete = END_POINTS.DeliveryDelete;
const API_URL_update = END_POINTS.DeliveryUpadte;
const API_URL_create = END_POINTS.createDelivery;



@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private http: HttpClient) { }

  create(model: Delivery): Observable<Delivery> {
    return this.http.post<Delivery>(API_URL_create, model);
  }
 
     // get Album search
     getAll(SearchTerm:string ,offset: string , limit: string  ): Observable<DataWithRanking<Delivery>> {
      let params = new HttpParams();
      params = params.append('SearchTerm' , SearchTerm);
      params = params.append('offset' , offset);
      params = params.append('limit' , limit);
      return this.http.get<DataWithRanking<Delivery>>(API_URL_getAll  ,{params:params}  ) }
    

    //  get(id: number): Observable<City[]> {
    //  return this.http.get<City[]>(API_URL + `/${id}`);
    //  }

    update( model: Delivery): Observable<Delivery> {
      const options = {
        id  : model.id,
        name  :   model.name ,
        fisrtPhone  :   model.fisrtPhone  ,
        secondPhone  :   model.secondPhone  ,
           };
    return this.http.put<Delivery>(API_URL_update, options);
    }
    
    delete(id:number): Observable<Delivery>{
    return this.http.delete<Delivery>(API_URL_Delete + `/${id}`);
    }
}
