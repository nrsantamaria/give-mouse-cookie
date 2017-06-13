import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [UserService]
})

export class WelcomeComponent implements OnInit {
  users: FirebaseListObservable<any[]>;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  goToChapterOne(clickedUser) {
    this.router.navigate(['chapter-one', clickedUser.$key]);
  }

}
