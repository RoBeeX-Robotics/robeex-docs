import basePrompt from './base-prompt';
import fs from 'fs';
import path from 'path';

const url = 'https://openrouter.ai/api/v1/chat/completions';
const headers = {
    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
    'Content-Type': 'application/json',
};
const getPrompt = (enContent: string) => ({
    models: [
        // 'google/gemma-3-4b-it',
        // 'google/gemma-3-12b-it',
        'google/gemma-3-27b-it',
        // "google/gemini-2.5-flash"
    ],
    messages: [
        {
            role: 'system',
            content: basePrompt,
        },
        {
            role: 'user',
            content: enContent,
        },
    ],
});

async function translate(enContent: string) {
    const p = getPrompt(enContent);
    console.log('prompt\n', p);
    const response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(p),
    });

    const data = await response.json();
    console.log(data);
    return data.choices[0].message.content;
}

async function translateFile(filePath: string) {
    const basePath = (lang: string) => 'src/' + lang;
    // const filePath = '/user-manuals/robeex-ai-drone/imu-calibration.md';
    // const filePath = '/user-manuals/robeex-ai-drone/imu-calibration.md';
    // const filePath = '/user-manuals/robeex-ai-drone/assembly.md';
    // const filePath = '/user-manuals/robeex-ai-drone/specification.md';

    const en = await Bun.file(basePath('en') + filePath).text();

    const conf = en.split('---');
    const content = conf.slice(2).join('---').trim();

    const fa = await translate(content);
    // const fa = '\nGG\n';

    // console.log('translation\n', fa);

    const r = await Bun.write(
        basePath('fa') + filePath,
        '---' + conf[1] + '---\n' + fa
    );

    console.log('Wrote', r, 'bytes');
}

async function main() {
    const b = '/user-manuals/robeex-ai-drone/';
    const entries = fs
        .readdirSync('src/en/' + b, {
            withFileTypes: true,
        })
        .filter((dirent) => dirent.isFile() && !dirent.name.includes('index'))
        .map((dirent) => b + dirent.name);

    console.log(entries);

    for await (const x of entries) {
        console.log('Translating', x);
        // await Bun.sleep(100);
        await translateFile(x);
    }
}

main();
