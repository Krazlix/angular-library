import { Component, Input, OnInit } from '@angular/core';
import { TimelineItem } from '../../shared/model/timeline-item';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit {
  @Input() vertical: boolean = false;
  @Input() items: TimelineItem[] = [new TimelineItem('Phase 1', undefined, undefined), new TimelineItem('Phase 2', undefined, undefined), new TimelineItem('Phase 3', undefined, undefined),
  new TimelineItem('Phase 4', undefined, undefined, true), new TimelineItem('Phase 5', undefined, undefined)];
  currentGoalIndex: number = 0;
  ngOnInit() {
    this.currentGoalIndex = this.items.findIndex(item => item.currentGoal);
  }
}
