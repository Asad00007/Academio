import { Component, Input, OnInit } from '@angular/core';
import { CourseService } from '../courses.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent implements OnInit {
  @Input() courses;
  searchTerm: string = '';
  filteredCourses: any[];
  noCoursesMessage: string = '';
  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    window.scrollTo(0, 0);
  }
  allCourses: any[] = [];
  ngOnInit() {
    this.allCourses = this.courseService.courses;
    this.filteredCourses = this.allCourses;
    this.searchCourses();
  }
  showAll() {
    this.filteredCourses = this.allCourses;
    this.noCoursesMessage = '';
    this.searchTerm = '';
  }
  searchCourses() {
    console.log(this.searchTerm);
    if (this.searchTerm !== '') {
      this.filteredCourses = this.allCourses.filter((item) =>
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );

      if (this.filteredCourses.length === 0) {
        this.noCoursesMessage = 'No courses Found';
        console.log(this.noCoursesMessage);
      } else {
        this.noCoursesMessage = '';
      }
    } else {
      this.filteredCourses = this.allCourses;
      this.noCoursesMessage = '';
    }
  }
  clearTerm() {
    this.searchTerm = '';
    this.searchCourses();
  }
}
