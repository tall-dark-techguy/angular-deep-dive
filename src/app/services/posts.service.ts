import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private apiUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(private readonly http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    const posts = this.http.get<Post[]>(this.apiUrl + '/posts');
    return posts;
  }
}
