import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserPost, userPosts } from '../appConfig';
import { PostsService } from '../posts-service/posts.service';

@Component({
  selector: 'app-user-post',
  templateUrl: 'user-post.component.html',
  styleUrls: ['./user-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPostComponent {
  postsList: UserPost[] = userPosts;
  filteredPosts: UserPost[] = [] || this.postsList;
  searchTerm: string = '';

  constructor(private postsService: PostsService) {
    this.postsService.postQuery.subscribe((value) => {
      this.filterPosts(value);
    });
    this.postsService.filterByDateId.subscribe((id) => {
      this.filterPostsByDate(id);
    });
  }

  filterPosts(value: string) {
    this.filteredPosts = this.postsList?.filter(
      (comment) =>
        comment.username.toLowerCase().includes(value.toLowerCase()) ||
        comment.post.toLowerCase().includes(value.toLowerCase())
    );
  }

  filterPostsByDate(id: string) {
    if (id === 'up') {
      this.filteredPosts.sort(
        (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
      );
    }
    if (id === 'down') {
      this.filteredPosts.sort(
        (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
      );
    }
  }

  createPost(post: UserPost) {
    userPosts.unshift(post);
    this.filteredPosts = userPosts;
  }

  likeComment(id: number) {
    this.filteredPosts.find((post) => {
      if (post.id === id) {
        post.like = !post.like;
      }
    });
  }

  deleteComment(id: number) {
    this.filteredPosts = this.filteredPosts.filter((post) => post.id !== id);
  }
}
