import { configureStore } from '@reduxjs/toolkit';

import hoveredCellsReducer from './features/hoveredCellsSlice';

export const store = configureStore({
  reducer: hoveredCellsReducer,
});

export type RootState = ReturnType<typeof store.getState>;
