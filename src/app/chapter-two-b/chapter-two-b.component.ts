import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../user.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-chapter-two-b',
  templateUrl: './chapter-two-b.component.html',
  styleUrls: ['./chapter-two-b.component.css'],
  providers: [UserService]
})
export class ChapterTwoBComponent implements OnInit {
  userId: string;
  userToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private userService: UserService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.userId = urlParameters['id'];
    });
    this.userToDisplay = this.userService.getUserById(this.userId);
  }

}
