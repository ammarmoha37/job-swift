import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { CandidatesComponent } from './components/candidates/candidates.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'candidates', component: CandidatesComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'job/:id', component: JobDetailsComponent},
  { path: 'categories', component: HomeComponent },
  { path: 'about-us', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
