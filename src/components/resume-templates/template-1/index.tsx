import TemplateWrapper from "@/components/template-wrapper";
import { forwardRef } from "react";

import ImageSection from "./sections/image-section";
// import ContactAndSocialSection from "./sections/contacts-and-social-section";
// import SkillsSection from "./sections/skills-section";
// import InterestsSection from "./sections/interests-section";
// import AboutSection from "./sections/about-section";
// import EducationSection from "./sections/education-section";
// import ProjectsSection from "./sections/projects-section";
// import PersonalProfile from "./sections/personal-profile";
// import ExperienceSection from "./sections/experience-section";

// calc(var(--WIDTHPERCENTAGE)*122)

const Template1 = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section className="overflow-x-scroll shadow-2xl dark:shadow-white/[.25]">
      <TemplateWrapper>
        <div className="[--WIDTHPERCENTAGE:calc(var(--WIDTH)/596)]">
          <div
            ref={ref}
            className="
              flex aspect-[596/842] w-full 
              gap-[calc(var(--WIDTHPERCENTAGE)*12)] bg-white 
              py-[calc(var(--WIDTHPERCENTAGE)*21)] pl-[calc(var(--WIDTHPERCENTAGE)*15)]
            "
          >
            {/* LEFT COLUMN */}
            <div className="w-[calc(var(--WIDTHPERCENTAGE)*122)] space-y-[calc(var(--WIDTHPERCENTAGE)*15)]">
              {/* IMAGE SECTION */}
              <ImageSection />

              <div
                // TODO: implement gap changing feature
                className="grid flex-1 gap-[12pt]"
                // style={{ gap: customStyles.LEFT_COLUMN_GAP + "pt" }}
              >
                {/* CONTACTS AND SOCIAL SECTION */}
                {/* <ContactAndSocialSection /> */}

                {/* SKILLS SECTION */}
                {/* <SkillsSection /> */}

                {/* INTERESTS SECTION */}
                {/* <InterestsSection /> */}
              </div>
            </div>
            {/* RIGHT COLUMN */}
            <div className="flex-1 space-y-[calc(var(--WIDTHPERCENTAGE)*15)]">
              {/* NAME, TITLE & ABOUT SECTION */}
              {/* <AboutSection /> */}

              <div
                // TODO: implement gap changing feature
                className="grid gap-[15pt]"
                style={
                  {
                    // gap: customStyles.RIGHT_COLUMN_GAP + "pt",
                  }
                }
              >
                {/* EXPERIENCE SECTION */}
                {/* <ExperienceSection /> */}

                {/* PROJECTS SECTION */}
                {/* <ProjectsSection /> */}

                {/* EDUCATION SECTION */}
                {/* <EducationSection /> */}

                {/* PERSONAL PROFILE */}
                {/* <PersonalProfile /> */}
              </div>
            </div>
          </div>
        </div>
      </TemplateWrapper>
    </section>
  );
});

Template1.displayName = "Template1";
export default Template1;
