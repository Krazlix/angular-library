import { Component, Input, input } from '@angular/core';
import { inputSize } from '../../shared/enum/input-size';

@Component({
  selector: 'input-text',
  standalone: true,
  imports: [],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss'
})
export class InputTextComponent {
  @Input() id: string = "id";
  @Input() label: string = "label";
  @Input() placeholder: string = "example";
  @Input() size!: inputSize;
  @Input() disabled: boolean = false;
}
