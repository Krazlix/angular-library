import { Subscription } from 'rxjs';
import { ModalData } from '../../shared/model/modal-data';
import { ModalService } from './../../services/modal.service';
import { Component, Input, Output, EventEmitter, inject, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnDestroy {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() show: boolean = false;
  @Output() showChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  ModalService = inject(ModalService);
  modalSubscribe: Subscription;

  closeModal() {
    this.show = false;
    this.showChange.emit(this.show);
  }
  constructor() {
    this.modalSubscribe = this.ModalService.modalSubject.subscribe((modalData: ModalData) => {
      console.log('Modal Data:', modalData);
      this.title = modalData.title;
      this.content = modalData.content;
      this.show = true
    });

  }
  ngOnDestroy(): void {
    this.modalSubscribe.unsubscribe();
  }
}
