import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import { nanoid } from "nanoid";

type Profile = {
  image: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  professionalTitle: string;
  about: string;
  address: string;
};

export type Social = {
  id: string;
  name: string;
  url: string;
};

export type Skill = {
  id: string;
  name: string;
};

export type Interest = {
  id: string;
  name: string;
};

export type WorkExperience = {
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

export type Project = {
  id: string;
  projectName: string;
  projectDescription: string;
  liveLink: string;
  sourceLink: string;
  tags: string;
};

export type Education = {
  id: string;
  courseName: string;
  collegeName: string;
  from: string;
  to: string;
};

export type PersonalProfile = {
  id: string;
  fieldName: string;
  fieldValue: string;
};

export type ResumeDataType = {
  profile: Profile;
  socials: Social[];
  skills: Skill[];
  interests: Interest[];
  workExperiences: WorkExperience[];
  projects: Project[];
  educations: Education[];
  personalProfiles: PersonalProfile[];
};

const initialResumeDataState: ResumeDataType = {
  profile: {
    image: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    professionalTitle: "",
    about: "",
    address: "",
  },
  socials: [],
  skills: [],
  interests: [],
  workExperiences: [],
  projects: [],
  educations: [],
  personalProfiles: [],
};

type SetFieldPayload =
  | {
      fieldName: "socials";
      value: Social;
    }
  | {
      fieldName: "skills";
      value: Skill;
    }
  | {
      fieldName: "interests";
      value: Interest;
    }
  | {
      fieldName: "workExperiences";
      value: WorkExperience;
    }
  | {
      fieldName: "projects";
      value: Project;
    }
  | {
      fieldName: "educations";
      value: Education;
    }
  | {
      fieldName: "personalProfiles";
      value: PersonalProfile;
    };

type SetFieldsPayload =
  | {
      fieldName: "socials";
      value: Social[];
    }
  | {
      fieldName: "skills";
      value: Skill[];
    }
  | {
      fieldName: "interests";
      value: Interest[];
    }
  | {
      fieldName: "workExperiences";
      value: WorkExperience[];
    }
  | {
      fieldName: "projects";
      value: Project[];
    }
  | {
      fieldName: "educations";
      value: Education[];
    }
  | {
      fieldName: "personalProfiles";
      value: PersonalProfile[];
    };

const emptySocial: Omit<Social, "id"> = {
  name: "",
  url: "",
};

const emptySkill: Omit<Skill, "id"> = {
  name: "",
};

const emptyInterest: Omit<Interest, "id"> = {
  name: "",
};

const resumeDataSlice = createSlice({
  name: "resumeData",
  initialState: initialResumeDataState,
  reducers: {
    setProfile: (
      state,
      action: PayloadAction<{
        fieldName: keyof Profile;
        value: string;
      }>,
    ) => {
      const { fieldName, value } = action.payload;
      state.profile[fieldName] = value;
    },
    addField: (
      state,
      action: PayloadAction<Exclude<keyof ResumeDataType, "profile">>,
    ) => {
      const fieldName = action.payload;

      switch (fieldName) {
        case "socials":
          state[fieldName].push({ id: nanoid(), ...emptySocial });
          break;

        case "skills":
          state[fieldName].push({ id: nanoid(), ...emptySkill });
          break;

        case "interests":
          state[fieldName].push({ id: nanoid(), ...emptyInterest });
          break;

        case "educations":
          state[fieldName].push({
            id: nanoid(),
            courseName: "",
            collegeName: "",
            from: "",
            to: "",
          });
          break;

        case "workExperiences":
          state[fieldName].push({
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
          break;

        case "projects":
          state[fieldName].push({
            id: nanoid(),
            projectName: "",
            projectDescription: "",
            liveLink: "",
            sourceLink: "",
            tags: "",
          });
          break;

        case "personalProfiles":
          state[fieldName].push({
            id: nanoid(),
            fieldName: "",
            fieldValue: "",
          });
          break;
      }
    },

    removeField: (
      state,
      action: PayloadAction<{
        fieldName: Exclude<keyof ResumeDataType, "profile">;
        id: string;
      }>,
    ) => {
      const { fieldName, id } = action.payload;
      const index = state[fieldName].findIndex((field) => field.id === id);
      state[fieldName].splice(index, 1);
    },

    setField: (state, action: PayloadAction<SetFieldPayload>) => {
      const { fieldName, value } = action.payload;

      const index = state[fieldName].findIndex(
        (field) => field.id === value.id,
      );
      state[fieldName][index] = value;
    },

    setFields: (state, action: PayloadAction<SetFieldsPayload>) => {
      const { fieldName, value } = action.payload;
      state[fieldName] = value as any;
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
    removeWorkResponsibilityField: (
      state,
      action: PayloadAction<{
        workExperienceId: string;
        workResponsibilityId: string;
      }>,
    ) => {
      const { workExperienceId, workResponsibilityId } = action.payload;

      state.workExperiences.map((w) => {
        if (w.id === workExperienceId) {
          w.workResponsibilities = w.workResponsibilities.filter(
            (r) => r.id !== workResponsibilityId,
          );
        }
      });
    },
    setWorkResponsibilityField: (
      state,
      action: PayloadAction<{
        workExperienceId: string;
        workResponsibility: WorkResponsibility;
      }>,
    ) => {
      const { workExperienceId, workResponsibility } = action.payload;

      state.workExperiences.map((w) => {
        if (w.id === workExperienceId) {
          w.workResponsibilities.map((wr) => {
            if (wr.id === workResponsibility.id) {
              wr.responsibility = workResponsibility.responsibility;
            }
          });
        }
      });
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
    resetResumeData: (state) => {
      return initialResumeDataState;
    },
  },
});

export const {
  setProfile,
  addField,
  removeField,
  setField,
  setFields,
  addWorkResponsibility,
  removeWorkResponsibilityField,
  setWorkResponsibilityField,
  setWorkResponsibilities,
  resetResumeData,
} = resumeDataSlice.actions;

export default resumeDataSlice.reducer;

export const selectProfile = (state: RootState) => state.resumeData.profile;

export const selectSocials = (state: RootState) => state.resumeData.socials;

export const selectSkills = (state: RootState) => state.resumeData.skills;

export const selectInterests = (state: RootState) => state.resumeData.interests;

export const selectEducations = (state: RootState) =>
  state.resumeData.educations;

export const selectWorkExperiences = (state: RootState) =>
  state.resumeData.workExperiences;

export const selectProjects = (state: RootState) => state.resumeData.projects;

export const selectPersonalProfiles = (state: RootState) =>
  state.resumeData.personalProfiles;
