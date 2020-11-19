import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, QueryList } from '@angular/core';
import { take } from 'rxjs/operators';
// import 'rxjs/add/operator/take';
// import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookService {
    constructor(private http: HttpClient) { }

    getAllBooks(offset = '', limit = ''): Promise<any> {
        const qs = new HttpParams()
        .set('offset', offset)
        .set('limit', limit);
        // .set('q', 'singapore')
        // .set('appid', 'ce91e6dcab66e9f3cf80954560fa61cf');
  
        return (
        this.http.get('http://localhost:3000/getallbooks', { params: qs }).pipe(take(1)).toPromise()
        // this.http.get('http://api.openweathermap.org/data/2.5/weather', { params: qs }).toPromise()    
        );
    } 
}
