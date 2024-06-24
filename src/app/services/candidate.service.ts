import { Injectable } from '@angular/core';
import { Candidate } from '../models/candidate.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  candidate: Candidate
  constructor(private firestore: AngularFirestore) { }

  addCandidate(candidate: Candidate) {
    return this.firestore.collection('candidates').add(candidate);
  }

  getAllCandidates() {
    return this.firestore.collection('candidates').snapshotChanges();
  }

  getCandidateById(candidateId: string): Observable<Candidate> {
    return this.firestore.collection('candidates').doc(candidateId).snapshotChanges().pipe(
      map(action => {
        const data = action.payload.data() as Candidate;
        const id = action.payload.id;
        return { id, ...data }  as Candidate;
      }),
      catchError(error => {
        console.error('Error getting candidate:', error);
        return of(undefined);
      })
    );
  }
}
