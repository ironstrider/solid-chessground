import { Chessground } from "chessground";
import { Api } from "chessground/api";
import { Config } from "chessground/config";

export interface ChessgroundState {
  init: (el: HTMLDivElement, config: Partial<Config>) => void,
  api: Api | null
};

export function useChessground(): ChessgroundState {
  const state: ChessgroundState = {
    init: (el: HTMLDivElement, config: Partial<Config>) => {
      state.api = Chessground(el, config);
    },
    api: null
  };

  return state
}

export type { Config }