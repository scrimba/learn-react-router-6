const fs = require("fs")
const path = require("path")

const rootDir = path.join(__dirname, ".")

const readDirRecursive = function (dir) {
  let results = []
  const list = fs.readdirSync(dir)
  list.forEach(function (file) {
    file = path.join(dir, file)
    const stat = fs.statSync(file)
    if (stat && stat.isDirectory()) {
      results = results.concat(readDirRecursive(file))
    } else {
      results.push(file)
    }
  })
  return results
}

const indexHtmlPath = "index.html"
const viewportMetaTag =
  '<meta name="viewport" content="width=device-width, initial-scale=1" />'

const allFiles = readDirRecursive(rootDir)
const indexHtmlFiles = allFiles.filter(file => file.endsWith(indexHtmlPath))

indexHtmlFiles.forEach(file => {
  const contents = fs.readFileSync(file, "utf8")
  if (!contents.includes(viewportMetaTag)) {
    const newContents = contents.replace(/(<head>)/, `$1\n  ${viewportMetaTag}`)
    fs.writeFileSync(file, newContents)
    console.log(`Added viewport meta tag to ${file}`)
  } else {
    console.log(`Viewport meta tag already exists in ${file}`)
  }
})

console.log("Finished updating index.html files")
