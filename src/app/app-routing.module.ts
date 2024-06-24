import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { CandidatesComponent } from './components/candidates/candidates.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { AboutComponent } from './components/about/about.component';
import { CandidateProfileComponent } from './components/candidate-profile/candidate-profile.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { RegisterationComponent } from './components/registeration/registeration.component';
import { AddJobComponent } from './components/add-job/add-job.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { AddCandidateComponent } from './components/add-candidate/add-candidate.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'job/:id', component: JobDetailsComponent},
  { path: 'candidates', component: CandidatesComponent },
  { path: 'candidate/:id', component: CandidateProfileComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'company/:id', component: CompanyProfileComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'register', component: RegisterationComponent },
  { path: 'add-job', component: AddJobComponent },
  { path: 'add-company', component: AddCompanyComponent },
  { path: 'add-candidate', component: AddCandidateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
