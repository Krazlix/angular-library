import { Option } from "../model/option";

export function convertToSelectionArray(value: string | string[]): Option[] {
    if (typeof value === 'string') {
        return [new Option(value)];
    } else {
        return value.map((option) => new Option(option));
    }
}