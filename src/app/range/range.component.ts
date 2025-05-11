import { Component, forwardRef, Input } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-range',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './range.component.html',
  styleUrl: './range.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RangeComponent),
      multi: true
    }
  ]
})
export class RangeComponent {
  onInput() {
    throw new Error('Method not implemented.');
  }
  @Input() min: number = 0;
  @Input() max: number = 10000;
  value: number = 0;
}
