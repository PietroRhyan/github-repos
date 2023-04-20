import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { UserService } from './service/user.service';
import { StarredRepos } from './models/github-starred-repos';

import { faInbox, faStar, faUserPlus, faUserCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  user = {} as User;
  starredRepos = [] as StarredRepos[];

  faInbox = faInbox
  faStar = faStar
  faUserPlus = faUserPlus
  faUserCheck = faUserCheck

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUser()
    this.getStars()
  }

  getUser() {
    this.userService.getUser().subscribe(( user: User ) => {
      this.user = user
    })
  }

  getStars() {
    this.userService.getStars().subscribe(( starredRepos: StarredRepos[] ) => {
      starredRepos.map((repo) => {
        this.starredRepos.push(repo)
      })
    })
  }
}
