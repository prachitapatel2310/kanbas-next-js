"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
import { Button, ListGroupItem } from "react-bootstrap";

export default function TodoItem({ todo }: { todo: { id: string; title: string } }) {
  const dispatch = useDispatch();

  return (
    <ListGroupItem className="d-flex justify-content-between align-items-center">
      <span>{todo.title}</span>
      <div className="d-flex gap-2">
        <Button
          variant="danger"
          size="sm"
          id="wd-delete-todo-click"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete
        </Button>
        <Button
          variant="secondary"
          size="sm"
          id="wd-set-todo-click"
          onClick={() => dispatch(setTodo(todo))}
        >
          Edit
        </Button>
      </div>
    </ListGroupItem>
  );
}
