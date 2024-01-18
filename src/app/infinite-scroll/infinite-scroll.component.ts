import { Component, HostListener, OnInit, inject } from '@angular/core';
import { PostService } from '../post.service';
import {CommonModule} from '@angular/common';

import {InfiniteScrollDirective} from '../infinite-scroll.directive';
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-infinite-scroll',
  standalone: true,
  imports: [
    CommonModule,
    InfiniteScrollDirective,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './infinite-scroll.component.html',
  styleUrl: './infinite-scroll.component.scss'
})
export class InfiniteScrollComponent implements OnInit {
  private postService = inject(PostService);
  private batchSize = 10;
  private startIndex = 0;
  private threshold = 0.5;

  posts: any[] = [];
  visiblePosts: any[] = [];
  loading = false;


  ngOnInit(): void {
    this.loading = true;
    this.loadPosts();
  }


  onScroll(): void {
    if (this.shouldFetchData()) {
      this.loadPosts();
    }
  }

  private shouldFetchData(): boolean {
    if (this.loading) {
      return false;
    }

    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const documentHeight = document.documentElement.scrollHeight;

    return scrollPosition + windowHeight >= documentHeight - windowHeight * this.threshold;
  }

  private loadPosts(): void {
    this.postService.getPosts(this.startIndex, this.batchSize).subscribe((newPosts) => {
      this.posts = this.posts.concat(newPosts);
      this.startIndex += this.batchSize;
      this.loading = false;
    });
  }

}
