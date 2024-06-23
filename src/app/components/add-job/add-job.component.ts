import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobService } from '../../services/job.service';
import { Job } from '../../models/job.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent {
  jobForm: FormGroup;
  responsibilities: FormArray;
  required_skills: FormArray;
  benefits: FormArray;

  constructor(private fb: FormBuilder,
              private jobService: JobService,
              private router: Router) {
                
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      company_name: ['', Validators.required],
      published_date: ['', Validators.required],
      min_salary: ['', Validators.required],
      max_salary: ['', Validators.required],
      salary_type: ['', Validators.required],
      expertise: ['', Validators.required],
      location: ['', Validators.required],
      type: ['', Validators.required],
      experience: ['', Validators.required],
      overview: ['', Validators.required],
      disc: ['', Validators.required],
      category: ['', Validators.required],

      responsibilities: this.fb.array([this.fb.control('')]),
      required_skills: this.fb.array([this.fb.control('')]),
      benefits: this.fb.array([this.fb.control('')]),
    });

    this.responsibilities = this.jobForm.get('responsibilities') as FormArray;
    this.required_skills = this.jobForm.get('required_skills') as FormArray;
    this.benefits = this.jobForm.get('benefits') as FormArray;

  }

  getResponsibilitiesControls() {
    return (this.jobForm.get('responsibilities') as FormArray).controls;
  }

  getRequiredSkillsControls() {
    return (this.jobForm.get('required_skills') as FormArray).controls;
  }

  getBenefitsControls() {
    return (this.jobForm.get('benefits') as FormArray).controls;
  }

  addResponsibility() {
    this.responsibilities.push(this.fb.control(''));
  }

  removeResponsibility(index: number) {
    this.responsibilities.removeAt(index);
  }

  addSkill() {
    this.required_skills.push(this.fb.control(''));
  }

  removeSkill(index: number) {
    this.required_skills.removeAt(index);
  }

  addBenefit() {
    this.benefits.push(this.fb.control(''));
  }

  removeBenefit(index: number) {
    this.benefits.removeAt(index);
  }

  onSubmit() {
    if (this.jobForm.valid) {
      const job: Job = this.jobForm.value;
      this.jobService.addJob(job).then(() => {
        console.log('Job added successfully');
        this.jobForm.reset();
        this.router.navigate(['/jobs']);
      }).catch(error => {
        console.error('Error adding job: ', error);
      });
    }
  }
}
