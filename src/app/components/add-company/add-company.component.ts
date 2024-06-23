import { Component } from '@angular/core';
import { Company } from '../../models/company.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../../services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrl: './add-company.component.css'
})
export class AddCompanyComponent {
  companyForm: FormGroup;

  constructor(private fb: FormBuilder,
              private companyService: CompanyService,
              private router: Router) {

    this.companyForm = this.fb.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      logoUrl: ['', Validators.required],
      overview: ['', Validators.required],
      website_link: ['', Validators.required],
      location: ['', Validators.required],
      size: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      founded_date: ['', Validators.required],
      category: ['', Validators.required],
      num_of_jobs: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.companyForm.valid) {
      const company: Company = this.companyForm.value;
      this.companyService.addCompany(company).then(() => {
        console.log('Company added successfully');
        this.companyForm.reset();
        this.router.navigate(['/companies']);
      }).catch(error => {
        console.error('Error adding company: ', error);
      });
    }
  }
}
