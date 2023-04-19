import { Component } from '@angular/core';

interface User {
  name: string,
  avatar: string,
  url: string,
  followers: number,
  following: number,
  public_repos: number,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: './assets/pietro-photo.jpg'
})

export class AppComponent {
  // user: User = {}
  imagePath = "/assets/pietro-photo.jpg"
}
