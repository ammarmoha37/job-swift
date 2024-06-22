import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isVisible = false;


  showLogin() {
    this.isVisible = true;
  }

  onScreenClick() {
    this.isVisible = false;
  }

  onLoginClick(event: Event) {
    event.stopPropagation();
  }

}
