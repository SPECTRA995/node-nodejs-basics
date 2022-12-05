import fsPromises from 'fs/promises'
import path from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
    const getText = await fsPromises.readFile(
        path.join(__dirname, 'files', 'fileToCalculateHashFor.txt')
    );
    const hash = createHash('sha256').update(getText).digest('hex');
    console.log(hash);
};

await calculateHash();