import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet />`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {
    console.debug(routes);
  }
}
