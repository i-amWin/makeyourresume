import { ResumeDataType } from "@/redux/features/Resume Data/resumeDataSlice";

export const dummyData: ResumeDataType = {
  profile: {
    image: "",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@gmail.com",
    phone: "+1 123-456-7890",
    professionalTitle: "Software Engineer",
    about:
      "I am a passionate and dedicated web developer with experience in front-end and back-end technologies.",
    address: "123 Main Street, Cityville, State, 12345",
  },
  socials: [
    {
      id: "social1",
      name: "linkedin",
      url: "https://www.linkedin.com/in/johndoe",
    },
    {
      id: "social2",
      name: "github",
      url: "https://github.com/johndoe",
    },
    {
      id: "social3",
      name: "twitter",
      url: "https://twitter.com/johndoe",
    },
  ],
  skills: [
    {
      id: "skill1",
      name: "html5",
    },
    {
      id: "skill2",
      name: "css3",
    },
    {
      id: "skill3",
      name: "javascript",
    },
    {
      id: "skill4",
      name: "typescript",
    },
    {
      id: "skill5",
      name: "react",
    },
    {
      id: "skill6",
      name: "node.js",
    },
    {
      id: "skill7",
      name: "next js",
    },
    {
      id: "skill8",
      name: "tailwind css",
    },
    {
      id: "skill9",
      name: "sql",
    },
    {
      id: "skill10",
      name: "git & github",
    },
    {
      id: "skill11",
      name: "mongodb",
    },
  ],
  interests: [
    {
      id: "interest1",
      name: "Reading",
    },
    {
      id: "interest2",
      name: "Hiking",
    },
    {
      id: "interest3",
      name: "Coding Challenges",
    },
  ],
  educations: [
    {
      id: "education-1",
      courseName: "Master of Web Development",
      collegeName: "Digital University",
      from: "2022",
      to: "2024(Expected)",
    },
    {
      id: "education-2",
      courseName: "Bachelor of Science in Computer Science",
      collegeName: "University of Technology",
      from: "2018",
      to: "2022",
    },
    {
      id: "education-3",
      courseName: "Diploma in Software Engineering",
      collegeName: "Tech Institute",
      from: "2016",
      to: "2018",
    },
  ],
  projects: [
    {
      id: "project-1",
      projectName: "E-commerce Platform",
      projectDescription:
        "Developed a responsive e-commerce platform with user authentication and payment gateway integration.",
      liveLink: "https://example.com",
      sourceLink: "https://github.com/johndoe/e-commerce-project",
      tags: "React, Node.js, MongoDB, Bootstrap",
    },
    {
      id: "project-2",
      projectName: "Task Manager App",
      projectDescription:
        "Built a task manager application to organize and track daily tasks with user-friendly interfaces.",
      liveLink: "https://example.com/task-manager",
      sourceLink: "https://github.com/johndoe/task-manager-app",
      tags: "JavaScript, Express, MongoDB, React",
    },
  ],
  workExperiences: [
    {
      id: "work-experience-1",
      companyName: "Tech Solutions Inc.",
      jobTitle: "Software Engineer",
      location: "Cityville, State",
      joiningDate: "2022-06-01",
      leavingDate: "2023-09-01",
      workResponsibilities: [
        {
          id: "work-responsibility-1-1",
          responsibility: "Developing and maintaining web applications",
        },
        {
          id: "work-responsibility-1-2",
          responsibility: "Collaborating with cross-functional teams",
        },
        {
          id: "work-responsibility-1-3",
          responsibility: "Troubleshooting and debugging issues",
        },
      ],
    },
    {
      id: "work-experience-2",
      companyName: "Code Innovators",
      jobTitle: "Junior Developer",
      location: "Cityville, State",
      joiningDate: "2021-01-15",
      leavingDate: "2022-05-30",
      workResponsibilities: [
        {
          id: "work-responsibility-2-1",
          responsibility: "Assisting in the development of new features",
        },
        {
          id: "work-responsibility-2-2",
          responsibility: "Conducting code reviews",
        },
        {
          id: "work-responsibility-2-3",
          responsibility: "Participating in agile development cycles",
        },
      ],
    },
  ],
  personalProfiles: [
    {
      id: "personal-profile-1",
      fieldName: "Language Known",
      fieldValue: "English, Spanish",
    },
    {
      id: "personal-profile-2",
      fieldName: "Certifications",
      fieldValue: "React Developers Certifications, Node.js Certification",
    },
  ],
};
