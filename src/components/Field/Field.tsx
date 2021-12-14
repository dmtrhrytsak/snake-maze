import { useSelector } from 'react-redux';

import { CellItem } from '../CellItem';

import { RootState } from '../../redux/store';

import './Field.scss';

type Props = {
  cellsNumber: number;
};

const Field: React.FC<Props> = ({ cellsNumber }) => {
  const cells = useSelector((state: RootState) => state.cells);

  return (
    <div
      className="Field"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cellsNumber}, 1fr)`,
        gridAutoRows: '1fr',
      }}
    >
      {cells.map(({ id, isHoveredOn }, index) => (
        <CellItem key={id} id={id} index={index} isHoveredOn={isHoveredOn} />
      ))}
    </div>
  );
};

export { Field };
