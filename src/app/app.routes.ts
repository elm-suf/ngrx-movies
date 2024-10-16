import { Routes } from '@angular/router';
import { HomePage } from './pages/home.page.component';

export const routes: Routes = [
  { path: '', component: HomePage, pathMatch: 'full' },
];
