import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'assignment-7';
  signupForm: FormGroup;
  forbiddenProjectNames = ['Test4'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      projectData: new FormGroup({
        project: new FormControl(null,Validators.required,this.forbiddenNamesAsync),
        email: new FormControl(null,[Validators.required, Validators.email]),
        status: new FormControl(null)
      })
    });
    this.signupForm.setValue({
      projectData:{
        project: 'test',
        email: 'test@test.it',
        status: 'critical'
      }
    });
  }

  onSubmit() {
  }  

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  forbiddenNamesAsync = (control: FormControl): Promise<any> | Observable<any> => {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
          resolve({ nameIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
  }
  
}
