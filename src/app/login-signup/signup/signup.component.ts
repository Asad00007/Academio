import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginSignupService } from '../login-signup.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  providers: [LoginSignupService],
})
export class SignupComponent implements OnInit {
  showPass = false;

  signupForm: FormGroup;
  recipeForm: FormGroup;

  imgSrc: string | ArrayBuffer | null;
  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        // this.forbiddenPassword.bind(this),
      ]),
      food: new FormControl('chicken', Validators.required),
    });

    this.recipeForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      imagePath: new FormControl(null, Validators.required),
      description: new FormControl(null),
    });
  }

  onSubmit() {
    console.log(this.recipeForm);
  }
  passType() {
    return this.showPass === false ? 'password' : 'text';
  }

  onSignup() {
    console.log(this.signupForm.value);
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.imgSrc = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
  // forbiddenPassword(control: FormControl): { [s: string]: boolean } {
  //   if (control.value === '12345678') {
  //     return { passwordIsForbidden: true };
  //   }
  //   return null;
  // }
}
