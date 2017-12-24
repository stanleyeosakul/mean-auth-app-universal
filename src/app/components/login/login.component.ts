import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errSwitch = false;
  errMsg: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLoginSubmit(form) {
    const user = {
      username: form.value.username.toLowerCase(),
      password: form.value.password
    };

    this.authService.authenticateUser(user).subscribe((data: any) => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.router.navigateByUrl('/dashboard');
      } else {
        this.errSwitch = true;
        this.errMsg = 'Invalid username/password';
      }
    });

  }

}
