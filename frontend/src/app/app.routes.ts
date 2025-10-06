import { Routes } from '@angular/router';
import { ClienteList } from './components/cliente-list/cliente-list';
import { ClienteForm } from './components/cliente-form/cliente-form';

export const routes: Routes = [
    { path: '', redirectTo: '/clientes', pathMatch: 'full' },
    { path: 'clientes', component: ClienteList },
    { path: 'clientes/new', component: ClienteForm },
    { path: 'clientes/edit/:id', component: ClienteForm },
];
