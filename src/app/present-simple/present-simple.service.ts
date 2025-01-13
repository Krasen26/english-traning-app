import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnglishTenesesModel } from '../shared/englishteneses/englishtenses.model';

@Injectable({
  providedIn: 'root'
})
export class PresentSimpleService {

  constructor(private http: HttpClient) { }

  getEnglishTenses() {
    return this.http.get<EnglishTenesesModel>('https://localhost:7060/api/EnglishTenses/GetEnglishTenses');
  }
}
