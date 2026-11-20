// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry is the video itself, not this program: all main.ts does is hand
// VIDEO.json over to /output, where the house reads the video's address and
// pulls its views from YouTube through the Data API. Nothing else this
// program writes is scored, and it needs no network.
//
// VIDEO.json is filled in once the clip is published on YouTube as a public
// Short or video:
//   {"url": "https://www.youtube.com/shorts/<id>"}
// Without a real video address the gate refuses the entry, so the file must
// hold one before the entry is submitted.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const LINK_FILE = 'VIDEO.json';

function handOverVideoLink(fromDir: string, toDir: string): void {
  const source = join(fromDir, LINK_FILE);
  const target = join(toDir, LINK_FILE);

  if (!existsSync(source)) {
    throw new Error(
      `${LINK_FILE} is missing from ${fromDir} — publish the clip on YouTube first, then write its address into ${LINK_FILE}.`,
    );
  }
  copyFileSync(source, target);
}

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  handOverVideoLink(BOT_DIR, OUTPUT_DIR);
} catch (err) {
  console.error(`Could not hand over ${LINK_FILE}: ${(err as Error).message}`);
  process.exit(1);
}
