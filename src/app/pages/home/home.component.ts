import { Component, OnInit } from '@angular/core';
import { faInbox, faStar, faUserCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { GithubRepos } from 'src/app/models/github-repos';
import { StarredRepos } from 'src/app/models/github-starred-repos';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
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
