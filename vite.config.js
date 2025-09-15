import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import * as child from "child_process";

const file = fileURLToPath(new URL("package.json", import.meta.url));
const json = readFileSync(file, "utf8");
const pkg = JSON.parse(json);

const commitHash = child
  .execSync("git rev-parse --short HEAD")
  .toString()
  .trim();

export default defineConfig({
  plugins: [react()],
  define: {
    __PACKAGE__: pkg,
    __COMMIT_HASH__: JSON.stringify(commitHash),
    __GITHUB_REPO__: JSON.stringify(
      "https://github.com/binkertpat/binkert-patrick.de",
    ),
  },
  build: {
    minify: true,
  },
});
