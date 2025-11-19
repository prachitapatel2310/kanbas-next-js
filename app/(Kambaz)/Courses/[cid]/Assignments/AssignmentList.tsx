"use client";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical, BsThreeDotsVertical } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
import { useParams } from "next/navigation";
import LessonControlButtons from "../Modules/LessonControlButtons";
import Link from "next/link"; // ✅ 新增导入

function AssignmentRow({
  title,
  meta,
}: {
  title: string;
  meta: string;
}) {
  const { cid } = useParams(); // ✅ 获取当前课程ID

  return (
    <ListGroupItem
      className="p-3 ps-1 d-flex align-items-center justify-content-between"
      style={{ borderLeft: "3px solid green" }}
    >
      <div>
        <div className="d-flex align-items-center">
          {/* 点阵图标 */}
          <span className="wd-icon wd-icon--grip me-2">
            <BsGripVertical className="fs-4 text-muted" />
          </span>

          {/* 任务图标 */}
          <MdAssignment className="fs-5 text-secondary me-2" />

          {/* 改成 Link，不改样式 */}
          <Link
            href={`/Courses/${cid}/Assignments/${title}`}
            className="fw-semibold text-decoration-none text-dark"
          >
            {title}
          </Link>
        </div>

        {/* 子文字 */}
        <div className="text-muted small ms-4">{meta}</div>
      </div>

      {/* 右侧按钮组 */}
      <LessonControlButtons />
    </ListGroupItem>
  );
}

export default function AssignmentsList() {
  return (
    <ListGroup className="rounded-0" id="wd-assignments">
      <ListGroupItem className="p-0 mb-3 fs-5 border-gray">
        <div className="p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <span className="wd-icon wd-icon--grip me-2">
              <BsGripVertical className="fs-4 text-muted" />
            </span>
            <span className="fw-semibold">ASSIGNMENTS</span>
          </div>
          <div className="d-flex align-items-center gap-3">
            <span className="text-muted small">(40% of Total)</span>
            <BsThreeDotsVertical className="text-muted" />
          </div>
        </div>

        <ListGroup className="rounded-0">
          <AssignmentRow
            title="A1"
            meta="Multiple Modules  |  Due May 13 at 11:59pm  |  100 pts"
          />
          <AssignmentRow
            title="A2"
            meta="Multiple Modules  |  Due May 20 at 11:59pm  |  100 pts"
          />
          <AssignmentRow
            title="A3"
            meta="Multiple Modules  |  Due May 27 at 11:59pm  |  100 pts"
          />
        </ListGroup>
      </ListGroupItem>
    </ListGroup>
  );
}