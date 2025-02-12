import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-email',
  standalone: true,
  imports: [],
  templateUrl: './input-email.component.html',
  styleUrl: './input-email.component.scss'
})
export class InputEmailComponent {
  @Input() id: string = "id";
  @Input() label: string = "label";
  @Input() placeholder: string = "example@domain.com";
  @Input() disabled: boolean = false;
}
