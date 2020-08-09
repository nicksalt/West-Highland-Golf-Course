import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { AboutCourseComponent } from './about-course/about-course.component';
import { HoleComponent } from './about-course/hole/hole.component';
import { MembershipsComponent } from './memberships/memberships.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GreenFeesComponent } from './green-fees/green-fees.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ContactComponent } from './contact/contact.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent,
    AboutCourseComponent,
    HoleComponent,
    MembershipsComponent,
    GreenFeesComponent,
    LeaguesComponent,
    SponsorsComponent,
    ContactComponent
  ],
  imports: [ 
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule]
})
export class AppModule { }
