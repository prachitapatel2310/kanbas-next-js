"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { FormControl, Button } from "react-bootstrap";
import { setCurrentUser } from "../reducer";
import * as client from "../client";

export default function Signin() {
  const [credentials, setCredentials] = useState({
    loginId: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const signin = async () => {
    try {
      const user = await client.signin(credentials); // MUST send loginId
      if (!user) {
        setErrorMessage("Invalid login ID or password");
        return;
      }
      dispatch(setCurrentUser(user));
      router.push("/Dashboard");
    } catch (error: any) {
      console.error(error);
      setErrorMessage(error.response?.data?.message || "Signin failed");
    }
  };

  return (
    <div id="wd-signin-screen" className="p-4" style={{ maxWidth: "400px" }}>
      <h1 className="mb-4 fw-bold">Sign In</h1>

      {errorMessage && (
        <div className="alert alert-danger mb-3">{errorMessage}</div>
      )}

      {/* LOGIN ID FIELD */}
      <FormControl
        value={credentials.loginId}
        onChange={(e) =>
          setCredentials({ ...credentials, loginId: e.target.value })
        }
        className="mb-3"
        placeholder="Login ID"
        id="wd-loginId"
      />

      <FormControl
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        className="mb-3"
        placeholder="Password"
        type="password"
        id="wd-password"
      />

      <Button
        onClick={signin}
        id="wd-signin-btn"
        className="w-100 mb-2"
        variant="danger"
      >
        Sign In
      </Button>

      <a
        id="wd-signup-link"
        href="/Account/Signup"
        className="d-block text-center mt-2"
      >
        Sign Up
      </a>
    </div>
  );
}
