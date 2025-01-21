import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnglishTenesesModel } from '../shared/englishteneses/englishtenses.model';
import { Observable, catchError } from 'rxjs';
import { EnglishTenesesItem } from '../shared/englishteneses/englishtenses-item.model';
import { UploadDataResult } from '../upload/upload-result.model';
import { EnglishTenesesResult } from './english.teneses-result';

@Injectable({
  providedIn: 'root'
})
export class TensesComponentService {

  constructor(private http: HttpClient) { }

  getEnglishTenses() {
    return this.http.get<EnglishTenesesModel>('https://localhost:7060/api/EnglishTenses/GetEnglishTenses');
  }

  onEdit(item: EnglishTenesesItem): Observable<EnglishTenesesResult> {

    return this.http.post<EnglishTenesesResult>("https://localhost:7060/api/EnglishTenses/Edit", item)
      .pipe();

  }

  onDelete(item: EnglishTenesesItem): Observable<EnglishTenesesResult> {

    return this.http.post<EnglishTenesesResult>("https://localhost:7060/api/EnglishTenses/Delete", item)
      .pipe();

  }
}
