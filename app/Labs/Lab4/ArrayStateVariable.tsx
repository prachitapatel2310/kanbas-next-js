"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";

export default function ArrayStateVariable() {
  // ✅ Local component state
  const [array, setArray] = useState<number[]>([1, 2, 3, 4, 5]);

  // ✅ Global Redux state
  const { todos } = useSelector((state: any) => state.todosReducer);

  // Local add/delete functions
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  const deleteElement = (index: number) => {
    setArray(array.filter((_, i) => i !== index));
  };

  return (
    <div id="wd-array-state-variables" className="p-3">
      <h2 className="mb-3">Array State Variable</h2>

      {/* ===== LOCAL STATE SECTION ===== */}
      <Button variant="primary" onClick={addElement} className="mb-3">
        Add Element
      </Button>

      <ListGroup className="mb-4">
        {array.map((item, index) => (
          <ListGroup.Item
            key={index}
            className="d-flex justify-content-between align-items-center"
          >
            <span>{item}</span>
            <Button
              variant="danger"
              size="sm"
              onClick={() => deleteElement(index)}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <hr />

      {/* ===== REDUX STATE SECTION ===== */}
      <h4 className="mt-4 mb-3">Redux Todos</h4>
      <ListGroup>
        {todos.map((todo: any) => (
          <ListGroupItem key={todo.id}>{todo.title}</ListGroupItem>
        ))}
      </ListGroup>

      <hr />
      <p className="text-muted mb-0">
        The first list above uses local <code>useState</code>, while the second
        one reads global Redux state using <code>useSelector</code>.
      </p>
    </div>
  );
}
