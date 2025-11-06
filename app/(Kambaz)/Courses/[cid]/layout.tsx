"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useState } from "react";
import CourseNavigation from "./Navigation";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa6";

/**
 * Layout for course pages.
 * Dynamically retrieves the course ID from URL and renders sidebar navigation.
 */
export default function CoursesLayout({ children }: { children: ReactNode }) {
  const params = useParams();
  // ✅ Safely normalize `cid` as string — handles `undefined` and `string[]`
  const cid = Array.isArray(params.cid) ? params.cid[0] : params.cid ?? "";

  // Access courses from Redux
  const { courses } = useSelector((state: any) => state.coursesReducer);

  // Find course by ID
  const course = courses.find((course: any) => course._id === cid);

  // Sidebar toggle
  const [showNav, setShowNav] = useState(true);

  // ✅ Defensive render: wait for cid before showing UI
  if (!cid) {
    return (
      <div className="p-4 text-secondary">
        <h4>Loading course...</h4>
      </div>
    );
  }

  return (
    <div id="wd-courses" className="p-3">
      <h2 className="d-flex align-items-center text-danger">
        {/* Sidebar toggle icon */}
        <FaAlignJustify
          className="me-4 fs-4 mb-1"
          style={{ cursor: "pointer" }}
          onClick={() => setShowNav(!showNav)}
        />
        {course?.name || "Course Not Found"}
      </h2>
      <hr />

      <div className="d-flex">
        {/* Sidebar navigation */}
        {showNav && (
          <div className="pe-3 border-end" style={{ width: 200 }}>
            {/* ✅ cid guaranteed as string */}
            <CourseNavigation cid={cid} />
          </div>
        )}

        {/* Main content */}
        <div className="flex-fill ps-3">{children}</div>
      </div>
    </div>
  );
}
