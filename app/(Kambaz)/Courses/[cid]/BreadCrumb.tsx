"use client";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ course }: { course: { name: string; _id: string } }) {
  const pathname = usePathname();
  return (
    <span>
      Course {course?.name} &gt; {pathname.split("/").pop()}
    </span>
  );
}
