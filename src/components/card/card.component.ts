import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActionButtonsComponent } from "../action-buttons/action-buttons.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ActionButtonsComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() cardType: string = 'default';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() buttonText: string = '';
  @Input() icon: string = '';
  @Input() header: boolean = false;
  @Input() icons: string[] = [];

  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Output() action: EventEmitter<void> = new EventEmitter<void>();

}
