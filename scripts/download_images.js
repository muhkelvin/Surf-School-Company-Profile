const fs = require('fs');
const path = require('path');
const https = require('https');

const targetDir = path.join(__dirname, '..', 'assets', 'images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const images = {
  'hero_surf.jpg': 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1600&q=80',
  'about_story.jpg': 'https://images.unsplash.com/photo-1455729552865-3658a5d39692?auto=format&fit=crop&w=1200&q=80',
  'instructor_wayan.jpg': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  'instructor_sarah.jpg': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  'instructor_rizki.jpg': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
  'lesson_beginner.jpg': 'https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=1000&q=80',
  'lesson_private.jpg': 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=1000&q=80',
  'lesson_group.jpg': 'https://images.unsplash.com/photo-1528150395403-992a693e26c8?auto=format&fit=crop&w=1000&q=80',
  'lesson_intermediate.jpg': 'https://images.unsplash.com/photo-1415604924850-b142617450dd?auto=format&fit=crop&w=1000&q=80',
  'gallery_lineup.jpg': 'https://images.unsplash.com/photo-1471922694855-fa59ac7f7bc0?auto=format&fit=crop&w=1000&q=80',
  'gallery_boards.jpg': 'https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&w=1000&q=80',
  'gallery_sunset.jpg': 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=80',
  'location_beach.jpg': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
};

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(dest));
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log('Downloading curated editorial assets...');
  for (const [filename, url] of Object.entries(images)) {
    const dest = path.join(targetDir, filename);
    try {
      await download(url, dest);
      console.log(`✓ Downloaded ${filename}`);
    } catch (e) {
      console.error(`✗ Error downloading ${filename}:`, e.message);
    }
  }
  console.log('Finished downloading all assets!');
}

run();
