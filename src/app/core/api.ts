import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { BASE_URL_V3 } from '../common/constants';
import { Search } from '../store/common/models';

@Injectable({ providedIn: 'root' })
export class ApiService {
  http = inject(HttpClient);
  accessToken = environment.apiKey;

  search<T, R = Search<T>>(
    path: 'movie',
    params?: Record<string, any>
  ): Observable<R> {
    return this.http.get<R>(`${BASE_URL_V3}/search/${path}`, {
      params,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
  }
}
