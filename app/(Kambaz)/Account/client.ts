import axios from "axios";
/* eslint-disable @typescript-eslint/no-explicit-any */

// Axios instance that supports cookies (required for sessions)
const axiosWithCredentials = axios.create({
  withCredentials: true,
});

export const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export const USERS_API = `${HTTP_SERVER}/api/users`;

/* ----------------------- AUTH API ----------------------- */

// SIGN IN
export const signin = async (credentials: any) => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/signin`,
    credentials
  );
  return response.data;
};

// SIGN UP
export const signup = async (user: any) => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/signup`,
    user
  );
  return response.data;
};

// PROFILE (retrieve session user)
export const profile = async () => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/profile`
  );
  return response.data;
};

// SIGN OUT
export const signout = async () => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/signout`
  );
  return response.data;
};

// UPDATE USER
export const updateUser = async (user: any) => {
  const response = await axiosWithCredentials.put(
    `${USERS_API}/${user._id}`,
    user
  );
  return response.data;
};
