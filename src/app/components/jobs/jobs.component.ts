import { Component } from '@angular/core';
import { Job } from '../../models/job.model';
import { JobService } from '../../services/job.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {

  jobs$: Observable<Job[]>;

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.jobs$ = this.jobService.getAllJobs().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Job;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  calculateTimeDifference(publishedDate: Date): string {
    const now = new Date();
    const postedDate = new Date(publishedDate);
    const diffInMs = now.getTime() - postedDate.getTime();
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    const plural = (count: number, noun: string) => `${count} ${noun}${count !== 1 ? 's' : ''}`;

    if (diffInDays < 1) {
      return "today";
    } else if (diffInDays < 7) {
      return `${plural(Math.floor(diffInDays), 'day')} ago`;
    } else if (diffInDays < 30) {
      return `${plural(Math.floor(diffInDays / 7), 'week')} ago`;
    } else {
      return `${plural(Math.floor(diffInDays / 30), 'month')} ago`;
    }
  }

}
