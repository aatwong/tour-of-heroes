import { Component } from '@angular/core';


//AppComponent is a "router component" because it's attached to a router displating routed views
@Component ({
  selector: 'my-app',
  //styleUrls: [ 'app.component.css' ],
  template: `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard">Dashboard</a>
    <a routerLink="/heroes">Heroes</a>  <!--bind the RouterLink directive (another of the RouterModule directives) to a string that tells the router where to navigate when the user clicks the link-->
  </nav>
  <router-outlet></router-outlet>
  `,
})

export class AppComponent {
  title = 'Tour of Heroes';
}
