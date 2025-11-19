"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as client from "./client";

import {
  setPeople,
  addPerson,
  updatePerson,
  removePerson,
} from "./reducer";

import { Button, Table, FormControl } from "react-bootstrap";

export default function PeoplePage() {
  const dispatch = useDispatch();

  const { list: people } = useSelector((state: RootState) => state.peopleReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);

  const isFaculty = currentUser?.role === "Faculty";

  const [person, setPerson] = useState<any>({
    firstName: "",
    lastName: "",
    role: "Student",
  });

  const loadPeople = async () => {
    const data = await client.fetchAllUsers();
    dispatch(setPeople(data));
  };

  useEffect(() => {
    loadPeople();
  }, []);

  const handleCreate = async () => {
    const newUserPayload = {
      firstName: person.firstName,
      lastName: person.lastName,
      role: person.role,
    };

    const newUser = await client.createUser(newUserPayload);
    dispatch(addPerson(newUser));

    setPerson({ firstName: "", lastName: "", role: "Student" });
  };

  const handleUpdate = async () => {
    const updatedPayload = {
      firstName: person.firstName,
      lastName: person.lastName,
      role: person.role,
    };

    await client.updateUser(person._id, updatedPayload);
    dispatch(updatePerson({ ...person }));

    setPerson({ firstName: "", lastName: "", role: "Student" });
  };

  const handleDelete = async (id: string) => {
    await client.deleteUser(id);
    dispatch(removePerson(id));
  };

  const startEditing = (u: any) => {
    setPerson({
      _id: u._id,
      firstName: u.firstName,
      lastName: u.lastName,
      role: u.role,
    });
  };

  return (
    <div className="p-4">
      <h2 className="fw-bold mb-3">People</h2>

      {isFaculty && (
        <>
          <h5>Create / Edit User</h5>

          <FormControl
            className="mb-2"
            placeholder="First Name"
            value={person.firstName}
            onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
          />

          <FormControl
            className="mb-2"
            placeholder="Last Name"
            value={person.lastName}
            onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
          />

          <FormControl
            className="mb-2"
            placeholder="Role (Student / Faculty / TA)"
            value={person.role}
            onChange={(e) => setPerson({ ...person, role: e.target.value })}
          />

          <div className="mt-2 mb-3">
            <Button className="me-2" onClick={handleCreate}>
              Create
            </Button>

            <Button variant="warning" onClick={handleUpdate}>
              Update
            </Button>
          </div>
        </>
      )}

      <Table bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            {isFaculty && <th>Actions</th>}
          </tr>
        </thead>

        <tbody>
          {people.map((u: any) => (
            <tr key={u._id}>
              <td>{u.firstName} {u.lastName}</td>
              <td>{u.role}</td>

              {isFaculty && (
                <td>
                  <Button size="sm" className="me-2" onClick={() => startEditing(u)}>
                    Edit
                  </Button>

                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => handleDelete(u._id)}
                  >
                    Delete
                  </Button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
