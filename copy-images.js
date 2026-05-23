import fs from 'fs';
import path from 'path';

const srcDir = "C:\\Users\\91807\\.gemini\\antigravity\\brain\\27c7df71-18c1-43dd-a800-07092bf6d792";
const destDir = path.join(process.cwd(), "public", "images");

const srcPath = path.join(srcDir, "cyber_internship_banner_1779525555082.png");
const destPath = path.join(destDir, "cyber-placeholder.png");

if (fs.existsSync(srcPath)) {
  fs.copyFileSync(srcPath, destPath);
  console.log("Successfully updated the Internship thumbnail!");
} else {
  console.log("Failed to find the new generated image.");
}
