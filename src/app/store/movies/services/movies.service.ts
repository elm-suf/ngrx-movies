import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiService } from '../../../core/api';
import { Movie } from '../../common/models';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  api = inject(ApiService);
  getItems<T = Movie>(query: string, page = 1): Observable<T[]> {
    return this.api
      .search<T>('movie', { query })
      .pipe(map((res) => res.results));
  }
  constructor() {}
}
