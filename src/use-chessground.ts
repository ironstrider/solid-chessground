import { Chessground } from "chessground";
import { Api } from "chessground/api";
import { Config } from "chessground/config";

export interface ChessgroundState {
  mount: (el: HTMLDivElement, config: Partial<Config>) => void,
  cleanup: () => void,
  api: Api | null,
};

export function useChessground(): ChessgroundState {
  const state: ChessgroundState = {
    mount: (el: HTMLDivElement, config: Partial<Config>) => {
      state.api = Chessground(el, config);
    },
    cleanup: () => {
      state.api?.destroy();
    },
    api: null,
  };

  return state
}

export type { Config }