import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnClassType } from '../../shared/enum/btn-enum-type';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./action-buttons.component.scss'],
})
export class ActionButtonsComponent implements OnInit {

  @Input() btnType: BtnClassType = BtnClassType.primary;
  @Input() text: string = "click";
  @Output() click: EventEmitter<any> = new EventEmitter();
  constructor() {
    //constructor
  }

  ngOnInit(): void { }
}
