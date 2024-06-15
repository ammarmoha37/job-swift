import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  openIndex: number = 0;

  setOpenIndex(index: number, event: Event) {
    event.preventDefault();
    this.openIndex = this.openIndex === index ? -1 : index;
  }
}
