// /scripts/generate-utilities.js

const fs = require('fs');
const path = require('path');

function generateUtilities() {
  const utilsDir = path.join(process.cwd(), 'src', 'utilities');
  const outputDir = path.join(process.cwd(), 'public', 'generated');

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Read all .ts files from utilities directory
  const files = fs.readdirSync(utilsDir).filter(file => file.endsWith('.ts'));

  console.log(`Found ${files.length} utility files to process...`);

  // Collect all utility data
  const utilities = [];

  files.forEach(file => {
    try {
      const filePath = path.join(utilsDir, file);
      const content = fs.readFileSync(filePath, 'utf8');

      // Extract header comment block (description)
      const headerCommentMatch = content.match(/\/\*\*([\s\S]*?)\*\//);
      const headerComment = headerCommentMatch ? headerCommentMatch[1].trim() : '';

      // Extract all exported functions (main implementations)
      const functionMatches = content.match(/export\s+(?:function|const)\s+\w+[\s\S]*?(?=export\s+|$)/g) || [];
      const functions = functionMatches
        .filter(func => !func.includes('metadata') && !func.includes('examples'))
        .join('\n\n');

      // Extract metadata and examples (if present)
      const metadataMatch = content.match(/export\s+const\s+metadata[\s\S]*?};/);
      const examplesMatch = content.match(/export\s+const\s+examples[\s\S]*?];/);

      // Create utility data object
      const utilityData = {
        id: generateUUID(),
        name: file.replace('.ts', ''),
        title: extractTitle(content),
        description: cleanHeaderComment(headerComment),
        code: functions,
        rawContent: content,
        metadata: metadataMatch ? metadataMatch[0] : null,
        examples: examplesMatch ? examplesMatch[0] : null,
        generatedAt: new Date().toISOString()
      };

      utilities.push(utilityData);

      console.log(`✓ Processed: ${file}`);

    } catch (error) {
      console.error(`✗ Error processing ${file}:`, error.message);
    }
  });

  // Write single minified JSON file
  try {
    const outputFile = path.join(outputDir, 'utilities.json');
    fs.writeFileSync(outputFile, JSON.stringify({ utilities }, null, 0));
    console.log(`✓ Generated: utilities.json (${utilities.length} utilities)`);
  } catch (error) {
    console.error('✗ Error writing utilities.json:', error.message);
    throw error;
  }

  console.log('Utility generation complete!');
}

// Helper function to extract title from metadata or filename
function extractTitle(content) {
  const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
  return titleMatch ? titleMatch[1] : 'Unknown Utility';
}

// Helper function to clean up header comment formatting
function cleanHeaderComment(comment) {
  return comment
    .split('\n')
    .map(line => line.replace(/^\s*\*\s?/, '').trim())
    .filter(line => line.length > 0)
    .join('\n');
}

// Helper function to generate a UUID (simple version for JS)
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// Run the generator
if (require.main === module) {
  generateUtilities();
}

module.exports = { generateUtilities };