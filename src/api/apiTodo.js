import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL

const api = axios.create({
    baseURL
})

export const createTodo = async (todo) => {
    try {
        const res = await api.post("/api/todos/create",todo);
        return res;
    } catch (error) {
        return error;
    }
};

export const getTodos = async () => {
    try {
        const res = await api.get("/api/todos");
        return res;
    } catch (error) {
        return error;
    }
};

export const getTodo = async (id) => {
    try {
        const res = await api.get(`/api/todos/${id}`);
        return res;
    } catch (error) {
        return error;
    }
};

export const updateTodo = async (id, todo) => {
    try {
        const res = await api.put(`/api/todos/update/${id}`, todo);
        return res;
    } catch (error) {
        return error;
    }
};

export const deleteTodo = async (id) => {
    try {
        const res = await api.delete(`/api/todos/delete/${id}`);
        return res;
    } catch (error) {
        return error;
    }
};

// const apis = {
//     createTodo,
//     getTodos,
//     getTodo,
//     updateTodo,
//     deleteTodo,
// }

// export default apis