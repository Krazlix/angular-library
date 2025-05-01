import { Component } from '@angular/core';
import { InputDateComponent } from '../../components/input-date/input-date.component';
import { SelectComponent } from "../../components/select/select.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-block',
  standalone: true,
  imports: [ReactiveFormsModule, InputDateComponent, SelectComponent],
  templateUrl: './test-block.component.html',
  styleUrl: './test-block.component.scss'
})
export class TestBlockComponent {
  form = new FormGroup({
    mySelect: new FormControl('')
  });
}
