import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActionButtonsComponent } from '../components/action-buttons/action-buttons.component';
import { CardComponent } from '../components/card/card.component';
import { CancelButtonComponent } from "../components/cancel-button/cancel-button.component";
import { SaveButtonComponent } from "../components/save-button/save-button.component";
import { SpinnerComponent } from '../components/spinner/spinner.component';
import { ToastComponent } from "../components/toast/toast.component";
import { AlertService } from '../services/alert.service';
import { TextType } from '../shared/enum/text-enum-type';
import { Alert } from '../shared/model/alert';
import { BlockComponent } from '../components/block/block.component';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { Carousel } from '../shared/model/carousel';
import { InputTextComponent } from "../components/input-text/input-text.component";
import { InputEmailComponent } from "../components/input-email/input-email.component";
import { InputNumberComponent } from "../components/input-number/input-number.component";
import { InputTextareaComponent } from "../components/input-textarea/input-textarea.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ActionButtonsComponent, CardComponent,
    CancelButtonComponent, SaveButtonComponent, SpinnerComponent,
    ToastComponent, BlockComponent, CarouselComponent, InputTextComponent,
    InputEmailComponent, InputNumberComponent, InputTextareaComponent],
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
