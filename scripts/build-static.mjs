import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { copyFileSync, readdirSync } from "node:fs";
import path from "node:path";

const require = createRequire(import.meta.url);
const result = spawnSync(process.execPath, [require.resolve("next/dist/bin/next"), "build"], {
  stdio: "inherit",
  env: { ...process.env, SITE_STATIC_EXPORT: "true" },
});

if (result.error) {
  console.error(result.error.message);
}
if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

// Next.js can export nested segment payload directories on Windows while the
// client requests dotted filenames. Preserve both forms in the static output.
function copySegmentPayloads(directory, routeDirectory, filenamePrefix) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const source = path.join(directory, entry.name);
    const filename = `${filenamePrefix}.${entry.name}`;
    if (entry.isDirectory()) {
      copySegmentPayloads(source, routeDirectory, filename);
    } else if (entry.name.endsWith(".txt")) {
      copyFileSync(source, path.join(routeDirectory, filename));
    }
  }
}

function normalizeExport(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const nestedDirectory = path.join(directory, entry.name);
    if (entry.name.startsWith("__next.")) {
      copySegmentPayloads(nestedDirectory, directory, entry.name);
    } else if (entry.name !== "_next") {
      normalizeExport(nestedDirectory);
    }
  }
}

normalizeExport(path.resolve("out"));
