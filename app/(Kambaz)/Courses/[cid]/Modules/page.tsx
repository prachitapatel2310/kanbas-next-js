"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, FormControl } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";

import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModulesControlButtons";
import * as client from "../../client";

import {
  addModule,
  editModule,
  updateModule,
  deleteModule,
  setModules,
} from "./reducer";

export default function Modules() {
  const { cid } = useParams();
  const dispatch = useDispatch();

  /** Input for new module */
  const [moduleName, setModuleName] = useState("");

  /** Redux module list */
  const { modules } = useSelector((state: RootState) => state.modulesReducer);

  /* ------------------------------------------
     FETCH MODULES FOR THIS COURSE
  ------------------------------------------- */
  const fetchModules = async () => {
    if (!cid) return;
    const serverModules = await client.findModulesForCourse(cid as string);
    dispatch(setModules(serverModules));
  };

  useEffect(() => {
    fetchModules();
  }, [cid]);

  /* ------------------------------------------
     CREATE MODULE
  ------------------------------------------- */
  const onCreateModuleForCourse = async () => {
    if (!cid || !moduleName.trim()) return;

    const newModule = await client.createModuleForCourse(cid as string, {
      name: moduleName,
    });

    dispatch(addModule(newModule));
    setModuleName("");
  };

  /* ------------------------------------------
     DELETE MODULE
  ------------------------------------------- */
  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  /* ------------------------------------------
     UPDATE MODULE (server + redux)
  ------------------------------------------- */
  const onUpdateModule = async (module: any) => {
    await client.updateModule(module);

    const updated = modules.map((m: any) =>
      m._id === module._id ? module : m
    );

    dispatch(setModules(updated));
  };

  /* ------------------------------------------
     RENDER UI
  ------------------------------------------- */
  return (
    <div id="wd-modules" className="p-3">
      <h3 className="mb-3">Modules</h3>

      {/* Add Module Controls */}
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={onCreateModuleForCourse}
      />

      {/* Module List */}
      <ListGroup id="wd-modules-list" className="rounded-0">
        {modules.map((module: any) => (
          <ListGroupItem key={module._id} className="p-0 mb-4">
            <div className="wd-title p-3 ps-2 bg-secondary text-white d-flex align-items-center justify-content-between">

              {/* LEFT SIDE (name or input) */}
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />

                {/* Normal Display */}
                {!module.editing && module.name}

                {/* Editing Mode */}
                {module.editing && (
                  <FormControl
                    className="w-50 d-inline-block"
                    value={module.name}
                    onChange={(e) =>
                      dispatch(
                        updateModule({ ...module, name: e.target.value })
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        onUpdateModule({ ...module, editing: false });
                      }
                    }}
                  />
                )}
              </div>

              {/* RIGHT SIDE BUTTONS */}
              <ModuleControlButtons
                moduleId={module._id}
                editModule={(id) => dispatch(editModule(id))}
                deleteModule={(id) => onRemoveModule(id)}
              />
            </div>

            {/* LESSONS */}
            {module.lessons?.length > 0 && (
              <ListGroup>
                {module.lessons.map((lesson: any) => (
                  <ListGroupItem key={lesson._id} className="ps-5">
                    <BsGripVertical className="me-2" />
                    {lesson.name}
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
