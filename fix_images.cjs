const fs = require('fs');
const path = require('path');

function replaceImage(dir, newImage) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(file => {
        if (!file.endsWith('.md')) return;
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        content = content.replace(/\/assets\/blog-placeholder-1\.jpg/g, newImage);
        fs.writeFileSync(filePath, content);
    });
}

replaceImage('/Users/mayankmusaddi/Projects/maamusa.github.io/src/content/posts', '/assets/posts/ankhondekhi.jpg');
replaceImage('/Users/mayankmusaddi/Projects/maamusa.github.io/src/content/projects', '/assets/projects/1.png');

console.log("Images fixed.");
