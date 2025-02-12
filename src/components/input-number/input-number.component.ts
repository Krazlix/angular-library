import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-number',
  standalone: true,
  imports: [],
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss'
})
export class InputNumberComponent {
  @Input() label: string = "Income";
  @Input() placeholder: number = 123456;
  @Input() disabled: boolean = false;
}
