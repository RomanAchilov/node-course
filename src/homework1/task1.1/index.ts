import readline from 'readline';

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

read.on('line', (line: string) => {
  const output = line.split('').reverse().join('') + '\n';
  process.stdout.write(output);
});

