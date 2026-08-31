import fs from 'fs';
import path from 'path';

const srcPath = "C:\\Users\\91807\\OneDrive\\Desktop\\resume.pdf";
const destPath = path.join(process.cwd(), "public", "NEW_RESUME.pdf");

if (fs.existsSync(srcPath)) {
  fs.copyFileSync(srcPath, destPath);
  console.log("Successfully updated the resume!");
} else {
  console.log("Failed to find the resume file at:", srcPath);
}

const cinesenseSrc = "C:\\Users\\91807\\.gemini\\antigravity-ide\\brain\\dccc2cdf-1d56-4587-8654-0537cdd0e8a0\\.user_uploaded\\media_1787412449685.png";
const cinesenseDest = path.join(process.cwd(), "public", "images", "cinesense.png");

if (fs.existsSync(cinesenseSrc)) {
  fs.copyFileSync(cinesenseSrc, cinesenseDest);
  console.log("Successfully updated the CineSense image!");
}

