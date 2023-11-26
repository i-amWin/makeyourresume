import { forwardRef } from "react";

import TemplateWrapper from "@/components/resume-templates/components/template-wrapper";
import ImageSection from "./sections/image-section";
import ContactAndSocialSection from "./sections/contacts-and-socials-section";
import SkillsSection from "./sections/skills-section";
import InterestsSection from "./sections/interests-section";
import AboutSection from "./sections/about-section";
import ExperienceSection from "./sections/experience-section";
import ProjectsSection from "./sections/projects-section";
import EducationSection from "./sections/education-section";
import PersonalProfileSection from "./sections/personal-profile-section";

// calc(var(--WIDTHPERCENTAGE)*122)

const Template1 = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section className="overflow-x-scroll shadow-2xl dark:shadow-white/[.25]">
      <TemplateWrapper>
        <div
          ref={ref}
          className="[--WIDTHPERCENTAGE:calc(var(--WIDTH)/596)] print:![--WIDTHPERCENTAGE:1pt]"
        >
          <div
            className="
              flex aspect-[596/842] w-full 
              gap-[calc(var(--WIDTHPERCENTAGE)*12)] bg-white 
              py-[calc(var(--WIDTHPERCENTAGE)*21)] pl-[calc(var(--WIDTHPERCENTAGE)*15)]
              text-black
            "
          >
            {/* LEFT COLUMN */}
            <div className="w-[calc(var(--WIDTHPERCENTAGE)*122)] space-y-[calc(var(--WIDTHPERCENTAGE)*15)]">
              {/* IMAGE SECTION */}
              <ImageSection />

              <div className="grid flex-1 gap-[calc(var(--WIDTHPERCENTAGE)*var(--LEFT-COLUMN-GAP))]">
                {/* CONTACTS AND SOCIAL SECTION */}
                <ContactAndSocialSection />

                {/* SKILLS SECTION */}
                <SkillsSection />

                {/* INTERESTS SECTION */}
                <InterestsSection />
              </div>
            </div>
            {/* RIGHT COLUMN */}
            <div className="flex-1 space-y-[calc(var(--WIDTHPERCENTAGE)*15)]">
              {/* NAME, TITLE & ABOUT SECTION */}
              <AboutSection />

              <div className="grid gap-[calc(var(--WIDTHPERCENTAGE)*var(--RIGHT-COLUMN-GAP))]">
                {/* EXPERIENCE SECTION */}
                <ExperienceSection />

                {/* PROJECTS SECTION */}
                <ProjectsSection />

                {/* EDUCATION SECTION */}
                <EducationSection />

                {/* PERSONAL PROFILE */}
                <PersonalProfileSection />
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
