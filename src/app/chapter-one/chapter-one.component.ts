import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../user.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-chapter-one',
  templateUrl: './chapter-one.component.html',
  styleUrls: ['./chapter-one.component.css'],
  providers: [UserService]
})
export class ChapterOneComponent implements OnInit {
  userId: string;
  userToDisplay;
  // userPoints = this.userToDisplay.points;

  constructor(private route: ActivatedRoute, private location: Location, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.userId = urlParameters['id'];
    });
    this.userToDisplay = this.userService.getUserById(this.userId);
  }
  //
  // updateUserPoints(userToIncrease){
  //   // userPoints += 5;
  //   this.userService.increasePoint(userToIncrease);
  // }
  goToChapterTwoA() {
    this.router.navigate(['chapter-two-a', this.userId]);
  }

  goToChapterTwoB() {
    this.router.navigate(['chapter-two-b', this.userId]);
  }
}
