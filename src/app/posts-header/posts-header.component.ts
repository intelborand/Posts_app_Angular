import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostsService } from '../posts-service/posts.service';

@Component({
  selector: 'app-posts-header',
  templateUrl: './posts-header.component.html',
  styleUrls: ['./posts-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsHeaderComponent {
  searchTerm: string = '';
  sortableItems = [
    { value: 'down', title: 'Down' },
    { value: 'up', title: 'Up' },
  ];
  constructor(private postsService: PostsService) {}

  filter() {
    this.postsService.postQuery.next(this.searchTerm);
  }

  selectDate(id: string) {
    this.postsService.filterByDateId.next(id);
  }
}
