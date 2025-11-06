"use client";

import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckMark";

export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) {
  return (
    <div className="float-end d-flex align-items-center">
      {/* ✏️ Edit */}
      <FaPencil
        className="text-primary me-3 fs-5"
        role="button"
        title="Edit Module"
        onClick={() => editModule(moduleId)}
      />

      {/* 🗑 Delete */}
      <FaTrash
        className="text-danger me-3 fs-5"
        role="button"
        title="Delete Module"
        onClick={() => deleteModule(moduleId)}
      />

      {/* ✅ Published */}
      <GreenCheckmark />

      {/* ➕ Add */}
      <BsPlus
        className="fs-3 me-3"
        role="button"
        title="Add Lesson"
      />

      {/* ⋮ More */}
      <IoEllipsisVertical
        className="fs-4"
        role="button"
        title="More Options"
      />
    </div>
  );
}
