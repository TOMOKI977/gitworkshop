# Git y GitHub, desde cero

Presentación básica sobre Git y GitHub, en dos recorridos:

- **Terminal:** los comandos de `git` y `gh` que escribes tú mismo.
- **Agentes de IA:** los prompts que le das a tu agente para que ejecute la tarea.

Temas: conceptos, configuración, crear un proyecto, `status`, `add` y `commit`, `.gitignore`, ramas, subir a GitHub, issues, pull requests, mantener ramas al día, trabajo en equipo, conflictos, README y un resumen de comandos.

## Ver localmente

No necesita instalación ni build. Abre `index.html` en el navegador, o sirve la carpeta con cualquier servidor estático, por ejemplo:

```bash
python -m http.server 8000
```

Luego visita `http://localhost:8000`.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub y sube esta carpeta a la rama `main`.
2. Ve a **Settings > Pages**.
3. En **Build and deployment**, elige **Deploy from a branch**.
4. Selecciona la rama `main` y la carpeta `/ (root)`, luego guarda.
5. Espera un minuto y abre la URL que aparece en esa misma página.

El archivo `.nojekyll` evita que GitHub Pages procese el sitio con Jekyll.

## Estructura

```text
index.html    Contenido de la presentación
styles.css    Estilos
app.js        Selector de recorrido, aparición progresiva y copiar comandos
.nojekyll     Desactiva Jekyll en GitHub Pages
odd/tasks/    Documento de la feature (especificación y bitácora)
```

## Uso

En la portada elige **Terminal** o **Agentes de IA**. Los bloques de comandos y prompts se muestran según tu elección, y el botón **Copiar** lleva el texto al portapapeles. Navega con las flechas del teclado o con el scroll.

Los comandos usan placeholders como `TU-USUARIO` y `TU-REPO`. Reemplázalos por tus datos antes de ejecutarlos.
