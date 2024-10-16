import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Movie } from '../store/movies';

@Component({
  selector: 'app-movie-details',
  template: `
    <div class="flex flex-col max-w-sm rounded overflow-hidden shadow-lg bg-white min-h-full">
      <img
        class="w-full h-64 object-cover"
        [src]="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
        alt="{{ movie.title }}"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ movie.title }}</div>
        <p
          class="text-gray-700 text-base line-clamp-3 max-h-24 overflow-hidden"
          [title]="movie.overview"
        >
          {{ movie.overview }}
        </p>
      </div>
      <div class="mt-auto px-6 py-4 flex justify-between items-center">
        <span class="text-gray-600 text-sm">{{
          movie.release_date | date
        }}</span>
        <span
          class="bg-yellow-300 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
          >{{ movie.vote_average }} ★</span
        >
      </div>
    </div>
  `,
  styles: [
    `
      img {
        background-color: #e2e8f0; /* Tailwind's gray-300 */
      }
    `,
  ],
  standalone: true,
  imports: [CommonModule],
})
export class MovieDetailsComponent {
  @Input({ required: true }) movie!: Movie;
  getGenres(genreIds: number[]): string[] {
    return genreIds.map(String);
  }
}
