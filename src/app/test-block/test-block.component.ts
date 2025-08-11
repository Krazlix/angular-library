import { ModalService } from './../../services/modal.service';
import { ApplicationRef, ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { WidgetCounterComponent } from "../widget-counter/widget-counter.component";
import { start } from 'node:repl';
import { first, Subscription } from 'rxjs';
import { NavbarComponent } from "../navbar/navbar.component";
import { MobileMenuComponent } from "../mobile-menu/mobile-menu.component";
import { DateFieldComponent } from "../date-field/date-field.component";

@Component({
  selector: 'app-test-block',
  standalone: true,
  imports: [ReactiveFormsModule, WidgetCounterComponent, NavbarComponent, MobileMenuComponent, DateFieldComponent],
  templateUrl: './test-block.component.html',
  styleUrl: './test-block.component.scss',
})
export class TestBlockComponent {
  constructor() { }

  form = new FormGroup({
    mySelect: new FormControl(''),
  });


}
