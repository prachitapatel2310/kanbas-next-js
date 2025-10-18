"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div style={{ width: "180px", backgroundColor: "#fff" }}>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {links.map((label) => {
          const href = `/Courses/${cid}/${label}`;
          const isActive = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                style={{
                  display: "block",
                  padding: "10px 16px",
                  color: isActive ? "black" : "red",
                  textDecoration: "none",
                  borderLeft: isActive ? "4px solid black" : "4px solid transparent",
                  fontWeight: isActive ? "bold" : "normal",
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
