/**
 * check-responsive.js
 * QA script: render landing page di mobile & desktop viewport
 * menggunakan Puppeteer dan simpan screenshot ke /screenshots
 *
 * Usage: npm run check:responsive
 * (jalankan SETELAH `npm run build` dan server aktif di port 3000)
 */

const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

const URL = "http://localhost:3000";
const SCREENSHOTS_DIR = path.join(__dirname, "..", "screenshots");

const viewports = [
  { name: "mobile-360", width: 360, height: 780 },
  { name: "mobile-iphone12", width: 390, height: 844 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "desktop-1280", width: 1280, height: 800 },
  { name: "desktop-1920", width: 1920, height: 1080 },
];

async function main() {
  if (!fs.existsSync(SCREENSHOTS_DIR)) {
    fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  console.log(`📸 Taking screenshots from: ${URL}\n`);

  for (const vp of viewports) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height });

    try {
      await page.goto(URL, { waitUntil: "networkidle2", timeout: 30000 });
      const filePath = path.join(SCREENSHOTS_DIR, `${vp.name}.png`);
      await page.screenshot({ path: filePath, fullPage: true });
      console.log(`  ✅ ${vp.name} (${vp.width}×${vp.height}) → ${filePath}`);
    } catch (err) {
      console.error(`  ❌ ${vp.name}: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log(`\n✨ Done! Screenshots saved in: ${SCREENSHOTS_DIR}`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
