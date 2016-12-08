// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from './hero'; //importing hero class from hero.ts
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',  //this indicates <my-hero-detail> element that can be called in other places
  templateUrl: 'hero-detail.component.html',
  styleUrls: [ 'hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero;   //accepting hero as an input when component is called from elsewhere

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id'])) //"+" operator converts string route parameter value to a number
      .subscribe(hero => this.hero = hero);
  }

  //method for Back button--navigates backward one step in browser's history using Location service injected earlier
  goBack(): void {
    this.location.back();
  }
}
