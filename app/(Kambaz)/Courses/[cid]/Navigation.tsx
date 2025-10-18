"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();

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
    <div
      id="wd-course-navigation"
      style={{
        width: "180px",
        backgroundColor: "#fff",
        borderRight: "1px solid #ddd",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          fontSize: "15px",
        }}
      >
        {links.map((label) => {
          const href = `/Courses/${cid}/${label}`;
          const isActive = pathname === href;

          return (
            <li key={href} style={{ position: "relative" }}>
              <Link
                href={href}
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: isActive ? "black" : "red",
                  padding: "10px 16px",
                  borderLeft: isActive ? "4px solid black" : "4px solid transparent",
                  fontWeight: isActive ? "bold" : "normal",
                  backgroundColor: "white",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#000";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = isActive ? "#000" : "red";
                }}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
