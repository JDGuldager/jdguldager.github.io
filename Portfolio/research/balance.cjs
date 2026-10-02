const fs=require('fs');
const file='portfolio/dist/index.html';
let html=fs.readFileSync(file,'utf8');
html=html.replace('Jeppe Dahl Guldager — Game Designer & Level Designer','Jeppe Dahl Guldager — Designer & Developer').replace('Selected games and interactive prototypes by Jeppe Dahl Guldager. Game design, level design, and hands-on development.','Design and development by Jeppe Dahl Guldager: interactive experiences, games, XR, custom hardware, and research.').replace('Game Designer — Level Designer','Designer &amp; Developer').replace('Jeppe Dahl<br>Guldager','Jeppe Dahl Guldager').replace('Games, spaces, and the ways we interact with them.','I design and build interactive experiences, from games and XR to custom hardware and research prototypes.').replace('Games & interactive prototypes','Design, technology &amp; interaction').replace('Let’s talk games.','Let’s make something meaningful.');
fs.writeFileSync(file,html);
fs.appendFileSync('portfolio/dist/style.css',`\n/* Balanced introduction and consistent project columns. */
.intro{text-align:center;padding:56px 0 54px}
.intro h1{font-size:clamp(2.5rem,5.4vw,4.25rem);line-height:1.12;text-wrap:balance}
.intro-copy{max-width:650px;margin:22px auto 14px;text-wrap:balance}
.project-grid{grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:44px;align-items:center}
.media img{aspect-ratio:16/9}
.expanded{grid-template-columns:repeat(2,minmax(0,1fr));gap:28px 44px}
footer>div:first-child{text-align:center;padding:16px 0 8px}
footer h2{text-wrap:balance}
@media(max-width:750px){.intro{padding:42px 0}.intro h1{max-width:560px;margin:auto}.intro-copy{max-width:490px}.project-grid{grid-template-columns:1fr;gap:24px}.expanded{grid-template-columns:1fr;gap:24px}footer h2{font-size:30px}}
`);
