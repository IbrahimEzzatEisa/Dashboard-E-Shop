import { Injectable } from '@angular/core';
import { END_POINTS } from './globals/global-config';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { About, Artist, DataWithRanking } from '../../models';

const API_URL = END_POINTS.getAbout;
const API_URL_Create = END_POINTS.createAbout;
const deleteCategory = END_POINTS.DeleteAbout;
const API_URL_Update = END_POINTS.updateAbout;



const API_URL_order = END_POINTS.order;


@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http: HttpClient) { }


  create(model: About): Observable<About> {
    return this.http.post<About>(API_URL_Create, model);
  }
 
  get(): Observable<About> {
    return this.http.get<About>(API_URL );
  }

  update(model: About): Observable<About> {
    const object = {
      id: 1 ,
      content: model.content
    }
    return this.http.put<About>(API_URL_Update , object);
  }
  delete(id): Observable<About>{
    return this.http.delete<About>(deleteCategory + `/${id}`);
  }

  getAll(offset: string , limit: string  ): Observable<DataWithRanking<Artist>> {
    let params = new HttpParams();
    params = params.append('offset' , offset);
    params = params.append('limit' , limit);
    return this.http.get<DataWithRanking<Artist>>(API_URL  ,{params:params}  ) }
}
