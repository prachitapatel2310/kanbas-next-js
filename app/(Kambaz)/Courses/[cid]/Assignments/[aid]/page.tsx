"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../store";
import { addAssignment, updateAssignment } from "../reducer";
import { Form, Button, Card, Row, Col } from "react-bootstrap";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector(
    (state: RootState) => state.assignmentsReducer
  );

  const existing =
    aid && aid !== "new"
      ? assignments.find((a: any) => a._id === aid)
      : null;

  const [form, setForm] = useState({
    title: existing?.title || "New Assignment",
    description: existing?.description || "New Assignment Description",
    points: existing?.points || 100,
    availableFrom: existing?.availableFrom || "",
    dueDate: existing?.dueDate || "",
    untilDate: existing?.untilDate || "",
  });

  useEffect(() => {
    if (existing) {
      setForm({
        title: existing.title,
        description: existing.description,
        points: existing.points,
        availableFrom: existing.availableFrom,
        dueDate: existing.dueDate,
        untilDate: existing.untilDate,
      });
    }
  }, [existing]);

  const handleSave = () => {
    if (!form.title.trim()) {
      alert("Assignment name is required.");
      return;
    }

    if (existing) {
      dispatch(updateAssignment({ ...existing, ...form }));
    } else {
      dispatch(addAssignment({ ...form, course: cid }));
    }

    router.push(`/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <div className="p-4" style={{ maxWidth: "750px" }}>
      <h3 className="fw-bold mb-4">
        {existing ? "Edit Assignment" : "New Assignment"}
      </h3>

      {/* Assignment Name */}
      <Form.Group className="mb-4">
        <Form.Label className="fw-semibold">Assignment Name</Form.Label>
        <Form.Control
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
      </Form.Group>

      {/* Description */}
      <Form.Group className="mb-4">
        <Form.Control
          as="textarea"
          rows={4}
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
      </Form.Group>

      {/* Points */}
      <Form.Group className="mb-4">
        <Form.Label className="fw-semibold">Points</Form.Label>
        <Form.Control
          type="number"
          value={form.points}
          onChange={(e) =>
            setForm({ ...form, points: Number(e.target.value) })
          }
          style={{ maxWidth: "150px" }}
        />
      </Form.Group>

      {/* Assign Section */}
      <div className="mb-4">
        <Form.Label className="fw-semibold d-block mb-2">Assign</Form.Label>
        <Card className="p-3" style={{ maxWidth: "600px" }}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Due</Form.Label>
            <Form.Control
              type="date"
              value={form.dueDate}
              onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
            />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group>
                <Form.Label className="fw-semibold">Available from</Form.Label>
                <Form.Control
                  type="date"
                  value={form.availableFrom}
                  onChange={(e) =>
                    setForm({ ...form, availableFrom: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label className="fw-semibold">Until</Form.Label>
                <Form.Control
                  type="date"
                  value={form.untilDate}
                  onChange={(e) =>
                    setForm({ ...form, untilDate: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
          </Row>
        </Card>
      </div>

      {/* Buttons */}
      <hr className="my-4" />
      <div className="d-flex gap-3 justify-content-end">
        <Button
          variant="secondary"
          className="px-4 fw-semibold"
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          variant="danger"
          className="px-4 fw-semibold"
          onClick={handleSave}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
