import fs from 'fs';
import path from 'path';

async function main() {
    const b = 'src/fa' + '/user-manuals/robeex-ai-drone/';
    const entries = fs
        .readdirSync(b, {
            withFileTypes: true,
        })
        .filter((dirent) => dirent.isFile() && !dirent.name.includes('index'))

    console.log(entries);

    for await (const x of entries) {
        await Bun.sleep(100);
        const newName = x.name.split('-').slice(1).join('-');

        console.log(`${b + x.name} -> ${b + newName}`);

        fs.renameSync(b + x.name, b + newName);
    }
}

main();
