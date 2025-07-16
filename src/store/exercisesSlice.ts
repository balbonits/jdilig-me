import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchExercises = createAsyncThunk('exercises/fetch', async () => {
  const res = await fetch('/generated/exercises.json');
  if (!res.ok) throw new Error('Failed to fetch exercises');
  const { exercises } = await res.json();
  return exercises;
});

interface ExercisesState {
  data: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState: { data: [], status: 'idle', error: null } as ExercisesState,
  reducers: {},  extraReducers: (builder) => {
    builder
      .addCase(fetchExercises.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchExercises.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchExercises.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
      });
  },
});

export default exercisesSlice.reducer;
