"use client";

import React from "react";
import { Form, Button, Table } from "react-bootstrap";

export default function AssignmentEditor({ params }: { params: Promise<{ cid: string; aid: string }> }) {
  // ✅ unwrap the params Promise using React.use()
  const { cid, aid } = React.use(params);

  return (
    <div id="wd-assignments-editor" className="p-4">
      <h3 className="fw-bold mb-4">
        Assignment {aid.toUpperCase()} for Course {cid}
      </h3>

      <Form.Group className="mb-4">
        <Form.Label className="fw-semibold">Assignment Name</Form.Label>
        <Form.Control id="wd-name" defaultValue={`Assignment ${aid.toUpperCase()}`} />
      </Form.Group>

      <Form.Group className="mb-5">
        <Form.Label className="fw-semibold">Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={8}
          id="wd-description"
          defaultValue={`The assignment is available online.\n\nSubmit a link to the landing page of your Web application running on Netlify.\n\nThe landing page should include the following:\n• Your full name and section\n• Links to each of the lab assignments\n• Link to the Kanbas application\n• Links to all relevant source code repositories\n\nThe Kanbas application should include a link to navigate back to the landing page.`}
        />
      </Form.Group>

      <Table borderless className="align-middle" style={{ maxWidth: "750px" }}>
        <tbody>
          <tr>
            <td className="text-end fw-semibold" style={{ width: "200px" }}>
              Points
            </td>
            <td>
              <Form.Control id="wd-points" type="number" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <td className="text-end fw-semibold">Assignment Group</td>
            <td>
              <Form.Select id="wd-group" defaultValue="assignments">
                <option value="assignments">ASSIGNMENTS</option>
                <option value="quizzes">QUIZZES</option>
                <option value="exams">EXAMS</option>
              </Form.Select>
            </td>
          </tr>
          <tr>
            <td className="text-end fw-semibold">Display Grade as</td>
            <td>
              <Form.Select id="wd-grade" defaultValue="percentage">
                <option value="percentage">Percentage</option>
                <option value="points">Points</option>
                <option value="complete">Complete/Incomplete</option>
              </Form.Select>
            </td>
          </tr>
          <tr>
            <td className="text-end fw-semibold">Submission Type</td>
            <td>
              <Form.Select id="wd-submission" defaultValue="online">
                <option value="online">Online</option>
                <option value="on-paper">On Paper</option>
                <option value="external">External Tool</option>
              </Form.Select>
            </td>
          </tr>
          <tr>
            <td className="text-end fw-semibold">Online Entry Options</td>
            <td>
              <Form.Check type="checkbox" label="Text Entry" defaultChecked />
              <Form.Check type="checkbox" label="Website URL" />
              <Form.Check type="checkbox" label="Media Recordings" />
              <Form.Check type="checkbox" label="File Uploads" />
            </td>
          </tr>
          <tr>
            <td className="text-end fw-semibold">Assign To</td>
            <td>
              <Form.Control id="wd-assign-to" defaultValue="Everyone" />
            </td>
          </tr>
          <tr>
            <td className="text-end fw-semibold">Due</td>
            <td>
              <Form.Control id="wd-due-date" type="date" defaultValue="2025-05-13" />
            </td>
          </tr>
          <tr>
            <td className="text-end fw-semibold">Available From</td>
            <td>
              <Form.Control id="wd-available-from" type="date" defaultValue="2025-05-06" />
            </td>
          </tr>
          <tr>
            <td className="text-end fw-semibold">Until</td>
            <td>
              <Form.Control id="wd-until-date" type="date" defaultValue="2025-05-20" />
            </td>
          </tr>
        </tbody>
      </Table>

      <div className="mt-4 d-flex gap-3">
        <Button variant="danger" className="px-4 fw-semibold">
          Save
        </Button>
        <Button variant="secondary" className="px-4 fw-semibold">
          Cancel
        </Button>
      </div>
    </div>
  );
}
