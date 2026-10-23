const fs = require('fs');
const path = require('path');
const https = require('https');

const targetDir = path.join(__dirname, '..', 'assets', 'images');

// Reliable Unsplash surf photo IDs
const replaceImages = {
  'lesson_beginner.jpg': 'https://images.unsplash.com/photo-1520116468418-0959441113b2?auto=format&fit=crop&w=1000&q=80',
  'lesson_intermediate.jpg': 'https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&w=1000&q=80',
  'gallery_lineup.jpg': 'https://images.unsplash.com/photo-1455729552865-3658a5d39692?auto=format&fit=crop&w=1000&q=80',
  'gallery_coastal.jpg': 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=1000&q=80'
};

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Status ${response.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
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
  for (const [filename, url] of Object.entries(replaceImages)) {
    const dest = path.join(targetDir, filename);
    try {
      await download(url, dest);
      console.log(`✓ Updated ${filename}`);
    } catch (e) {
      console.error(`✗ Error downloading ${filename}:`, e.message);
    }
  }
}

run();
