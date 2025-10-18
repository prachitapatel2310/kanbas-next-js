import { ReactNode } from "react";
import { FaAlignJustify } from "react-icons/fa6";
import db from "../../Database";
import CourseNavigation from "./Navigation";

export default function CoursesLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { cid: string };
}) {
  const { cid } = params;
  const course = db.courses.find((course: any) => course._id === cid);

  return (
    <div id="wd-courses" className="d-flex">
      {/* ---- Sidebar ---- */}
      <div
        className="d-none d-md-block bg-white border-end"
        style={{ width: "200px", minHeight: "100vh" }}
      >
        <CourseNavigation />
      </div>

      {/* ---- Main Content ---- */}
      <div className="flex-fill p-3">
        <h2 className="text-danger">
          <FaAlignJustify className="me-4 fs-4 mb-1" />
          {course?.name || `Course ${cid}`}
        </h2>
        <hr />
        {children}
      </div>
    </div>
  );
}
