"use client";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import * as client from "./client";
import { useRouter } from "next/navigation";

interface Props {
  cid: string | string[] | undefined;
  refresh: () => Promise<void>;
}

export default function AssignmentsControls({ cid, refresh }: Props) {
  const router = useRouter();

  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  ) as { currentUser: { role: string } | null };

  const isFaculty = currentUser?.role === "FACULTY";

  const onAddAssignment = async () => {
    if (!cid) return;

    const newAssignment = {
      title: "New Assignment",
      course: cid,
      dueDate: "2024-01-01",
      points: 100,
      description: "",
    };

    // Create assignment
    const created = await client.createAssignment(cid as string, newAssignment);

    // Refresh list
    await refresh();

    // Redirect to editor
    router.push(`/Courses/${cid}/Assignments/${created._id}`);
  };

  return (
    <div id="wd-assignments-controls" className="mb-3">
      <div className="d-flex align-items-center justify-content-between">
        <div className="flex-fill me-2" style={{ maxWidth: "400px" }}>
          <InputGroup>
            <InputGroup.Text className="bg-white border-secondary-subtle">
              <BsSearch className="text-muted" />
            </InputGroup.Text>
            <FormControl
              placeholder="Search..."
              aria-label="Search"
              className="border-secondary-subtle"
            />
          </InputGroup>
        </div>

        {isFaculty && (
          <div className="d-flex">
            <Button
              variant="secondary"
              className="me-2 btn-sm d-inline-flex align-items-center"
            >
              <FaPlus className="me-2" />
              Group
            </Button>

            <Button
              variant="danger"
              className="btn-sm d-inline-flex align-items-center"
              onClick={onAddAssignment}
            >
              <FaPlus className="me-2" />
              Assignment
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
