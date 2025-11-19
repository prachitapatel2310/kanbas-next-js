import axios from "axios";
/* eslint-disable @typescript-eslint/no-explicit-any */

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export const TODOS_API = `${HTTP_SERVER}/lab5/todos`;

// Fetch welcome message
export const fetchWelcomeMessage = async () => {
  const response = await axios.get(`${HTTP_SERVER}/lab5/welcome`);
  return response.data;
};

// Fetch all todos
export const fetchTodos = async () => {
  const response = await axios.get(TODOS_API);
  return response.data;
};

// Create new todo via old GET route
export const createNewTodo = async () => {
  const response = await axios.get(`${TODOS_API}/create`);
  return response.data;
};

// Create new todo via POST (preferred method)
export const postNewTodo = async (todo: any) => {
  const response = await axios.post(TODOS_API, todo);
  return response.data;
};

// Delete todo via old GET route
export const removeTodo = async (todo: any) => {
  const response = await axios.get(`${TODOS_API}/${todo.id}/delete`);
  return response.data;
};

// Delete todo via DELETE (preferred method)
export const deleteTodo = async (todo: any) => {
  const response = await axios.delete(`${TODOS_API}/${todo.id}`);
  return response.data;
};

// Update todo via PUT
export const updateTodo = async (todo: any) => {
  const response = await axios.put(`${TODOS_API}/${todo.id}`, todo);
  return response.data;
};

