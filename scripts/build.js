// /scripts/build.js
const { generateExercises } = require('./generate-exercises');
const { generateUtilities } = require('./generate-utilities');
// const { generateSitemaps } = require('./generate-sitemaps');
// const { optimizeImages } = require('./optimize-images');

async function runBuildTasks() {
  console.log('🚀 Starting build tasks...\n');
  
  try {
    // Run tasks in order
    await generateExercises();
    await generateUtilities();
    // await generateSitemaps();
    // await optimizeImages();
    
    console.log('\n✅ All build tasks completed!');
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

runBuildTasks();