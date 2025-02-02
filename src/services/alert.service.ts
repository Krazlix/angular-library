import { Injectable, signal } from '@angular/core';
import { Alert } from '../shared/model/alert';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public alerts = signal<Alert[]>([]);
  public alertSubject = new BehaviorSubject<Alert[]>([]);
  private alertsList: Alert[] = [];
  constructor() { }

  public pushNewAlert(alert: Alert): void {
    this.pushNewAletsSignal(alert);
    alert.id = this.alertsList.length === 0 ? 1 : this.alertsList.reduce((a, b) => a.id > b.id ? a : b).id + 1;
    this.alertsList.push(alert);
    this.alertSubject.next(this.alertsList);
    setTimeout(() => {
      this.alertsList = this.alertsList.filter(x => x.id != alert.id);
      this.alertSubject.next(this.alertsList);
    }, alert.duration)
  }

  public pushNewAletsSignal(alert: Alert): void {
    alert.id = this.alertsList.length === 0 ? 1 : this.alertsList.reduce((a, b) => a.id > b.id ? a : b).id + 1;
    this.alerts.update(alerts => alerts = [...alerts, alert]);
    setTimeout(() => {
      this.alerts.update(alerts => alerts = alerts.filter(x => x.id != alert.id));
    }, alert.duration)
  }

}
