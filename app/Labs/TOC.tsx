import { Nav, NavItem, NavLink } from "react-bootstrap";
import Link from "next/link";

export default function TOC() {
  return (
    <Nav variant="pills">
      <NavItem>
        <NavLink as={Link} href="/Labs" id="wd-lab-home-link">
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink as={Link} href="/Labs/Lab1" id="wd-lab1-link">
          Lab 1
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink as={Link} href="/Labs/Lab2" id="wd-lab2-link">
          Lab 2
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink as={Link} href="/Labs/Lab3" id="wd-lab3-link">
          Lab 3
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink as={Link} href="/Account/Signin" id="wd-signin-link">
          Kambaz
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://github.com/prachitapatel2310/kanbas-next-js" target="_blank" rel="noopener noreferrer">
          GitHub
        </NavLink>
      </NavItem>
    </Nav>
  );
}
