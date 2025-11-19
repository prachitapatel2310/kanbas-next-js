"use client";

import React, { useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import FormCheck from "react-bootstrap/FormCheck";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function WorkingWithArrays() {
  const API = `${HTTP_SERVER}/lab5/todos`;

  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    completed: false,
  });

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>

      {/* Retrieve All */}
      <h4>Retrieving Arrays</h4>
      <a className="btn btn-primary" href={API}>Get Todos</a>
      <hr />

      {/* Retrieve by ID */}
      <h4>Retrieving an Item by ID</h4>
      <a className="btn btn-primary float-end" href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>
      <FormControl
        className="w-50"
        defaultValue={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr />

      {/* Filter */}
      <h4>Filtering Completed</h4>
      <a className="btn btn-primary" href={`${API}?completed=true`}>
        Get Completed Todos
      </a>
      <hr />

      {/* Create */}
      <h3>Creating New Items</h3>
      <a className="btn btn-primary" href={`${API}/create`}>Create Todo</a>
      <hr />

      {/* Delete */}
      <h3>Removing from an Array</h3>
      <a className="btn btn-danger float-end" href={`${API}/${todo.id}/delete`}>
        Remove Todo with ID = {todo.id}
      </a>
      <FormControl
        className="w-50"
        defaultValue={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr />

      {/* UPDATE TITLE */}
      <h3>Updating Title</h3>
      <a
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}/title/${todo.title}`}
      >
        Update Title
      </a>

      <FormControl
        className="w-25 float-start me-2"
        defaultValue={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />

      <FormControl
        className="w-50 float-start"
        defaultValue={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <br />
      <br />
      <hr />

      {/* UPDATE DESCRIPTION */}
      <h3>Updating Description</h3>
      <a
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}/description/${todo.description}`}
      >
        Update Description
      </a>

      <FormControl
        className="w-75"
        defaultValue={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <br />
      <br />
      <hr />

      {/* UPDATE COMPLETED */}
      <h3>Updating Completed Status</h3>

      <a
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}/completed/${todo.completed}`}
      >
        Update Completed
      </a>

      <FormCheck
        type="checkbox"
        label="Completed?"
        checked={todo.completed}
        onChange={(e) =>
          setTodo({ ...todo, completed: e.target.checked })
        }
      />
      <hr />
    </div>
  );
}
