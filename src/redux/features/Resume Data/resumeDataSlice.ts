import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import { nanoid } from "nanoid";

type Social = {
  id: string;
  name: string;
  url: string;
};

type Skill = {
  id: string;
  name: string;
};

type Interest = {
  id: string;
  name: string;
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

export type WorkResponsibility = {
  id: string;
  responsibility: string;
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
  socials: Social[];
  skills: Skill[];
  interests: Interest[];
  workExperiences: WorkExperience[];
  projects: Project[];
  educations: Education[];
  personalProfiles: PersonalProfile[];
};

const initialResumeDataState: ResumeDataType = {
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

const resumeDataSlice = createSlice({
  name: "resumeData",
  initialState: initialResumeDataState,
  reducers: {
    setImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    },
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setProfessionalTitle: (state, action: PayloadAction<string>) => {
      state.professionalTitle = action.payload;
    },
    setAbout: (state, action: PayloadAction<string>) => {
      state.about = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    addSocial: (state) => {
      state.socials.push({
        id: nanoid(),
        name: "",
        url: "",
      });
    },
    removeSocial: (state, action: PayloadAction<string>) => {
      state.socials = state.socials.filter(
        (social) => social.id !== action.payload,
      );
    },
    setSocial: (state, action: PayloadAction<Social>) => {
      const index = state.socials.findIndex(
        (social) => social.id === action.payload.id,
      );
      state.socials[index] = action.payload;
    },
    setSocials: (state, action: PayloadAction<Social[]>) => {
      state.socials = action.payload;
    },
    addSkill: (state) => {
      state.skills.push({
        id: nanoid(),
        name: "",
      });
    },
    removeSkill: (state, action: PayloadAction<string>) => {
      state.skills = state.skills.filter(
        (skill) => skill.id !== action.payload,
      );
    },
    setSkill: (state, action: PayloadAction<Skill>) => {
      const index = state.skills.findIndex(
        (skill) => skill.id === action.payload.id,
      );
      state.skills[index] = action.payload;
    },
    setSkills: (state, action: PayloadAction<Skill[]>) => {
      state.skills = action.payload;
    },
    addInterest: (state) => {
      state.interests.push({
        id: nanoid(),
        name: "",
      });
    },
    removeInterest: (state, action: PayloadAction<string>) => {
      state.interests = state.interests.filter(
        (interest) => interest.id !== action.payload,
      );
    },
    setInterest: (state, action: PayloadAction<Interest>) => {
      const index = state.interests.findIndex(
        (interest) => interest.id === action.payload.id,
      );
      state.interests[index] = action.payload;
    },
    setInterests: (state, action: PayloadAction<Interest[]>) => {
      state.interests = action.payload;
    },
    addWorkExperience: (state) => {
      state.workExperiences.push({
        id: nanoid(),
        companyName: "",
        jobTitle: "",
        location: "",
        joiningDate: "",
        leavingDate: "",
        workResponsibilities: [
          {
            id: nanoid(),
            responsibility: "",
          },
        ],
      });
    },
    addWorkResponsibility: (state, action: PayloadAction<string>) => {
      const index = state.workExperiences.findIndex(
        (workExperience) => workExperience.id === action.payload,
      );
      state.workExperiences[index].workResponsibilities.push({
        id: nanoid(),
        responsibility: "",
      });
    },
    removeWorkExperience: (state, action: PayloadAction<string>) => {
      state.workExperiences = state.workExperiences.filter(
        (workExperience) => workExperience.id !== action.payload,
      );
    },
    removeWorkResponsibility: (
      state,
      action: PayloadAction<{
        workExperienceId: string;
        responsibilityId: string;
      }>,
    ) => {
      const workExperienceIndex = state.workExperiences.findIndex(
        (workExperience) =>
          workExperience.id === action.payload.workExperienceId,
      );
      state.workExperiences[workExperienceIndex].workResponsibilities =
        state.workExperiences[workExperienceIndex].workResponsibilities.filter(
          (workResponsibility) =>
            workResponsibility.id !== action.payload.responsibilityId,
        );
    },
    setWorkExperience: (state, action: PayloadAction<WorkExperience>) => {
      const index = state.workExperiences.findIndex(
        (workExperience) => workExperience.id === action.payload.id,
      );
      state.workExperiences[index] = action.payload;
    },
    setWorkResponsibility: (
      state,
      action: PayloadAction<{
        workExperienceId: string;
        workResponsibility: WorkResponsibility;
      }>,
    ) => {
      const workExperienceIndex = state.workExperiences.findIndex(
        (workExperience) =>
          workExperience.id === action.payload.workExperienceId,
      );

      const workResponsibilityIndex = state.workExperiences[
        workExperienceIndex
      ].workResponsibilities.findIndex(
        (workResponsibility) =>
          workResponsibility.id === action.payload.workResponsibility.id,
      );

      state.workExperiences[workExperienceIndex].workResponsibilities[
        workResponsibilityIndex
      ] = action.payload.workResponsibility;
    },
    setWorkExperiences: (state, action: PayloadAction<WorkExperience[]>) => {
      state.workExperiences = action.payload;
    },
    setWorkResponsibilities: (
      state,
      action: PayloadAction<{
        workExperienceId: string;
        workResponsibilities: WorkResponsibility[];
      }>,
    ) => {
      const index = state.workExperiences.findIndex(
        (workExperience) =>
          workExperience.id === action.payload.workExperienceId,
      );
      state.workExperiences[index].workResponsibilities =
        action.payload.workResponsibilities;
    },
    addProject: (state) => {
      state.projects.push({
        id: nanoid(),
        projectName: "",
        projectDescription: "",
        liveLink: "",
        sourceLink: "",
        tags: "",
      });
    },
    removeProject: (state, action: PayloadAction<string>) => {
      state.projects = state.projects.filter(
        (project) => project.id !== action.payload,
      );
    },
    setProject: (state, action: PayloadAction<Project>) => {
      const index = state.projects.findIndex(
        (project) => project.id === action.payload.id,
      );
      state.projects[index] = action.payload;
    },
    setProjects: (state, action: PayloadAction<Project[]>) => {
      state.projects = action.payload;
    },
    addEducation: (state) => {
      state.educations.push({
        id: nanoid(),
        courseName: "",
        collegeName: "",
        from: "",
        to: "",
      });
    },
    removeEducation: (state, action: PayloadAction<string>) => {
      state.educations = state.educations.filter(
        (education) => education.id !== action.payload,
      );
    },
    setEducation: (state, action: PayloadAction<Education>) => {
      const index = state.educations.findIndex(
        (education) => education.id === action.payload.id,
      );
      state.educations[index] = action.payload;
    },
    setEducations: (state, action: PayloadAction<Education[]>) => {
      state.educations = action.payload;
    },
    addPersonalProfile: (state) => {
      state.personalProfiles.push({
        id: nanoid(),
        fieldName: "",
        fieldValue: "",
      });
    },
    removePersonalProfile: (state, action: PayloadAction<string>) => {
      state.personalProfiles = state.personalProfiles.filter(
        (personalProfile) => personalProfile.id !== action.payload,
      );
    },
    setPersonalProfile: (state, action: PayloadAction<PersonalProfile>) => {
      const index = state.personalProfiles.findIndex(
        (personalProfile) => personalProfile.id === action.payload.id,
      );
      state.personalProfiles[index] = action.payload;
    },
    setPersonalProfiles: (state, action: PayloadAction<PersonalProfile[]>) => {
      state.personalProfiles = action.payload;
    },
    resetResumeData: (state) => {
      return initialResumeDataState;
    },
  },
});

export const {
  setImage,
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
  setProfessionalTitle,
  setAbout,
  setAddress,
  addSocial,
  removeSocial,
  setSocial,
  setSocials,
  addSkill,
  removeSkill,
  setSkill,
  setSkills,
  addInterest,
  removeInterest,
  setInterest,
  setInterests,
  addWorkExperience,
  addWorkResponsibility,
  removeWorkExperience,
  removeWorkResponsibility,
  setWorkExperience,
  setWorkResponsibility,
  setWorkExperiences,
  setWorkResponsibilities,
  addProject,
  removeProject,
  setProject,
  setProjects,
  addEducation,
  removeEducation,
  setEducation,
  setEducations,
  addPersonalProfile,
  removePersonalProfile,
  setPersonalProfile,
  setPersonalProfiles,
  resetResumeData,
} = resumeDataSlice.actions;

export default resumeDataSlice.reducer;

export const selectResumeData =
  (fieldName: keyof ResumeDataType) => (state: RootState) =>
    state.resumeData[fieldName];
