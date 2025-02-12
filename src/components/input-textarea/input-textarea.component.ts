import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-textarea',
  standalone: true,
  imports: [],
  templateUrl: './input-textarea.component.html',
  styleUrl: './input-textarea.component.scss'
})
export class InputTextareaComponent {
  @Input() id: string = "id";
  @Input() label: string = "label";
  @Input() placeholder: string = "example";
  @Input() rows: number = 3;
  @Input() disabled: boolean = false;
}
