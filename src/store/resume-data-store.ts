import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { nanoid } from "nanoid";

// LABEL: TYPES
export type WorkResponsibility = {
  id: string;
  responsibility: string;
};
type WorkExperience = {
  id: string;
  companyName: string;
  jobTitle: string;
  location: string;
  joiningDate: string;
  leavingDate: string;
  workResponsibilities: WorkResponsibility[];
};

type Project = {
  id: string;
  projectName: string;
  projectDescription: string;
  liveLink: string;
  sourceLink: string;
  tags: string;
};

type Education = {
  id: string;
  courseName: string;
  collegeName: string;
  from: string;
  to: string;
};

type PersonalProfile = {
  id: string;
  fieldName: string;
  fieldValue: string;
};

type ResumeDataType = {
  image: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  professionalTitle: string;
  about: string;
  address: string;
  socials: { id: string; name: string; url: string }[];
  skills: { id: string; name: string }[];
  interests: { id: string; name: string }[];
  workExperiences: WorkExperience[];
  projects: Project[];
  educations: Education[];
  personalProfiles: PersonalProfile[];
};

type ResumeDataState = {
  data: ResumeDataType;
};

type ResumeDataActions = {
  setImage: (image: string) => void;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
  setProfessionalTitle: (professionalTitle: string) => void;
  setAbout: (about: string) => void;
  setAddress: (address: string) => void;
  addSocial: () => void;
  removeSocial: (id: string) => void;
  setSocial: (social: { id: string; name: string; url: string }) => void;
  setSocials: (socials: { id: string; name: string; url: string }[]) => void;
  addSkill: () => void;
  removeSkill: (id: string) => void;
  setSkill: (skill: { id: string; name: string }) => void;
  setSkills: (skills: { id: string; name: string }[]) => void;
  addInterest: () => void;
  removeInterest: (id: string) => void;
  setInterest: (interest: { id: string; name: string }) => void;
  setInterests: (interests: { id: string; name: string }[]) => void;
  addWorkExperience: () => void;
  removeWorkExperience: (id: string) => void;
  addWorkResponsibility: (id: string) => void;
  removeWorkResponsibility: (id: string, responsibilityId: string) => void;
  setWorkExperience: (workExperience: WorkExperience) => void;
  setWorkResponsibility: (
    id: string,
    workResponsibility: WorkResponsibility,
  ) => void;
  setWorkExperiences: (workExperiences: WorkExperience[]) => void;
  setWorkResponsibilities: (
    id: string,
    workResponsibilities: WorkResponsibility[],
  ) => void;
  addProject: () => void;
  removeProject: (id: string) => void;
  setProject: (project: Project) => void;
  setProjects: (projects: Project[]) => void;
  addEducation: () => void;
  removeEducation: (id: string) => void;
  setEducation: (education: Education) => void;
  setEducations: (educations: Education[]) => void;
  addPersonalProfile: () => void;
  removePersonalProfile: (id: string) => void;
  setPersonalProfile: (personalProfile: PersonalProfile) => void;
  setPersonalProfiles: (personalProfiles: PersonalProfile[]) => void;
  resetResumeData: () => void;
};

// LABEL: INITIAL STATE
const initialState: ResumeDataType = {
  image: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  professionalTitle: "",
  about: "",
  address: "",
  socials: [],
  skills: [],
  interests: [],
  workExperiences: [],
  projects: [],
  educations: [],
  personalProfiles: [],
};

// LABEL: STORE
const useResumeDataStore = create<ResumeDataState & ResumeDataActions>()(
  immer((set) => ({
    // LABEL: DATA
    data: initialState,

    // LABEL: ACTIONS
    setImage(image) {
      set((state) => {
        state.data.image = image;
      });
    },
    setFirstName: (firstName) => {
      set((state) => {
        state.data.firstName = firstName;
      });
    },
    setLastName: (lastName) => {
      set((state) => {
        state.data.lastName = lastName;
      });
    },
    setEmail: (email) => {
      set((state) => {
        state.data.email = email;
      });
    },
    setPhone: (phone) => {
      set((state) => {
        state.data.phone = phone;
      });
    },
    setProfessionalTitle: (professionalTitle) => {
      set((state) => {
        state.data.professionalTitle = professionalTitle;
      });
    },
    setAbout: (about) => {
      set((state) => {
        state.data.about = about;
      });
    },
    setAddress: (address) => {
      set((state) => {
        state.data.address = address;
      });
    },
    addSocial() {
      set((state) => {
        state.data.socials.push({
          id: nanoid(),
          name: "",
          url: "",
        });
      });
    },
    removeSocial(id) {
      set((state) => {
        state.data.socials = state.data.socials.filter((s) => s.id !== id);
      });
    },
    setSocial: (social) => {
      set((state) => {
        state.data.socials.map((s) => {
          if (s.id === social.id) {
            s.name = social.name;
            s.url = social.url;
          }
        });
      });
    },
    setSocials(socials) {
      set((state) => {
        state.data.socials = socials;
      });
    },
    addSkill() {
      set((state) => {
        state.data.skills.push({
          id: nanoid(),
          name: "",
        });
      });
    },
    removeSkill(id) {
      set((state) => {
        state.data.skills = state.data.skills.filter((s) => s.id !== id);
      });
    },
    setSkill: (skill) => {
      set((state) => {
        state.data.skills.map((s) => {
          if (s.id === skill.id) {
            s.name = skill.name;
          }
        });
      });
    },
    setSkills(skills) {
      set((state) => {
        state.data.skills = skills;
      });
    },
    addInterest() {
      set((state) => {
        state.data.interests.push({
          id: nanoid(),
          name: "",
        });
      });
    },
    removeInterest(id) {
      set((state) => {
        state.data.interests = state.data.interests.filter((i) => i.id !== id);
      });
    },
    setInterest: (interest) => {
      set((state) => {
        state.data.interests.map((i) => {
          if (i.id === interest.id) {
            i.name = interest.name;
          }
        });
      });
    },
    setInterests(interests) {
      set((state) => {
        state.data.interests = interests;
      });
    },
    addWorkExperience() {
      set((state) => {
        state.data.workExperiences.push({
          id: nanoid(),
          companyName: "",
          jobTitle: "",
          location: "",
          joiningDate: "",
          leavingDate: "",
          workResponsibilities: [{ id: nanoid(), responsibility: "" }],
        });
      });
    },
    addWorkResponsibility(id) {
      set((state) => {
        state.data.workExperiences.map((w) => {
          if (w.id === id) {
            w.workResponsibilities.push({ id: nanoid(), responsibility: "" });
          }
        });
      });
    },
    removeWorkExperience(id) {
      set((state) => {
        state.data.workExperiences = state.data.workExperiences.filter(
          (w) => w.id !== id,
        );
      });
    },
    removeWorkResponsibility(id, responsibilityId) {
      set((state) => {
        state.data.workExperiences.map((w) => {
          if (w.id === id) {
            w.workResponsibilities = w.workResponsibilities.filter(
              (r) => r.id !== responsibilityId,
            );
          }
        });
      });
    },
    setWorkExperience: (workExperience) => {
      set((state) => {
        state.data.workExperiences.map((w) => {
          if ((w.id = workExperience.id)) {
            w.companyName = workExperience.companyName;
            w.jobTitle = workExperience.jobTitle;
            w.location = workExperience.location;
            w.joiningDate = workExperience.joiningDate;
            w.leavingDate = workExperience.leavingDate;
            w.workResponsibilities = workExperience.workResponsibilities;
          }
        });
      });
    },
    setWorkResponsibility(id, workResponsibility) {
      set((state) => {
        state.data.workExperiences.map((w) => {
          if (w.id === id) {
            w.workResponsibilities.map((r) => {
              if (r.id === workResponsibility.id) {
                r.responsibility = workResponsibility.responsibility;
              }
            });
          }
        });
      });
    },
    setWorkExperiences(workExperiences) {
      set((state) => {
        state.data.workExperiences = workExperiences;
      });
    },
    setWorkResponsibilities(id, workResponsibilities) {
      set((state) => {
        state.data.workExperiences.map((w) => {
          if (w.id === id) {
            w.workResponsibilities = workResponsibilities;
          }
        });
      });
    },
    addProject() {
      set((state) => {
        state.data.projects.push({
          id: nanoid(),
          projectName: "",
          projectDescription: "",
          liveLink: "",
          sourceLink: "",
          tags: "",
        });
      });
    },
    removeProject(id) {
      set((state) => {
        state.data.projects = state.data.projects.filter((p) => p.id !== id);
      });
    },
    setProject: (project) => {
      set((state) => {
        state.data.projects.map((p) => {
          if (p.id === project.id) {
            p.projectName = project.projectName;
            p.projectDescription = project.projectDescription;
            p.liveLink = project.liveLink;
            p.sourceLink = project.sourceLink;
            p.tags = project.tags;
          }
        });
      });
    },
    setProjects(projects) {
      set((state) => {
        state.data.projects = projects;
      });
    },
    addEducation() {
      set((state) => {
        state.data.educations.push({
          id: nanoid(),
          courseName: "",
          collegeName: "",
          from: "",
          to: "",
        });
      });
    },
    removeEducation(id) {
      set((state) => {
        state.data.educations = state.data.educations.filter(
          (e) => e.id !== id,
        );
      });
    },
    setEducation: (education) => {
      set((state) => {
        state.data.educations.map((e) => {
          if (e.id === education.id) {
            e.courseName = education.courseName;
            e.collegeName = education.collegeName;
            e.from = education.from;
            e.to = education.to;
          }
        });
      });
    },
    setEducations(educations) {
      set((state) => {
        state.data.educations = educations;
      });
    },
    addPersonalProfile() {
      set((state) => {
        state.data.personalProfiles.push({
          id: nanoid(),
          fieldName: "",
          fieldValue: "",
        });
      });
    },
    removePersonalProfile(id) {
      set((state) => {
        state.data.personalProfiles = state.data.personalProfiles.filter(
          (p) => p.id !== id,
        );
      });
    },
    setPersonalProfile: (personalProfile) => {
      set((state) => {
        state.data.personalProfiles.map((p) => {
          if (p.id === personalProfile.id) {
            p.fieldName = personalProfile.fieldName;
            p.fieldValue = personalProfile.fieldValue;
          }
        });
      });
    },
    setPersonalProfiles(personalProfiles) {
      set((state) => {
        state.data.personalProfiles = personalProfiles;
      });
    },
    resetResumeData() {
      set((state) => {
        state.data = initialState;
      });
    },
  })),
);

// IMAGE
export const useImage = () => useResumeDataStore((state) => state.data.image);
export const useSetImage = () => useResumeDataStore((state) => state.setImage);

// FIRST NAME
export const useFirstName = () =>
  useResumeDataStore((state) => state.data.firstName);
export const useSetFirstName = () =>
  useResumeDataStore((state) => state.setFirstName);

// LAST NAME
export const useLastName = () =>
  useResumeDataStore((state) => state.data.lastName);
export const useSetLastName = () =>
  useResumeDataStore((state) => state.setLastName);

// EMAIL
export const useEmail = () => useResumeDataStore((state) => state.data.email);
export const useSetEmail = () => useResumeDataStore((state) => state.setEmail);

// PHONE
export const usePhone = () => useResumeDataStore((state) => state.data.phone);
export const useSetPhone = () => useResumeDataStore((state) => state.setPhone);

// PROFESSIONAL TITLE
export const useProfessionalTitle = () =>
  useResumeDataStore((state) => state.data.professionalTitle);
export const useSetProfessionalTitle = () =>
  useResumeDataStore((state) => state.setProfessionalTitle);

// ABOUT
export const useAbout = () => useResumeDataStore((state) => state.data.about);
export const useSetAbout = () => useResumeDataStore((state) => state.setAbout);

// ADDRESS
export const useAddress = () =>
  useResumeDataStore((state) => state.data.address);
export const useSetAddress = () =>
  useResumeDataStore((state) => state.setAddress);

// SOCIALS
export const useSocials = () =>
  useResumeDataStore((state) => state.data.socials);
export const useAddSocial = () =>
  useResumeDataStore((state) => state.addSocial);
export const useRemoveSocial = () =>
  useResumeDataStore((state) => state.removeSocial);
export const useSetSocial = () =>
  useResumeDataStore((state) => state.setSocial);
export const useSetSocials = () =>
  useResumeDataStore((state) => state.setSocials);

// SKILLS
export const useSkills = () => useResumeDataStore((state) => state.data.skills);
export const useAddSkill = () => useResumeDataStore((state) => state.addSkill);
export const useRemoveSkill = () =>
  useResumeDataStore((state) => state.removeSkill);
export const useSetSkill = () => useResumeDataStore((state) => state.setSkill);
export const useSetSkills = () =>
  useResumeDataStore((state) => state.setSkills);

// INTERESTS
export const useInterests = () =>
  useResumeDataStore((state) => state.data.interests);
export const useAddInterest = () =>
  useResumeDataStore((state) => state.addInterest);
export const useRemoveInterest = () =>
  useResumeDataStore((state) => state.removeInterest);
export const useSetInterest = () =>
  useResumeDataStore((state) => state.setInterest);
export const useSetInterests = () =>
  useResumeDataStore((state) => state.setInterests);

// WORK EXPERIENCES
export const useWorkExperiences = () =>
  useResumeDataStore((state) => state.data.workExperiences);
export const useAddWorkExperience = () =>
  useResumeDataStore((state) => state.addWorkExperience);
export const useRemoveWorkExperience = () =>
  useResumeDataStore((state) => state.removeWorkExperience);
export const useAddWorkResponsibility = () =>
  useResumeDataStore((state) => state.addWorkResponsibility);
export const useRemoveWorkResponsibility = () =>
  useResumeDataStore((state) => state.removeWorkResponsibility);
export const useSetWorkExperience = () =>
  useResumeDataStore((state) => state.setWorkExperience);
export const useSetWorkResponsibility = () =>
  useResumeDataStore((state) => state.setWorkResponsibility);
export const useSetWorkExperiences = () =>
  useResumeDataStore((state) => state.setWorkExperiences);
export const useSetWorkResponsibilities = () =>
  useResumeDataStore((state) => state.setWorkResponsibilities);

// PROJECTS
export const useProjects = () =>
  useResumeDataStore((state) => state.data.projects);
export const useAddProject = () =>
  useResumeDataStore((state) => state.addProject);
export const useRemoveProject = () =>
  useResumeDataStore((state) => state.removeProject);
export const useSetProject = () =>
  useResumeDataStore((state) => state.setProject);
export const useSetProjects = () =>
  useResumeDataStore((state) => state.setProjects);

// EDUCATIONS
export const useEducations = () =>
  useResumeDataStore((state) => state.data.educations);
export const useAddEducation = () =>
  useResumeDataStore((state) => state.addEducation);
export const useRemoveEducation = () =>
  useResumeDataStore((state) => state.removeEducation);
export const useSetEducation = () =>
  useResumeDataStore((state) => state.setEducation);
export const useSetEductions = () =>
  useResumeDataStore((state) => state.setEducations);

// PERSONAL PROFILES
export const usePersonalProfiles = () =>
  useResumeDataStore((state) => state.data.personalProfiles);
export const useAddPersonalProfile = () =>
  useResumeDataStore((state) => state.addPersonalProfile);
export const useRemovePersonalProfile = () =>
  useResumeDataStore((state) => state.removePersonalProfile);
export const useSetPersonalProfile = () =>
  useResumeDataStore((state) => state.setPersonalProfile);
export const useSetPersonalProfiles = () =>
  useResumeDataStore((state) => state.setPersonalProfiles);

// RESET DATA
export const useResetResumeData = () =>
  useResumeDataStore((state) => state.resetResumeData);
