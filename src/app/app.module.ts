import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { environment } from './environments/enivronment';

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
import { RegisterationComponent } from './components/registeration/registeration.component';
import { LoginComponent } from './components/login/login.component';
import { AddJobComponent } from './components/add-job/add-job.component';

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
    JobListingComponent,
    RegisterationComponent,
    LoginComponent,
    AddJobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"jobswift-10401","appId":"1:77962449172:web:46d765f94319f5a2eab201","storageBucket":"jobswift-10401.appspot.com","apiKey":"AIzaSyD-lj-X5EYTbcmYzpw_BZbEZ0FYr25ZZwA","authDomain":"jobswift-10401.firebaseapp.com","messagingSenderId":"77962449172"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
