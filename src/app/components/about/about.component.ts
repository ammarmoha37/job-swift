import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  openIndex: number = 0;

  setOpenIndex(index: number, event: Event) {
    event.preventDefault();
    this.openIndex = this.openIndex === index ? -1 : index;
  }

  activePanel: number | null = null;

  togglePanel(panelIndex: number): void {
    this.activePanel = this.activePanel === panelIndex ? null : panelIndex;
  }
}
