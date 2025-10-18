"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Button,
  FormControl,
  InputGroup,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus, FaCheckCircle } from "react-icons/fa";
import { MdOutlineGroupAdd } from "react-icons/md";
import * as db from "../../../Database";

export default function Assignments() {
  const { cid } = useParams();

  // ✅ Filter strictly by current course id (case-insensitive)
  interface Assignment {
    _id: string;
    title: string;
    course: string;
    availableFrom: string;
    dueDate: string;
    points: number;
    modules?: string[];
  }

  const assignments = db.assignments.filter(
    (a: Assignment) => a.course.toLowerCase() === String(cid).toLowerCase()
  );

  return (
    <div id="wd-assignments" className="p-4" style={{ background: "#fff" }}>
      {/* ---- Top Controls ---- */}
      <div
        className="d-flex align-items-center mb-4 flex-wrap gap-2"
        style={{ justifyContent: "space-between" }}
      >
        <InputGroup style={{ maxWidth: "300px" }}>
          <FormControl placeholder="Search for Assignments" />
        </InputGroup>

        <div className="d-flex gap-2">
          <Button variant="secondary" className="fw-semibold d-flex align-items-center">
            <MdOutlineGroupAdd className="me-2 fs-5" /> + Group
          </Button>
          <Button variant="danger" className="fw-semibold d-flex align-items-center">
            <FaPlus className="me-2 fs-5" /> + Assignment
          </Button>
        </div>
      </div>

      {/* ---- Assignment Group Header ---- */}
      <ListGroup className="rounded-0 border">
        <ListGroupItem
          className="p-3 border-0 d-flex justify-content-between align-items-center"
          style={{
            backgroundColor: "#f5f5f5",
            fontWeight: 600,
            borderBottom: "1px solid #ddd",
          }}
        >
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-4 text-muted" />
            <strong>ASSIGNMENTS</strong>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className="fw-bold text-secondary" style={{ fontSize: "13px" }}>
              40% of Total
            </span>
            <Button variant="outline-dark" size="sm">
              <FaPlus />
            </Button>
          </div>
        </ListGroupItem>

        {/* ---- Assignment Rows ---- */}
        {assignments.length === 0 ? (
          <ListGroupItem className="text-muted text-center py-4">
            No assignments found for this course.
          </ListGroupItem>
        ) : (
assignments.map((a: Assignment) => (
            <ListGroupItem
              key={a._id}
              className="d-flex justify-content-between align-items-center border-top"
              style={{
                backgroundColor: "#fff",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f9f9f9")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
            >
              <div>
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-4 text-muted" />
                  <Link
                    href={`/Courses/${cid}/Assignments/${a._id}`}
                    className="fw-bold text-decoration-none"
                    style={{ color: "#0073e6", fontSize: "15px" }}
                  >
                    {a.title}
                  </Link>
                </div>
                <div className="text-muted ms-4" style={{ fontSize: "13px" }}>
                  <span style={{ color: "#c62828" }}>
                    {a.modules?.join(", ") || "Multiple Modules"}
                  </span>{" "}
                  | <strong>Available</strong>{" "}
                  {new Date(a.availableFrom).toLocaleDateString("en-US")} |{" "}
                  <strong>Due</strong>{" "}
                  {new Date(a.dueDate).toLocaleDateString("en-US")} | {a.points} pts
                </div>
              </div>
              <FaCheckCircle className="text-success fs-4" />
            </ListGroupItem>
          ))
        )}
      </ListGroup>
    </div>
  );
}
