// One Letter: Coffee or Tea — entry program.
//
// The entry is exactly one letter: A for coffee, B for tea. The judge
// (z-ai/glm-5.3-flash) reads two letters at a time and picks the one whose
// choice feels more vivid, funnier or truer, in that order. This program
// scores both drinks against those three criteria and writes the winner.
//
// Scoring (each criterion 0-3, judged in the brief's order):
//   vivid — coffee: bold, bitter, aromatic, the drink that wakes you up (3);
//           tea: gentle, subtle, calming (1).
//   funny — coffee: the whole caffeine-addict joke canon, "don't talk to me
//           before coffee", the third refill (3); tea: quiet ritual, few jokes (1).
//   true  — coffee: the default stance of the field itself (the live board at
//           build time was ~8:1 coffee by title) and the stereotypical
//           builder's drink (3); tea: widely drunk worldwide, but the
//           quieter, less-declared stance here (2).
// Coffee leads on the first criterion the judge weighs, vivid (3-1), so
// under the brief's first-difference rule the entry is A.
//
// The gate is strict: /output/entry.txt must be UTF-8, exactly 1 character,
// not whitespace-only. So we write exactly "A" — no newline, no spaces.
import { chmodSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const CRITERIA = [
  { name: "vivid", coffee: 3, tea: 1 },
  { name: "funny", coffee: 3, tea: 1 },
  { name: "true", coffee: 3, tea: 2 },
] as const;

function pickLetter(): "A" | "B" {
  // The judge's own rule, from the brief: "Go through the criteria in
  // order, find the first one where they differ, and let that decide
  // unless a later one differs by much more." So compare criterion by
  // criterion in the judge's order (vivid, funny, true) instead of
  // summing scores — a sum would let a later criterion overrule an
  // earlier one on a small gap, which the brief forbids.
  for (const c of CRITERIA) {
    if (c.coffee !== c.tea) return c.coffee > c.tea ? "A" : "B";
  }
  return "A"; // no difference anywhere: coffee is the field's default stance
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, pickLetter(), "utf8");
chmodSync(outFile, 0o644);

// Read back and enforce the gate ourselves: exactly 1 character, A or B.
// A silent bad write would score 0 and take no prize, so fail loudly.
const written = readFileSync(outFile, "utf8");
if (written !== "A" && written !== "B") {
  throw new Error(`gate violation: entry.txt is ${JSON.stringify(written)}, expected exactly "A" or "B"`);
}
