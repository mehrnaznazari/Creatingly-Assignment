import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]',
  standalone: true
})
export class InfiniteScrollDirective {
  @Output() scrolled = new EventEmitter<void>();

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.scrolled.emit();
  }

}
