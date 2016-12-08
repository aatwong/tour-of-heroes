import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; //imported this for two-way binding on form inputs!
import { RouterModule }   from '@angular/router';

import { HeroDetailComponent } from './hero-detail.component';
import { AppComponent }  from './app.component';
import { HeroesComponent }  from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  providers: [
    HeroService
  ],

  bootstrap: [ AppComponent ]
})


export class AppModule {
}


// from imports: (before routing)
// RouterModule.forRoot([ //forRoot method for providing configured router at ROOT of the application
//   {
//     path: 'heroes', //router matches this route's path to the URL in the browser address bar
//     component: HeroesComponent //component that router CREATES when navigating to this route (HeroesComponent)
//   },
//   {
//     path: 'dashboard',
//     component: DashboardComponent
//   },
//   {
//     path: 'detail/:id',
//     component: HeroDetailComponent
//   },
// ])
