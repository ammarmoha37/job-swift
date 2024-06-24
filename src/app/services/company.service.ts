import { Injectable } from '@angular/core';
import { Company } from '../models/company.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private firestore: AngularFirestore) { }

  addCompany(company: Company) {
    company.id = this.firestore.createId();
    console.log(company);
    return this.firestore.collection('companies').add(company);
  }

  getAllCompanies() {
    return this.firestore.collection('companies').snapshotChanges();
  }
}
