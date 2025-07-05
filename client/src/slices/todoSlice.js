import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'http://localhost:4000/';

export const getAllTodos = createAsyncThunk('todo/getAllTodos', async () => {
  const res = await fetch(baseUrl + 'todo');
  return await res.json();
});

export const addTodo = createAsyncThunk('todo/addTodo', async (data) => {
  const response = await axios.post(baseUrl + 'todo', data);
  return response.data;
});

export const deleteTodo = createAsyncThunk('todo/deleteTodo', async (id) => {
    try {
      const response = await axios.delete(baseUrl + 'todo/' + id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
});

export const editTodo = createAsyncThunk('todo/editTodo', async ({id,data}) => {
    try{
        const response = await axios.put(baseUrl + 'todo/' + id , data );
        return response.data
    }
    catch (error){
        console.error(error)
    }
});

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  extraReducers: (builder) => {
    builder
      .addCase(getAllTodos.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state,action) => {
        return state.filter((todo) => todo._id !== action.payload.id);
      })
      .addCase(editTodo.fulfilled, (state,action) => {
        return state.map((todo) => todo._id === action.payload._id ? action.payload : todo);
      })
  }
});

export default todoSlice.reducer;
