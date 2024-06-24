export interface Candidate {
  job_title: string;
  name: string;
  image: string;
  overview: string;
  location: string;
  min_salary: string;
  max_salary: string;
  salary_type: string;
  email: string;
  age: number;
  gender: string;
  verified: boolean;
  online: boolean;
  education: Education[];
  skills: Skill[];
  work_experience: WorkExperience[];
}

export interface Education {
  id: string;
  degree: string;
  institution_name: string;
  disc: string;
  date: Date;
}

export interface Skill {
  skill_title: string;
}

export interface WorkExperience {
  id: string;
  title: string;
  institution_name: string;
  disc: string;
  start_date: Date;
  end_date: Date;
}
