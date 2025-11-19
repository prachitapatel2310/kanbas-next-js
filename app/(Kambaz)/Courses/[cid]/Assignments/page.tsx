"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";

import { setAssignments, deleteAssignmentLocal } from "./reducer";
import * as client from "./client";

import { useEffect } from "react";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { BsGripVertical, BsThreeDotsVertical } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import AssignmentsControls from "./AssignmentControls";
import Link from "next/link";

export default function AssignmentsPage() {
  const { cid } = useParams();
  const dispatch = useDispatch();

  const { assignments } = useSelector(
    (state: RootState) => state.assignmentsReducer
  );

  // ===============================
  // 1. Load Assignments for Course
  // ===============================
  const fetchAssignments = async () => {
    if (!cid) return;
    const data = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(data));
  };

  useEffect(() => {
    fetchAssignments();
  }, [cid]);

  // ===============================
  // 2. Delete Assignment
  // ===============================
  const handleDelete = async (assignmentId: string) => {
    if (!confirm("Are you sure you want to delete this assignment?")) return;

    await client.deleteAssignment(assignmentId);
    dispatch(deleteAssignmentLocal(assignmentId));
  };

  // ===============================
  // 3. Filter Assignments for Course
  // ===============================
  const currentAssignments = assignments.filter(
    (a: any) => a.course === cid
  );

  return (
    <div id="wd-assignments-page" className="p-3">
      <AssignmentsControls cid={cid} refresh={fetchAssignments} />

      <br />

      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="p-0 mb-3 fs-5 border-gray">

          {/* TOP HEADER */}
          <div className="p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">

            {/* Left Side: Title */}
            <div className="d-flex align-items-center">
              <BsGripVertical className="fs-4 text-muted me-2" />
              <span className="fw-semibold">ASSIGNMENTS</span>
            </div>

            {/* Right Side */}
            <div className="d-flex align-items-center gap-3">
              <span className="text-muted small">(40% of Total)</span>

              {/* NEW + ASSIGNMENT BUTTON */}
              <Button
                size="sm"
                variant="light"
                className="fw-semibold"
                onClick={async () => {
                  const newAssignment = await client.createAssignment(
                    cid as string,
                    {
                      title: "New Assignment",
                      course: cid,
                      dueDate: "2024-01-01",
                      points: 100,
                      description: "",
                    }
                  );

                  await fetchAssignments();
                }}
              >
                + Assignment
              </Button>

              <BsThreeDotsVertical className="text-muted" />
            </div>
          </div>

          {/* ASSIGNMENT LIST */}
          <ListGroup className="rounded-0">
            {currentAssignments.map((assignment: any) => (
              <ListGroupItem
                key={assignment._id}
                className="p-3 ps-1 d-flex align-items-center justify-content-between"
                style={{ borderLeft: "3px solid green" }}
              >
                {/* LEFT AREA */}
                <div>
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="fs-4 text-muted me-2" />
                    <MdAssignment className="fs-5 text-secondary me-2" />

                    {/* Assignment Title */}
                    <Link
                      href={`/Courses/${cid}/Assignments/${assignment._id}`}
                      className="fw-semibold text-decoration-none text-dark"
                    >
                      {assignment.title}
                    </Link>
                  </div>

                  <div className="text-muted small ms-4">
                    Due {assignment.dueDate} | {assignment.points} pts
                  </div>
                </div>

                {/* RIGHT AREA: EDIT + DELETE */}
                <div className="d-flex align-items-center gap-3">

                  {/* ✏️ Edit Icon */}
                  <Link
                    href={`/Courses/${cid}/Assignments/${assignment._id}`}
                    className="text-secondary"
                    title="Edit Assignment"
                  >
                    <FaPencilAlt
                      className="fs-5"
                      style={{ cursor: "pointer" }}
                    />
                  </Link>

                  {/* Delete Button */}
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(assignment._id)}
                  >
                    Delete
                  </Button>
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
