import csv from 'csvtojson';
import fs from 'fs';

const path = 'src/homework1/task1.2/file'
const csvFilePath = `${path}.csv`;
const txtFilePath = `${path}.txt`;

fs.writeFileSync(txtFilePath, '');

interface Data {
  Book: string;
  Author: string;
  Price: string;
}

csv({ ignoreColumns: /amount/gi })
  .fromFile(csvFilePath)
  .subscribe((data: Data) => {
    fs.appendFileSync(txtFilePath, JSON.stringify(data) + '\n', 'utf8');
  })
  .on('done', () => {
    console.log('DONE!');
  })
  .on('error', (err: any) => {
    console.log(err);
  });
