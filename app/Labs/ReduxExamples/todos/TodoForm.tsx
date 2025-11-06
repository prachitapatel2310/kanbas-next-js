"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { Button, FormControl, ListGroupItem } from "react-bootstrap";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();

  return (
    <ListGroupItem className="d-flex gap-2 align-items-center">
      <Button
        variant="primary"
        id="wd-add-todo-click"
        onClick={() => dispatch(addTodo(todo))}
      >
        Add
      </Button>
      <Button
        variant="warning"
        id="wd-update-todo-click"
        onClick={() => dispatch(updateTodo(todo))}
      >
        Update
      </Button>
      <FormControl
        className="flex-grow-1"
        placeholder="Enter a todo"
        value={todo.title}
        onChange={(e) =>
          dispatch(setTodo({ ...todo, title: e.target.value }))
        }
      />
    </ListGroupItem>
  );
}
