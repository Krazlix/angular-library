import { routes } from './../app.routes';
import { Component, inject } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { RoutesCompleted } from '../../shared/model/routesCompleted';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private router = inject(Router);
  routes: RoutesCompleted[][] = [];

  ngOnInit() {
    console.log(this.router.config
      .filter((route) => route.data?.["showInNavbar"]).forEach((route) => {
        if (!route.data?.["submenuOf"]) {
          const routeArray = this.router.config.filter(r => r.data?.["submenuOf"] === route.data?.["title"]).sort((a, b) => a.data?.["title"] - b.data?.["title"]);
          this.routes.push([route, ...routeArray]);
        }
        else
          return;
      }));
    console.log(this.routes, this.router.config);
  }

  getRouterLink(route: any): string[] {
    return ['/', ...route.path.split('/')];
  }
}
