import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { LoginSignupService } from '../login-signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [LoginSignupService],
})
export class LoginComponent implements OnInit {
  showPass = false;
  loginForm: FormGroup;
  minlength = 8;
  pageNumber: number = 2;

  constructor(
    private loginSignupService: LoginSignupService,
    private router: Router
  ) {}
  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(
        null,
        [Validators.email, Validators.required],
        this.forbiddenEmails.bind(this)
      ),
      password: new FormControl(null, [
        Validators.required,
        this.minimunLength.bind(this),
      ]),
    });
  }

  passType() {
    return this.showPass === false ? 'password' : 'text';
  }
  onSubmit() {
    if (!this.loginForm.valid) {
      alert('Please fill out all the fields');
    } else {
      console.log(this.loginForm);
      this.router.navigate(['/']);
      // this.loginForm.reset();
    }
  }

  minimunLength(control: FormControl): { [s: string]: boolean } {
    if (control.value && control.value.length < this.minlength) {
      return { incorrectPassword: true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
