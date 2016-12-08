import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  // template: '<h3>My Dashboard</h3>',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  heroes: Hero[] = []; //defines heroes array property

  constructor(private heroService: HeroService) { } //inject HeroService in the constructor and hold in a private HeroService field

  //call the service to get heroes inside ngOnInit lifecycle hook
  //array picks 2nd, 3rd, 4th, and 5th hero with array.slice method
  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
