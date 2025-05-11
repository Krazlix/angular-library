import { Component } from '@angular/core';
import { ChipComponent } from "../chip/chip.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chip-selector',
  standalone: true,
  imports: [ChipComponent, FormsModule],
  templateUrl: './chip-selector.component.html',
  styleUrl: './chip-selector.component.scss'
})
export class ChipSelectorComponent {
  chipList: string[] = ['Chip 1', 'Chip 2', 'Chip 3', 'Chip 4', 'Chip 5'];
  newChip: string = '';

  deleteChips(index: any) {

    this.chipList.splice(index, 1);
  }

  addChip() {
    if (this.newChip && this.newChip.trim() !== '') {
      this.chipList.push(this.newChip);
      this.newChip = '';
    }
  }

}
