import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoadingButtonComponent } from "../../components/save-button/loading-button.component";

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [LoadingButtonComponent],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {

  files: File[] = [];
  @Input() multiple: boolean = true;
  @Output() fileSelected: EventEmitter<File[]> = new EventEmitter();

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      if (!this.multiple) {
        this.files = Array.from(input.files);
        this.uploadFiles();
      }
      else {
        this.files.push(...Array.from(input.files));
      }

    }
  }

  removeFile(index: number) {
    this.files.splice(index, 1);
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files) {
      if (!this.multiple) {
        this.files = Array.from(event.dataTransfer.files);
        this.uploadFiles();
      }
      else {
        this.files.push(...Array.from(event.dataTransfer.files));
      }
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  uploadFiles() {
    this.fileSelected.emit(this.files);
  }
}
