// /scripts/generate-exercises.js

const fs = require('fs');
const path = require('path');

function generateExercises() {
  const exercisesDir = path.join(process.cwd(), 'src/exercises');
  const outputDir = path.join(process.cwd(), 'public/generated');
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Read all .ts files from exercises directory
  const files = fs.readdirSync(exercisesDir).filter(file => file.endsWith('.ts'));
  
  console.log(`Found ${files.length} exercise files to process...`);
  
  // Collect all exercise data
  const exercises = [];
  
  files.forEach(file => {
    try {
      const filePath = path.join(exercisesDir, file);
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
      
      // Create exercise data object
      const exerciseData = {
        name: file.replace('.ts', ''),
        title: extractTitle(content),
        description: cleanHeaderComment(headerComment),
        code: functions,
        rawContent: content,
        metadata: metadataMatch ? metadataMatch[0] : null,
        examples: examplesMatch ? examplesMatch[0] : null,
        generatedAt: new Date().toISOString()
      };
      
      exercises.push(exerciseData);
      
      console.log(`✓ Processed: ${file}`);
      
    } catch (error) {
      console.error(`✗ Error processing ${file}:`, error.message);
    }
  });
  
  // Write single minified JSON file
  try {
    const outputFile = path.join(outputDir, 'exercises.json');
    fs.writeFileSync(outputFile, JSON.stringify({ exercises }, null, 0));
    console.log(`✓ Generated: exercises.json (${exercises.length} exercises)`);
  } catch (error) {
    console.error('✗ Error writing exercises.json:', error.message);
    throw error;
  }
  
  console.log('Exercise generation complete!');
}

// Helper function to extract title from metadata or filename
function extractTitle(content) {
  const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
  return titleMatch ? titleMatch[1] : 'Unknown Exercise';
}

// Helper function to clean up header comment formatting
function cleanHeaderComment(comment) {
  return comment
    .split('\n')
    .map(line => line.replace(/^\s*\*\s?/, '').trim())
    .filter(line => line.length > 0)
    .join('\n');
}

// Run the generator
if (require.main === module) {
  generateExercises();
}

module.exports = { generateExercises };