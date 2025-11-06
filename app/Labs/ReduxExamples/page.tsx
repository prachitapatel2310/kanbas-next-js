"use client";
import AddRedux from "./AddRedux";
import CounterRedux from "./CounterRedux";
import HelloRedux from "./HelloRedux";
import TodoList from "./todos/TodoList";

export default function ReduxExamples() {
  return (
    <div id="wd-redux-examples" className="p-3">
      <h2>Redux Examples</h2>
      <HelloRedux />
      <CounterRedux />
      <AddRedux />
      <TodoList />
      <hr />
    </div>
  );
}
