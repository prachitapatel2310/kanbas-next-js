"use client";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { ListGroup } from "react-bootstrap";

export default function CourseNavigation() {
  const pathname = usePathname();
  const { cid } = useParams();

  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  return (
    <div id="wd-course-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link}
          href={`/Courses/${cid}/${link}`}
          className={`list-group-item border-0 ${
            pathname.includes(link)
              ? "active text-white bg-danger"
              : "text-danger"
          }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
