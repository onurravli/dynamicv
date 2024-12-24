interface PersonalInformation {
  mail_address: string;
  personal_website: string;
  linkedin: string;
  github: string;
}

interface WorkExperience {
  company_name: string;
  position: string;
  working_type: "full_time" | "part_time" | "freelance" | "internship";
  start_date: string;
  end_date: string;
  location: string;
  description: string[];
}

interface Education {
  school_name: string;
  department: string;
  degree: string;
  start_date: string;
  end_date: string;
}

interface Abilities {
  title: string;
  items: string[];
}

interface Scholarship {
  title: string;
  company_name: string;
  start_date: string;
  end_date: string;
  description: string[];
}

export interface Resume {
  first_name: string;
  last_name: string;
  title: string;
  description: string;
  personal_information: PersonalInformation;
  work_experience: WorkExperience[];
  education: Education[];
  abilities: Abilities[];
  scholarships: Scholarship[];
}
