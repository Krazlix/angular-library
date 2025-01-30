import { AlertService } from './../../services/alert.service';
import { Component, effect, Inject, Input, OnInit } from '@angular/core';
import { Alert } from '../../shared/model/alert';
import { TextType } from '../../shared/enum/text-enum-type';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent implements OnInit {
  private alertService: AlertService = Inject(AlertService);
  alerts: Alert[] = [];

  constructor() {
  }
  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.alertService.alertSubject);
      this.alertService.alertSubject.subscribe(alerts => {
        this.alerts = [...alerts];
      });
    }, 3000);

  }
}
