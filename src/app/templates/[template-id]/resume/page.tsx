"use client";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Button } from "@/components/ui/button";
import { Download, Pencil } from "lucide-react";
import Link from "next/link";
import EditStyles from "@/components/edit-styles";
import { useTemplateIdParam } from "@/hooks/useTemplateIdParam";
import { getTemplateComponentById } from "@/lib/templateList";

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

  const Template = getTemplateComponentById(templateId);

  return (
    <div className="flex flex-col gap-4 py-20 md:py-24 lg:flex-row">
      <div className="flex-1 space-y-4 rounded border p-4 sm:space-y-6">
        <div className="flex flex-wrap gap-2">
          <Button asChild variant="secondary">
            <Link
              href={`/templates/${templateId}/editor/profile`}
              className="space-x-2 border"
            >
              <span>Edit Data</span> <Pencil size={17} />
            </Link>
          </Button>

          <Button onClick={handlePrint} className="ml-auto space-x-2">
            <span>Download</span> <Download size={18} />
          </Button>
        </div>

        <EditStyles />
      </div>

      <div className="flex-1">
        {Template === undefined ? (
          <div className="rounded border p-4">Template not found</div>
        ) : (
          <div className="overflow-hidden rounded border">
            <Template ref={componentRef} />
          </div>
        )}
      </div>
    </div>
  );
}
