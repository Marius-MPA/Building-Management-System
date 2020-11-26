import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Resident } from '../resident';



@Injectable({
  providedIn: 'root'
})
export class ResidentsService {

  constructor(private residentHttp: HttpClient) { }

  getResidentList(){
    return this.residentHttp.get('https://5fb23b2c87ed490016ea89da.mockapi.io/building')
            .pipe(catchError(this.handleError('getResidentList', []))
            );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }; 

  deleteResident(resident: Resident | number){
    const id = typeof resident === 'number' ? resident: resident.id;
    // const url = `${'https://5d695add8134fd001430c583.mockapi.io/max'}/${id}`; // rezerva pt http-ul mockAPI
    const url = `${'https://5fb23b2c87ed490016ea89da.mockapi.io/building'}/${id}`;

    return this.residentHttp.delete(url, this.httpOptions).pipe(
      catchError(this.handleError<any>('deleteResident'))
    );
  }

  getResidentDetail(id: number){
    const url = `${'https://5fb23b2c87ed490016ea89da.mockapi.io/building'}/${id}`;
    return this.residentHttp.get(url);
  }

  saveResident(residentdetail){
    const url = 'https://5fb23b2c87ed490016ea89da.mockapi.io/building'
    return this.residentHttp.post(url, residentdetail).pipe(
      catchError(this.handleError<any>('saveResident'))
    )
  }
  
  updateResident(residentDetail: Resident){
    const url = `https://5fb23b2c87ed490016ea89da.mockapi.io/building/${residentDetail.id}`
    return this.residentHttp.put(url, residentDetail, this.httpOptions).pipe(
    catchError(this.handleError<any>('updateResident'))
    )};

  searchResident(term: string){
    if(!term.trim()) {
        // if not search term, return empty mountains array.
    return of([]);
    } 
      return this.residentHttp.get<Resident[]>(`${'https://5fb23b2c87ed490016ea89da.mockapi.io/building'}/?name=${term}`).pipe(
          catchError(this.handleError('searchResident', []))
        )
    
  }




}
