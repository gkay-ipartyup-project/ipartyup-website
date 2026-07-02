const fs = require('fs');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync('public/watch-ad-mobile.html', 'utf8');

// Mock a URL with token
const dom = new JSDOM(html, {
  url: "https://ipartyup.party/watch-ad-mobile.html?token=123#code=c29tZXNjcmlwdA==",
  runScripts: "dangerously",
  resources: "usable"
});

dom.window.alert = (msg) => { console.log("ALERT:", msg); };
dom.window.fetch = () => Promise.resolve();
dom.window.addEventListener('load', () => {
  console.log("Loaded!");
  // Find start btn
  const btn = dom.window.document.getElementById('start-btn');
  console.log("Button exists?", !!btn);
  if (btn) {
    btn.click();
    console.log("Button clicked!");
    console.log("Phase watch display:", dom.window.document.getElementById('phase-watch').style.display);
    console.log("Phase done display:", dom.window.document.getElementById('phase-done').style.display);
  }
});
