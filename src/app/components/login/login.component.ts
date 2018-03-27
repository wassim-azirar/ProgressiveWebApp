import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { GoogleUser } from '../../logic/googleUser';
import { FacebookUser } from '../../logic/facebookUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public googleUser: GoogleUser = { email: '', name: '', picture: '' };
  public facebookUser: FacebookUser = { email: '', name: '', picture: '' };

  constructor(public authService: AuthService) {}

  loginWithGoogle() {
    this.authService.signInWithGoogle().then(data => {
      this.googleUser = data.additionalUserInfo.profile;
    });
  }

  loginWithFacebook() {
    this.authService.signInWithFacebook().then(data => {
      this.facebookUser = data.additionalUserInfo.profile;
    });
  }
}
