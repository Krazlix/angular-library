import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-loading-button',
  standalone: true,
  imports: [],
  templateUrl: './loading-button.component.html',
  styleUrl: './loading-button.component.scss'
})
export class LoadingButtonComponent {
  @Output() saveButtonPressed: EventEmitter<any> = new EventEmitter<any>();
  @Input() divStyle = 'divHorizontalButtonSaveCancel';
  @Input() label: string = 'Save';
}
