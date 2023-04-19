import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../service/user.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user = {} as User;
  imagePath = "/assets/images/pietro-photo.jpg"

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    this.userService.getUser().subscribe(( user: User ) => {
      this.user = user
    })
  }
}
