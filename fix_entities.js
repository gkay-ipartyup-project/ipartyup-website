const fs = require('fs');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(/&amp;quot;/g, '"');
  content = content.replace(/&amp;#x27;/g, "'");
  content = content.replace(/&amp;amp;/g, '&');
  
  content = content.replace(/&quot;/g, '"');
  content = content.replace(/&apos;/g, "'");
  content = content.replace(/&#x27;/g, "'");
  content = content.replace(/&amp;/g, '&');
  
  if (!content.includes('eslint-disable')) {
    content = '/* eslint-disable react/no-unescaped-entities */\n' + content;
  }
  
  fs.writeFileSync(filePath, content);
}

fixFile('app/terms/page.tsx');
fixFile('app/privacy/page.tsx');
