import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  githubApiRoot = 'https://api.github.com';

  constructor(private http: HttpClient) {
  }

  getUsers(offset: number = 0) {
    return this.http.get(`${this.githubApiRoot}/users?since=${offset}`);
  }
}
