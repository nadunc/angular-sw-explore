import {Component, OnInit} from '@angular/core';
import {PostService} from '../post.service';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.sass']
})
export class PostContainerComponent implements OnInit {

  posts: Array<any> = [];

  constructor(private postSvc: PostService) {
  }

  ngOnInit() {
    this.postSvc.getPosts().subscribe((posts: any) => {
      this.posts = posts;
    });
  }

}
