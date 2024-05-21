import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'category/politics',
    pathMatch: 'full',
  },
  {
    path: 'category/:category',
    loadComponent: () => import('./category/category.component').then((mod) => mod.CategoryComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.component').then((mod) => mod.LoginComponent),
  },
  // {
  //   path: 'detail/:category/:id',
  //   loadComponent: () => import('./detail/detail.component').then((mod) => mod.DetailComponent),
  // },
];
