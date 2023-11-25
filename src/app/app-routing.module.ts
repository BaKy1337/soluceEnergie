import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosSolutionsComponent } from './pages/nos-solutions/nos-solutions.component';
import { AboutComponent } from './pages/about/about.component';
import { NosCertificationsComponent } from './pages/nos-certifications/nos-certifications.component';
import { NosPartenairesComponent } from './pages/nos-partenaires/nos-partenaires.component';
import { VosAidesComponent } from './pages/vos-aides/vos-aides.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: HomeComponent },
  { path: 'nos-solutions', component: NosSolutionsComponent },
  { path: 'quisommesnous', component: AboutComponent },
  { path: 'nos-certifications', component: NosCertificationsComponent },
  { path: 'nos-partenaires', component: NosPartenairesComponent },
  { path: 'vos-aides', component: VosAidesComponent },
];

const routesOptions: ExtraOptions = {
  onSameUrlNavigation: 'reload',
  scrollPositionRestoration: 'enabled',
};


@NgModule({
  imports: [RouterModule.forRoot(routes, routesOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
