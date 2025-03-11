import { Component, inject, OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { TextType } from '../shared/enum/text-enum-type';
import { Alert } from '../shared/model/alert';
import { Carousel } from '../shared/model/carousel';
import { RouterOutlet } from '@angular/router';
import { BreadCrumbComponent } from "../components/bread-crumb/bread-crumb.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BreadCrumbComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  carouselItems: Carousel[] = [];
  startAction(event: any) {
    console.log("click");
    setTimeout(() => {
      this.alertservice.pushNewAlert(new Alert(TextType.primary, "something wrong", 5000));
      this.alertservice.pushNewAlert(new Alert(TextType.danger, "something very wrong", 10000));
    }, 500);
  }
  title = 'angular-library';
  alertservice = inject(AlertService);
  ngOnInit(): void {
    this.carouselItems = [new Carousel("/autumn.jpg", "description", 2000), new Carousel("./vietnam.jpg", "description2", 3000), new Carousel("train.jpg", "description3", 5000)];
  }

}
