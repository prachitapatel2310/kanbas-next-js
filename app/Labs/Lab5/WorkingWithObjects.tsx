"use client";
import React, { useState } from "react";
import FormControl from "react-bootstrap/FormControl";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: "CS101",
    name: "Introduction to Programming",
    description: "Learn the basics of programming",
    course: "Computer Science",
  });

  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      {/* ===================== */}
      {/* GET ENTIRE ASSIGNMENT */}
      {/* ===================== */}
      <h4>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary mb-3"
        href={`${ASSIGNMENT_API_URL}`}
      >
        Get Assignment
      </a>
      <hr />

      {/* ========================= */}
      {/* GET ONLY ASSIGNMENT TITLE */}
      {/* ========================= */}
      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary mb-3"
        href={`${ASSIGNMENT_API_URL}/title`}
      >
        Get Title
      </a>
      <hr />

      {/* ========================= */}
      {/* UPDATE ASSIGNMENT TITLE   */}
      {/* ========================= */}
      <h4>Modifying Assignment Title</h4>

      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end mb-2"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>

      <FormControl
        className="w-75"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <hr />

      {/* ========================= */}
      {/* UPDATE ASSIGNMENT SCORE   */}
      {/* ========================= */}
      <h4>Modifying Assignment Score</h4>

      <a
        id="wd-update-assignment-score"
        className="btn btn-warning float-end mb-2"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
      >
        Update Score
      </a>

      <FormControl
        className="w-75"
        id="wd-assignment-score"
        type="number"
        defaultValue={assignment.score}
        onChange={(e) =>
          setAssignment({
            ...assignment,
            score: parseInt(e.target.value),
          })
        }
      />
      <hr />

      {/* ============================== */}
      {/* UPDATE ASSIGNMENT COMPLETED    */}
      {/* ============================== */}
      <h4>Modifying Properties: Completed</h4>

      <a
        id="wd-update-assignment-completed"
        className="btn btn-success float-end mb-2"
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
      >
        Update Completed
      </a>

      <div className="form-check w-75">
        <input
          type="checkbox"
          className="form-check-input"
          id="wd-assignment-completed"
          checked={assignment.completed}
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })
          }
        />
        <label className="form-check-label" htmlFor="wd-assignment-completed">
          Completed?
        </label>
      </div>
      <hr />

      {/* =================== */}
      {/* MODULE SECTION      */}
      {/* =================== */}
      <h3 className="mt-5">Working With Module Object</h3>

      {/* =================== */}
      {/* GET ENTIRE MODULE   */}
      {/* =================== */}
      <h4>Retrieving Module</h4>
      <a
        id="wd-retrieve-module"
        className="btn btn-primary mb-3"
        href={`${MODULE_API_URL}`}
      >
        Get Module
      </a>
      <hr />

      {/* ====================== */}
      {/* GET ONLY MODULE NAME   */}
      {/* ====================== */}
      <h4>Retrieving Module Name</h4>
      <a
        id="wd-retrieve-module-name"
        className="btn btn-primary mb-3"
        href={`${MODULE_API_URL}/name`}
      >
        Get Module Name
      </a>
      <hr />

      {/* ====================== */}
      {/* UPDATE MODULE NAME     */}
      {/* ====================== */}
      <h4>Modifying Module Properties: Name</h4>

      <a
        id="wd-update-module-name"
        className="btn btn-primary float-end mb-2"
        href={`${MODULE_API_URL}/name/${module.name}`}
      >
        Update Name
      </a>

      <FormControl
        className="w-75"
        id="wd-module-name"
        defaultValue={module.name}
        onChange={(e) =>
          setModule({ ...module, name: e.target.value })
        }
      />
      <hr />

      {/* =========================== */}
      {/* UPDATE MODULE DESCRIPTION   */}
      {/* =========================== */}
      <h4>Modifying Module Properties: Description</h4>

      <a
        id="wd-update-module-description"
        className="btn btn-warning float-end mb-2"
        href={`${MODULE_API_URL}/description/${module.description}`}
      >
        Update Description
      </a>

      <FormControl
        as="textarea"
        rows={3}
        className="w-75"
        id="wd-module-description"
        defaultValue={module.description}
        onChange={(e) =>
          setModule({
            ...module,
            description: e.target.value,
          })
        }
      />
      <hr />
    </div>
  );
}