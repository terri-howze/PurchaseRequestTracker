import * as esbuild from 'esbuild'

await esbuild.build({
    entryPoints: ['server/server.js'],
    bundle: true,
    minify: true,
    platform: 'node',
    target: 'esnext',
    sourcemap: true,
    sourcesContent: false,
    format: 'esm',
    banner: {
        js: 'import { createRequire } from "module"; const require = createRequire(import.meta.url);'
    },
    outfile: 'out.js',
})