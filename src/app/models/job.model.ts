export interface Job {
  id: string;
  title: string;
  company_name: string;
  logoUrl: string;
  published_date: Date;
  min_salary: string;
  max_salary: string;
  salary_type: string;
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

export interface Responsibility {
  responsibility_title: string;
}

export interface Skill {
  skill_title: string;
}

export interface Benefit {
  benefit_title: string;
}
