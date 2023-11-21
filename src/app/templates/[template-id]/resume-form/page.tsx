import ResumePreview from "@/components/resume-preview";
import Template1 from "@/components/resume-templates/template-1";

export default function ResumeForm() {
  return (
    <section className="relative min-h-[100svh] py-16">
      <h2 className="text-[clamp(1.5625rem,0.9643rem+2.9911vw,2.4rem)] font-bold">
        Let<span className="text-primary">&apos;</span>s Start
      </h2>
      <p className="mb-2 max-w-xl text-[clamp(0.7538rem,0.5899rem+0.8192vw,0.9831rem)]">
        <span className="text-accent">Note: </span> You can take a look at your
        resume by clicking the preview button on the bottom right corner. 👀 and
        review it carefully.
      </p>

      <ResumePreview />

      <Template1 />
    </section>
  );
}
