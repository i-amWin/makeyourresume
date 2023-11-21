import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "./ui/sheet";

import { Eye } from "lucide-react";

export default function ResumePreview() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="fixed bottom-4 right-4 sm:right-8 space-x-1"
          variant="secondary"
        >
          <Eye size="18" /> <span>Preview</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="z-[999] w-[min(100%,900px)]">
        <SheetHeader>
          <SheetTitle>Preview</SheetTitle>
          <SheetClose />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
