import { ReactNode } from "react";
import { FaAlignJustify } from "react-icons/fa";
import CourseNavigation from "./Navigation";

export default async function CoursesLayout(
  { children, params }: Readonly<{
    children: ReactNode;
    params: Promise<{ cid: string }>;
  }>
) {
  const { cid } = await params;

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        Course {cid}
      </h2>
      <hr />
      <table>
        <tbody>
          <tr>
            <td valign="top" width="200">
              <div className="d-none d-md-block">
                <CourseNavigation />
              </div>
            </td>
            <td valign="top" width="100%">
              <div className="flex-fill">{children}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
