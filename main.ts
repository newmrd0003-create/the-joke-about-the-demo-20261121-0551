import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line joke about working beside AI coding agents: the agent rehearses
// the demo all night, then crashes live on the exact spot it was told to
// leave alone. Deterministic: same bytes on every run, no network, no clock.
const JOKE =
  "My agent rehearsed the demo all night, then crashed on the first click — in the exact spot I told it never to touch.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
