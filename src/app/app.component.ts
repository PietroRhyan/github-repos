import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { UserService } from './service/user.service';
import { StarredRepos } from './models/github-starred-repos';

import { faInbox, faStar, faUserPlus, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { GithubRepos } from './models/github-repos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  user = {} as User;
  userRepos = [] as GithubRepos[];
  starredRepos = [] as StarredRepos[];

  faInbox = faInbox
  faStar = faStar
  faUserPlus = faUserPlus
  faUserCheck = faUserCheck

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUser()
    this.getStars()
    this.getUserRepos()
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

  getUserRepos() {
    this.userService.getUserRepos().subscribe(( userRepos: GithubRepos[] ) => {
      userRepos.map((repo) => {
        this.userRepos.push(repo)
      })
    })
  }
}
