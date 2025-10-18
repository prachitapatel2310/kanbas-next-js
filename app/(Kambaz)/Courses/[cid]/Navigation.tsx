"use client";
import Link from "next/link";

export default function CourseNavigation({ cid }: { cid: string }) {
  const links = [
    { label: "Home", href: `/Courses/${cid}/Home` },
    { label: "Modules", href: `/Courses/${cid}/Modules` },
    { label: "Assignments", href: `/Courses/${cid}/Assignments` },
    { label: "Quizzes", href: `/Courses/${cid}/Quizzes` },
    { label: "Grades", href: `/Courses/${cid}/Grades` },
    { label: "People", href: `/Courses/${cid}/People` },
  ];

  return (
    <ul className="list-group rounded-0">
      {links.map((link) => (
        <li key={link.href} className="list-group-item">
          <Link href={link.href} className="text-decoration-none">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
