import { Component, OnDestroy, OnInit } from '@angular/core';
import { CourseService } from '../courses.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  selectedItems: any[] = [];
  filteredArray: any[] = [];
  showSideBar = false;
  showMenuBar = false;
  subscription: Subscription;

  constructor(
    private courseService: CourseService,
    private authService: AuthService
  ) {
    this.subscription = this.courseService.selectedCoursesChanged.subscribe(
      () => {
        this.selectedItems = this.courseService.selectedCourses;
      }
    );
  }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user; //change the output if user is not there
    });
    this.selectedItems = this.courseService.selectedCourses;
  }

  removeSelected(name: string) {
    this.courseService.selectedCourses =
      this.courseService.selectedCourses.filter((item) => item !== name);
    this.selectedItems = this.courseService.selectedCourses;
    this.courseService.selectedCoursesChanged.emit();
  }

  onLogout() {
    this.authService.logout();
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
