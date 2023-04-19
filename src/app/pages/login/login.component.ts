import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  // public form: FormGroup;
  // constructor(
  //   private formBuilder: FormBuilder,
  //   public userService: UserService
  // ) {
  //   this.form = this.formBuilder.group({
  //     name: ['', [Validators.required]],
  //   });
  // }
}
