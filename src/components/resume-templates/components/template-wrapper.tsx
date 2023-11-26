"use client";
import { withResizeDetector } from "react-resize-detector";

function Wrapper({
  width,
  children,
}: {
  width: number;
  children: React.ReactNode;
}) {
  return (
    <div
      style={
        {
          "--WIDTH": width! * 0.75 + "pt",
        } as React.CSSProperties
      }
    >
      {width && children}
    </div>
  );
}

const TemplateWrapper = withResizeDetector(Wrapper);

export default TemplateWrapper;
