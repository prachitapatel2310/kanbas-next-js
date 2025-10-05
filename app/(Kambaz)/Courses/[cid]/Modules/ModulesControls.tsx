"use client";

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckMark"; 

export default function ModulesControls() {
  return (
    <div
      id="wd-modules-controls"
      className="d-flex align-items-center gap-3 flex-wrap mb-3"
    >
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
          className="fw-semibold d-flex align-items-center"
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

      {/* Add Module Button */}
      <Button
        variant="danger"
        size="lg"
        id="wd-add-module-btn"
        className="fw-semibold"
      >
        <FaPlus
          className="position-relative me-2"
          style={{ bottom: "1px" }}
        />
        Module
      </Button>
    </div>
  );
}
