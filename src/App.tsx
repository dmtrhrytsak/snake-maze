import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { PickMode } from './components/PickMode';
import { Field } from './components/Field';
import { HoverCells } from './components/HoverCells';

import { Mode, ModeInfo } from './lib/types/Mode';
import { useFetch } from './lib/hooks/useFetch';

import { populateCells } from './redux/features/hoveredCellsSlice';

import './App.scss';

const App = () => {
  const [cellsNumber, setCellsNumber] = useState(0);
  const [mode, error] = useFetch<ModeInfo>('https://demo1030918.mockable.io/');

  const dispatch = useDispatch();

  const setupField = (choosenDifficulty: Mode | string) => {
    if (!mode) {
      return;
    }

    const cellsNumber = mode[choosenDifficulty as Mode]?.field || 0;

    dispatch(populateCells({ cellsNumber }));
    setCellsNumber(cellsNumber);
  };

  return (
    <div className="App">
      <div className="App__field-part">
        <PickMode setupField={setupField} className="App__pick-mode" />

        {cellsNumber !== 0 && <Field cellsNumber={cellsNumber} />}

        {error && (
          <p className="App__error">
            Sorry, we couldn't fetch data from the server.
          </p>
        )}
      </div>

      <HoverCells />
    </div>
  );
};

export { App };
