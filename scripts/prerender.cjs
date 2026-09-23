const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, "..", "build", "client");
const indexPath = path.join(distDir, "index.html");
const html = fs.readFileSync(indexPath, "utf8");

const appHtml = `
<div id="remix-app" style="padding: 2rem; font-family: system-ui, sans-serif;">
  <h1>Remix (SSG)</h1>
  <p>Hello from a statically pre-rendered Remix project.</p>
</div>
`;

const finalHtml = html.replace("</body>", `${appHtml}</body>`);

fs.writeFileSync(indexPath, finalHtml);
console.log("Prerendered / -> build/client/index.html");
