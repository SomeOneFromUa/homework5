import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
  userId: number;
  arr: number[];
  constructor(private userService: UserService, private router: Router) {
    this.arr = Array.from({ length: 10}, (v, k) => k + 1);
  }
  ngOnInit(): void {
  }
  getUser(): void {
  this.userService.getUsers(this.userId).subscribe(value => this.router.navigate(['users', this.userId], {state: {user: value}}));
  }
}
