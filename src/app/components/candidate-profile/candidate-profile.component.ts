import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CandidateService } from '../../services/candidate.service';
import { ActivatedRoute } from '@angular/router';
import { Candidate } from '../../models/candidate.model';

@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrl: './candidate-profile.component.css'
})
export class CandidateProfileComponent implements OnInit {
  contactForm: FormGroup;
  candidate$: Observable<Candidate>;

  constructor(private fb: FormBuilder,
              private candidateService: CandidateService,
              private route: ActivatedRoute) {
    this.contactForm = this.fb.group({
      name: [''],
      email: [''],
      message: ['']
    });

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const candidateId = params['id'];
      this.candidate$ = this.candidateService.getCandidateById(candidateId);
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }
}
