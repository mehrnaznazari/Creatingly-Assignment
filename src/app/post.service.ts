import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

interface PostModel {
  id: number;
  content: string;
  height: number;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  getPosts(startIndex: number, batchSize: number): Observable<PostModel[]> {
    const dummyData = Array.from({length: batchSize}, (_, index) => ({
      id: startIndex + index + 1,
      content: `This is the content of post ${startIndex + index + 1}.`,
      height: 100 + Math.floor(Math.random() * 100),
    }));

    return of(dummyData);

  }
}

