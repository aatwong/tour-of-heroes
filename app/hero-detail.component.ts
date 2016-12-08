import { Component, Input } from '@angular/core';
import { Hero } from './hero'; //importing hero class from hero.ts

@Component({
  selector: 'my-hero-detail',  //this indicates <my-hero-detail> element that can be called in other places
  template: `
  <div *ngIf="hero">  <!--only displays in DOM If a hero exists-->
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
  </div>
  `
})


export class HeroDetailComponent {
  @Input()
  hero: Hero;   //accepting hero as an input when component is called from elsewhere
}
