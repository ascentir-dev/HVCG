import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import https from "https";
import http from "http";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const BASE = path.resolve(__dirname, "..");
const PUBLIC = path.join(BASE, "public");

const assets = [
  // Logo
  {
    url: "https://westshorehome.com/content/wsh_logo_blue.webp",
    dest: "content/wsh_logo_blue.webp",
  },
  // Hero background
  {
    url: "https://images.ctfassets.net/lci7addqp3hv/2mrEXQxleMIUqFx51CD2Ll/89fadc5498f3ee2ed92450cd91bb71c6/260313_SIQMC_Small_34.jpg?w=1920&q=80&fm=jpg",
    dest: "images/hero-background.jpg",
  },
  // Offer banner background
  {
    url: "https://images.ctfassets.net/lci7addqp3hv/6723zRB5dPukIQeEZzwpA/4e9f7aa7979aa2db7775dc36263d7430/Screenshot_2026-01-23_at_4.48.22_PM.png?w=1920&q=80",
    dest: "images/offer-banner-bg.png",
  },
  // Colorway swatches
  {
    url: "https://images.ctfassets.net/lci7addqp3hv/68NYELp2BsXpcTZh8tLeoe/4cebbbbcf11cb3aae0e3e677c3e86d7a/iron-quarry-swatch.png?w=240",
    dest: "images/swatch-iron-quarry.png",
  },
  {
    url: "https://images.ctfassets.net/lci7addqp3hv/kPk69NIKtF56v26GwDRbE/1ca1ce400dc6ed17a2fb8e0bd763ea36/slate-storm-swatch.png?w=240",
    dest: "images/swatch-slate-storm.png",
  },
  {
    url: "https://images.ctfassets.net/lci7addqp3hv/2QXonOFf4X3o1yM1PR3x1U/701da20b0c32444a4fc23d89c0c4098c/carrara-cloud-swatch.png?w=240",
    dest: "images/swatch-carrara-cloud.png",
  },
  {
    url: "https://images.ctfassets.net/lci7addqp3hv/7nPXDxhnhXhE3QueEuCXhW/da5ee5d685c21ebf293b7e6d15bdd03e/winter-lux-swatch.png?w=240",
    dest: "images/swatch-winter-lux.png",
  },
  {
    url: "https://images.ctfassets.net/lci7addqp3hv/50HcpKDFkV3BIHJ9OAngKC/03bef36450d2595438721c4a1f907d41/silk-glacier-swatch.png?w=240",
    dest: "images/swatch-silken-glacier.png",
  },
  {
    url: "https://images.ctfassets.net/lci7addqp3hv/6jNz8NlUu3Od82wNF4Q8qC/3062e52af3e761b00b47490d598e8cdf/ivory-current-swatch.png?w=240",
    dest: "images/swatch-ivory-current.png",
  },
  // Product category images
  {
    url: "https://images.ctfassets.net/lci7addqp3hv/67DcLj0YQuEnbg2KAyeG5U/3c84d2d73478026b8218ed086d176bfc/260313_SIQMC_Small_24.jpg?w=900&q=80&fm=jpg",
    dest: "images/product-bathroom.jpg",
  },
  {
    url: "https://images.ctfassets.net/lci7addqp3hv/7gXubb2jZnZnXbSovmEIsu/8cf646ace3f28937cc9d990aec8b4ac6/MI_1650_SL_DaughterRelax_SM.jpg?w=900&q=80&fm=jpg",
    dest: "images/product-windows.jpg",
  },
  {
    url: "https://images.ctfassets.net/lci7addqp3hv/3VOvaeLa2Re1q4whetDtZd/1643ef25cf22c127a3416110484b24a7/460.160CAR_-_Signet_Fiberglass.jpg?w=900&q=80&fm=jpg",
    dest: "images/product-doors.jpg",
  },
  {
    url: "https://images.ctfassets.net/lci7addqp3hv/1I2jQP6mLfBT8L8yLDxmJp/d0a513ea9cfd95ecbf05ad92ffe39370/J496321_Kissoon_FLVP_After_39.jpg?w=900&q=80&fm=jpg",
    dest: "images/product-flooring.jpg",
  },
  // Trust badges
  {
    url: "https://images.ctfassets.net/lci7addqp3hv/3xn6mjmNEO7B3Jw4b5ilXX/c1a1bcc07d22d095557c80a6078d0b3b/bbb.FInUIOiU.webp?w=200",
    dest: "images/badge-bbb.webp",
  },
  {
    url: "https://images.ctfassets.net/lci7addqp3hv/3f5I9ykwGamLHj4yUnNa4D/00cde627c8eda08013d8ef8f1152f3de/download.webp?w=200",
    dest: "images/badge-google.webp",
  },
  {
    url: "https://images.ctfassets.net/lci7addqp3hv/2d9arBLqiXn1JTQY63c/ba1b6b87e50988a84c2cf9fed137bcc5/home-advisor-top-rated-service.DxXgEHqi.webp?w=200",
    dest: "images/badge-homeadvisor-top.webp",
  },
  {
    url: "https://images.ctfassets.net/lci7addqp3hv/2ppeeXGjKGZVKkCXpxLEsw/f693b532aa8a6a238b82b6c53f4c749b/home-advisor-elite-service.Eq18hpM7.webp?w=200",
    dest: "images/badge-homeadvisor-elite.webp",
  },
  {
    url: "https://images.ctfassets.net/lci7addqp3hv/6RblT7BQp6LmqZ5LVRLwAM/01ea17d032063e393e5a4ec165451c42/download__1_.webp?w=200",
    dest: "images/badge-angi.webp",
  },
  // Footer logo
  {
    url: "https://images.ctfassets.net/lci7addqp3hv/4PQnPSh4iPIarjwO31op8l/b03c80cd041ce185c460f16e7796f18f/Artboard_11.png?w=400",
    dest: "images/logo-footer.png",
  },
  // Social icons
  {
    url: "https://images.ctfassets.net/lci7addqp3hv/JFXLPcEOXsBgTGINEXIhm/282fb6a2b4358ca17fd3f4788d70ec79/twitter-logo.svg",
    dest: "images/social-twitter.svg",
  },
  {
    url: "https://images.ctfassets.net/lci7addqp3hv/3jI4l4qR1psyzdcmtKF4yc/b3234349b4c5c32c6c5c59ecb878508b/linkedin-logo.svg",
    dest: "images/social-linkedin.svg",
  },
  {
    url: "https://images.ctfassets.net/lci7addqp3hv/5B0MhFtNnSSonvPeYRCVZl/8e32b209d0496871ba9f2cf0a3a00541/facebook-logo.svg",
    dest: "images/social-facebook.svg",
  },
  {
    url: "https://images.ctfassets.net/lci7addqp3hv/5ypC0nNfoZi3hWN1SkiSAs/de70af821756c47678f900192c3645d7/pinterest-logo.svg",
    dest: "images/social-pinterest.svg",
  },
  {
    url: "https://images.ctfassets.net/lci7addqp3hv/5aQaw2IHgiGZxi3HZA7lpS/c6458f03f6982e78cd5f156f7aa6d3a2/instagram-logo.svg",
    dest: "images/social-instagram.svg",
  },
];

function download(url, destRel) {
  return new Promise((resolve, reject) => {
    const dest = path.join(PUBLIC, destRel);
    const dir = path.dirname(dest);

    fs.mkdir(dir, { recursive: true })
      .then(() => {
        const proto = url.startsWith("https") ? https : http;
        const req = proto.get(url, { timeout: 15000 }, (res) => {
          if (res.statusCode === 301 || res.statusCode === 302) {
            download(res.headers.location, destRel).then(resolve).catch(reject);
            return;
          }
          if (res.statusCode !== 200) {
            reject(new Error(`HTTP ${res.statusCode} for ${url}`));
            return;
          }
          const chunks = [];
          res.on("data", (chunk) => chunks.push(chunk));
          res.on("end", () => {
            fs.writeFile(dest, Buffer.concat(chunks))
              .then(() => {
                console.log(`✓ ${destRel}`);
                resolve();
              })
              .catch(reject);
          });
        });
        req.on("error", reject);
        req.on("timeout", () => {
          req.destroy();
          reject(new Error(`Timeout: ${url}`));
        });
      })
      .catch(reject);
  });
}

async function run() {
  const BATCH = 4;
  let i = 0;
  while (i < assets.length) {
    const batch = assets.slice(i, i + BATCH);
    await Promise.allSettled(
      batch.map(({ url, dest }) =>
        download(url, dest).catch((e) => console.error(`✗ ${dest}: ${e.message}`))
      )
    );
    i += BATCH;
  }
  console.log("\nDone downloading assets.");
}

run();
