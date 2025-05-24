import { ModalService } from './../../services/modal.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-test-block',
  standalone: true,
  imports: [ReactiveFormsModule, CardComponent],
  templateUrl: './test-block.component.html',
  styleUrl: './test-block.component.scss',
})
export class TestBlockComponent {
  constructor() { }
  form = new FormGroup({
    mySelect: new FormControl(''),
  });
}
