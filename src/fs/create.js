import fs from 'fs';

const create = async () => {
    
    fs.access('src/fs/files/fresh.txt', (err) => {
        if (err) {
            fs.writeFile('src/fs/files/fresh.txt', 'I am fresh and young', (err) => {
                if (err) console.log(err);
            });
        } else {
            throw new Error('FS operation failed');
        }
    })

};

await create();