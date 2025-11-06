"use client";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Counter() {
  const [count, setCount] = useState(7);

  return (
    <div
      id="wd-counter-use-state"
      className="p-3 text-center d-flex flex-column align-items-center gap-3"
    >
      <h2 className="fw-bold">Counter: {count}</h2>

      <div className="d-flex gap-3">
        <Button
          id="wd-counter-up-click"
          variant="success"
          className="px-4 py-2 fs-5"
          onClick={() => setCount(count + 1)}
        >
          Up
        </Button>

        <Button
          id="wd-counter-down-click"
          variant="danger"
          className="px-4 py-2 fs-5"
          onClick={() => setCount(count - 1)}
        >
          Down
        </Button>
      </div>

      <hr />
    </div>
  );
}
