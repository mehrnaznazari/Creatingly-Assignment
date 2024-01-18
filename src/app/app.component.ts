import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,InfiniteScrollComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Assessment';
}
