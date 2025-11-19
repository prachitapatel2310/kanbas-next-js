"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { redirect } from "next/navigation";
import { FormControl, Button } from "react-bootstrap";
import * as client from "../client";
import { setCurrentUser } from "../reducer";
import { RootState } from "../../store";

export default function Profile() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );

  const [profile, setProfile] = useState<any>({});
  const [errorMessage, setErrorMessage] = useState("");

  /** Load user into local state */
  useEffect(() => {
    if (!currentUser) {
      redirect("/Account/Signin");
      return;
    }
    setProfile(currentUser);
  }, [currentUser]);

  /** Updates user profile on server */
  const updateProfile = async () => {
    try {
      const updatedUser = await client.updateUser(profile);
      dispatch(setCurrentUser(updatedUser));
      alert("Profile updated successfully!");
    } catch (e: any) {
      console.error(e);
      setErrorMessage("Failed to update profile");
    }
  };

  /** Logs out user */
  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    redirect("/Account/Signin");
  };

  return (
    <div id="wd-profile-screen" className="p-4" style={{ maxWidth: "450px" }}>
      <h3 className="mb-4 fw-bold">Profile</h3>

      {errorMessage && (
        <div className="alert alert-danger mb-3">{errorMessage}</div>
      )}

      {/* LOGIN ID FIELD */}
      <FormControl
        className="mb-2"
        placeholder="Login ID"
        value={profile.loginId || ""}
        onChange={(e) => setProfile({ ...profile, loginId: e.target.value })}
      />

      {/* PASSWORD FIELD */}
      <FormControl
        className="mb-2"
        placeholder="Password"
        type="password"
        value={profile.password || ""}
        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
      />

      {/* FIRST NAME */}
      <FormControl
        className="mb-2"
        placeholder="First Name"
        value={profile.firstName || ""}
        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
      />

      {/* LAST NAME */}
      <FormControl
        className="mb-2"
        placeholder="Last Name"
        value={profile.lastName || ""}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
      />

      {/* SECTION */}
      <FormControl
        className="mb-2"
        placeholder="Section"
        value={profile.section || ""}
        onChange={(e) => setProfile({ ...profile, section: e.target.value })}
      />

      {/* ROLE */}
      <select
        className="form-control mb-2"
        value={profile.role || ""}
        onChange={(e) => setProfile({ ...profile, role: e.target.value })}
      >
        <option value="Student">Student</option>
        <option value="Faculty">Faculty</option>
        <option value="Teaching Assistant">Teaching Assistant</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
      </select>

      <Button
        onClick={updateProfile}
        className="w-100 mb-2"
        variant="primary"
      >
        Update
      </Button>

      <Button
        onClick={signout}
        className="w-100 mb-2"
        variant="danger"
      >
        Sign Out
      </Button>
    </div>
  );
}
