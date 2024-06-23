import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrl: './registeration.component.css'
})
export class RegisterationComponent implements OnInit {

  registerForm: FormGroup;
  selectedRole: string = 'candidate';

  constructor(private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      agree: [false, [Validators.requiredTrue]]
    });
  }

  register() {

    if (this.registerForm.valid) {
      const { name, email, password } = this.registerForm.value;
      this.authService.register(email, password, name)
        .then(() => {
          this.authService.showLogin();
          this.registerForm.markAllAsTouched();
        }).catch(error => {
            console.error('Registration error:', error);
        });
    } else {
      this.registerForm.markAllAsTouched();
    }
    this.registerForm.reset();

  }

  get name() { return this.registerForm.get('name'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get agree() { return this.registerForm.get('agree'); }

  showLogin() {
    this.authService.showLogin();
  }

  selectRole(role: string) {
    this.selectedRole = role;
  }

}
