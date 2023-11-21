"use client";

import { useRef } from "react";
import Template1 from "./resume-templates/template-1";
import { useReactToPrint } from "react-to-print";

export default function ResumeOutput() {
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
  return (
    <div>
      <button onClick={handlePrint}>Download</button>
      <Template1 ref={componentRef} />
    </div>
  );
}
