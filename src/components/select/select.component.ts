import { Component, forwardRef, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { Option, OptionEnriched } from '../../shared/model/option';
import { CheckboxComponent } from "../../app/checkbox/checkbox.component";
import { ChipComponent } from "../../app/chip/chip.component";

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [ReactiveFormsModule, CheckboxComponent, ChipComponent],
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


  @Input() label: string = "test";
  @Output() labelChange = new EventEmitter<string>();
  @Input() options: Option[] = [new Option(""), new Option("Option 1"), new Option("Option 2"), new Option("Option 3"),
  new Option("Option 4"), new Option("Option 5"), new Option("Option 6"), new Option("Option 7"), new Option("Option 8"), new Option("Option 9"), new Option("Option 10")];
  @Input() multiple: boolean = false;
  @Input() search: boolean = true;
  optionsCopy: Option[] = [];
  private _value: string = '';
  optionToggled = false;
  searchValue = 'Search...';
  selectedOptions: OptionEnriched[] = [];


  ngOnInit() {
    this.optionsCopy = [...this.options];
    this.selectedOptions = this.options.map((option, i) => new OptionEnriched(option.value, option.selected, i)).filter((option) => option.selected);
  }

  filterOptions(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.options = this.optionsCopy.filter((option) => option.value.toLowerCase().includes(value.toLowerCase()));
  }


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

  setSelected(index: number) {
    this.focusInside = true;
    this.options[index].selected = this.options[index].selected ? false : true;
    this.selectedOptions = this.options.map((option, i) => new OptionEnriched(option.value, option.selected, i)).filter((option) => option.selected);
    this.onChange(this.selectedOptions);
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

  focusInside = false;

  onFocusIn() {
    this.focusInside = true;
  }

  onFocusOut(event: FocusEvent) {
    //this.label = ""; pourquoi ça fonctionne pas toujours ?
    const currentTarget = event.currentTarget as HTMLElement;
    if (!currentTarget.contains(event.relatedTarget as Node)) {
      this.optionToggled = false;
      this.focusInside = false;
      this.onTouched();
    }
  }


}
