export class ModalData {
    title: string;
    content: string;
    constructor(content: string = "modal content", title: string = "title") {
        this.title = title;
        this.content = content;
    }
}
