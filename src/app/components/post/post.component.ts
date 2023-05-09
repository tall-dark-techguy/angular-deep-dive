import { Component, Input } from '@angular/core';
import { Post } from 'src/app/interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: [],
})
export class PostComponent {
  @Input() post: Post | undefined;

  constructor() {}
}
