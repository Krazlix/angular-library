import { Component } from '@angular/core';
import { BreadCrumbComponent } from '../../../components/bread-crumb/bread-crumb.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [BreadCrumbComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

}
