import fs from 'fs';

const copy = async () => {
    fs.readdir('src/fs/files', (err, files) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            fs.mkdir('src/fs/files_copy', (err) => {
                if (err) {
                    throw new Error('FS operation failed');
                }
                else {
                    files.forEach((file) => {
                        fs.copyFile(`src/fs/files/${file}`, `src/fs/files_copy/${file}`, (err) => {
                            if (err) {
                                throw new Error('FS operation failed');
                            }
                        });
                    });
                }
            });
        }
    });
};

await copy();
