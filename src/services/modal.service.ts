import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ModalData } from '../shared/model/modal-data';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public modalSubject = new Subject<ModalData>();
  constructor() { }

  public showModal(modalData: ModalData): void {
    this.modalSubject.next(modalData);
  }

}
