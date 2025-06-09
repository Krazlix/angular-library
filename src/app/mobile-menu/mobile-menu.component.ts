import { Component, inject } from '@angular/core';
import { RoutesCompleted } from '../../shared/model/routesCompleted';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss',
})
export class MobileMenuComponent {
  toggled: boolean = false;
   private router = inject(Router);
    routes: RoutesCompleted[][] = [];
  toggleMenu(): void {
    this.toggled = !this.toggled;
  }
   
  
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
