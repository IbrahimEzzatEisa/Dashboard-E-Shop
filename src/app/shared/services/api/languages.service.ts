import { Injectable } from '@angular/core';
import { END_POINTS } from './globals/global-config';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  City } from '../../models/city.model';
import {  DataWithRanking } from '../../models/data-with-ranking.model';



const API_URL_getAll = END_POINTS.getAllCity;

const API_URL_Delete = END_POINTS.DeleteCity;
const API_URL_update = END_POINTS.updateCity;
const API_URL_create = END_POINTS.createCity;

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  constructor(private http: HttpClient) { }

  create(model: City): Observable<City> {
    return this.http.post<City>(API_URL_create, model);
  }
 
     // get Album search
     getAll(SearchTerm:string ,offset: string , limit: string  ): Observable<DataWithRanking<City>> {
      let params = new HttpParams();
      params = params.append('SearchTerm' , SearchTerm);
      params = params.append('offset' , offset);
      params = params.append('limit' , limit);
      return this.http.get<DataWithRanking<City>>(API_URL_getAll  ,{params:params}  ) }
    

    //  get(id: number): Observable<City[]> {
    //  return this.http.get<City[]>(API_URL + `/${id}`);
    //  }

    update(model: City): Observable<City> {
    return this.http.put<City>(API_URL_update , model);
    }
    
    delete(id:number): Observable<City>{
    return this.http.delete<City>(API_URL_Delete + `/${id}`);
    }
}
