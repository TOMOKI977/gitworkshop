Objetivo: presentación estática para GitHub Pages sobre Git y GitHub básico, en dos recorridos (Terminal y Agentes de IA).
Rama: sin git inicializado en esta carpeta; sin commits.
Estrategia de entrega: single-pr. Test runner: node --check app.js.

## Specs
S1. Un solo deck con selector de recorrido "Terminal" y "Agentes de IA"; cada paso muestra su bloque correspondiente.
S2. Cada paso tiene bloque de comandos (Terminal) y bloque de prompt para agente (Agentes IA), con botón Copiar.
S3. Temas: conceptos Git vs GitHub, configuración, crear proyecto, primer cambio (status, add, commit), mensajes de commit, .gitignore, ramas, subir a GitHub, issues, pull requests, mantener ramas al día, trabajo en equipo, conflictos, README, resumen.
S4. Textos visibles en español neutro; identificadores y comentarios de código en inglés.
S5. HTML/CSS/JS vanilla, sin build. Responsive, accesible con teclado, con contraste razonable.
S6. Estilo visual similar a stellarworkshop/site, sin sus QR ni referencias a ese proyecto.
S7. Comandos correctos para Windows PowerShell y Bash cuando difieran; placeholders TU-USUARIO y TU-REPO.

## Tasks
T1. S1, S2, S3, S4, S5, S6, S7 | route inline | status: done (index.html)
T2. S5, S6 | route inline | status: done (styles.css)
T3. S1, S2 | route inline | status: done (app.js)
T4. S5 | route inline | status: done (README.md, .nojekyll)
T5. verificación: node --check app.js (OK); enlaces locales styles.css y app.js existen; sin restos de stellarworkshop (OK) | status: done

## Log
L1 (2026-11-20, original): "Hola, tenemos que preparar una presentacion en githubpages, sobre como usar git y github, de forma basica, pero dirigido en 2 formatos, una usando comandos de terminal, y otra usando agentes. Tal como hicimos con este otro proyecto: [C:\Dev\stellarworkshop], una enfocado netamente en solo usar git y github desde la terminal, y otra usando el cli con los agentes de AI para pedirle cosas. Al ser algo basico, solo vamos a hablar de como crear un proyecto, como crear las ramas, como crear issues, como crear pr, como manejar el tema de ramas, como trabajar en equipo, los readme, el git add, sttus, etc, etc"
L2: decisión del usuario: un solo deck con selector (no dos decks).
L3: delegación a worker rechazada (Permission denied: subagent) dos veces; usuario autorizó ejecución inline.
