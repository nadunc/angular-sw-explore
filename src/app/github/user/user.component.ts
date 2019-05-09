import {Component, Input, OnInit} from '@angular/core';
import {GithubUser} from '../github.user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  @Input() githubUser: GithubUser;

  constructor() {
  }

  ngOnInit() {
  }

}
