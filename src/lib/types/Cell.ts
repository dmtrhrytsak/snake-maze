import { Position } from './Position';

export interface Cell {
  id: string;
  position: Position;
  isHoveredOn: boolean;
}
