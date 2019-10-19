import { Routes } from '@angular/router';

/**
 * Created by Sebastien Poncelet
 * 09/09/2019
 * 16h
 */

 // Index


export const routes: Routes = [
  {  path: '', loadChildren: () => import('../views/index/index.module').then(m => m.IndexModule)},
  {  path: 'about', loadChildren: () => import('../views/about/about.module').then(m => m.AboutModule)},
  {  path: 'services', loadChildren: () => import('../views/services/services.module').then(m => m.ServicesModule)},
  {  path: 'pricing', loadChildren: () => import('../views/pricing/pricing.module').then(m => m.PricingModule)},
  {  path: 'terms', loadChildren: () => import('../views/terms/terms.module').then(m => m.TermsModule)},
];
