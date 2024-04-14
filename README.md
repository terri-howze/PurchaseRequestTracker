# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

"package": "node scripts/move-binary.js",
    "test-package": "esbuild server/server.js --bundle --platform=node --target=esnext --format=esm --outfile=server.js",
    "test2": "esbuild server/server.js --bundle --platform=node --outfile=server.js",
    "nexeBuild": "nexe --build -o server-x86_64-pc-windows-msvc.exe"