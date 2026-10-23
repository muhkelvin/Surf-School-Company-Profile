const fs = require('fs');
const path = require('path');

const files = [
  'index.html',
  'about.html',
  'lessons.html',
  'instructors.html',
  'gallery.html',
  'contact.html'
];

files.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Remove Demo Notice Banner
  content = content.replace(/<!-- Demo Notice Banner -->[\s\S]*?<\/aside>\s*/g, '');

  // 2. Clean email from .demo to .com
  content = content.replace(/hello@kalasurfco\.demo/g, 'hello@kalasurfco.com');

  // 3. Clean footer copyright & demo disclaimer
  content = content.replace(
    /<p>&copy; 2026 Kala Surf Co\. Dibuat sebagai Tinkerbench Portfolio Demo 05\. Seluruh hak cipta dilindungi\.<\/p>\s*<p class="text-\[11px\] text-salt-white\/50">\s*Identitas demo fiktif — dirancang untuk peragaan company profile sekolah surfing profesional\.\s*<\/p>/g,
    '<p>&copy; 2026 Kala Surf Co. Seluruh hak cipta dilindungi.</p>\n        <p class="text-[11px] text-salt-white/50">\n          Batu Karas, Pangandaran, Jawa Barat &bull; Authentic Surf Sanctuary\n        </p>'
  );

  // Fallback for any slight whitespace variations in the footer disclaimer
  content = content.replace(
    /Dibuat sebagai Tinkerbench Portfolio Demo 05\.\s*/g,
    ''
  );
  content = content.replace(
    /\s*<p class="text-\[11px\] text-salt-white\/50">\s*Identitas demo fiktif — dirancang untuk peragaan company profile sekolah surfing profesional\.\s*<\/p>/g,
    '\n        <p class="text-[11px] text-salt-white/50">\n          Batu Karas, Pangandaran, Jawa Barat &bull; Authentic Surf Sanctuary\n        </p>'
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Cleaned demo text from ${file}`);
});
