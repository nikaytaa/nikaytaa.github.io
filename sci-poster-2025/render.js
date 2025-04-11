#!/usr/bin/env bun

import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import ejs from 'ejs';
// Simple argument parsing
const args = Bun.argv.slice(2);
let templateFile = '';
let dataFile = '';
let outputFile = 'index.html';

for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
        case '-t':
        case '--template':
            templateFile = args[++i];
            break;
        case '-d':
        case '--data':
            dataFile = args[++i];
            break;
        case '-o':
        case '--output':
            outputFile = args[++i];
            break;
    }
}
if (!templateFile || !dataFile) {
    console.error('Usage: bun run render.ts -t <template> -d <data> [-o <output>]');
    process.exit(1);
}
try {
    // Read files
    const template = readFileSync(resolve(templateFile), 'utf8');
    const data = JSON.parse(readFileSync(resolve(dataFile), 'utf8'));
    // Render template
    const renderedHtml = ejs.render(template, data);
    // Write output
    writeFileSync(resolve(outputFile), renderedHtml);
    console.log(`✅ Successfully rendered ${outputFile}`);
} catch (err) {
    console.error('❌ Error:', err instanceof Error ? err.message : String(err));
    process.exit(1);
}