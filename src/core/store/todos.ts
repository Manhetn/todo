import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INewTodo, ITodo } from '../../types/data';
import { nanoid } from 'nanoid';
import { RootState, AppDispatch } from './store';

interface ITodosState {
  list: ITodo[];
}

const initialState: ITodosState = {
  list: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<INewTodo>) => {
      state.list.push({
        _id: nanoid(),
        title: action.payload.title,
        complete: action.payload.complete,
      });
    },
    toggleComplete: (state, action: PayloadAction<ITodo>) => {
      const toggleTodo = state.list.find(
        (todo) => todo._id === action.payload._id
      );
      if (toggleTodo) {
        toggleTodo.complete = !toggleTodo.complete;
      }
    },
    removeTodo: (state, action: PayloadAction<ITodo>) => {
      state.list = state.list.filter((todo) => todo._id !== action.payload._id);
    },
    updateTodoes: (state, action: PayloadAction<ITodo[]>) => {
      state.list = action.payload;
    },
  },
});

const { reducer: todosReducer, actions } = todoSlice;

export const { addTodo, toggleComplete, removeTodo, updateTodoes } = actions;

export const getTodoes = () => (state: RootState) => state.todos.list;

export const updateTodoesList =
  (payload: ITodo[]) => (dispatch: AppDispatch) => {
    dispatch(updateTodoes(payload));
  };

export default todosReducer;
