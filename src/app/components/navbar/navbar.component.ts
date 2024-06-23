import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  isHome: boolean;
  showMenu: boolean = false;
  scrolled: boolean = false;
  token: string | null = null;
  userName: string | null = null;

  private subscriptions: Subscription = new Subscription();

  constructor(private router: Router, private elementRef: ElementRef,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateNavIfHome(event.url);
        this.showMenu = false;
      }
    });
    document.addEventListener('click', this.onClick.bind(this));

    this.subscriptions.add(
      this.authService.token$.subscribe(token => {
        this.token = token;
      })
    );

    this.subscriptions.add(
      this.authService.userName$.subscribe(userName => {
        this.userName = userName;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  logout() {
    this.authService.logout();
    this.showMenu = false;
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
