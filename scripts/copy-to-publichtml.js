const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', 'out');
const targetDir = path.join(__dirname, '..', 'public_html');

// Fonction pour copier récursivement un dossier
function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Vérifier si le dossier out existe
if (!fs.existsSync(sourceDir)) {
  console.error('❌ Erreur: Le dossier "out" n\'existe pas. Exécutez d\'abord "npm run build"');
  process.exit(1);
}

// Supprimer seulement le contenu du dossier public_html s'il existe déjà (pas le dossier lui-même)
if (fs.existsSync(targetDir)) {
  console.log('🗑️  Suppression de l\'ancien contenu de public_html...');
  try {
    const files = fs.readdirSync(targetDir);
    for (const file of files) {
      const filePath = path.join(targetDir, file);
      try {
        fs.rmSync(filePath, { recursive: true, force: true });
      } catch (err) {
        console.warn(`⚠️  Impossible de supprimer ${file}, continuation...`);
      }
    }
  } catch (err) {
    console.warn(`⚠️  Erreur lors du nettoyage: ${err.message}, continuation...`);
  }
}

// S'assurer que le dossier public_html existe
if (!fs.existsSync(targetDir)) {
  try {
    fs.mkdirSync(targetDir, { recursive: true });
  } catch (err) {
    console.error(`❌ Erreur lors de la création du dossier: ${err.message}`);
    process.exit(1);
  }
}

// Copier le contenu
console.log('📦 Copie des fichiers de "out" vers "public_html"...');
copyRecursiveSync(sourceDir, targetDir);

console.log('✅ Déploiement terminé! Les fichiers sont dans le dossier public_html');
console.log(`📁 Chemin: ${targetDir}`);

