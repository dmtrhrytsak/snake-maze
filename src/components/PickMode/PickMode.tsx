import { useState } from 'react';
import classNames from 'classnames';

import { Mode } from '../../lib/types/Mode';

import './PickMode.scss';

type Props = {
  setupField: (choosenDifficulty: Mode | string) => void;
  className: string;
};

const PickMode: React.FC<Props> = ({ setupField, className }) => {
  const [isDifficultyChoosen, setIsDifficultyChoosen] = useState(true);
  const [choosenDifficulty, setChoosenDifficulty] = useState<Mode | string>('');

  return (
    <div className={classNames('PickMode', className)}>
      <select
        value={choosenDifficulty}
        className="PickMode__picker"
        onChange={(event) => {
          setChoosenDifficulty(event.target.value);
          setIsDifficultyChoosen(true);
        }}
      >
        <option value="">Pick Mode</option>
        <option value="easyMode">Easy Mode</option>
        <option value="normalMode">Normal Mode</option>
        <option value="hardMode">Hard Mode</option>
      </select>

      <button
        className="PickMode__button"
        onClick={() => {
          setIsDifficultyChoosen(choosenDifficulty !== '');
          setupField(choosenDifficulty);
        }}
      >
        Start
      </button>

      {!isDifficultyChoosen && (
        <p className="PickMode__error">Please, choose the difficulty!⚠️</p>
      )}
    </div>
  );
};

export { PickMode };
