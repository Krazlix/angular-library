// date-time-picker.component.ts
import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators } from '@angular/forms';
import { SelectComponent } from "../select/select.component";

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, SelectComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDateComponent),
      multi: true
    }
  ]
})
export class InputDateComponent implements ControlValueAccessor, OnInit {

  dateTimeForm!: FormGroup;
  disabled = false;
  labelHours = '0';
  labelMinutes = "0";
  hoursList: string[] = Array.from({ length: 24 }, (_, i) => i.toString());
  minutesList: string[] = Array.from({ length: 60 }, (_, i) => i.toString());


  hours = 0;
  minutes = 0;

  // For ControlValueAccessor
  onChange: any = () => { };
  onTouched: any = () => { };

  ngOnInit() {
    this.dateTimeForm = new FormGroup({
      date: new FormControl('', Validators.required),
      hours: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(23)]),
      minutes: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(59)])
    });

    this.dateTimeForm.valueChanges.subscribe(value => {
      if (this.dateTimeForm.valid && value.date) {
        const dateValue = new Date(value.date);
        dateValue.setHours(value.hours);
        dateValue.setMinutes(value.minutes);
        this.onChange(dateValue);
      } else {
        this.onChange(null);
      }
    });

    this.dateTimeForm.get('hours')!.valueChanges.subscribe(val => {
      console.log('hours changed:', val);
      this.labelHours = val.toString();
    });
  }


  // ControlValueAccessor methods
  writeValue(value: Date): void {
    if (value) {
      this.dateTimeForm.setValue({
        date: value.toISOString().split('T')[0],
        hours: this.labelHours,
        minutes: this.labelMinutes
      }, { emitEvent: false });
    } else {
      this.dateTimeForm.reset({
        date: null,
        hours: 0,
        minutes: 0
      }, { emitEvent: false });
    }
    console.log(this.dateTimeForm);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    if (isDisabled) {
      this.dateTimeForm.disable();
    } else {
      this.dateTimeForm.enable();
    }
  }
}