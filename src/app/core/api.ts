import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Search } from '../store/common/models';

@Injectable({ providedIn: 'root' })
export class ApiService {
  http = inject(HttpClient);
  url = environment.apiUrl;

  search<T, R = Search<T>>(
    path: 'movie',
    params?: Record<string, any>
  ): Observable<R> {
    return this.http.get<R>(`${this.url}/search/${path}`, {
      params,
    });
  }
}
