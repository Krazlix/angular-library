import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block',
  standalone: true,
  imports: [],
  templateUrl: './block.component.html',
  styleUrl: './block.component.scss'
})
export class BlockComponent {
  @Input() title: String = "block title";
  @Input() id: number = 0;
}
