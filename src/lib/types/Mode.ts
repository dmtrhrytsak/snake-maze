export enum Mode {
  EASY_MODE = 'easyMode',
  NORMAL_MODE = 'normalMode',
  HARD_MODE = 'hardMode',
}

export type ModeInfo = {
  [key in Mode]: {
    field: number;
  };
};
