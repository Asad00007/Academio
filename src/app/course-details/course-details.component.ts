import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../courses.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent implements OnInit {
  courseName: string;
  newCourses: any[];
  selectedCourse;
  current = 1;
  checkStatus: boolean = false;
  subscription: Subscription;
  showMore = false;
  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {
    window.scrollTo(0, 0);
    this.subscription = this.courseService.selectedCoursesChanged.subscribe(
      () => {
        this.selectedCourse = this.courseService.courses.filter(
          (item) => item.name === this.courseName
        );

        if (this.courseService.selectedCourses.includes(this.courseName)) {
          this.checkStatus = true;
        } else {
          this.checkStatus = false;
        }
      }
    );
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.courseName = params.get('name');
    });

    this.selectedCourse = this.courseService.courses.filter(
      (item) => item.name === this.courseName
    );

    if (this.courseService.selectedCourses.includes(this.courseName)) {
      this.checkStatus = true;
    } else {
      this.checkStatus = false;
    }
  }

  addOrDelete() {
    if (this.courseService.selectedCourses.includes(this.courseName)) {
      this.courseService.selectedCourses =
        this.courseService.selectedCourses.filter(
          (item) => item !== this.courseName
        );
      // this.courseService.selectedCourses = this.newCourses;
      this.checkStatus = false;
      this.courseService.selectedCoursesChanged.emit();
    } else {
      this.courseService.selectedCourses.push(this.courseName);
      this.checkStatus = true;
    }
  }
}
