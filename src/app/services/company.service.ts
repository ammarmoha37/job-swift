import { Injectable } from '@angular/core';
import { Company } from '../models/company.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, catchError, map, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  company: Company;

  constructor(private firestore: AngularFirestore) { }

  addCompany(company: Company) {
    return this.firestore.collection('companies').add(company);
  }

  getAllCompanies() {
    return this.firestore.collection('companies').snapshotChanges();
  }

  getCompanyById(companyId: string): Observable<Company> {
    return this.firestore.collection('companies').doc(companyId).snapshotChanges().pipe(
      map(action => {
        const data = action.payload.data() as Company;
        const id = action.payload.id;
        return { id, ...data }  as Company;
      }),
      catchError(error => {
        console.error('Error getting candidate:', error);
        return of(undefined);
      })
    );
  }
}
