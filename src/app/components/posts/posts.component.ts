import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: [],
})
export class PostsComponent implements OnInit {
  posts: Post[] | undefined;

  constructor(private readonly postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }
}
