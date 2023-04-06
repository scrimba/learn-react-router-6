const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();

function processFolder(folderPath) {
  const packageJsonPath = path.join(folderPath, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = require(packageJsonPath);
    if (packageJson.name) {
      packageJson.name = packageJson.name.replace(/&/g, 'and');
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
      console.log(`Updated ${packageJsonPath}`);
    }
  } else {
    const files = fs.readdirSync(folderPath);
    files.forEach((file) => {
      const filePath = path.join(folderPath, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        processFolder(filePath);
      }
    });
  }
}

processFolder(path.join(rootDir, 'src'));

console.log('Finished updating package.json files.');
