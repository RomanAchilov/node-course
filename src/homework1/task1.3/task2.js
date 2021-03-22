import csv from 'csvtojson';
import fs from 'fs';

const path = 'src/homework1/task1.3/file'
const csvFilePath = `${path}.csv`;
const txtFilePath = `${path}.txt`;

fs.writeFileSync(txtFilePath, '');

csv({ ignoreColumns: /amount/gi })
  .fromFile(csvFilePath)
  .subscribe((data) => {
    fs.appendFileSync(txtFilePath, JSON.stringify(data) + '\n', 'utf8');
  })
  .on('done', () => {
    console.log('DONE!');
  })
  .on('error', (err) => {
    console.log(err);
  });
