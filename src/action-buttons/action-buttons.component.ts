import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./action-buttons.component.scss'],
})
export class ActionButtonsComponent implements OnInit {
  @Output() saveButtonPressed: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancelButtonPressed: EventEmitter<any> = new EventEmitter<any>();
  @Input() divStyle = 'divHorizontalButtonSaveCancel';
  public buttonMargin = '';
  constructor() {
    //constructor
  }

  ngOnInit(): void {
    if (this.divStyle !== 'divVerticalButtonSaveCancel') {
      this.buttonMargin = '0 25px 0 0';
    }
  }
}
