import { ValidateService } from '../../services/validate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  noEmail = false;
  errMsg: string;

  constructor(private validateService: ValidateService) { }

  ngOnInit() {
  }

  onRegisterSubmit(form) {

    // Validate Email
    if (!this.validateService.validateEmail(form.value.email)) {
      this.noEmail = true;
      this.errMsg = 'Please use a valid email';
      return false;
    }

  }

}
