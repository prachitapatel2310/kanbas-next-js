"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { useState } from "react";
import { FormControl, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import * as client from "../client";

export default function Signup() {
  const [user, setUser] = useState<any>({
    loginId: "",
    password: ""
  });
  const dispatch = useDispatch();

  const signup = async () => {
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
  };

  return (
    <div id="wd-signup-screen">
      <h1>Sign up</h1>

      {/* LOGIN ID FIELD */}
      <FormControl
        id="wd-loginId"
        placeholder="Login ID"
        className="mb-2"
        value={user.loginId}
        onChange={(e) => setUser({ ...user, loginId: e.target.value })}
      />

      <FormControl
        id="wd-password"
        placeholder="Password"
        type="password"
        className="mb-2"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />

      <Button
        id="wd-signup-btn"
        className="btn btn-primary w-100 mb-2"
        onClick={signup}
        href="/Account/Signin"
      >
        Sign up
      </Button>

      <Link id="wd-signin-link" href="/Account/Signin">
        Sign in
      </Link>
    </div>
  );
}
