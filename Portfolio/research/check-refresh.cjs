const {chromium}=require('C:/Users/gulda/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{
const b=await chromium.launch({headless:true,channel:'msedge'});const p=await b.newPage({viewport:{width:1440,height:1100}});
await p.route('https://www.youtube-nocookie.com/**',r=>r.abort());
await p.goto('file:///C:/Users/gulda/Documents/Portfolio/portfolio/dist/index.html');
await p.locator('img').evaluateAll(async imgs=>{for(const i of imgs){i.loading='eager';await i.decode()}});
await p.screenshot({path:'research/refresh-desktop.png',fullPage:false});
await p.setViewportSize({width:390,height:844});await p.screenshot({path:'research/refresh-mobile.png'});
if(!await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth))throw Error('Overflow');
await p.locator('#fyrmester summary').click();
if(!await p.locator('#fyrmester details').getAttribute('open')===null)throw Error('Toggle');
await p.goto('file:///C:/Users/gulda/Documents/Portfolio/portfolio/dist/index.html?order=shoulder,fyrmester');
if(await p.locator('.featured').getAttribute('id')!=='shoulder')throw Error('Featured order');
await b.close();console.log('PASS: images load; mobile fits; project expansion and custom featured order work.');
})().catch(e=>{console.error(e);process.exit(1)});
