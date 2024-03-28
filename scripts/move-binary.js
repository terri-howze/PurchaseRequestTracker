import fs from 'fs'
import { execa } from 'execa';
let extension = ''
if (process.platform === 'win32') {
    extension = '.exe'
}

export default async function main() {
    const rustInfo = (await execa('rustc', ['-vV'])).stdout
    const targetTriple = /host: (\S+)/g.exec(rustInfo)[1]
    if (!targetTriple) {
        console.error('Failed to determine platform target triple')
    }
    fs.renameSync(
        `src-tauri/binaries/server${extension}`,
        `src-tauri/binaries/server-${targetTriple}${extension}`
    )
}

main().catch((e) => {
    throw e
})