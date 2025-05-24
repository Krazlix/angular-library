import { ModalService } from './../../services/modal.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { ChipSelectorComponent } from '../chip-selector/chip-selector.component';
import { SelectComponent } from '../../components/select/select.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { RangeComponent } from '../range/range.component';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-test-block',
  standalone: true,
  imports: [ReactiveFormsModule, RatingComponent],
  templateUrl: './test-block.component.html',
  styleUrl: './test-block.component.scss',
})
export class TestBlockComponent {
  constructor() {}
  form = new FormGroup({
    mySelect: new FormControl(''),
  });
}
