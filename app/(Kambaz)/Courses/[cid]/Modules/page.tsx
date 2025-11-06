"use client";

import { useState } from "react";
import { ListGroup, ListGroupItem, FormControl } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModulesControlButtons";
import {
  addModule,
  editModule,
  updateModule,
  deleteModule,
} from "./reducer";

export default function Modules() {
  const { cid } = useParams();
  const dispatch = useDispatch();

  // 🧠 State for new module input field
  const [moduleName, setModuleName] = useState("");

  // 📦 Get modules from Redux store (typed)
  const { modules } = useSelector((state: RootState) => state.modulesReducer);

  // 🎯 Filter modules for the current course
  const filteredModules = modules.filter((module: any) => module.course === cid);

  return (
    <div id="wd-modules" className="p-3">
      <h3 className="mb-3">Modules</h3>

      {/* 🧭 Module Controls */}
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={() => {
          if (!moduleName.trim()) return;
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }}
      />

      {/* 📋 Module List */}
      <ListGroup id="wd-modules-list" className="rounded-0">
        {filteredModules.map((module: any) => (
          <ListGroupItem key={module._id} className="p-0 mb-4">
            <div className="wd-title p-3 ps-2 bg-secondary text-white d-flex align-items-center justify-content-between">
              <div>
                <BsGripVertical className="me-2 fs-3" />

                {/* 📝 Normal Display */}
                {!module.editing && module.name}

                {/* ✏️ Inline Edit Mode */}
                {module.editing && (
                  <FormControl
                    className="w-50 d-inline-block"
                    defaultValue={module.name}
                    onChange={(e) =>
                      dispatch(updateModule({ ...module, name: e.target.value }))
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        dispatch(updateModule({ ...module, editing: false }));
                      }
                    }}
                  />
                )}
              </div>

              {/* ✏️ 🗑 ✅ ➕ ⋮ Controls */}
              <ModuleControlButtons
                moduleId={module._id}
                deleteModule={(moduleId) => dispatch(deleteModule(moduleId))}
                editModule={(moduleId) => dispatch(editModule(moduleId))}
              />
            </div>

            {/* 📘 Lessons List (if any) */}
            {module.lessons && module.lessons.length > 0 && (
              <ListGroup>
                {module.lessons.map((lesson: any) => (
                  <ListGroupItem key={lesson._id} className="ps-5">
                    <BsGripVertical className="me-2" /> {lesson.name}
                  </ListGroupItem>
                ))}
              </ListGroup>
            )}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
