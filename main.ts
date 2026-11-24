// The Long Roast: Lawmakers and the File They Cannot Convert — entry for make.fun
// u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7
// Writes one satirical sentence (1-320 chars) to /output/entry.txt:
// lawmakers who would regulate AI but cannot convert a file to PDF.

import { mkdirSync, writeFileSync } from "node:fs";

// The roast sets up the lawmaker's authority — a 412-page law telling AI
// how to think — then undercuts it with the one file they cannot convert:
// the bill itself, photographed page by page because nobody in the office
// knows what the "Save as PDF" button does. The punch lands on the last
// three words: printed pages — the law exists only on paper, literally.
const LINE =
  "They wrote a 412-page law telling AI how to think, then asked an intern to turn the bill into a PDF by taking a photo of the printed pages.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
