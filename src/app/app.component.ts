import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActionButtonsComponent } from '../components/action-buttons/action-buttons.component';
import { CardComponent } from '../components/card/card.component';
import { CancelButtonComponent } from "../components/cancel-button/cancel-button.component";
import { SaveButtonComponent } from "../components/save-button/save-button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ActionButtonsComponent, CardComponent, CancelButtonComponent, SaveButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-library';
}
