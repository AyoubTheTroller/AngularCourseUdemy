import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild('f', { static: false }) signupForm: NgForm;
  defaultSub: string = "basic";
  submitted: boolean = false;
  user = {
    email: '',
    password: '',
    subscription: ''
  }

  suggestEmail() {
    const suggestedEmail = 'example@example.com';
    this.signupForm.form.patchValue({
      userData: {
        email: suggestedEmail
      }
    });
  }

  constructor(){}
  
  title = 'assignment-6';

  onSubmit(){
    this.submitted = true;
    this.user.email = this.signupForm.value.userData.email;
    this.user.password = this.signupForm.value.userData.password;
    this.user.subscription = this.signupForm.value.subscription;
    console.log(this.signupForm);
    this.signupForm.reset();
  }
}
