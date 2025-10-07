"use client";

import Link from "next/link";
import Image from "next/image";
import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineDashboard } from "react-icons/ai";

export default function AccountNavigation() {
  return (
    <div
      id="wd-account-navigation"
      className="text-center p-3"
      style={{ maxWidth: "250px" }}
    >

      {/* Signin/Signup/Profile Links */}
      <div className="border-start ps-3 text-start mx-auto" style={{ width: "120px" }}>
        <Link href="/Account/Signin" className="d-block text-dark fw-semibold mb-2">
          Signin
        </Link>
        <Link href="/Account/Signup" className="d-block text-danger fw-semibold mb-2">
          Signup
        </Link>
        <Link href="/Account/Profile" className="d-block text-danger fw-semibold">
          Profile
        </Link>
      </div>

    
    </div>
  );
}
