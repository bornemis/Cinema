import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

type UserCredentials = {
  username: string,
  password: string
};

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {

  private userCredentials: UserCredentials;

  constructor(private userService: UserService, private router: Router) {
    this.userCredentials = { username: '', password: '' };
  }

  ngOnInit() {
  }

  handleSignIn(isFormValid) {
    if (isFormValid) {
      this.userService.setCurrentUser({ firstName: this.userCredentials.username });
      this.router.navigateByUrl('/home');
    }
  }

}
