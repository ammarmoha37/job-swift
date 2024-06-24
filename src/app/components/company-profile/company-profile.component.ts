import { Component } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrl: './company-profile.component.css'
})
export class CompanyProfileComponent {

  company$: Observable<Company>;

  constructor(private companyService: CompanyService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const companyId = params['id'];
      this.company$ = this.companyService.getCompanyById(companyId);
    });
  }
}
