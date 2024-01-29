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
  isEmojiPickerVisible: boolean;
  textArea: string = '';
  constructor(private userPostComponent: UserPostComponent) {}

  addEmoji(event: any) {
    this.textArea = `${this.textArea}${event.emoji.native}`;
    this.isEmojiPickerVisible = false;
  }

  addPost() {
    const newPost: UserPost = {
      id: userPosts.length + 1,
      username: this.name.value as string,
      post: this.postText.value as string,
      like: false,
      createdAt: new Date(),
    };

    this.userPostComponent.createPost(newPost);
    this.name.setValue('');
    this.postText.setValue('');
  }
}
