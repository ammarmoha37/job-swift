import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Company } from '../../models/company.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent {

  companies$: Observable<Company[]>;

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companies$ = this.companyService.getAllCompanies().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Company;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
}
