import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { MovieDetailsComponent } from '../components/movie-detail.component';
import { NavSearchbarComponent } from '../components/nav-searchbar.component';
import * as fromStore from '../store/movies';

const COMPONENTS = [MovieDetailsComponent, NavSearchbarComponent];

@Component({
  standalone: true,
  imports: [CommonModule, ...COMPONENTS],
  selector: 'app-home',
  template: `
    <app-nav-searchbar
      class="block w-96"
      [value]="query$ | async"
      (search)="search($event)"
    ></app-nav-searchbar>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <app-movie-details
        class=""
        *ngFor="let movie of movies$ | async"
        [movie]="movie"
      ></app-movie-details>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        gap: 2rem;
        max-width: 1000px;
        margin-inline: auto;
      }
    `,
  ],
})
export class HomePage implements OnInit {
  ngOnInit() {
    this.search('hello world');
  }

  search(query: string) {
    this.store.dispatch(fromStore.moviesActions.QUERY_MOVIES({ query }));
  }

  store = inject(Store<fromStore.MoviesFeatureState>);
  movies$ = this.store.select('movies').pipe(map((res) => res.data));
  query$ = this.store.select('movies').pipe(map((res) => res.query));
}
