import axios from "axios";

const API_URL = "https://https://jvburzmlkd.execute-api.us-east-1.amazonaws.com/";

export const getTodos = () => axios.get(API_URL);
export const addTodo = (todo) => axios.post(API_URL, todo);
export const updateTodo = (id, todo) => axios.put(`${API_URL}/${id}`, todo);
export const deleteTodo = (id) => axios.delete(`${API_URL}/${id}`);
