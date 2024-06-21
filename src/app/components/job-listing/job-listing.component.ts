import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrl: './job-listing.component.css'
})
export class JobListingComponent implements OnInit {

  currentRoute: string;
  title: string;
  buttonContent: string;
  isHome: boolean;
  jobListings;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateCurrentRoute();
    });

    this.updateCurrentRoute();
  }

  private updateCurrentRoute() {
    const url = this.router.url;
    this.currentRoute = url;

    if (url.includes('/home')) {
      this.title = 'New job listing';
      this.buttonContent = 'Explore All Jobs';
      this.isHome = true;
      this.jobListings = [
        {
          companyLogo: 'assets/imgs/slack-logo.png',
          jobTitle: 'Developer & expert in java C++',
          jobType: 'Part Time',
          postDate: '6 dec 2023',
          companyName: 'Slack',
          location: 'London, UK',
          categories: 'Developer, Coder'
        },
        {
          companyLogo: 'assets/imgs/google-logo.png',
          jobTitle: 'Animator & Expert in maya 3D ',
          jobType: 'Full Time',
          postDate: '6 dec 2023',
          companyName: 'Google',
          location: 'Istanbul, Turkey',
          categories: 'Design, Artist'
        },
        {
          companyLogo: 'assets/imgs/linkedIn-logo.png',
          jobTitle: 'Lead & Product Designer',
          jobType: 'Freelance',
          postDate: '6 dec 2023',
          companyName: 'LinkedIn',
          location: 'Alaska, USA',
          categories: 'Finance, Business'
        },
        {
          companyLogo: 'assets/imgs/slack-logo.png',
          jobTitle: 'Marketing Specialist in SEO & SMM',
          jobType: 'Part Time',
          postDate: '6 dec 2023',
          companyName: 'Slack',
          location: 'Barcelona, Spain',
          categories: 'Marketing, Business'
        },
      ];
    } else if (url.includes('/company')) {
      this.title = 'Related Jobs';
      this.buttonContent = 'Explore more';
      this.isHome = false;
      this.jobListings = [
        {
          companyLogo: 'assets/imgs/slack-logo.png',
          jobTitle: 'Developer & expert in java C++',
          jobType: 'Part Time',
          postDate: '6 dec 2023',
          companyName: 'Slack',
          location: 'London, UK',
          categories: 'Developer, Coder'
        },
        {
          companyLogo: 'assets/imgs/slack-logo.png',
          jobTitle: 'Developer & expert in java C++',
          jobType: 'Part Time',
          postDate: '6 dec 2023',
          companyName: 'Slack',
          location: 'London, UK',
          categories: 'Developer, Coder'
        },
        {
          companyLogo: 'assets/imgs/slack-logo.png',
          jobTitle: 'Developer & expert in java C++',
          jobType: 'Part Time',
          postDate: '6 dec 2023',
          companyName: 'Slack',
          location: 'London, UK',
          categories: 'Developer, Coder'
        },
        {
          companyLogo: 'assets/imgs/slack-logo.png',
          jobTitle: 'Developer & expert in java C++',
          jobType: 'Part Time',
          postDate: '6 dec 2023',
          companyName: 'Slack',
          location: 'London, UK',
          categories: 'Developer, Coder'
        },
      ];
    }
  }
}
