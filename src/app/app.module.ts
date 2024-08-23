import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeCardsComponent } from './home-cards/home-cards.component';
import { LoginComponent } from './login-signup/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { SignupComponent } from './login-signup/signup/signup.component';
import { ShortenPipe } from './shorten.pipe';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AlertComponent } from './shared/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    HomeCardsComponent,
    LoginComponent,
    LoginSignupComponent,
    SignupComponent,
    ShortenPipe,
    AuthComponent,
    LoadingSpinnerComponent,
    CourseDetailsComponent,
    CheckoutComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
