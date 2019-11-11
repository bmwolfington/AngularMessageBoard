import { Injectable } from "@angular/core";
import { Post } from "./post";

@Injectable()
export class PostService
{
  private posts: Post[] = [
    { id: 1, title: 'First Post!', body: 'Wooooo!' },
    { id: 2, title: 'Second Post', body: 'This is a better comment' }
  ];

  getAll(): Post[]
  {
    return this.posts;
  }

  get(id: number): Post
  {
    return this.posts.find(p => p.id == id);
  }
}
