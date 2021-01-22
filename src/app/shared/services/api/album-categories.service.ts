import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { END_POINTS } from './globals/global-config';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Categories, DataWithRanking } from '../../models';
import { RequestOptions } from '@angular/http';

const API_URL = END_POINTS.CategoryGetAll;
const API_URL_Create = END_POINTS.createCategory;
const deleteCategory = END_POINTS.CategoryDelete;
const API_URL_Update = END_POINTS.CategoryUpadte;



@Injectable({
  providedIn: 'root'
})
export class CategoriesCategoriesService {

  constructor(private http: HttpClient) { }

  create(model: Categories): Observable<Categories[]> {
    return this.http.post<Categories[]>(API_URL_Create, model);
  }
    // get Categories search
    getAll(SearchTerm:string ,offset: string , limit: string  ): Observable<DataWithRanking<Categories>> {
      let params = new HttpParams();
      params = params.append('SearchTerm' , SearchTerm);
      params = params.append('offset' , offset);
      params = params.append('limit' , limit);
     return this.http.get<DataWithRanking<Categories>>(API_URL  ,{params:params}  ) }

  
  get(id: number): Observable<Categories[]> {
    return this.http.get<Categories[]>(API_URL + `/${id}`);
  }

  update(model: Categories): Observable<DataWithRanking<Categories>> {
    const options = {
     id: model.id ,
     name: model.name,
     order: model.order
    };

    return this.http.put<DataWithRanking<Categories>>(API_URL_Update , options);


  }
  delete(id:number): Observable<Categories>{
    return this.http.delete<Categories>(deleteCategory+`/${id}`);
  }}
