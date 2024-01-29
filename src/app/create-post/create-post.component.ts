import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserPost, userPosts } from '../appConfig';
import { UserPostComponent } from '../user-post/user-post.component';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatePostComponent {
  name = new FormControl('');
  postText = new FormControl('');

  constructor(private userPostComponent: UserPostComponent) {}

  addPost() {
    const newPost: UserPost = {
      id: userPosts.length + 1,
      username: this.name.value as string,
      post: this.postText.value as string,
      like: false,
      createdAt: new Date(),
    };

    this.userPostComponent.createPost(newPost);
  }
}
