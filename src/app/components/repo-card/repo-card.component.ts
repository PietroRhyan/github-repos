import { Component, OnInit, Input } from '@angular/core';
import { faStar, faEye, faCodeFork } from '@fortawesome/free-solid-svg-icons';
import { GithubRepos } from 'src/app/models/github-repos';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css']
})
export class RepoCardComponent implements OnInit {
  @Input() userRepos: GithubRepos = { name: "", description: "", forks: 0, stargazers_count: 0, watchers: 0 }

  faStar = faStar
  faEye = faEye
  faCodeFork = faCodeFork

  constructor() {}

  ngOnInit(): void {

  }
}
