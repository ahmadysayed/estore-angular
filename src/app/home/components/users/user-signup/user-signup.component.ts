import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  AbstractControl,
  Validators,
} from '@angular/forms';

import { matchPasswords } from './validators/match-password.validator';
import { UserService } from '../services/user-service.service';
import { user } from 'src/app/home/types/user.type';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss'],
  providers: [UserService],
})
export class UserSignupComponent implements OnInit {
  userSignupForm: FormGroup;
  alertMessage: string = '';
  alertType: number = 0;
  constructor(private fb: FormBuilder, private userService: UserService) {}
  ngOnInit(): void {
    this.userSignupForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: [''],
        address: [''],
        city: [''],
        state: [''],
        pin: [''],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: matchPasswords,
      }
    );
  }

  get firstName(): AbstractControl<any, any> | null {
    return this.userSignupForm.get('firstName');
  }

  get email(): AbstractControl<any, any> | null {
    return this.userSignupForm.get('email');
  }

  get password(): AbstractControl<any, any> | null {
    return this.userSignupForm.get('password');
  }

  get confirmPassword(): AbstractControl<any, any> | null {
    return this.userSignupForm.get('confirmPassword');
  }

  onSubmit(): void {
    const user: user = {
      firstName: this.firstName?.value,
      lastName: this.userSignupForm.get('lastName')?.value,
      address: this.userSignupForm.get('address')?.value,
      city: this.userSignupForm.get('city')?.value,
      state: this.userSignupForm.get('state')?.value,
      pin: this.userSignupForm.get('pin')?.value,
      email: this.email?.value,
      password: this.password?.value,
    };

    this.userService.createUser(user).subscribe({
      next: (result) => {
        if (result === 'success') {
          this.alertMessage = 'User created successfully.';
          this.alertType = 0;
        } else if (result === 'Email already exists') {
          this.alertMessage = 'Email already exists';
          this.alertType = 1;
        }
      },
      error: (error) => {
        this.alertMessage = 'An error occurred while creating the account.';
        this.alertType = 2;
      },
    });
  }
}
