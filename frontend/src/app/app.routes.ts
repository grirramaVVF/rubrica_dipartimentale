import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SediComponent } from './components/sedi/sedi.component';

export const routes: Routes = [
   { path: "home", component: HomeComponent },
   { path: "sedi", component: SediComponent },
   { path: '**',   redirectTo: '/home', pathMatch: 'full' },
];
