import { Routes } from '@angular/router';
import { SottoufficiComponent } from './components/sottouffici/sottouffici.component';

export const routes: Routes = [
    { path:"sottouffici/:ufficio", component: SottoufficiComponent},
    { path: '',   redirectTo: '/', pathMatch: 'full' }, // redirect to root
];
