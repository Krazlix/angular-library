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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ActionButtonsComponent, CardComponent, CancelButtonComponent, SaveButtonComponent, SpinnerComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular-library';
  alertservice = inject(AlertService);
  ngOnInit(): void {
    this.alertservice.pushNewAlert(new Alert(TextType.primary, "something wrong", 5000));
    setTimeout(() => { this.alertservice.pushNewAlert(new Alert(TextType.danger, "something very wrong", 10000)) }, 2000)

  }

}
