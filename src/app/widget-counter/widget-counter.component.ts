import { Component, effect, Input, signal, Signal, SimpleChange, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-widget-counter',
  standalone: true,
  imports: [],
  templateUrl: './widget-counter.component.html',
  styleUrl: './widget-counter.component.scss'
})
export class WidgetCounterComponent {
  @Input() value: number = 0;
  @Input() description: string = '';
  @Input() icon: string = '';
  @Input() delay: number = 1000;
  @Input() steps: number = 200;
  stepAbs: number = 1;
  valueSignal: WritableSignal<number> = signal(0);
  valueDisplayed = 0;

  private animationFrame: any;

  constructor() {
    // Only track valueSignal, do not write to any signal here!
    effect(() => {
      const target = this.valueSignal();
      const step = (target - this.valueDisplayed) / this.steps;
      const stepAbs = Math.abs(step);
      this.startAnimation(target, step, stepAbs);
    });
  }

  private startAnimation(target: number, step: number, stepAbs: number) {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
    const animate = () => {
      if (Math.abs(target - this.valueDisplayed) <= stepAbs) {
        this.valueDisplayed = target;
      } else {
        this.valueDisplayed += Math.round(step);
        if (typeof requestAnimationFrame !== 'undefined') {
          this.animationFrame = requestAnimationFrame(animate);
        } else {
          setTimeout(animate, 16);
        }

      }
    };
    animate();
  }

  ngOnChanges(changes: any) {
    if (changes['value']) {
      this.valueSignal.set(changes['value'].currentValue);
    }
  }
}
