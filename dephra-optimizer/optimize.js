const fs = require('fs');
const path = require('path');
const { NodeIO } = require('@gltf-transform/core');
const { KHRDracoMeshCompression, KHRTextureBasisu } = require('@gltf-transform/extensions');
const { quantize, textureCompress, resample, prune, dedup, draco } = require('@gltf-transform/functions');
const sharp = require('sharp');
const draco3d = require('draco3d');

// --- Configuration ---
const MAX_TEXTURE_SIZE = 2048; // Max resolution for textures (e.g., 2K)

async function optimizeModel(inputPath, outputPath) {
  console.log(`🚀 Starting optimization for: ${inputPath}`);
  
  const io = new NodeIO()
    .registerExtensions([KHRDracoMeshCompression, KHRTextureBasisu])
    .registerDependencies({
      'draco3d.decoder': await draco3d.createDecoderModule(), 
      'draco3d.encoder': await draco3d.createEncoderModule(),
      'sharp': sharp
    });

  // Read input file
  const document = await io.read(inputPath);
  const root = document.getRoot();

  console.log(`📊 Initial stats:`);
  console.log(`   - Meshes: ${root.listMeshes().length}`);
  console.log(`   - Textures: ${root.listTextures().length}`);
  console.log(`   - Materials: ${root.listMaterials().length}`);

  // --- Optimization Pipeline ---
  await document.transform(
    // 1. Remove unused nodes/textures
    prune(),
    
    // 2. Remove duplicates
    dedup(),

    // 3. Resize & Compress Textures
    // This is the heavy lifter. Resizes to 2K and converts/compresses to JPEG (80%) or PNG if transparent.
    textureCompress({ 
        targetFormat: 'jpeg', 
        resize: [MAX_TEXTURE_SIZE, MAX_TEXTURE_SIZE],
        quality: 80 
    }),

    // 4. Compress Geometry (Draco)
    // This compresses the mesh data significantly.
    draco(),
  );

  console.log(`✨ Optimization applied!`);

  // Write output file
  await io.write(outputPath, document);

  console.log(`✅ Saved optimized model to: ${outputPath}`);
  
  // Calculate savings
  const inputSize = fs.statSync(inputPath).size / (1024 * 1024);
  const outputSize = fs.statSync(outputPath).size / (1024 * 1024);
  const savings = ((1 - outputSize/inputSize) * 100).toFixed(1);
  
  console.log(`📉 Size reduction: ${inputSize.toFixed(2)} MB -> ${outputSize.toFixed(2)} MB (${savings}% savings)`);
}

// --- CLI Usage ---
const args = process.argv.slice(2);
if (args.length < 1) {
  console.error("❌ Usage: node optimize.js <input-file.glb> [output-file.glb]");
  process.exit(1);
}

const inputFile = args[0];
const outputFile = args[1] || inputFile.replace('.glb', '-optimized.glb');

if (!fs.existsSync(inputFile)) {
  console.error(`❌ Input file not found: ${inputFile}`);
  process.exit(1);
}

optimizeModel(inputFile, outputFile).catch(err => {
  console.error("❌ Error during optimization:", err);
});
