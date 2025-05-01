import { Component, forwardRef, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements OnInit {
  ngOnInit() {
    this.optionsCopy = [...this.options];
  }
  filterOptions(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.options = this.optionsCopy.filter((option) => option.toLowerCase().includes(value.toLowerCase()));

  }
  @Input() label: string = "Select or search an option :";
  @Output() labelChange = new EventEmitter<string>();
  @Input() options: string[] = ["", "Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6", "Option 7", "Option 8", "Option 9", "Option 10"];
  optionsCopy: string[] = [];
  @Input() search: boolean = true;
  private _value: string = '';
  optionToggled = false;
  searchValue = 'Search...';



  toggleOptions() {
    this.optionToggled = !this.optionToggled;
  }
  looseFocus() {
    this.optionToggled = false;
  }

  setSelectValue(option: string) {
    this.label = option;
    this.labelChange.emit(this.label);
    this.optionToggled = false;
    this.onChange(option);
  }

  onChange = (value: any) => { };
  onTouched = () => { };

  writeValue(value: any): void {
    this._value = value;
    this.label = value || this.label;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void { }


}
