import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataWithRanking,  Problem } from '../../models';
import { END_POINTS } from './globals/global-config';



const API_URL_getAll = END_POINTS.getProblems;

const API_URL_Delete = END_POINTS.deleteProblems;


@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {


  
  constructor(private http: HttpClient) { }



     // get Album search
     getAll(SearchTerm:string ,offset: string , limit: string  ): Observable<DataWithRanking<Problem>> {
      let params = new HttpParams();
      params = params.append('SearchTerm' , SearchTerm);
      params = params.append('offset' , offset);
      params = params.append('limit' , limit);
      return this.http.get<DataWithRanking<Problem>>(API_URL_getAll  ,{params:params}  ) }
    

 
    delete(id:number): Observable<Problem>{
    return this.http.delete<Problem>(API_URL_Delete + `/${id}`);
    }

}
