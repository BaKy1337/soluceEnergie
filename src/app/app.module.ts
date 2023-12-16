import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTreeModule} from '@angular/material/tree';
import { ListsolutionsComponent } from './components/listsolutions/listsolutions.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ListservicesComponent } from './components/listservices/listservices.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { BrandsComponent } from './components/brands/brands.component';
import { FooterComponent } from './components/footer/footer.component';
import { NosSolutionsComponent } from './pages/nos-solutions/nos-solutions.component';
import {MatSelectModule} from '@angular/material/select';
import { AboutComponent } from './pages/about/about.component';
import { NosCertificationsComponent } from './pages/nos-certifications/nos-certifications.component';
import { NosPartenairesComponent } from './pages/nos-partenaires/nos-partenaires.component';
import { VosAidesComponent } from './pages/vos-aides/vos-aides.component';
import { ContactComponent } from './pages/contact/contact.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ListsolutionsComponent,
    ListservicesComponent,
    TestimonialsComponent,
    BrandsComponent,
    FooterComponent,
    NosSolutionsComponent,
    AboutComponent,
    NosCertificationsComponent,
    NosPartenairesComponent,
    VosAidesComponent,
    ContactComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatTreeModule,
    CarouselModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
