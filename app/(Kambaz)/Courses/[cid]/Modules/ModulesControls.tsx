"use client";

import { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckMark";
import ModuleEditor from "./ModuleEditor";

export default function ModulesControls({
  moduleName,
  setModuleName,
  addModule,
}: {
  moduleName: string;
  setModuleName: (title: string) => void;
  addModule: () => void;
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      id="wd-modules-controls"
      className="d-flex align-items-center justify-content-between flex-wrap mb-3"
    >
      {/* Left side: Collapse, View Progress, Publish */}
      <div className="d-flex align-items-center gap-2 flex-wrap text-nowrap">
        {/* Collapse All */}
        <Button
          variant="secondary"
          size="lg"
          id="wd-collapse-all"
          className="fw-semibold"
        >
          Collapse All
        </Button>

        {/* View Progress */}
        <Button
          variant="secondary"
          size="lg"
          id="wd-view-progress"
          className="fw-semibold"
        >
          View Progress
        </Button>

        {/* Publish All Dropdown */}
        <Dropdown>
          <DropdownToggle
            variant="secondary"
            size="lg"
            id="wd-publish-all-btn"
            className="fw-semibold d-flex align-items-center gap-2"
          >
            <GreenCheckmark /> Publish All
          </DropdownToggle>

          <DropdownMenu>
            <DropdownItem id="wd-publish-all">
              <GreenCheckmark /> Publish All
            </DropdownItem>
            <DropdownItem id="wd-publish-all-modules-and-items">
              <GreenCheckmark /> Publish all modules and items
            </DropdownItem>
            <DropdownItem id="wd-publish-modules-only">
              <GreenCheckmark /> Publish modules only
            </DropdownItem>
            <DropdownItem id="wd-unpublish-all-modules-and-items">
              Unpublish all modules and items
            </DropdownItem>
            <DropdownItem id="wd-unpublish-modules-only">
              Unpublish modules only
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      {/* Right side: + Module Button */}
      <div>
        <Button
          variant="danger"
          size="lg"
          id="wd-add-module-btn"
          className="fw-semibold"
          onClick={handleShow}
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Module
        </Button>
      </div>

      {/* Modal for adding a new module */}
      <ModuleEditor
        show={show}
        handleClose={handleClose}
        dialogTitle="Add Module"
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}
      />
    </div>
  );
}
