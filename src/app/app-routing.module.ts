import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosSolutionsComponent } from './pages/nos-solutions/nos-solutions.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: HomeComponent },
  { path: 'nos-solutions', component: NosSolutionsComponent },
];

const routesOptions: ExtraOptions = {
  onSameUrlNavigation: 'reload',
};


@NgModule({
  imports: [RouterModule.forRoot(routes, routesOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
