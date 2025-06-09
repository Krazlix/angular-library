import { AlertService } from './../../../services/alert.service';
import { ApplicationRef, ChangeDetectorRef, Component, inject } from '@angular/core';
import { LoadingButtonComponent } from '../../../components/save-button/loading-button.component';
import { CancelButtonComponent } from '../../../components/cancel-button/cancel-button.component';
import { CardComponent } from '../../../components/card/card.component';
import { ActionButtonsComponent } from '../../../components/action-buttons/action-buttons.component';
import { BlockComponent } from '../../../components/block/block.component';
import { CarouselComponent } from '../../../components/carousel/carousel.component';
import { InputTextareaComponent } from '../../../components/input-textarea/input-textarea.component';
import { SpinnerComponent } from '../../../components/spinner/spinner.component';
import { InputTextComponent } from '../../../components/input-text/input-text.component';
import { ToastComponent } from '../../../components/toast/toast.component';
import { InputNumberComponent } from '../../../components/input-number/input-number.component';
import { InputEmailComponent } from '../../../components/input-email/input-email.component';
import { BreadCrumbComponent } from '../../../components/bread-crumb/bread-crumb.component';
import {
  TreeNode,
  InfiniteTreeViewComponent,
} from '../../../components/treeview/treeview.component';
import { SelectComponent } from '../../../components/select/select.component';
import { InputDateComponent } from '../../../components/input-date/input-date.component';
import { ChipSelectorComponent } from '../../chip-selector/chip-selector.component';
import { CheckboxComponent } from '../../checkbox/checkbox.component';
import { TimelineComponent } from '../../timeline/timeline.component';
import { Alert } from '../../../shared/model/alert';
import { TextType } from '../../../shared/enum/text-enum-type';
import { RangeComponent } from '../../range/range.component';
import { FileUploadComponent } from '../../file-upload/file-upload.component';
import { RatingComponent } from '../../rating/rating.component';
import { WidgetCounterComponent } from "../../widget-counter/widget-counter.component";
import { Subscription, first } from 'rxjs';

@Component({
  selector: 'app-test',
  imports: [LoadingButtonComponent, CancelButtonComponent, CardComponent, ActionButtonsComponent, BlockComponent, CarouselComponent, InputTextareaComponent,
    SpinnerComponent, InputTextComponent, ToastComponent, InputNumberComponent, InputEmailComponent, BreadCrumbComponent, InfiniteTreeViewComponent, SelectComponent, InputDateComponent, ChipSelectorComponent, CheckboxComponent, TimelineComponent, RangeComponent, FileUploadComponent, RatingComponent, WidgetCounterComponent],
  standalone: true,
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  alertService = inject(AlertService);
  value = 0;
  sub: Subscription | undefined;
  applicationRef = inject(ApplicationRef);
  changesDetectRef = inject(ChangeDetectorRef);
  ngOnInit() {

    this.sub = this.applicationRef.isStable.pipe(first((isStable) => isStable)).subscribe(() => {
      setInterval(() => {
        this.value = Math.floor(Math.random() * 3000);
        this.changesDetectRef.detectChanges();
      }, 5000);
    });

  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }


  startAction($event: Event) {
    this.alertService.pushNewAlert(
      new Alert(TextType.success, 'Action started', 5000)
    );
  }
  treeData: TreeNode[] = [
    {
      id: '1',
      label: 'Root Node 1',
      expanded: true,
      children: [
        {
          id: '1.1',
          label: 'Child 1.1',
          children: [
            { id: '1.1.1', label: 'Grandchild 1.1.1', children: [] },
            { id: '1.1.2', label: 'Grandchild 1.1.2', children: [] },
          ],
        },
        { id: '1.2', label: 'Child 1.2', children: [] },
      ],
    },
    {
      id: '2',
      label: 'Root Node 2',
      children: [{ id: '2.1', label: 'Child 2.1', children: [] }],
    },
  ];
  carouselItems: any;
}
