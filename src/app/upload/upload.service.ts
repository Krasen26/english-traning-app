import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnglishTenesesModel } from '../shared/englishteneses/englishtenses.model';
import { Observable, catchError, throwError } from 'rxjs';
import { UploadDataResult } from './upload-result.model';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  getEnglishTenses() {
    return this.http.get<EnglishTenesesModel>('https://localhost:7060/api/EnglishTenses/GetUploadData');
  }

  onUploadData(id: number, tensesType: number, sentenceType: number, formData: FormData): Observable<UploadDataResult> {

    console.log(sentenceType + " " + sentenceType);

    return this.http.post<UploadDataResult>("https://localhost:7060/api/EnglishTenses/uploadcsv/" + id + "/" + tensesType + "/" + sentenceType , formData)
      .pipe(catchError(this.handleError));

  }


  handleError(error: HttpErrorResponse) {

    let errorMessage = 'Unknown error!';

    console.log("err1");
    if (error.error instanceof ErrorEvent) {

      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;

    } else {

      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    window.alert(errorMessage);

    return throwError(errorMessage);
  }
}
