import { Component, OnInit } from '@angular/core';
import { Job } from '../../models/job.model';
import { JobService } from '../../services/job.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent implements OnInit {

  job: Job;

  constructor(private jobService: JobService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const jobId = params['id'];
      this.jobService.getJobById(jobId).subscribe(job => {
        this.job = job;
      });
    });
  }
}
