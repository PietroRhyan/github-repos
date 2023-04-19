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
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // user: User = {}
  imagePath = "/assets/pietro-photo.jpg"
}
