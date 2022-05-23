const fs = require('fs');
const wStream = fs.createWriteStream('./02-write-file/text.txt');

const { stdin, stdout } = process;

stdout.write('Введите текст (для отмены введите exit):\n');
stdin.on('data', data => {
  const text = data.toString();
  if (text.trim() === 'exit'){
    stdout.write('Всего хорошего!');
    process.exit();
  }
  else {
    wStream.write(text);
  }
});
process.on('SIGINT', () => {
  stdout.write('Всего хорошего!');
  process.exit();
});
