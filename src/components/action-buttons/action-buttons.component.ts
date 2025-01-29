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


  constructor() {
    //constructor
  }

  ngOnInit(): void { }
}
