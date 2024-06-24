import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Candidate } from '../../models/candidate.model';
import { CompanyService } from '../../services/company.service';
import { CandidateService } from '../../services/candidate.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrl: './candidates.component.css'
})
export class CandidatesComponent implements OnInit {
  candidates$: Observable<Candidate[]>;

  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.candidates$ = this.candidateService.getAllCandidates().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Candidate;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
}
