import { ModalService } from './../../services/modal.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: 'app-test-block',
  standalone: true,
  imports: [ReactiveFormsModule, ModalComponent],
  templateUrl: './test-block.component.html',
  styleUrl: './test-block.component.scss'
})
export class TestBlockComponent {
  constructor() {
  }
  form = new FormGroup({
    mySelect: new FormControl('')
  });
}
