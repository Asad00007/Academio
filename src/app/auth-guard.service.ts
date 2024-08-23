import { Observable, Subscription } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { inject, Injectable, OnDestroy } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements OnDestroy {
  isAuthenticated: boolean = false;
  private userSub: Subscription;

  constructor(private authService: AuthService, private router: Router) {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user; //change the output if user is not there
      if (!this.isAuthenticated) {
        this.router.navigate(['/login']); // Navigate to login if not authenticated
      }
    });
  }

  canActivate() {
    return this.isAuthenticated;
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}

export const authGuardGuard: CanActivateFn = (route, state) => {
  return inject(AuthGuard).canActivate();
};
