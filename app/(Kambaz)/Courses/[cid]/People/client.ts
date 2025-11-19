import axios from "axios";
/* eslint-disable @typescript-eslint/no-explicit-any */
const API = process.env.NEXT_PUBLIC_HTTP_SERVER;

// GET all users
export const fetchAllUsers = async () => {
  const { data } = await axios.get(`${API}/api/people`);
  return data;
};

// GET people enrolled in a course
export const fetchUsersByCourse = async (courseId: string) => {
  const { data } = await axios.get(`${API}/api/people/course/${courseId}`);
  return data;
};

// CREATE user
export const createUser = async (user: any) => {
  const { data } = await axios.post(`${API}/api/people`, user);
  return data;
};

// UPDATE user
export const updateUser = async (id: string, user: any) => {
  const { data } = await axios.put(`${API}/api/people/${id}`, user);
  return data;
};

// DELETE user
export const deleteUser = async (id: string) => {
  await axios.delete(`${API}/api/people/${id}`);
};
