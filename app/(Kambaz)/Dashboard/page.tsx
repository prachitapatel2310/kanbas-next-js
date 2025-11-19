"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

import { setCourses } from "../Courses/reducer";
import * as coursesClient from "../Courses/client";

import {
  setEnrollments,
  addEnrollment,
  removeEnrollment,
} from "./enrollmentsReducer";
import * as enrollmentsClient from "./enrollmentClient"; // FIXED spelling

import { RootState } from "../store";

export default function Dashboard() {
  const dispatch = useDispatch();

  /** Redux state */
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const { list: enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);

  /** Local state */
  const [showAll, setShowAll] = useState(false);

  const [course, setCourse] = useState<any>({
    _id: "",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/image/images.png",
    description: "New Description",
  });

  const isFaculty = currentUser?.role === "Faculty";

  // ============================
  // LOAD COURSES + ENROLLMENTS
  // ============================
  const loadCourses = async () => {
    const allCourses = await coursesClient.fetchAllCourses();
    dispatch(setCourses(allCourses));
  };

  const loadEnrollments = async () => {
    const data = await enrollmentsClient.fetchEnrollments();
    dispatch(setEnrollments(data));
  };

  useEffect(() => {
    if (!currentUser) return;
    loadCourses();
    loadEnrollments();
  }, [currentUser]);

  // ============================
  // COURSE CRUD (Faculty Only)
  // ============================
  const onAddNewCourse = async () => {
    const newCourse = await coursesClient.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
  };

  const onDeleteCourse = async (courseId: string) => {
    await coursesClient.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((c) => c._id !== courseId)));
  };

  const onUpdateCourse = async () => {
    await coursesClient.updateCourse(course);
    dispatch(
      setCourses(
        courses.map((c) => (c._id === course._id ? course : c))
      )
    );
  };

  // ============================
  // ENROLLMENT LOGIC (Persistent)
  // ============================
  const userEnrollments = enrollments.filter(
    (e: any) => e.userId === currentUser?._id
  );

  const enrolledCourseIds = userEnrollments.map((e: any) => e.courseId);

  const visibleCourses = showAll
    ? courses
    : courses.filter((c: any) => enrolledCourseIds.includes(c._id));

  const handleEnrollToggle = async (courseId: string, isEnrolled: boolean) => {
  if (!currentUser) return;

  if (isEnrolled) {
    // Find enrollment for this user + course
    const enrollment = enrollments.find(
      (e: any) => e.userId === currentUser._id && e.courseId === courseId
    );

    if (!enrollment) {
      console.warn("No enrollment found to remove.");
      return;
    }

    // Remove from backend
    await enrollmentsClient.deleteEnrollment(enrollment._id);

    // Remove from Redux
    dispatch(removeEnrollment(enrollment._id));
  } else {
    // Create new enrollment on backend
    const newEnrollment = await enrollmentsClient.createEnrollment(
      currentUser._id,
      courseId
    );

    // Add to Redux
    dispatch(addEnrollment(newEnrollment));
  }
  };

  // ============================
  // RENDER UI
  // ============================
  return (
    <div className="p-4" id="wd-dashboard">
      <h1 className="fw-bold mb-3">Dashboard</h1>
      <hr />

      {/* ============================ */}
      {/* FACULTY VIEW */}
      {/* ============================ */}
      {isFaculty && (
        <>
          <h5>
            New Course
            <Button
              className="float-end"
              variant="primary"
              onClick={onAddNewCourse}
            >
              Add
            </Button>

            <Button
              className="float-end me-2"
              variant="warning"
              onClick={onUpdateCourse}
            >
              Update
            </Button>
          </h5>

          <br />

          <FormControl
            className="mb-2"
            value={course.name}
            placeholder="Course Name"
            onChange={(e) =>
              setCourse({ ...course, name: e.target.value })
            }
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
          <h2>Published Courses ({courses.length})</h2>
          <hr />

          <Row xs={1} md={4} className="g-4">
            {courses.map((c: any) => (
              <Col key={c._id}>
                <Card>
                  <Link
                    href={`/Courses/${c._id}/Home`}
                    className="text-decoration-none text-dark"
                  >
                    <CardImg src={c.image || "/image/images.png"} height={160} />

                    <CardBody>
                      <CardTitle>{c.name}</CardTitle>
                      <CardText className="overflow-hidden" style={{ height: "100px" }}>
                        {c.description}
                      </CardText>

                      <div className="d-flex justify-content-between">
                        <Button variant="primary">Go</Button>

                        <div>
                          <Button
                            variant="warning"
                            size="sm"
                            className="me-2"
                            onClick={(e) => {
                              e.preventDefault();
                              setCourse(c);
                            }}
                          >
                            Edit
                          </Button>

                          <Button
                            variant="danger"
                            size="sm"
                            onClick={(e) => {
                              e.preventDefault();
                              onDeleteCourse(c._id);
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

      {/* ============================ */}
      {/* STUDENT VIEW */}
      {/* ============================ */}
      {!isFaculty && (
        <>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="fw-bold">{showAll ? "All Courses" : "My Enrollments"}</h2>

            <Button variant="primary" onClick={() => setShowAll(!showAll)}>
              {showAll ? "Show My Enrollments" : "Show All Courses"}
            </Button>
          </div>

          <Row xs={1} md={4} className="g-4">
            {visibleCourses.map((c: any) => {
              const isEnrolled = enrolledCourseIds.includes(c._id);

              return (
                <Col key={c._id}>
                  <Card>
                    <CardImg src={c.image || "/image/images.png"} height={160} />

                    <CardBody>
                      <CardTitle>{c.name}</CardTitle>
                      <CardText className="overflow-hidden" style={{ height: "100px" }}>
                        {c.description}
                      </CardText>

                      <div className="d-flex justify-content-between align-items-center">
                        <Button variant="primary" href={`/Courses/${c._id}/Home`}>
                          Go
                        </Button>

                        <Button
                          size="sm"
                          variant={isEnrolled ? "danger" : "success"}
                          onClick={() => handleEnrollToggle(c._id, isEnrolled)}
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
