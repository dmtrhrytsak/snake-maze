import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';

import './HoverCells.scss';

const HoverCells = () => {
  const hoveredCells = useSelector((state: RootState) =>
    state.cells.filter((cell) => cell.isHoveredOn)
  );

  return (
    <div className="HoverCells">
      <h2 className="HoverCells__title">Hover squares</h2>

      <div className="HoverCells__cells">
        {hoveredCells.map((hoveredCell) => (
          <p key={hoveredCell.id} className="HoverCells__cell-info">
            row {hoveredCell.position.row} col {hoveredCell.position.col}
          </p>
        ))}
      </div>
    </div>
  );
};

export { HoverCells };
