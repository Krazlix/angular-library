import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { get } from "node:http";

@Component({
  selector: "app-date-field",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./date-field.component.html",
  styleUrl: "./date-field.component.scss",
})
export class DateFieldComponent {
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;

  displayValue: string = "";
  isValid: boolean = true;
  dateTypeKey: string[] = ["day", "months", "year"];
  arrowKeys: string[] = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Tab"];
  dateValueSettings: Map<string, number[]> = new Map([
    [this.dateTypeKey[0], [1, 31]],
    [this.dateTypeKey[1], [1, 12]],
    [this.dateTypeKey[2], [0, 9999]],
  ]);
  placeholderValue: Map<string, string> = new Map([
    [this.dateTypeKey[0], "DD"],
    [this.dateTypeKey[1], "MM"],
    [this.dateTypeKey[2], "YYYY"],
  ]);

  dayValue: string = this.placeholderValue.get(this.dateTypeKey[0]) || "DD";
  monthValue: string = this.placeholderValue.get(this.dateTypeKey[1]) || "MM";
  yearValue: string = this.placeholderValue.get(this.dateTypeKey[2]) || "YYYY";
  keyBindCtrlKey: string[] = ["c", "v", "x", "a"];

  onDateChange(event: any, dateType: string, nextInput?: HTMLInputElement, previousInput?: HTMLInputElement) {
    if ((event.ctrlKey || event.metaKey) && this.keyBindCtrlKey.includes(event.key.toLowerCase())) {
      return;
    }
    console.log(event);
    let currentValue = this.getCurrentValue(dateType);

    if (!isNaN(+event.key)) {
      this.valueIsAnumber(currentValue, dateType, event, nextInput);
    } else if (event.key === "Backspace" || event.key === "Delete") {
      const input: HTMLInputElement = event.target;
      const selectionStart = input.selectionStart;
      const selectionEnd = input.selectionEnd;
      if (selectionStart === 0 && selectionEnd === currentValue.length) {
        this.assignDateValue(dateType, this.placeholderValue.get(dateType));
      } else if (selectionStart !== selectionEnd) {
        const newValue = currentValue.slice(0, selectionStart || 0) + currentValue.slice(selectionEnd || 0);
        this.assignDateValue(dateType, newValue || this.placeholderValue.get(dateType));
      } else {
        this.assignDateValue(dateType, currentValue.slice(0, -1));
      }
    } else if (this.arrowKeys.includes(event.key)) {
      this.handleArrowKeys(event, currentValue, dateType, nextInput, previousInput);
    }
    event.preventDefault();
  }
  handleArrowKeys(
    event: any,
    currentValue: string,
    dateType: string,
    nextInput?: HTMLInputElement,
    previousInput?: HTMLInputElement
  ): void {
    let maxOfCurrentValue = this.dateValueSettings.get(dateType)?.[1] || 31;
    let minOfCurrentValue = this.dateValueSettings.get(dateType)?.[0] || 1;
    let newValue: number;

    if (event.key === "ArrowUp") {
      newValue = +currentValue + 1;
      if (newValue <= maxOfCurrentValue) {
        this.assignDateValue(dateType, newValue.toString());
      }
    } else if (event.key === "ArrowDown") {
      newValue = +currentValue - 1;
      if (newValue >= minOfCurrentValue) {
        this.assignDateValue(dateType, newValue.toString());
      }
    } else if ((event.key === "Tab" || event.key === "ArrowRight") && nextInput) {
      setTimeout(() => nextInput.focus(), 0);
      event.preventDefault();
      return;
    } else if (event.key === "ArrowLeft" && previousInput) {
      setTimeout(() => previousInput.focus(), 0);
      event.preventDefault();
      return;
    }
  }
  private valueIsAnumber(currentValue: string, dateType: string, event: any, nextInput?: HTMLInputElement): void {
    let maxOfCurrentValue = this.dateValueSettings.get(dateType)?.[1] || 31;
    const input: HTMLInputElement = event.target;
    const selectionStart = input.selectionStart || 0;
    const selectionEnd = input.selectionEnd;

    if (currentValue.length === 0 || currentValue === this.placeholderValue.get(dateType)) {
      this.assignDateValue(dateType, event.key);
    } else if (currentValue.length < maxOfCurrentValue.toString().length || selectionStart !== selectionEnd) {
      let newValue;
      if (selectionEnd === null) {
        newValue = currentValue.slice(0, selectionStart) + event.key + currentValue.slice(selectionStart);
      } else {
        newValue = currentValue.slice(0, selectionStart) + event.key + currentValue.slice(selectionEnd);
      }
      this.assignDateValue(dateType, newValue);
      if (newValue.length === maxOfCurrentValue.toString().length && +newValue > maxOfCurrentValue) {
        this.assignDateValue(dateType, maxOfCurrentValue.toString());
      }
      if (currentValue.length + 1 === maxOfCurrentValue.toString().length && nextInput) {
        setTimeout(() => nextInput.focus(), 0);
      }
    } else {
      event.preventDefault();
    }
  }

  datePasteValue(event: ClipboardEvent, dateType: string = this.dateTypeKey[0]) {
    let dayValueSetting: number[] = this.dateValueSettings.get(dateType) || [0, 31];
    const pastedText = event.clipboardData?.getData("text") || "";
    if (pastedText != "" && !isNaN(+pastedText)) {
      if (+pastedText > dayValueSetting[1]) {
        this.assignDateValue(dateType, dayValueSetting[1].toString());
      } else if (+pastedText < dayValueSetting[0]) {
        this.assignDateValue(dateType, dayValueSetting[0].toString());
      } else {
        this.assignDateValue(dateType, pastedText);
      }
      event.preventDefault();
    } else {
      event.preventDefault();
    }
  }

  assignDateValue(dateType: string = this.dateTypeKey[0], valueToAssign: string = "") {
    switch (dateType) {
      case this.dateTypeKey[0]:
        this.dayValue = valueToAssign;
        break;
      case this.dateTypeKey[1]:
        this.monthValue = valueToAssign;
        break;
      case this.dateTypeKey[2]:
        this.yearValue = valueToAssign;
        break;
    }
  }

  onFocus($event: FocusEvent, dateType: string) {
    if (this.getCurrentValue(dateType) === this.placeholderValue.get(dateType)) {
      this.assignDateValue(dateType, "");
    }
  }

  getCurrentValue(dateType: string): string {
    switch (dateType) {
      case this.dateTypeKey[0]:
        return this.dayValue;
      case this.dateTypeKey[1]:
        return this.monthValue;
      case this.dateTypeKey[2]:
        return this.yearValue;
    }
    return "";
  }
}
