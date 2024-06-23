export interface Job {
  id: string;
  title: string;
  company_name: string;
  published_date: Date;
  salary: Salary;
  expertise: string;
  location: string;
  type: string;
  experience: string;
  overview: string;
  disc: string;
  category: string;
  responsibilities: Responsibility[];
  required_skills: Skill[];
  benefits: Benefit[];
}

export interface Salary {
  min_salary: number;
  max_salary: number;
  salary_type: string;
}

export interface Responsibility {
  responsibility_title: string;
}

export interface Skill {
  skill_title: string;
}

export interface Benefit {
  benefit_title: string;
}
