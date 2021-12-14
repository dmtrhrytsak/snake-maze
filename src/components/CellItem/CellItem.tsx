import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { toggleHovered } from '../../redux/features/hoveredCellsSlice';

import './CellItem.scss';
import { Cell } from '../../lib/types/Cell';

type Props = {
  index: number;
} & Omit<Cell, 'position'>;

const CellItem: React.FC<Props> = ({ id, index, isHoveredOn }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={classNames('CellItem', { 'CellItem--hovered': isHoveredOn })}
      onMouseEnter={() => dispatch(toggleHovered({ id }))}
    >
      {index + 1}
    </div>
  );
};

export { CellItem };
