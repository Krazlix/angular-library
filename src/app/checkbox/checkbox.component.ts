import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  checkconsole() {
    setTimeout(() => {
      this.checkEvent.emit(this.checked);
    }, 0);
  }
  @Input() label: string = "";
  @Input() checked: boolean = true;
  @Output() checkEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() disabled: boolean = false;
  @Input() id: string = '';

}
