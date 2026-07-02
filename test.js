const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err));
  
  // mock URL hash code and search token
  const testUrl = 'http://localhost:3002/watch-ad-mobile.html?token=test_token#code=c29tZV90ZXN0X3NjcmlwdA==';
  await page.goto(testUrl);
  
  await page.waitForTimeout(1000);
  console.log('Clicking button...');
  await page.click('#start-btn');
  console.log('Clicked button.');
  
  await page.waitForTimeout(2000);
  console.log('Phase done visible?', await page.isVisible('#phase-done'));
  
  await browser.close();
})();
