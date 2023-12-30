import { Component } from '@angular/core';
import { UserPost, userPosts } from './appConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  postsList: UserPost[] = userPosts;
}
