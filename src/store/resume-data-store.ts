import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { nanoid } from "nanoid";

// LABEL: TYPES

interface IWorkExperience {
  id: string;
  companyName: string;
  jobTitle: string;
  location: string;
  joiningDate: string;
  leavingDate: string;
  workResponsibilities: { id: string; responsibility: string }[];
}

interface IProject {
  id: string;
  projectName: string;
  projectDescription: string;
  liveLink?: string;
  sourceLink?: string;
  tags?: string;
}

interface IEducation {
  id: string;
  courseName: string;
  collegeName: string;
  from: string;
  to: string;
}

interface IPersonalProfile {
  id: string;
  fieldName: string;
  fieldValue: string;
}

interface ResumeDataType {
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
  workExperiences: IWorkExperience[];
  projects: IProject[];
  educations: IEducation[];
  personalProfiles: IPersonalProfile[];
}

interface ResumeDataState {
  data: ResumeDataType;
}

interface ResumeDataActions {
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
  setProfessionalTitle: (professionalTitle: string) => void;
  setAbout: (about: string) => void;
  setAddress: (address: string) => void;
  setSocial: (social: { name: string; url: string }) => void;
  setSkill: (skill: string) => void;
  setInterest: (interest: string) => void;
  setWorkExperience: (workExperience: Omit<IWorkExperience, "id">) => void;
  setProject: (project: Omit<IProject, "id">) => void;
  setEducation: (education: Omit<IEducation, "id">) => void;
  setPersonalProfile: (personalProfile: Omit<IPersonalProfile, "id">) => void;
}

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
    setFirstName: (firstName: string) => {
      set((state) => {
        state.data.firstName = firstName;
      });
    },
    setLastName: (lastName: string) => {
      set((state) => {
        state.data.lastName = lastName;
      });
    },
    setEmail: (email: string) => {
      set((state) => {
        state.data.email = email;
      });
    },
    setPhone: (phone: string) => {
      set((state) => {
        state.data.phone = phone;
      });
    },
    setProfessionalTitle: (professionalTitle: string) => {
      set((state) => {
        state.data.professionalTitle = professionalTitle;
      });
    },
    setAbout: (about: string) => {
      set((state) => {
        state.data.about = about;
      });
    },
    setAddress: (address: string) => {
      set((state) => {
        state.data.address = address;
      });
    },
    setSocial: (social: { name: string; url: string }) => {
      set((state) => {
        state.data.socials.push({
          id: nanoid(),
          ...social,
        });
      });
    },
    setSkill: (skill: string) => {
      set((state) => {
        state.data.skills.push({
          id: nanoid(),
          name: skill,
        });
      });
    },
    setInterest: (interest: string) => {
      set((state) => {
        state.data.interests.push({
          id: nanoid(),
          name: interest,
        });
      });
    },
    setWorkExperience: (workExperience: Omit<IWorkExperience, "id">) => {
      set((state) => {
        state.data.workExperiences.push({
          id: nanoid(),
          ...workExperience,
        });
      });
    },
    setProject: (project: Omit<IProject, "id">) => {
      set((state) => {
        state.data.projects.push({
          id: nanoid(),
          ...project,
        });
      });
    },
    setEducation: (education: Omit<IEducation, "id">) => {
      set((state) => {
        state.data.educations.push({
          id: nanoid(),
          ...education,
        });
      });
    },
    setPersonalProfile: (personalProfile: Omit<IPersonalProfile, "id">) => {
      set((state) => {
        state.data.personalProfiles.push({
          id: nanoid(),
          ...personalProfile,
        });
      });
    },
  }))
);

// LABEL: SELECTORS
export const useImage = () => useResumeDataStore((state) => state.data.image);

export const useFirstName = () =>
  useResumeDataStore((state) => state.data.firstName);

export const useLastName = () =>
  useResumeDataStore((state) => state.data.lastName);

export const useEmail = () => useResumeDataStore((state) => state.data.email);

export const usePhone = () => useResumeDataStore((state) => state.data.phone);

export const useProfessionalTitle = () =>
  useResumeDataStore((state) => state.data.professionalTitle);

export const useAbout = () => useResumeDataStore((state) => state.data.about);

export const useAddress = () =>
  useResumeDataStore((state) => state.data.address);

export const useSocials = () =>
  useResumeDataStore((state) => state.data.socials);

export const useSkills = () => useResumeDataStore((state) => state.data.skills);

export const useInterests = () =>
  useResumeDataStore((state) => state.data.interests);

export const useWorkExperiences = () =>
  useResumeDataStore((state) => state.data.workExperiences);

export const useProjects = () =>
  useResumeDataStore((state) => state.data.projects);

export const useEducations = () =>
  useResumeDataStore((state) => state.data.educations);

export const usePersonalProfiles = () =>
  useResumeDataStore((state) => state.data.personalProfiles);

// LABEL: ACTIONS
export const useSetFirstName = () =>
  useResumeDataStore((state) => state.setFirstName);

export const useSetLastName = () =>
  useResumeDataStore((state) => state.setLastName);

export const useSetEmail = () => useResumeDataStore((state) => state.setEmail);

export const useSetPhone = () => useResumeDataStore((state) => state.setPhone);

export const useSetProfessionalTitle = () =>
  useResumeDataStore((state) => state.setProfessionalTitle);

export const useSetAbout = () => useResumeDataStore((state) => state.setAbout);

export const useSetAddress = () =>
  useResumeDataStore((state) => state.setAddress);

export const useSetSocial = () =>
  useResumeDataStore((state) => state.setSocial);

export const useSetSkill = () => useResumeDataStore((state) => state.setSkill);

export const useSetInterest = () =>
  useResumeDataStore((state) => state.setInterest);

export const useSetWorkExperience = () =>
  useResumeDataStore((state) => state.setWorkExperience);

export const useSetProject = () =>
  useResumeDataStore((state) => state.setProject);

export const useSetEducation = () =>
  useResumeDataStore((state) => state.setEducation);

export const useSetPersonalProfile = () =>
  useResumeDataStore((state) => state.setPersonalProfile);
