"use client";

import Link from "next/link";
import { Form, Button } from "react-bootstrap";

export default function Profile() {
  return (
    <div
      id="wd-profile-screen"
      className="p-4"
      style={{ maxWidth: "400px", margin: "auto" }}
    >
      <h3 className="mb-4 fw-semibold">Profile</h3>

      <Form>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            defaultValue="alice"
            placeholder="Username"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            defaultValue="123"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="text" defaultValue="Alice" placeholder="First Name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="text" defaultValue="Wonderland" placeholder="Last Name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="date" defaultValue="2000-01-01" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            defaultValue="alice@wonderland.com"
            placeholder="Email"
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Select defaultValue="USER">
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </Form.Select>
        </Form.Group>

        <Link href="/Account/Signin">
          <Button
            variant="danger"
            size="lg"
            className="w-100 fw-semibold"
            id="wd-signout-btn"
          >
            Signup
          </Button>
        </Link>
      </Form>
    </div>
  );
}
