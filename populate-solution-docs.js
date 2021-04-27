const path = require('path');
const fs = require('fs');
for (let dir of ['1 kyu', '2 kyu', '3 kyu', '4 kyu', '5 kyu', '6 kyu', '7 kyu', '8 kyu']) {
  if (fs.existsSync(path.join(__dirname, dir))) {
    const subdirs = fs.readdirSync(path.join(__dirname, dir));
    for (let subdir of subdirs) {
      if (!fs.existsSync(path.join(__dirname, dir, subdir, 'README.md'))) {
        const kataName = subdir.split(' ').slice(0,-1).join(' ');
        const kataSlug = subdir.split(' ').slice(-1)[0];
        fs.writeFileSync(path.join(__dirname, dir, subdir, 'README.md'), `# ${kataName}\n[Click here to view on Codewars](https://codewars.com/kata/${kataSlug})`);
      }
    }
  }
}