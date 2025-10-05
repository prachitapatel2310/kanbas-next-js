"use client";

import Link from "next/link";
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

type Assignment = {
  id: string;
  title: string;
  available: string;
  due: string;
  points: number;
};

const courseAssignments: Record<string, Assignment[]> = {
  "1234": [
    {
      id: "a1",
      title: "A1 - ENV + HTML",
      available: "May 6 at 12:00am",
      due: "May 13 at 11:59pm",
      points: 100,
    },
    {
      id: "a2",
      title: "A2 - CSS + BOOTSTRAP",
      available: "May 13 at 12:00am",
      due: "May 20 at 11:59pm",
      points: 100,
    },
    {
      id: "a3",
      title: "A3 - JAVASCRIPT + REACT",
      available: "May 20 at 12:00am",
      due: "May 27 at 11:59pm",
      points: 100,
    },
  ],
  "2345": [
    {
      id: "a1",
      title: "A1 - Java Basics",
      available: "June 1 at 12:00am",
      due: "June 8 at 11:59pm",
      points: 50,
    },
    {
      id: "a2",
      title: "A2 - Objects",
      available: "June 8 at 12:00am",
      due: "June 15 at 11:59pm",
      points: 75,
    },
    {
      id: "a3",
      title: "A3 - Classes",
      available: "June 15 at 12:00am",
      due: "June 22 at 11:59pm",
      points: 100,
    },
    {
      id: "a4",
      title: "A4 - Polymorphism",
      available: "June 22 at 12:00am",
      due: "June 29 at 11:59pm",
      points: 100,
    },
  ],
  "3456": [
    {
      id: "a1",
      title: "A1 - C++ Basics",
      available: "June 1 at 12:00am",
      due: "June 8 at 11:59pm",
      points: 50,
    },
    {
      id: "a2",
      title: "A2 - Data Structures",
      available: "June 8 at 12:00am",
      due: "June 15 at 11:59pm",
      points: 75,
    },
    {
      id: "a3",
      title: "A3 - Algorithms",
      available: "June 15 at 12:00am",
      due: "June 22 at 11:59pm",
      points: 100,
    },
    {
      id: "a4",
      title: "A4 - DSA Capstone Project",
      available: "June 22 at 12:00am",
      due: "June 29 at 11:59pm",
      points: 100,
    },
  ],
};

export default function Assignments({ params }: { params: { cid: string } }) {
  const { cid } = params;
  const assignments = courseAssignments[cid] || [];

  return (
    <div id="wd-assignments" className="p-3">
      {/* ---- Top Controls ---- */}
      <div className="d-flex align-items-center mb-4 flex-wrap gap-2">
        {/* Search Bar */}
        <InputGroup style={{ maxWidth: "300px" }}>
          <FormControl placeholder="Search for Assignments" />
        </InputGroup>

        {/* + Group and + Assignment Buttons */}
        <Button
          variant="secondary"
          size="lg"
          className="fw-semibold d-flex align-items-center"
        >
          <MdOutlineGroupAdd className="me-2 fs-5" /> + Group
        </Button>
        <Button
          variant="danger"
          size="lg"
          className="fw-semibold d-flex align-items-center"
        >
          <FaPlus className="me-2 fs-5" /> + Assignment
        </Button>
      </div>

      {/* ---- Assignments Section ---- */}
      <ListGroup className="rounded-0 border">
        <ListGroupItem className="wd-assignment-group p-3 bg-light border-0 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-4 text-muted" />
            <strong>ASSIGNMENTS</strong>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className="fw-bold text-secondary">40% of Total</span>
            <Button variant="outline-dark" size="sm">
              <FaPlus />
            </Button>
          </div>
        </ListGroupItem>

        {/* ---- Assignment Rows ---- */}
        {assignments.map((a) => (
          <ListGroupItem
            key={a.id}
            className="d-flex justify-content-between align-items-center border-top"
          >
            <div>
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-4 text-muted" />
                <Link
                  href={`/Courses/${cid}/Assignments/${a.id}`}
                  className="fw-bold text-primary text-decoration-none"
                >
                  {a.title}
                </Link>
              </div>
              <div className="text-muted ms-4">
                <span className="text-danger">Multiple Modules</span> |{" "}
                <strong>Not available until</strong> {a.available} |{" "}
                <strong>Due</strong> {a.due} | {a.points} pts
              </div>
            </div>
            <FaCheckCircle className="text-success fs-4" />
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
