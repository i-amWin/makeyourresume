import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Eye } from "lucide-react";

interface PreviewTemplateProps {
  className?: string;
  templateComponent: React.ReactNode;
}

export default function PreviewTemplate({
  className,
  templateComponent,
}: PreviewTemplateProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className={className} variant="accent">
          <Eye size="18" /> <span>Preview</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-xl">Your Resume</SheetTitle>
          <SheetClose />
        </SheetHeader>
        <div className="overflow-hidden rounded border">
          {templateComponent}
        </div>
      </SheetContent>
    </Sheet>
  );
}
