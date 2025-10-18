"use client";
import { Row, Col, Card, Button } from "react-bootstrap";
import { CardBody, CardImg, CardText, CardTitle } from "react-bootstrap";
import Link from "next/link";
import db from "../Database";

export default function Dashboard() {
  const courses = db.courses;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
            <Col key={course._id} style={{ width: "300px" }}>
              <Card>
                <Link
                  href={`/Courses/${course._id}/Home`}
                  className="text-decoration-none text-dark"
                >
                  <CardImg
                    src="/image/reactjs.jpg"
                    variant="top"
                    width="100%"
                    height={160}
                  />
                  <CardBody>
                    <CardTitle>{course.name}</CardTitle>
                    <CardText>{course.description}</CardText>
                    <Button variant="primary">Go</Button>
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
