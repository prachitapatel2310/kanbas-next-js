import axios from "axios";

const API = process.env.NEXT_PUBLIC_HTTP_SERVER;

// GET all enrollments
export const fetchEnrollments = async () => {
  const { data } = await axios.get(`${API}/api/enrollments`);
  return data;
};

// POST new enrollment
export const createEnrollment = async (userId: string, courseId: string) => {
  const { data } = await axios.post(`${API}/api/enrollments`, {
    userId,
    courseId,
  });
  return data;
};

// DELETE enrollment
export const deleteEnrollment = async (enrollmentId: string) => {
  const { data } = await axios.delete(`${API}/api/enrollments/${enrollmentId}`);
  return data;
};
