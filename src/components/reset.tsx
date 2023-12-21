"use client";

import { useEffect } from "react";
import { useResetStyles } from "@/store/custom-styles-store";
import { useResetSkippedSections } from "@/store/skipped-section-store";
import { useResetResumeData } from "@/store/resume-data-store";

export default function Reset() {
  const resetStyles = useResetStyles();
  const resetSkippedSections = useResetSkippedSections();
  const resetResumeData = useResetResumeData();

  useEffect(() => {
    resetResumeData();
    resetStyles();
    resetSkippedSections();
  }, [resetStyles, resetSkippedSections, resetResumeData]);

  return null;
}
