import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LoginSignupService } from './login-signup.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css',
  providers: [LoginSignupService],
})
export class LoginSignupComponent implements OnInit, OnDestroy {
  currentPage: number;

  constructor(private loginSignupService: LoginSignupService) {}

  ngOnInit() {}
  ngOnDestroy() {}
}
