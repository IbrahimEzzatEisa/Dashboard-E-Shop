import { Injectable } from '@angular/core';
import { END_POINTS } from './globals/global-config';
import { HttpClient  , HttpParams} from '@angular/common/http';
import { User } from '../../../shared/models/user.model';
import { DataWithRanking } from '../../../shared/models/data-with-ranking.model';
import { UserUpdate } from '../../../shared/models/userUpdate.model';


import { Observable } from 'rxjs';

const API_URL = END_POINTS.users;


const API_URL_getAllUser = END_POINTS.GetAllUser;

const API_URL_updateUser = END_POINTS.updateUser;



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  create(model: User): Observable<User[]> {
    return this.http.post<User[]>(API_URL, model);
  }
  

  get(id: number): Observable<User[]> {
    return this.http.get<User[]>(API_URL + `/${id}`);
  }

  update( model: UserUpdate): Observable<DataWithRanking<UserUpdate>> {
    return this.http.put<DataWithRanking<UserUpdate>>(API_URL_updateUser , model);
  }

   // get Album search
   getAll( SearchTerm:string,offset: string , limit: string  ): Observable<DataWithRanking<User>> {
    let params = new HttpParams();
    params = params.append('SearchTerm' , SearchTerm);
    params = params.append('offset' , offset);
    params = params.append('limit' , limit);
   return this.http.get<DataWithRanking<User>>(API_URL_getAllUser  ,{params:params}  ) }
 
   
}
