import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public', 'images');

// Ensure public/images exists
if (!existsSync(publicDir)) {
  await mkdir(publicDir, { recursive: true });
}

// All Unsplash photo IDs verified as free-to-use under the Unsplash License.
// URL format: https://images.unsplash.com/photo-{ID}?w=1200&q=85&fm=jpg&fit=crop
const images = [
  // Hero background — modern kitchen with large island and pendant lights
  {
    url: 'https://images.unsplash.com/photo-1776395159816-ef1cc372552b?w=1920&h=1080&q=85&fm=jpg&fit=crop',
    dest: 'hero-background.jpg',
  },

  // Service cards
  {
    url: 'https://images.unsplash.com/photo-1682888813795-192fca4a10d9?w=1200&h=900&q=85&fm=jpg&fit=crop',
    dest: 'service-kitchen.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1634320611782-e7589d174453?w=1200&h=900&q=85&fm=jpg&fit=crop',
    dest: 'service-bathroom.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1634320611782-e7589d174453?w=1200&h=900&q=85&fm=jpg&fit=crop',
    dest: 'product-bathroom.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1773867567872-3ad1fa481082?w=1200&h=900&q=85&fm=jpg&fit=crop',
    dest: 'service-basement.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1618832515490-e181c4794a45?w=1200&h=900&q=85&fm=jpg&fit=crop',
    dest: 'service-addition.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1649083048770-82e8ffd80431?w=1200&h=900&q=85&fm=jpg&fit=crop',
    dest: 'service-whole-home.jpg',
  },

  // Blog thumbnails
  {
    url: 'https://images.unsplash.com/photo-1665507279638-5b48073c637b?w=800&h=600&q=85&fm=jpg&fit=crop',
    dest: 'blog-kitchen-costs.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1682888813789-c39fe30921e2?w=800&h=600&q=85&fm=jpg&fit=crop',
    dest: 'blog-open-concept.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1572742482459-e04d6cfdd6f3?w=800&h=600&q=85&fm=jpg&fit=crop',
    dest: 'blog-bathroom-timeline.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1773867567872-3ad1fa481082?w=800&h=600&q=85&fm=jpg&fit=crop',
    dest: 'blog-basement-guide.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1618832515490-e181c4794a45?w=800&h=600&q=85&fm=jpg&fit=crop',
    dest: 'blog-home-addition.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1774600166432-ba8ac640b318?w=800&h=600&q=85&fm=jpg&fit=crop',
    dest: 'blog-contractor-tips.jpg',
  },

  // Portfolio — kitchens
  {
    url: 'https://images.unsplash.com/photo-1776395159816-ef1cc372552b?w=900&h=675&q=85&fm=jpg&fit=crop',
    dest: 'portfolio-kitchen-1.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1682888813795-192fca4a10d9?w=900&h=675&q=85&fm=jpg&fit=crop',
    dest: 'portfolio-kitchen-2.jpg',
  },

  // Portfolio — bathrooms
  {
    url: 'https://images.unsplash.com/photo-1634320611782-e7589d174453?w=900&h=675&q=85&fm=jpg&fit=crop',
    dest: 'portfolio-bathroom-1.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1773177930292-463ca3c5b86a?w=900&h=675&q=85&fm=jpg&fit=crop',
    dest: 'portfolio-bathroom-2.jpg',
  },

  // Portfolio — basements
  {
    url: 'https://images.unsplash.com/photo-1773867567872-3ad1fa481082?w=900&h=675&q=85&fm=jpg&fit=crop',
    dest: 'portfolio-basement-1.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1649083048770-82e8ffd80431?w=900&h=675&q=85&fm=jpg&fit=crop',
    dest: 'portfolio-basement-2.jpg',
  },

  // Portfolio — additions
  {
    url: 'https://images.unsplash.com/photo-1618832515490-e181c4794a45?w=900&h=675&q=85&fm=jpg&fit=crop',
    dest: 'portfolio-addition-1.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1774600166432-ba8ac640b318?w=900&h=675&q=85&fm=jpg&fit=crop',
    dest: 'portfolio-addition-2.jpg',
  },

  // Portfolio — whole-home
  {
    url: 'https://images.unsplash.com/photo-1618832515490-e181c4794a45?w=900&h=675&q=85&fm=jpg&fit=crop',
    dest: 'portfolio-whole-home-1.jpg',
  },

  // Service page heroes
  {
    url: 'https://images.unsplash.com/photo-1776395159816-ef1cc372552b?w=1600&h=700&q=85&fm=jpg&fit=crop',
    dest: 'hero-kitchen.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1634320611782-e7589d174453?w=1600&h=700&q=85&fm=jpg&fit=crop',
    dest: 'hero-bathroom.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1773867567872-3ad1fa481082?w=1600&h=700&q=85&fm=jpg&fit=crop',
    dest: 'hero-basement.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1618832515490-e181c4794a45?w=1600&h=700&q=85&fm=jpg&fit=crop',
    dest: 'hero-addition.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1649083048770-82e8ffd80431?w=1600&h=700&q=85&fm=jpg&fit=crop',
    dest: 'hero-whole-home.jpg',
  },

  // About page — construction/contractor team
  {
    url: 'https://images.unsplash.com/photo-1774600166432-ba8ac640b318?w=1200&h=900&q=85&fm=jpg&fit=crop',
    dest: 'about-team.jpg',
  },
];

let successCount = 0;
let failCount = 0;

for (const img of images) {
  const destPath = path.join(publicDir, img.dest);
  try {
    const res = await fetch(img.url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      }
    });
    if (!res.ok) {
      console.error(`✗ ${img.dest} — HTTP ${res.status} from ${img.url}`);
      failCount++;
      continue;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(destPath, buf);
    console.log(`✓ ${img.dest} (${(buf.length / 1024).toFixed(0)}KB)`);
    successCount++;
  } catch (err) {
    console.error(`✗ ${img.dest} — ${err.message}`);
    failCount++;
  }
}

console.log(`\nDone: ${successCount} succeeded, ${failCount} failed.`);
