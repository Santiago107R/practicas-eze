<div align="center">
  <img src="https://skillicons.dev/icons?i=react,vite,tailwind,ts" height="80" alt="stack logo" />
  <br />
  <br />
  <img src="https://img.shields.io/github/repo-size/Santiago107R/my-react-template?color=646cff&style=for-the-badge&logo=github" alt="Repo Size" />
  <img src="https://img.shields.io/github/license/Santiago107R/template-react?style=for-the-badge&color=646cff" alt="License MIT" />
  <br />
  <p align="center">
    <strong>Template para utilizar React con TS + React Compiler, estilos con Tailwindcss y componentes con Shadcn.</strong>
  </p>
</div>

## Utilizar template
1. Cambiar el nombre del directorio a lo que deseen

2. Eliminar la carpeta git dentro del directorio principal, porque así podrían subirlo a sus propios repositorios

3. Instalar dependencias
   ```
   npm install
   ```

## Como cree el template

1. Genere todo con ```npm create vite```, luego pones nombre al proyecto y seleccionas React, Typescript + React Compiler

2. En los archivos __tsconfig.json__ y __tsconfig.app.json__ pegar:

```
"compilerOptions": { // este ya existe en el tsconfig.app.json
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
```

3. Instalar los tipos de node y tailwindcss:
```
npm install -D @types/node tailwindcss @tailwindcss/vite
```

4. Modificar el archivo __vite.config.ts__:
```
import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

```
5. En el __index.css__ deben poner:
```
@import "tailwindcss";
```

6. Ejecutar el CLI de shadcn para crear los archivos de configuración seleccionar __base__ para componentes con tailwindcss:
```
npx shadcn@latest init
```

## Como manejar el darkmode

1. Esta todo en el __theme-provider.tsx__
```
theme -> es el estado actual del tema
setTheme() -> es el que actualiza el estado del tema
toggleTheme() -> este sirve para poner el tema opuesto
```

2. En el __theme-provider.tsx__  también encontramos un script en el cual al tocar la letra D cambiamos de modo claro a oscuro y viceversa. En la línea ```119```

3. Para que al recargar la app no haya un parpadeo blanco en el caso de estar en modo oscuro deben poner un script en el head del __index.html__. Algo como esto:
```
<script>
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
</script>
```

