import { Resume } from "./template";

export const resume: Resume = {
  first_name: "John",
  last_name: "Doe",
  title: "Software Engineer",
  description:
    "Experienced software engineer with a strong background in full-stack development. Proficient in modern web technologies and passionate about creating efficient, scalable solutions. Seeking opportunities to contribute to innovative projects and continue growing professionally.",
  personal_information: {
    mail_address: "john.doe@example.com",
    personal_website: "johndoe.com",
    linkedin: "linkedin.com/in/johndoe",
    github: "github.com/johndoe",
  },
  work_experience: [
    {
      company_name: "Tech Solutions Inc.",
      position: "Senior Software Engineer",
      working_type: "full_time",
      start_date: "January 2023",
      end_date: "Present",
      location: "Remote",
      description: [
        "Led development of microservices architecture using Node.js and TypeScript",
        "Implemented CI/CD pipelines reducing deployment time by 40%",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    {
      company_name: "Digital Innovations LLC",
      position: "Software Developer",
      working_type: "full_time",
      start_date: "June 2021",
      end_date: "December 2022",
      location: "New York, NY",
      description: [
        "Developed and maintained full-stack web applications using React and Node.js",
        "Optimized database queries resulting in 30% performance improvement",
      ],
    },
  ],
  education: [
    {
      school_name: "State University",
      department: "Computer Science",
      degree: "Bachelor of Science",
      start_date: "September 2017",
      end_date: "May 2021",
    },
  ],
  abilities: [
    {
      title: "Programming Languages",
      items: ["JavaScript", "TypeScript", "Python", "Java"],
    },
    {
      title: "Frontend",
      items: ["React", "Vue.js", "Angular", "HTML/CSS"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express", "Django", "Spring"],
    },
    {
      title: "Databases",
      items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    },
    {
      title: "Tools & Technologies",
      items: [
        "Git",
        "Docker",
        "Kubernetes",
        "AWS",
        "CI/CD",
        "REST APIs",
        "GraphQL",
        "Jest",
      ],
    },
  ],
  scholarships: [
    {
      title: "Academic Excellence Scholar",
      company_name: "State University",
      start_date: "September 2019",
      end_date: "May 2020",
      description: [
        "Awarded for outstanding academic performance and research contributions in computer science.",
      ],
    },
  ],
};
