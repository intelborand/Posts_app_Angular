import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  postQuery = new BehaviorSubject('');
  filterByDateId = new BehaviorSubject('');
}
