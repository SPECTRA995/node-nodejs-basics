import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'node:url';
import {pipeline} from 'node:stream/promises';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const file = `${dirName}/files/fileToRead.txt`;

const read = async () => {
    const readStream = fs.createReadStream(file);
    pipeline(readStream, process.stdin);
};

await read();