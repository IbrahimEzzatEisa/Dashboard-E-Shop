import { Injectable } from '@angular/core';
import { END_POINTS } from './globals/global-config';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { DataWithRanking, Notifications, Pharma } from '../../models';
import { Observable } from 'rxjs';



const API_URL_getAll = END_POINTS.NotificationGetAll;

const API_URL_Delete = END_POINTS.NotificationDelete;
const API_URL_update = END_POINTS.NotificationUpadte;
const API_URL_create = END_POINTS.createNotification;



// pharma
const API_URL_GetPharma = END_POINTS.PharmacyGetAll;
const API_URL_DeletePharma = END_POINTS.PharmacyDelete;


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }

  create(model: Notifications): Observable<Notifications> {
    return this.http.post<Notifications>(API_URL_create, model);
  }


     // get Album search
     getAll(SearchTerm:string ,offset: string , limit: string  ): Observable<DataWithRanking<Notifications>> {
      let params = new HttpParams();
      params = params.append('SearchTerm' , SearchTerm);
      params = params.append('offset' , offset);
      params = params.append('limit' , limit);
      return this.http.get<DataWithRanking<Notifications>>(API_URL_getAll  ,{params:params}  ) }
    

    //  get(id: number): Observable<City[]> {
    //  return this.http.get<City[]>(API_URL + `/${id}`);
    //  }

    update( model: Notifications): Observable<Notifications> {

      const options ={
        id: Number(model.id),
        text:model.text,
        imagePath: model.imagePath,
        imageExtension :  model.imageExtension,
        imageBase64 :  model.imageBase64,
       };
    return this.http.put<Notifications>(API_URL_update , options);
    }
    
    delete(id:number): Observable<Notifications>{
    return this.http.delete<Notifications>(API_URL_Delete + `/${id}`);
    }




    // Pharmacy
         // get Album search
         getPharma(SearchTerm:string ,offset: string , limit: string  ): Observable<DataWithRanking<Pharma>> {
          let params = new HttpParams();
          params = params.append('SearchTerm' , SearchTerm);
          params = params.append('offset' , offset);
          params = params.append('limit' , limit);
          return this.http.get<DataWithRanking<Pharma>>(API_URL_GetPharma  ,{params:params}  ) }
        

          deletePharma(id:number): Observable<Pharma>{
            return this.http.delete<Pharma>(API_URL_DeletePharma + `/${id}`);
            }
        
  
 }

 

