import { Component } from '@angular/core';
import { SaveButtonComponent } from "../../../components/save-button/save-button.component";
import { CancelButtonComponent } from "../../../components/cancel-button/cancel-button.component";
import { CardComponent } from "../../../components/card/card.component";
import { ActionButtonsComponent } from "../../../components/action-buttons/action-buttons.component";
import { BlockComponent } from "../../../components/block/block.component";
import { CarouselComponent } from "../../../components/carousel/carousel.component";
import { InputTextareaComponent } from "../../../components/input-textarea/input-textarea.component";
import { SpinnerComponent } from "../../../components/spinner/spinner.component";
import { InputTextComponent } from "../../../components/input-text/input-text.component";
import { ToastComponent } from "../../../components/toast/toast.component";
import { InputNumberComponent } from "../../../components/input-number/input-number.component";
import { InputEmailComponent } from "../../../components/input-email/input-email.component";
import { BreadCrumbComponent } from "../../../components/bread-crumb/bread-crumb.component";

@Component({
  selector: 'app-test',
  imports: [SaveButtonComponent, CancelButtonComponent, CardComponent, ActionButtonsComponent, BlockComponent, CarouselComponent, InputTextareaComponent,
    SpinnerComponent, InputTextComponent, ToastComponent, InputNumberComponent, InputEmailComponent, BreadCrumbComponent],
  standalone: true,
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  startAction($event: Event) {
    throw new Error('Method not implemented.');
  }
  carouselItems: any;

}
