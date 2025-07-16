import { configureStore } from '@reduxjs/toolkit';
// import themeReducer from './themeSlice';
import exercisesReducer from './exercisesSlice';

export const store = configureStore({
  reducer: { 
    // theme: themeReducer,
    exercises: exercisesReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;