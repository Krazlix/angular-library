import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cancel-button',
  standalone: true,
  imports: [],
  templateUrl: './cancel-button.component.html',
  styleUrl: './cancel-button.component.scss'
})
export class CancelButtonComponent {
  @Output() cancelButtonPressed: EventEmitter<any> = new EventEmitter<any>();
  public buttonMargin = '';
}
