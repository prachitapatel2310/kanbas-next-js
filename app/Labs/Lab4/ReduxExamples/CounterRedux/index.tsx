"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./CounterReducer";
import { Button } from "react-bootstrap";

export default function CounterRedux() {
  const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div id="wd-counter-redux" className="p-3 text-center">
      <h2>Counter Redux</h2>
      <h3 className="mb-3">{count}</h3>

      <div className="d-flex justify-content-center gap-3">
        <Button
          variant="success"
          id="wd-counter-redux-increment-click"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>

        <Button
          variant="danger"
          id="wd-counter-redux-decrement-click"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>

      <hr />
    </div>
  );
}
