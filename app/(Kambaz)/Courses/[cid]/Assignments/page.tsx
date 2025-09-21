import Link from "next/link";

type Assignment = {
  id: string;
  title: string;
  available: string;
  due: string;
  points: number;
};

const courseAssignments: Record<string, Assignment[]> = {
  "1234": [
    {
      id: "a1",
      title: "A1 - ENV + HTML",
      available: "May 6 at 12:00am",
      due: "May 13 at 11:59pm",
      points: 100,
    },
    {
      id: "a2",
      title: "A2 - CSS + BOOTSTRAP",
      available: "May 13 at 12:00am",
      due: "May 20 at 11:59pm",
      points: 100,
    },
    {
      id: "a3",
      title: "A3 - JAVASCRIPT + REACT",
      available: "May 20 at 12:00am",
      due: "May 27 at 11:59pm",
      points: 100,
    },
  ],
  "2345": [
    {
      id: "a1",
      title: "A1 - Java Basics",
      available: "June 1 at 12:00am",
      due: "June 8 at 11:59pm",
      points: 50,
    },
    {
      id: "a2",
      title: "A2 - Objects",
      available: "June 8 at 12:00am",
      due: "June 15 at 11:59pm",
      points: 75,
    },
    {
      id: "a3",
      title: "A3 - Classes",
      available: "June 15 at 12:00am",
      due: "June 22 at 11:59pm",
      points: 100,
    },
    {
      id: "a4",
      title: "A4 - Polymorphism",
      available: "June 22 at 12:00am",
      due: "June 29 at 11:59pm",
      points: 100,
    },
  ],

  "3456": [
    {
      id: "a1",
      title: "A1 - C++ Basics ",
      available: "June 1 at 12:00am",
      due: "June 8 at 11:59pm",
      points: 50,
    },
    {
      id: "a2",
      title: "A2 - Data Structures",
      available: "June 8 at 12:00am",
      due: "June 15 at 11:59pm",
      points: 75,
    },
    {
      id: "a3",
      title: "A3 - Algorithms",
      available: "June 15 at 12:00am",
      due: "June 22 at 11:59pm",
      points: 100,
    },
    {
      id: "a4",
      title: "A4 - DSA Capstone Project",
      available: "June 22 at 12:00am",
      due: "June 29 at 11:59pm",
      points: 100,
    },
  ],
};

export default function Assignments({ params }: { params: { cid: string } }) {
  const { cid } = params;
  const assignments = courseAssignments[cid] || [];

  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments" id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>

      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>

      <ul id="wd-assignment-list">
        {assignments.map((a) => (
          <li key={a.id} className="wd-assignment-list-item">
            <Link
              href={`/Courses/${cid}/Assignments/${a.id}`}
              className="wd-assignment-link"
            >
              {a.title}
            </Link>
            <div>
              Multiple Modules | <b>Not available until {a.available}</b> |{" "}
              <b>Due {a.due}</b> | {a.points} pts
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
