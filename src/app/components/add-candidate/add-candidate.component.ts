import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateService } from '../../services/candidate.service';
import { Candidate } from '../../models/candidate.model';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css'],
})
export class AddCandidateComponent implements OnInit {
  candidateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private candidateService: CandidateService,
    private router: Router
  ) {
    this.candidateForm = this.fb.group({
      title: ['', Validators.required],
      name: ['', Validators.required],
      image: ['', Validators.required],
      overview: ['', Validators.required],
      location: ['', Validators.required],
      qualification: ['', Validators.required],
      min_salary: ['', Validators.required],
      max_salary: ['', Validators.required],
      salary_type: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      verified: [null, Validators.required],
      online: [null, Validators.required],
      education: this.fb.array([this.createEducationGroup()]),
      skills: this.fb.array([this.fb.control('', Validators.required)]),
      experiences: this.fb.array([this.createExperienceGroup()]),
    });
  }

  createEducationGroup(): FormGroup {
    return this.fb.group({
      id: [''],
      degree: ['', Validators.required],
      institution_name: ['', Validators.required],
      disc: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  createExperienceGroup(): FormGroup {
    return this.fb.group({
      id: [''],
      title: ['', Validators.required],
      institution_name: ['', Validators.required],
      disc: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
    });
  }

  get education(): FormArray {
    return this.candidateForm.get('education') as FormArray;
  }

  get skills(): FormArray {
    return this.candidateForm.get('skills') as FormArray;
  }

  get experiences(): FormArray {
    return this.candidateForm.get('experiences') as FormArray;
  }

  getEducationControls() {
    return this.education.controls;
  }

  getSkillsControls() {
    return this.skills.controls;
  }

  getExperiencesControls() {
    return this.experiences.controls;
  }

  addEdu() {
    this.education.push(this.createEducationGroup());
  }

  removeEdu(index: number) {
    this.education.removeAt(index);
  }

  addSkill() {
    this.skills.push(this.fb.control('', Validators.required));
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  addExperience() {
    this.experiences.push(this.createExperienceGroup());
  }

  removeExperience(index: number) {
    this.experiences.removeAt(index);
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.candidateForm.valid) {
      const candidate: Candidate = this.candidateForm.value;
      this.candidateService.addCandidate(candidate).then(() => {
        console.log('Candidate added successfully');
        this.candidateForm.reset();
        this.router.navigate(['/candidates']);
      }).catch(error => {
        console.error('Error adding candidate: ', error);
      });
    }
  }
}
