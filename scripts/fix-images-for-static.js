// Script to convert Next.js Image components to regular img tags for static export
// Run this before building for Hostinger deployment

const fs = require('fs');
const path = require('path');

const componentsToFix = [
    'components/about/StrategicFoundation.tsx',
    'components/about/TechnologyMindset.tsx',
    'components/about/AboutTrust.tsx',
    'components/about/FounderPhilosophy.tsx',
    'components/services/CoreServicesDetail.tsx',
    'components/services/ServicesOverview.tsx',
    'components/Hero.tsx',
    'components/WhyChooseSection.tsx',
    'components/ServicesPreview.tsx',
    'components/Header.tsx',
    'components/Footer.tsx',
];

function convertImageComponent(filePath) {
    const fullPath = path.join(__dirname, '..', filePath);

    if (!fs.existsSync(fullPath)) {
        console.log(`⚠️  Skipping ${filePath} - file not found`);
        return;
    }

    let content = fs.readFileSync(fullPath, 'utf-8');
    let modified = false;

    // Remove Image import
    if (content.includes('import Image from "next/image"')) {
        content = content.replace(/import Image from "next\/image";\n?/g, '');
        modified = true;
    }

    // Replace <Image with fill prop with regular img
    const imageFillRegex = /<Image\s+([^>]*?)fill([^>]*?)\/>/gs;
    if (imageFillRegex.test(content)) {
        content = content.replace(imageFillRegex, (match) => {
            // Extract src
            const srcMatch = match.match(/src=["']([^"']+)["']/);
            const altMatch = match.match(/alt=["']([^"']+)["']/);

            if (srcMatch) {
                const src = srcMatch[1];
                const alt = altMatch ? altMatch[1] : '';
                return `<img src="${src}" alt="${alt}" className="absolute inset-0 w-full h-full object-cover" />`;
            }
            return match;
        });
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(fullPath, content, 'utf-8');
        console.log(`✅ Fixed: ${filePath}`);
    } else {
        console.log(`⏭️  No changes needed: ${filePath}`);
    }
}

console.log('🔧 Converting Next.js Image components for static export...\n');

componentsToFix.forEach(convertImageComponent);

console.log('\n✨ Conversion complete!');
console.log('📦 Run: npm run build');
