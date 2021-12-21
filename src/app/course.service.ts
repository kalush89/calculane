import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private _baseUrl: string = 'https://cors-anywhere.herokuapp.com/https://www.udemy.com/api-2.0/';
  private _path: string = 'courses/';
  private _clientId: string = 'client-id';
  private _clientSecret: string = 'client-secret';

  constructor( private _http: HttpClient ) { }

  getCoursesWithHeaders(): Observable<Course[]> {

    let headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this._clientId + ':' + this._clientSecret)
    })

    return this._http.get<Course[]>(this._baseUrl + this._path, {'headers':headers})
    .pipe(tap(data => console.log('All data', JSON.stringify(data))));

}


}
