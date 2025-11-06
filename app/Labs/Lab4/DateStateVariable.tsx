"use client";
import { useState, useEffect } from "react";
import { FormControl } from "react-bootstrap";

export default function DateStateVariable() {
  const [startDate, setStartDate] = useState<Date | null>(null);

  // Initialize the date only after hydration (avoid SSR mismatch)
  useEffect(() => {
    setStartDate(new Date());
  }, []);

  // Converts a Date object to a proper YYYY-MM-DD string (local timezone)
  const dateObjectToHtmlDateString = (date: Date) => {
    const offset = date.getTimezoneOffset();
    const localDate = new Date(date.getTime() - offset * 60000);
    return localDate.toISOString().split("T")[0];
  };

  if (!startDate) return null; // avoid hydration flash

  return (
    <div id="wd-date-state-variables">
      <h2>Date State Variables</h2>
      {/* raw ISO string */}
      <h3>{JSON.stringify(startDate)}</h3>
      {/* formatted local date */}
      <h3>{dateObjectToHtmlDateString(startDate)}</h3>
      {/* date input that syncs with the local date */}
      <FormControl
        type="date"
        value={dateObjectToHtmlDateString(startDate)}
        onChange={(e) => setStartDate(new Date(e.target.value))}
      />
      <hr />
    </div>
  );
}
