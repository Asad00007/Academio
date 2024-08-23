import { Component, OnDestroy, OnInit } from '@angular/core';
import { CourseService } from '../courses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  hovered: false;

  popularCourses: any[] = [];

  constructor(private courseService: CourseService) {
    window.scrollTo(0, 0);
  }

  ngOnInit() {
    this.popularCourses = this.courseService.getPopularCourses();
  }
}
