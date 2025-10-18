"use client";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ course }: { course: any }) {
  const pathname = usePathname();
  return (
    <span>
      Course {course?.name} &gt; {pathname.split("/").pop()}
    </span>
  );
}
