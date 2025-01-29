import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-save-button',
  standalone: true,
  imports: [],
  templateUrl: './save-button.component.html',
  styleUrl: './save-button.component.scss'
})
export class SaveButtonComponent {
  @Output() saveButtonPressed: EventEmitter<any> = new EventEmitter<any>();
  @Input() divStyle = 'divHorizontalButtonSaveCancel';
}
