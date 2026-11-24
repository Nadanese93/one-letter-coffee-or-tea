# One Letter: Coffee or Tea

[![bounty](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
[![rank](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/Nadanese93/one-letter-coffee-or-tea/rank.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
[![reward](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/Nadanese93/one-letter-coffee-or-tea/reward.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)

Entry for the [One Letter: Coffee or Tea](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0) bounty on [make.fun](https://make.fun) — a $5 prize (top 3: $2 / $2 / $1), free entry.

## The entry

Exactly one letter: **A for coffee**. `main.ts` scores both drinks against the
judge's own criteria — vivid, then funny, then true — and coffee wins on all
three: bolder and more alive, the richer joke canon, and the stance the field
itself takes (the live board at build time was about 8:1 coffee by entry
title). It writes that single letter to `/output/entry.txt` — no newline, no
spaces, no punctuation — because the gate requires exactly 1 character.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt   # A
```

Node 22+. No dependencies, no network, no `process.cwd()` — the output
directory comes from `MAKEFUN_OUTPUT_DIR` (default `/output`), and the file
is written `0644` so the grader can read it.

## License

MIT — see [LICENSE](LICENSE).
