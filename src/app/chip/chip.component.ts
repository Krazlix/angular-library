import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss'
})
export class ChipComponent {
  deleteChip($event: MouseEvent, id: number) {
    $event.stopPropagation();
    this.delete.emit(id);
  }
  @Input() label: string = '';
  @Input() id: number = 0;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
}
