export class TimelineItem {
    constructor(public label: string, public date?: Date, public icon: string = 'radio_button_checked', public currentGoal: boolean = false) {
    }
}