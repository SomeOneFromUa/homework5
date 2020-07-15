import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IUser} from '../../interfaces/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
user: IUser;
  constructor(private activatedRoute: ActivatedRoute, private route: Router) {
    this.activatedRoute.params.subscribe(value => this.user = history.state.user);
  }

  ngOnInit(): void {
  }

}
