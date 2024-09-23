import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActionButtonsComponent } from '../action-buttons/action-buttons.component';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ActionButtonsComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-library';
}
