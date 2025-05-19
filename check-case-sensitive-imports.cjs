const fs = require('fs');
const path = require('path');
const glob = require('glob');

const SRC_DIR = path.resolve(__dirname, 'src');
const IMPORT_REGEX = /import\s+.*?['"](.+?)['"]/g;

function checkImports(file) {
  const content = fs.readFileSync(file, 'utf8');
  let match;

  while ((match = IMPORT_REGEX.exec(content)) !== null) {
    const importPath = match[1];

    // Skip packages or absolute imports
    if (!importPath.startsWith('./') && !importPath.startsWith('../')) continue;

    const fullImportPath = path.resolve(path.dirname(file), importPath);

    try {
      // Add .js, .jsx if needed
      const resolved = require.resolve(fullImportPath, { paths: [path.dirname(file)] });

      // Compare case-sensitive parts
      const expected = fs.realpathSync.native(resolved);
      if (resolved !== expected) {
        console.error(`❌ Case mismatch in import:\n  ${file}\n  → import '${importPath}' doesn't match actual file: '${expected}'`);
        process.exitCode = 1;
      }
    } catch {
      console.warn(`⚠️ Could not resolve import in ${file}: '${importPath}'`);
    }
  }
}

// Scan all .js/.jsx files in src/
glob.sync(`${SRC_DIR}/**/*.{js,jsx}`).forEach(checkImports);

console.log('✅ Import case check complete');
