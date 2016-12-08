import { Component, OnInit } from '@angular/core';
import { Hero } from './hero'; //importing hero class from hero.ts
import { HeroService } from './hero.service'; //angular will supply an instance of
//the HeroService when it creates a new AppComponent
import { AppComponent }  from './app.component';
import { RouterModule, Router }   from '@angular/router';


@Component({
  moduleId: module.id, //Set the moduleId property to module.id so that templateUrl and styleUrls are relative to the component
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css' ]
})

// export class HeroesComponent implements OnInit {
//   heroes: Hero[]; //the array is in mock-heroes.ts
//   selectedHero: Hero;
//
//   constructor(
//     private router: Router,
//     private heroService: HeroService) { }
//
//   getHeroes(): void {
//     //the following line acts on a the Promise from Hero Service when it resolves
//     this.heroService.getHeroes().then(heroes => this.heroes = heroes);
//   }
//
//   ngOnInit(): void {
//     this.getHeroes();
//   }
//
//   onSelect(hero: Hero): void {
//     this.selectedHero = hero;
//   }
//
//   gotoDetail(): void {
//     this.router.navigate(['/detail', this.selectedHero.id]);
//   }
// }

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
