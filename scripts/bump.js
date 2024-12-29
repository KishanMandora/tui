import { readFile, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
// Import exec using dynamic import
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { exec } = require('@actions/exec');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Change directory to project root
process.chdir(join(__dirname, ".."));

(async () => {
  await exec("changeset", ["version"]);

  // Read package.json using dynamic import
  const packageJson = JSON.parse(
    await readFile(join(__dirname, "..", "package.json"), "utf8")
  );
  const releaseLine = `v${packageJson.version.split(".")[0]}`;

  const readmePath = join(__dirname, "..", "README.md");
  const content = await readFile(readmePath, "utf8");
  const updatedContent = content.replace(
    /changesets\/action@[^\s]+/g,
    `changesets/action@${releaseLine}`
  );
  await writeFile(readmePath, updatedContent);
})();