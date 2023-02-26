import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface IThemeState {
  type: 'light' | 'dark';
}

const initialState: IThemeState = {
  type: 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.type = state.type === 'dark' ? 'light' : 'dark';
    },
  },
});

const { reducer: themeReducer, actions } = themeSlice;

export const { changeTheme } = actions;

export const getTheme = () => (state: RootState) => state.theme.type;

export default themeReducer;
