import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from './common/top-menu/top-menu.component';

@Component({
  selector: 'bk-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TopMenuComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bk_page';
}
