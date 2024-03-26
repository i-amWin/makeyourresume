"use client";

import { useEffect } from "react";
import { useResetStyles } from "@/store/custom-styles-store";
import { useResetResumeData } from "@/store/resume-data-store";
import { useAppDispatch } from "@/redux/hooks";
import { resetSkippedSections } from "@/redux/features/Skipped Sections/skippedSectionSlice";

export default function Reset() {
  const resetStyles = useResetStyles();
  const resetResumeData = useResetResumeData();
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   resetResumeData();
  //   resetStyles();
  //   dispatch(resetSkippedSections());
  // }, [resetStyles, resetResumeData, dispatch]);

  useEffect(() => {
    resetResumeData();
    resetStyles();
    dispatch(resetSkippedSections());
  }, [dispatch, resetResumeData, resetStyles]);

  return null;
}
