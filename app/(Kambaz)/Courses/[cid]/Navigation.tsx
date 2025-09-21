import Link from "next/link";

export default function CourseNavigation({ cid }: { cid: string }) {
  return (
    <div id="wd-courses-navigation">
      <Link href={`/Courses/${cid}/Home`}>Home</Link><br/>
      <Link href={`/Courses/${cid}/Modules`}>Modules</Link><br/>
      <Link href={`/Courses/${cid}/Piazza`}>Piazza</Link><br/>
      <Link href={`/Courses/${cid}/Zoom`}>Zoom</Link><br/>
      <Link href={`/Courses/${cid}/Assignments`}>Assignments</Link><br/>
      <Link href={`/Courses/${cid}/Quizzes`}>Quizzes</Link><br/>
      <Link href={`/Courses/${cid}/Grades`}>Grades</Link><br/>
      <Link href={`/Courses/${cid}/People/Table`}>People</Link><br/>
    </div>
  );
}
