import { TextType } from "../enum/text-enum-type";

export class Alert {
    type: TextType = TextType.success;
    text: string = "this is an alert";
    duration: number = 5000;
    id: number = 0;
    constructor(type: TextType, text: string, duration: number) {
        this.type = type;
        this.text = text;
        this.duration = duration;
    }
}
