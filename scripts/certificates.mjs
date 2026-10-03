import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const dir = path.join('public', 'certificates');
const thumbs = path.join(dir, 'thumbs');

fs.mkdirSync(thumbs, { recursive: true });

for (const file of fs.readdirSync(dir)) {
  if (!file.endsWith('.webp')) continue;
  const source = path.join(dir, file);
  const target = path.join(thumbs, file);
  const fresh = fs.existsSync(target) && fs.statSync(target).mtimeMs >= fs.statSync(source).mtimeMs;
  if (fresh) continue;
  await sharp(source).resize({ width: 480, withoutEnlargement: true }).webp({ quality: 78 }).toFile(target);
  console.log(`Made thumbnail ${target}`);
}
