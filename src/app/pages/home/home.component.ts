import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public userService: UserService
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
  }
}
