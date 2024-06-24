import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Job } from '../models/job.model';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private firestore: AngularFirestore) { }

  addJob(job: Job) {
    return this.firestore.collection('jobs').add(job);
  }

  getAllJobs() {
    return this.firestore.collection('jobs').snapshotChanges();
  }

  getJobById(jobId: string): Observable<Job> {
    return this.firestore.collection('jobs').doc(jobId).snapshotChanges().pipe(
      map(action => {
        const data = action.payload.data() as Job;
        const id = action.payload.id;
        return { id, ...data }  as Job;
      }),
      catchError(error => {
        console.error('Error getting candidate:', error);
        return of(undefined);
      })
    );
  }
}
