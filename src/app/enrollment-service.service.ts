import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentServiceService {

  submitEnrUrl='http://localhost:3000/enroll';  
  constructor(private http : HttpClient) { }

  submitEnrollment(user: User){
    return this.http.post<any>(this.submitEnrUrl,user)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
