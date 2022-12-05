import fs from 'fs';

const read = async () => {
    const readStream = fs.createReadStream('/src/streams/files/fileToRead.txt');
    readStream.pipe(process.stdout);
};

await read();