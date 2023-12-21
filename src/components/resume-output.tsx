"use client";

import { ForwardRefExoticComponent, RefAttributes, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Button } from "./ui/button";
import { Download, Pencil } from "lucide-react";
import Link from "next/link";
import EditStyles from "./edit-styles";
import { useTemplateIdParam } from "@/hooks/useTemplateIdParam";
import Template1 from "./resume-templates/template-1";

export default function ResumeOutput() {
  const templateId = useTemplateIdParam();

  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Resume",
    pageStyle: `
      @page {
        size: A4;
        margin: 0;
      }

      @media print {
        html,
        body {
          print-color-adjust: exact;
          -webkit-print-color-adjust: exact;
        }
      }  
    `,
  });

  let Template: ForwardRefExoticComponent<RefAttributes<HTMLDivElement>>;

  switch (templateId) {
    case "template-1":
      Template = Template1;
      break;

    default:
      return <div>Template not found</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-row-reverse flex-wrap gap-2">
        <Button onClick={handlePrint} className="space-x-2">
          <span>Download</span> <Download size={18} />
        </Button>

        <EditStyles />

        <Button asChild variant="secondary">
          <Link
            href={`/templates/${templateId}/resume-form`}
            className="space-x-2 border"
          >
            <span>Edit Data</span> <Pencil size={17} />
          </Link>
        </Button>
      </div>

      <Template ref={componentRef} />
    </div>
  );
}
