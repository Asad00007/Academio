import { Component, OnInit } from '@angular/core';
import { CourseService } from '../courses.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent implements OnInit {
  constructor(private courseService: CourseService) {
    window.scrollTo(0, 0);
  }
  selectedItems: any[] = [];
  ngOnInit(): void {
    this.selectedItems = this.courseService.selectedCourses;
  }
  removeSelected(name: string) {
    this.courseService.selectedCourses =
      this.courseService.selectedCourses.filter((item) => item !== name);
    this.selectedItems = this.courseService.selectedCourses;
    this.courseService.selectedCoursesChanged.emit();
  }

  placeOrder() {
    alert(
      'Thank you for placing the order and getting to the end of this website. I hope you enjoyed your time here.'
    );
  }
}
