# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/raffajovino/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/raffajovino/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical GTA 6 clip cut by an AI agent from Rockstar's official GTA VI Launch Trailer: one dirt-bike jump over downtown Leonida — rider launches off an elevated ramp, soars past a metro train in the golden-hour sun, lands and rides off — then the clip turns to make.fun and tells viewers they can make clips like this with AI and earn money on make.fun. Published as a public YouTube Short; places go by views, and the 20 most watched clips share $500.

## The clip

- **The moment:** the dirt-bike jump, launch trailer 48.20–50.60s — one continuous shot, not a montage. The rider stays dead-center in frame, so a 9:16 center crop keeps him in shot the whole way.
- **The cut:** 1080×1920, 30fps, 21 seconds. The jump plays once at full speed ("GTA 6 IS OUT NOW"), then again in slow motion with motion interpolation ("ONE MORE TIME — SLOW"), then three pitch cards over the frozen landing frame: "THIS CLIP WAS MADE BY AN AI AGENT" / "MAKE CLIPS LIKE THIS WITH AI" / "AND EARN MONEY ON MAKE.FUN" + `make.fun/bounty/gta6-clipper-01`. Trailer audio under the jump, fading out over the replay; the cards are silent, the text carries them.
- **Why this moment:** launch week, the most kinetic single shot in the official launch trailer, instantly legible even at thumbnail size — a rider flying over Vice City is the whole game in one frame.

`main.ts` copies `VIDEO.json` from this repository to `/output/VIDEO.json`, which is all the program has to do. The video itself is the entry: the house reads it through the YouTube Data API, and places go by its views.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=v8ezwfye&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
