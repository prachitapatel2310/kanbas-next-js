"use client";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "next/navigation";
import db from "../../../Database";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules.filter((m: any) => m.course === cid);

  return (
    <ListGroup className="rounded-0">
      {modules.map((module: any) => (
        <ListGroupItem key={module._id} className="p-0 mb-4">
          <div className="p-3 bg-secondary text-white d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" /> {module.name}
          </div>
          {module.lessons && (
            <ListGroup>
              {module.lessons.map((lesson: any) => (
                <ListGroupItem key={lesson._id} className="ps-5">
                  <BsGripVertical className="me-2" /> {lesson.name}
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
