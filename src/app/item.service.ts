import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from './response';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'users_id':'23', 'token':'ChTWCsUm3Lr6Da0vYkYyW1H1qeJnom8YQg4rVMvxYVLWAoURG8f5q7Id3BfaLKBgXecCWFWLgtTRU1BMZqdLv08UNwFRmfnCuDUBZTZ1BUulPYXjJQuoiku7flMGYNFecNYI6XD8BxFs6cd1eGlVuNTOFa2R9Vn3K4ZHVVI6T9MlQHXCWOJXr7MRKerFLmnlmDThuQxb' })
};

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(
    private http:HttpClient,
    private messageService:MessageService
  ) { }

  getItems(): Observable<Response>{
    let url = 'http://test-items.subdineapis.com/items';
    return this.http.get<Response>(url,httpOptions).pipe(
      catchError(this.handleError<Response>('getItems'))
    );
  }

  sendPost(data:any):Observable<any>{
    let url = 'http://test-items.subdineapis.com/items';
    return this.http.post<any>(url,data,httpOptions).pipe(
      catchError(this.handleError<any>('getItems'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      // console.error(error); // log to console instead
      this.messageService.clear();
      // console.log(error)
      if(error.error.errors){
        for(let message of error.error.errors){
          this.messageService.addMessage(message.join(''));
        }
      }
      console.log(this.messageService.messages);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
