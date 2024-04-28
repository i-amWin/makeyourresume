"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { resetSkippedSections } from "@/redux/features/Skipped Sections/skippedSectionSlice";
import { resetStyles } from "@/redux/features/Custom Styles/customStyleSlice";
import { resetResumeData } from "@/redux/features/Resume Data/resumeDataSlice";

export default function Reset() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetResumeData());
    dispatch(resetStyles({}));
    dispatch(resetSkippedSections());
  }, [dispatch]);

  return null;
}
