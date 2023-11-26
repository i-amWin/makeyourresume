import { Button } from "@/components/ui/button";
import Waves from "@/components/ui/waves";
import Link from "next/link";

export default function Home() {
  return (
    <section className="grid h-[100svh] place-content-center gap-4 text-center sm:gap-7">
      {/* <Waves /> */}
      <h1 className="text-[clamp(2.25rem,1.1786rem+5.3571vw,3.75rem)] font-bold leading-[1.1]">
        Build Your Resume for <span className="text-primary">Free!</span>
      </h1>
      <p className="mx-auto max-w-lg text-[clamp(0.9044rem,0.6727rem+1.1585vw,1.2288rem)] tracking-wide md:max-w-xl lg:max-w-2xl">
        Elevate your professional presence with our user-friendly &quot;Resume
        Builder&quot;. Craft a polished, standout document that effectively
        showcases your skills. Start building your impactful resume now!
      </p>

      <Button asChild size="lg" className="mx-auto w-fit md:text-base">
        <Link href="/templates">Build Your Resume</Link>
      </Button>
    </section>
  );
}
