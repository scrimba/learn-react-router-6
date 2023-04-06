const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname);
const nestedDirs = fs.readdirSync(rootDir).filter(name => !name.startsWith('.'));

for (const nestedDir of nestedDirs) {
  const projectDirs = fs.readdirSync(path.join(rootDir, nestedDir)).filter(name => !name.startsWith('.'));
  for (const projectDir of projectDirs) {
    const packageJsonPath = path.join(rootDir, nestedDir, projectDir, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = require(packageJsonPath);
      const packageName = path.basename(projectDir).replace(/ /g, '-').toLowerCase();
      packageJson.name = packageName;
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
      console.log(`Renamed package in ${path.join(nestedDir, projectDir)}/package.json to ${packageName}`);
    }
  }
}
