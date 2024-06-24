import { Injectable } from '@angular/core';
import { Candidate } from '../models/candidate.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  candidate: Candidate
  constructor(private firestore: AngularFirestore) { }

  addCandidate(candidate: Candidate) {
    candidate.id = this.firestore.createId();
    console.log(candidate);
    return this.firestore.collection('candidates').add(candidate);
  }

  getAllCandidates() {
    return this.firestore.collection('candidates').snapshotChanges();
  }
}
