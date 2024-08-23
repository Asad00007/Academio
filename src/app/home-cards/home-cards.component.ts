import { Component, Input, OnInit } from '@angular/core';
import { CourseService } from '../courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-cards',
  templateUrl: './home-cards.component.html',
  styleUrl: './home-cards.component.css',
})
export class HomeCardsComponent implements OnInit {
  hovered = false;
  @Input() courses: any;
  added = false;
  newCourses: any[] = [];

  constructor(private courseService: CourseService, private router: Router) {}
  ngOnInit() {}
  updateSelected(name: string) {
    if (this.courseService.selectedCourses.includes(name)) {
      this.newCourses = this.courseService.selectedCourses.filter(
        (item) => item !== name
      );
      this.courseService.selectedCourses = this.newCourses;
      this.courseService.selectedCoursesChanged.emit();
    } else {
      this.courseService.selectedCourses.push(name);
    }
  }

  checkSelected(name: string) {
    if (this.courseService.selectedCourses.includes(name)) {
      return (this.added = true);
    } else {
      return (this.added = false);
    }
  }

  viewCourse(name: string) {
    this.router.navigate(['/courses', name]);
  }
}
