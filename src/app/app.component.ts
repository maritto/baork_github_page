import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { rubberBandAnimation } from 'angular-animations';
import { interval, map, startWith } from 'rxjs';

@Component({
  selector: 'bk-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    rubberBandAnimation({ anchor: 'rubber', direction: '<=>', duration: 500 }),
  ]
})
export class AppComponent {
  title = 'bk_page';
  loop$ = interval(3000).pipe(startWith(1), map(i => !(i % 2)))
}
