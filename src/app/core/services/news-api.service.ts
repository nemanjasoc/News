import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  private dataUrl: string = 'assets/data.json';

  constructor(private http: HttpClient) { }

  getCategoryNews(category: string): Observable<any> {
    return this.http.get<any[]>(this.dataUrl).pipe(
      map(data => data.filter(item => item.category === category))
    );
  }
}
