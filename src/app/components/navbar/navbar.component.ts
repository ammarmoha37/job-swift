import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  isHome: boolean;
  showMenu: boolean = false;
  scrolled: boolean = false;


  constructor(private router: Router, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateNavIfHome(event.url);
      }
    });
    document.addEventListener('click', this.onClick.bind(this));
  }

  updateNavIfHome(url: string): void {
    this.isHome = url === '/home' || url === '/';
  }

  onClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.showMenu = false;
    }
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollPosition = window.scrollY|| document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.scrolled = scrollPosition >= window.innerHeight;
  }
}
