import { Chessground as Cg } from "chessground";
import { Api } from "chessground/api";
import { Config } from "chessground/config";
import { createEffect, on, onCleanup } from "solid-js";

interface ChessgroundProps {
  config: Partial<Config>,
  style?: string,
};

export default function Chessground(props: ChessgroundProps) {
  let api: Api | null = null;

  let mount = (el: HTMLDivElement) => {
    api = Cg(el, props.config);
  }

  createEffect(on(
    () => props.config,
    (config) => {
      api?.set(config)
    },
    {defer: true}
  ));

  onCleanup(() => {
    api?.destroy();
  });

  return (
    <div style={props.style || "width: 100%; aspect-ratio: 1/1"} ref={el => mount(el)}></div>
  )
}
