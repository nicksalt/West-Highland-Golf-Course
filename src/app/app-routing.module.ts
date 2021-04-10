import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutCourseComponent } from './about-course/about-course.component';
import { MembershipsComponent } from './memberships/memberships.component';
import { GreenFeesComponent } from './green-fees/green-fees.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ContactComponent } from './contact/contact.component';
import { Covid19Component } from './covid19/covid19.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutCourseComponent
  },
  {
    path: 'memberships',
    component: MembershipsComponent
  },
  {
    path: 'green-fees',
    component: GreenFeesComponent
  },
  {
    path: 'leagues',
    component: LeaguesComponent
  },
  {
    path: 'sponsors',
    component: SponsorsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'covid19',
    component: Covid19Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
