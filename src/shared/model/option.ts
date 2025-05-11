export class Option {
    constructor(public value: string, public selected: boolean = false) { }
}

export class OptionEnriched extends Option {
    constructor(value: string, selected: boolean, public index: number) {
        super(value, selected);
    }
}