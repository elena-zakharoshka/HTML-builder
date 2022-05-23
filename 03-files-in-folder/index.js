const fs = require('fs');
const path = require('path');
let fSize = 0;
fs.readdir('./03-files-in-folder/secret-folder', (err, files) => {
  if(err) throw err;
  //console.log('В папке находятся файлы:' + files);

  for (let i = 0; i < files.length; i++) {
    fs.stat(path.join(__dirname, 'secret-folder', files[i]), (err, stats) => {
      fSize = stats.size;
      // console.log(fSize);
      console.log(`${path.basename(files[i], path.extname(files[i]))}  -  ${path.extname(files[i]).substring(1)}  - ${fSize} kb`);
    });
  }
});