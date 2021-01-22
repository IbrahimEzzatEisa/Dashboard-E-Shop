import { Injectable } from '@angular/core';
import { END_POINTS } from './globals/global-config';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Songs, DataWithRanking, Image } from '../../models';
import { Observable } from 'rxjs';

const API_URL_create = END_POINTS.ImageCreate;
const API_URL_getAll = END_POINTS.ImageGetAll;
const API_URL_update = END_POINTS.ImageUpdate;
const API_URL_delete = END_POINTS.ImageDelete;






@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }


  create(model: Image): Observable<Image[]> {
    return this.http.post<Image[]>(API_URL_create, model);
  }
    // get Album search
    getAll(SearchTerm:string ,offset: string , limit: string  ): Observable<DataWithRanking<Image>> {
      let params = new HttpParams();
      params = params.append('SearchTerm' , SearchTerm);
      params = params.append('offset' , offset);
      params = params.append('limit' , limit);
      return this.http.get<DataWithRanking<Image>>(API_URL_getAll  ,{params:params}  ) }

  
 
   update(model: Image): Observable<DataWithRanking<Image>> {
    return this.http.put<DataWithRanking<Image>>(API_URL_update, model);
  }
  
  delete(id): Observable<Image>{
    return this.http.delete<Image>(API_URL_delete + `/${id}`);
  }

}
