import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

import { Cell } from '../../lib/types/Cell';

interface PopulateCellsPayload {
  cellsNumber: number;
}

interface ToggleHoveredPayload {
  id: Cell['id'];
}

type intiailStateType = {
  cells: Cell[];
};

const initialState: intiailStateType = { cells: [] };

const hoveredCellsSlice = createSlice({
  name: 'hoveredCells',
  initialState: initialState,
  reducers: {
    populateCells: (state, action: PayloadAction<PopulateCellsPayload>) => {
      const newCells: Cell[] = [];

      for (let row = 1; row <= action.payload.cellsNumber; row++) {
        for (let col = 1; col <= action.payload.cellsNumber; col++) {
          newCells.push({
            id: nanoid(),
            position: { row, col },
            isHoveredOn: false,
          });
        }
      }

      state.cells = newCells;
    },
    toggleHovered: (state, action: PayloadAction<ToggleHoveredPayload>) => {
      const cellToToggleeHovered = state.cells.find(
        (cell) => cell.id === action.payload.id
      );

      if (!cellToToggleeHovered) {
        return;
      }

      cellToToggleeHovered.isHoveredOn = !cellToToggleeHovered.isHoveredOn;
    },
  },
});

export const { populateCells, toggleHovered } = hoveredCellsSlice.actions;

export default hoveredCellsSlice.reducer;
