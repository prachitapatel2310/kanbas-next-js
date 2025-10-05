"use client";

import { ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import GreenCheckmark from "./GreenCheckMark"; 
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
  return (
    <div id="wd-modules" className="p-3">
      {/* ---- Top Controls ---- */}
      <ModulesControls />
      <br />
      <br />
      <br />
      <br />

      {/* ---- Modules List ---- */}
      <ListGroup className="rounded-0" id="wd-modules-list">

        {/* ---------- Week 1 ---------- */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray rounded-0">
          <div className="wd-title p-3 ps-2 bg-secondary text-white d-flex align-items-center justify-content-between">
            <span>Week 1 – Course Introduction, Syllabus & Agenda</span>
            <GreenCheckmark />
          </div>

          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-4">
              <strong>LEARNING OBJECTIVES</strong> <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-5">
              Introduction to the course <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-5">
              Learn what is Web Development <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-4">
              <strong>READING</strong> <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-5">
              Full Stack Developer – Chapter 1 – Introduction <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-5">
              Full Stack Developer – Chapter 2 – Creating User Interfaces <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-4">
              <strong>SLIDES</strong><LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-5">
              Introduction to Web Development <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-5">
              Creating an HTTP Server with Node.js <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-5">
              Creating a React Application <LessonControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        {/* ---------- Week 2 ---------- */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray rounded-0">
          <div className="wd-title p-3 ps-2 bg-secondary text-white d-flex align-items-center justify-content-between">
            <span>Week 2 – Formatting User Interfaces with HTML</span> 
            <GreenCheckmark />
          </div>

          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-4">
              <strong>LEARNING OBJECTIVES</strong> <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-5">
              Learn how to create user interfaces with HTML <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-5">
              Deploy the assignment to Netlify <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-4">
              <strong>SLIDES</strong> <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-5">
              Introduction to HTML and the DOM <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-5">
              Formatting Web content with Headings <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-5">
              Formatting content with Lists and Tables <LessonControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        {/* ---------- Week 3 ---------- */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray rounded-0">
          <div className="wd-title p-3 ps-2 bg-secondary text-white d-flex align-items-center justify-content-between">
            <span>Week 3 – CSS Basics and Box Model</span> 
            <GreenCheckmark />
          </div>

          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-4">
              <strong>LEARNING OBJECTIVES</strong> <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-5">
              Introduction to CSS <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-5">
              Selectors, properties, and values <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-5">
              Styling text, colors, and backgrounds <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-5">
              Box model: margins, borders, padding <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-4">
              <strong>SLIDES</strong> <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-5">
              CSS Basics and Selectors <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-5">
              Styling with Colors and Fonts <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-5">
              Box Model and Layouts <LessonControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>

      </ListGroup>
    </div>
  );
}
