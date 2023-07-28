import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { rubberBandAnimation } from 'angular-animations';
import { interval, map, startWith } from 'rxjs';

@Component({
  selector: 'bk-top-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
  animations: [
    rubberBandAnimation({ anchor: 'rubber', direction: '<=>', duration: 500 }),
  ]
})
export class TopMenuComponent {
  loop$ = interval(3000).pipe(startWith(1), map(i => !(i % 2)))
}
