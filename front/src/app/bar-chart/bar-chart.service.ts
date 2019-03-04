import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, toArray } from 'rxjs/operators';
import { Sale } from 'src/shared/sales';

@Injectable({
  providedIn: 'root'
})
export class BarChartService {

  constructor(private http: HttpClient) { }

  getAllSalesByLibraryName(libraryName: String): Observable<Array<Sale>> {
    return this.http.get<any>("http://localhost:8080/Library/books?library_name=" + libraryName)
      .pipe(
        map(book => book.map(bookObject => {
          return new Sale(bookObject.name, bookObject.totalUnitsSold, bookObject.price);
        }))
      );
  }
}