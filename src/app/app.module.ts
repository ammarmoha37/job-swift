import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { CandidatesComponent } from './components/candidates/candidates.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { AboutComponent } from './components/about/about.component';
import { CandidateProfileComponent } from './components/candidate-profile/candidate-profile.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { JobListingComponent } from './components/job-listing/job-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    JobsComponent,
    CandidatesComponent,
    CompaniesComponent,
    JobDetailsComponent,
    AboutComponent,
    CandidateProfileComponent,
    CompanyProfileComponent,
    JobListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
