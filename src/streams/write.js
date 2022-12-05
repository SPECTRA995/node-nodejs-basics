import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'node:url';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(dirName, 'files', 'fileToWrite.txt');

const write = async () => {
    const writeStream = fs.createWriteStream(file);
    process.stdin.pipe(writeStream);
};

await write();