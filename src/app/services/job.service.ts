import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private firestore: AngularFirestore) { }

  addJob(job: Job) {
    job.id = this.firestore.createId();
    console.log(job);
    return this.firestore.collection('jobs').add(job);
  }

  getAllJobs() {
    return this.firestore.collection('jobs').snapshotChanges();
  }

}
