import {Component, OnInit} from '@angular/core';
import {GithubUser} from './github.user.model';
import {GithubService} from '../github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.sass']
})
export class GithubComponent implements OnInit {

  githubUsers: Array<GithubUser> = [];

  constructor(private githubService: GithubService) {
  }

  ngOnInit() {
    this.refeshList(0);
  }

  refeshList(offset: number = 0) {
    this.githubService.getUsers(offset).subscribe((response: Array<GithubUser>) => {
      this.githubUsers = response;
    });
  }

}
