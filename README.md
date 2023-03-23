# Solid Chessground
SolidJS wrapper for chessground, lichess.org's chessboard UI 🚀

## Installation
```bash
pnpm add chessground solid-chessground
# or
yarn add chessground solid-chessground
# or
npm i chessground solid-chessground
```

## Usage

### JSX Component
```tsx
import { Chessground } from "solid-chessground";

import "chessground/assets/chessground.base.css"
// the included colour theme is quite ugly :/
import "chessground/assets/chessground.brown.css"
import "chessground/assets/chessground.cburnett.css"

function App() {
  let initialConfig = {
    fen: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1"
  };

  let [config, setConfig] = createSignal(initialConfig);

  setTimeout(() => {
    setConfig({
      ...config(),
      fen: "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
      orientation: "black",
    })
  }, 2000);

  return (
    <Chessground config={config()}/>
  );
}

```

### Direct Api Access via Utility
```tsx
import { Chessground, Config } from "solid-chessground";

import "chessground/assets/chessground.base.css"
// the included colour theme is quite ugly :/
import "chessground/assets/chessground.brown.css"
import "chessground/assets/chessground.cburnett.css"

function App() {
  let cg = useChessground();
  onCleanup(() => cg.destroy());  // TODO: investigate moving this into useChessground

  const config: Partial<Config> = {
    fen: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1"
  }

  setTimeout(() => {
    cg.api!.set({
      fen: "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
      orientation: "black",
    })
  }, 1000);

  return (
    <div style={"width: 100%; aspect-ratio: 1/1"} ref={el => cg.mount(el, config)}></div>
  );
}
```

## Roadmap for 1.0.0
- [x] Add simplified component
- [x] Add cleanup logic
- [ ] Add examples (& gh-pages demo)
- [ ] Readme