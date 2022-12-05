import fs from 'fs';

const write = async () => {
    const writeStream = fs.createWriteStream('/src/streams/files/fileToWrite.txt');
    writeStream.on('err', (err) => console.log(err));
    
    process.stdin.on('data', (data) => {
        writeStream.write(data);
        writeStream.close();
        process.exit();
    });
};

await write();