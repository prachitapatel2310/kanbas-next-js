"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { add } from "./addReducer";
import { Button, FormControl } from "react-bootstrap";

export default function AddRedux() {
  const [a, setA] = useState(12);
  const [b, setB] = useState(23);
  const sum = useSelector((state: any) => state.add.sum);
  const dispatch = useDispatch();

  return (
    <div className="w-50 mx-auto p-3 border rounded" id="wd-add-redux">
      <h2 className="text-center mb-3">Add Redux</h2>
      <h4 className="text-center">
        {a} + {b} = {sum}
      </h4>

      <div className="d-flex flex-column gap-3 mt-3">
        <FormControl
          type="number"
          value={a}
          onChange={(e) => setA(parseInt(e.target.value))}
        />
        <FormControl
          type="number"
          value={b}
          onChange={(e) => setB(parseInt(e.target.value))}
        />
        <Button
          variant="primary"
          id="wd-add-redux-click"
          onClick={() => dispatch(add({ a, b }))}
        >
          Add Redux
        </Button>
      </div>

      <hr />
    </div>
  );
}
