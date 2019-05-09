import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiHost = 'https://5cd161ddd4a78300147be980.mockapi.io/api/v1/posts';

  constructor(private http: HttpClient) {
    this.getPosts();
  }

  getPosts() {
    return this.http.get(this.apiHost);
  }

  addPost(post: any) {
    return this.http.post(this.apiHost, post);
  }
}
