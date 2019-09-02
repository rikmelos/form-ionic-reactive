import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'formulario', loadChildren: './formulario/formulario.module#FormularioPageModule' },
  { path: 'landing', loadChildren: './landing/landing.module#LandingPageModule' },
  { path: 'list-services', loadChildren: './list-services/list-services.module#ListServicesPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'services-shifts-offered', loadChildren: './services-shifts-offered/services-shifts-offered.module#ServicesShiftsOfferedPageModule' },
  { path: 'talk-parent-child', loadChildren: './talk-parent-child/talk-parent-child.module#TalkParentChildPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
