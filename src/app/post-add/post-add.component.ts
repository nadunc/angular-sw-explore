import {Component, OnInit} from '@angular/core';
import {PostService} from '../post.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.sass']
})
export class PostAddComponent implements OnInit {

  postBody = '';

  constructor(private postSvc: PostService) {
  }

  ngOnInit() {
  }

  addPost() {
    const post = {
      body: this.postBody
    };
    this.postBody = '';
    this.postSvc.addPost(post).subscribe((response) => {
      console.log(response);
    });
  }
}
