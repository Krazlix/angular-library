import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bread-crumb',
  standalone: true,
  imports: [],
  templateUrl: './bread-crumb.component.html',
  styleUrl: './bread-crumb.component.scss'
})
export class BreadCrumbComponent implements OnInit {
  url: string = "";
  pathTitle: string[] = [];
  path: String[] = []
  router = inject(Router);

  ngOnInit() {
    this.url = this.router.url.substring(1);
    this.pathTitle = this.url.split('/');
    this.pathTitle.forEach((val, index) => {
      for (let i: number = 0; i <= index; i++) {
        this.path[index] = [this.path[index], this.pathTitle[i]].join('/');
      }
    })
  }

}
