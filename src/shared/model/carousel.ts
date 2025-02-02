export class Carousel {
    src: string = "";
    interval: number = 5000;
    alt: string = "";

    constructor(src: string, alt: string, interval: number) {
        this.src = src;
        this.alt = alt;
        this.interval = interval;
    }
}