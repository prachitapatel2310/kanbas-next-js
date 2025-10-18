"use client";
import { useParams } from "next/navigation";
import db from "../../../Database";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
  const { cid } = useParams();
  const { users, enrollments } = db;

  return (
    <table className="table">
      <tbody>
        {users
          .filter((usr: any) =>
            enrollments.some(
              (en) => en.user === usr._id && en.course === cid
            )
          )
          .map((user: any) => (
            <tr key={user._id}>
              <td>
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                {user.firstName} {user.lastName}
              </td>
              <td>{user.role}</td>
              <td>{user.section}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
