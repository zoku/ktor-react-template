import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from "vite-plugin-eslint"
import { globSync } from "glob"
import path from "node:path"

const sourceFolder = "./src/main/frontend"
const distFolder = "./src/main/resources/frontend"

export default defineConfig({
  publicDir: `${sourceFolder}/public`,
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: [`${sourceFolder}/**/*.ts`, `${sourceFolder}/**/*.tsx`],
      exclude: [],
    }),
  ],
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        globSync([
          `${sourceFolder}/Application.tsx`,
          `${sourceFolder}/**/*.scss`,
        ]).filter((file) => !file.match(/_.+\.scss$/)).map((file) => {
          return [
            path.relative(sourceFolder, file.slice(0, file.length - path.extname(file).length)).replace(/\\/g, "/"),
            file.replace(/\\/g, "/"),
          ]
        })
      ),
      output: {
        entryFileNames: (file) => {
          if (file.name === "Application") return "application.js"
          return `[name].js`
        },// `[name].js`,
        assetFileNames: (file) => {
          let folder = ""
          if (file.name.endsWith(".ttf")) folder = "assets/fonts/"
          if (file.name.endsWith(".svg") || file.name.endsWith(".webp") || file.name.endsWith(".jpg")) folder = "assets/images/"

          return `${folder}[name].[ext]`
        },
        dir: distFolder,
        format: "es",
      }
    },
  },
})

