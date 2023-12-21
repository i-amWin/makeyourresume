import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import {
  useGetSkippedSection,
  type Section,
  useSetSkippedSection,
} from "@/store/skipped-section-store";

type SkipButtonProps = {
  sectionName: Section;
  href: string;
  buttonLabel?: string;
  buttonVariant?: "default" | "secondary" | "outline" | "accent";
};

export default function SkipButton({
  sectionName,
  href,
  buttonLabel = "Skip",
  buttonVariant = "outline",
}: SkipButtonProps) {
  const isSkipped = useGetSkippedSection(sectionName);
  const setSkippedSection = useSetSkippedSection();

  if (isSkipped) {
    return (
      <Button
        size="sm"
        variant={buttonVariant}
        onClick={() => setSkippedSection(sectionName, false)}
      >
        Add
      </Button>
    );
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="sm" variant={buttonVariant}>
          {buttonLabel}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          You have not added any data to this field. Are you sure you want to
          skip this field?
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button size="sm">Cancel</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button asChild size="sm">
              <Link
                href={href}
                onClick={() => setSkippedSection(sectionName, true)}
              >
                Continue
              </Link>
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
