import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SedeComponent } from './components/sede/sede.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RubricaComponent } from './components/rubrica/rubrica.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: "login", component: LoginComponent },
  { path: "rubrica", component: RubricaComponent },
  { path: "sedi", component: SedeComponent },
];
