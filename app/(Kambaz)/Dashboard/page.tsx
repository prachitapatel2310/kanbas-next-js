"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { enrollCourse, unenrollCourse } from "./enrollmentsReducer";
import Link from "next/link";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  FormControl,
} from "react-bootstrap";
import * as db from "../Database";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

  const [showAll, setShowAll] = useState(false);

  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/image/images.png",
    description: "New Description",
  });

  const isFaculty = currentUser?.role === "Faculty";
  const userEnrollments = enrollments.filter(
    (e) => e.userId === currentUser?._id
  );
  const enrolledCourseIds = userEnrollments.map((e) => e.courseId);
  const visibleCourses = showAll
    ? db.courses
    : db.courses.filter((c: any) => enrolledCourseIds.includes(c._id));

  const handleEnrollToggle = (courseId: string, isEnrolled: boolean) => {
    if (!currentUser) return;
    if (isEnrolled) {
      dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
    } else {
      dispatch(enrollCourse({ userId: currentUser._id, courseId }));
    }
  };

  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="fw-bold mb-3">
        Dashboard
      </h1>
      <hr />

      {/* --------------------- FACULTY VIEW --------------------- */}
      {isFaculty && (
        <>
          <h5>
            New Course
            <Button
              className="float-end"
              variant="primary"
              id="wd-add-new-course-click"
              onClick={() => dispatch(addNewCourse(course))}
            >
              Add
            </Button>
            <Button
              className="float-end me-2"
              variant="warning"
              id="wd-update-course-click"
              onClick={() => dispatch(updateCourse(course))}
            >
              Update
            </Button>
          </h5>
          <br />

          <FormControl
            className="mb-2"
            value={course.name}
            placeholder="Course Name"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            as="textarea"
            rows={3}
            className="mb-2"
            value={course.description}
            placeholder="Course Description"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />

          <h2 id="wd-dashboard-published">
            Published Courses ({courses.length})
          </h2>
          <hr />

          <Row xs={1} md={5} className="g-4">
            {courses.map((c: any) => (
              <Col key={c._id} style={{ width: "300px" }}>
                <Card>
                  <Link
                    href={`/Courses/${c._id}/Home`}
                    className="text-decoration-none text-dark"
                  >
                    <CardImg
                      src={c.image || "/image/images.png"}
                      variant="top"
                      width="100%"
                      height={160}
                    />
                    <CardBody>
                      <CardTitle className="text-nowrap overflow-hidden">
                        {c.name}
                      </CardTitle>
                      <CardText
                        className="overflow-hidden"
                        style={{ height: "100px" }}
                      >
                        {c.description}
                      </CardText>

                      <div className="d-flex justify-content-between align-items-center">
                        <Button variant="primary">Go</Button>
                        <div>
                          <Button
                            id="wd-edit-course-click"
                            variant="warning"
                            size="sm"
                            className="me-2"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(c);
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            id="wd-delete-course-click"
                            variant="danger"
                            size="sm"
                            onClick={(event) => {
                              event.preventDefault();
                              dispatch(deleteCourse(c._id));
                            }}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </CardBody>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}

      {/* --------------------- STUDENT VIEW --------------------- */}
      {!isFaculty && (
        <>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="fw-bold">Courses</h2>
            <Button
              variant="primary"
              onClick={() => setShowAll(!showAll)}
              className="px-4"
            >
              {showAll ? "My Enrollments" : "All Courses"}
            </Button>
          </div>

          <Row xs={1} md={5} className="g-4">
            {visibleCourses.map((c: any) => {
              const isEnrolled = enrolledCourseIds.includes(c._id);
              return (
                <Col key={c._id} style={{ width: "300px" }}>
                  <Card>
                    <CardImg
                      src={c.image || "/image/images.png"}
                      variant="top"
                      width="100%"
                      height={160}
                    />
                    <CardBody>
                      <CardTitle className="text-nowrap overflow-hidden">
                        {c.name}
                      </CardTitle>
                      <CardText
                        className="overflow-hidden"
                        style={{ height: "100px" }}
                      >
                        {c.description}
                      </CardText>
                      <div className="d-flex justify-content-between align-items-center">
                        <Button variant="primary" href={`/Courses/${c._id}/Home`}>
                          Go
                        </Button>
                        <Button
                          variant={isEnrolled ? "danger" : "success"}
                          size="sm"
                          onClick={() =>
                            handleEnrollToggle(c._id, isEnrolled)
                          }
                        >
                          {isEnrolled ? "Unenroll" : "Enroll"}
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </>
      )}
    </div>
  );
}
