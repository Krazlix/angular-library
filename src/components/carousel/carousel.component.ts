import { Component, Input } from '@angular/core';
import { Carousel } from '../../shared/model/carousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @Input() items?: Carousel[] = undefined;
}
