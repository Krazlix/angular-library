import { AlertService } from './../../services/alert.service';
import { Component, effect, inject, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Alert } from '../../shared/model/alert';
import { TextType } from '../../shared/enum/text-enum-type';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent implements OnInit, OnDestroy {
  private alertService: AlertService = inject(AlertService);
  public alertSignal = this.alertService.alerts();
  private alertSub: any;
  alerts: Alert[] = [];

  constructor() {
    effect(() => /* signal here*/ 1 + 1);
  }
  ngOnInit(): void {

    this.alertSub = this.alertService.alertSubject.subscribe(alerts => {
      console.log('alerts', alerts);
      this.alerts = [...alerts];
    });
  }
  ngOnDestroy(): void {
    this.alertSub.unsubscribe();
  }
}
