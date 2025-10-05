"use client";

import { MdDoNotDisturbAlt, MdOutlineStream } from "react-icons/md";
import { FaCheckCircle, FaBell } from "react-icons/fa";
import { BiImport, BiBarChartSquare } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdMegaphone } from "react-icons/io";
import { Button } from "react-bootstrap";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "350px" }}>
      <h2 className="mb-3">Course Status</h2>

      {/* ---- Publish / Unpublish ---- */}
      <div className="d-flex mb-3">
        <div className="w-50 pe-1">
          <Button
            variant="secondary"
            size="lg"
            className="w-100 text-nowrap fw-semibold"
          >
            <MdDoNotDisturbAlt className="me-2 fs-5" />
            Unpublish
          </Button>
        </div>
        <div className="w-50 ps-1">
          <Button
            variant="success"
            size="lg"
            className="w-100 text-nowrap fw-semibold"
          >
            <FaCheckCircle className="me-2 fs-5" />
            Publish
          </Button>
        </div>
      </div>

      {/* ---- Import Options ---- */}
      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-2 text-start fw-semibold"
      >
        <BiImport className="me-2 fs-5" />
        Import Existing Content
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-2 text-start fw-semibold"
      >
        <LiaFileImportSolid className="me-2 fs-5" />
        Import from Commons
      </Button>

      {/* ---- Remaining Buttons ---- */}
      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-2 text-start fw-semibold"
      >
        <AiOutlineHome className="me-2 fs-5" />
        Choose Home Page
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-2 text-start fw-semibold"
      >
        <MdOutlineStream className="me-2 fs-5" />
        View Course Stream
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-2 text-start fw-semibold"
      >
        <IoMdMegaphone className="me-2 fs-5" />
        New Announcement
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-2 text-start fw-semibold"
      >
        <BiBarChartSquare className="me-2 fs-5" />
        New Analytics
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-2 text-start fw-semibold"
      >
        <FaBell className="me-2 fs-5" />
        View Course Notifications
      </Button>
    </div>
  );
}
