import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WidgetOneService {

  constructor(private http: HttpClient) { }
  // this function is used to fetch the data from the api in form of a json 
  getNovelsAndMagazinesByLibraryName(libraryName: String): Observable<any> {
    return this.http.get<any>("http://localhost:8080/Library/products?library_name=" +
      libraryName);
  }
}
