"use client";
import { ReactNode, useState } from "react";
import CourseNavigation from "./Navigation";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa6";

export default function CoursesLayout({ children }: { children: ReactNode }) {
  // Get course ID from URL params
  const { cid } = useParams();

  // Access courses from Redux global store
  const { courses } = useSelector((state: any) => state.coursesReducer);

  // Find current course by ID
  const course = courses.find((course: any) => course._id === cid);

  // Track sidebar toggle state
  const [showNav, setShowNav] = useState(true);

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
            <CourseNavigation cid={cid} />
          </div>
        )}

        {/* Main content */}
        <div className="flex-fill ps-3">{children}</div>
      </div>
    </div>
  );
}
