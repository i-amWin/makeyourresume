"use client";

import { useEffect } from "react";
import { useResetResumeData } from "@/store/resume-data-store";
import { useAppDispatch } from "@/redux/hooks";
import { resetSkippedSections } from "@/redux/features/Skipped Sections/skippedSectionSlice";
import { resetStyles } from "@/redux/features/Custom Styles/customStyleSlice";

export default function Reset() {
  const resetResumeData = useResetResumeData();
  const dispatch = useAppDispatch();

  useEffect(() => {
    resetResumeData();
    dispatch(resetStyles({}));
    dispatch(resetSkippedSections());
  }, [dispatch, resetResumeData]);

  return null;
}
