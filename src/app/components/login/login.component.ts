import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  isVisible: boolean = false;
  registerForm: FormGroup;
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.authService.isVisible$.subscribe(visible => {
      this.isVisible = visible;
    });

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onScreenClick() {
    this.isVisible = false;
  }

  onLoginClick(event: Event) {
    event.stopPropagation();
  }

  showLogin() {
    this.isVisible = true;
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password);
    }

    this.loginForm.reset();
    this.isVisible = false;
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  toRegister() {
    this.router.navigate(['/register']);
    this.isVisible = false;
  }

}
