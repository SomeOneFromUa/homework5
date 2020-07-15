import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent implements OnInit {
  postId: number;
  arr: number[];
  constructor(private postService: PostService, private router: Router) {
    this.arr = Array.from({ length: 100}, (v, k) => k + 1);
  }
  ngOnInit(): void {
  }

  getPost(): void {
    this.postService.getPost(this.postId).subscribe(value => this.router.navigate(['posts', this.postId], {state: {post: value}}));
  }
}
