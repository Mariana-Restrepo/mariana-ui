# mariana-ui

Sistema de diseño accesible en **React + TypeScript**: design tokens, 8 componentes y documentación interactiva en Storybook.

**[Ver la documentación en vivo →](https://mariana-restrepo.github.io/mariana-ui/)**

Hecho por [Mariana Restrepo Barrientos](https://mariana-restrepo.github.io/Mi-Portafolio/), diseñadora UX/UI y desarrolladora frontend.

---

## Por qué existe

Quería una base común para mis proyectos: que se vean consistentes, funcionen con teclado y lector de pantalla, y cambien entre modo claro y oscuro sin reescribir componentes. Este repo es esa base, y también muestra cómo trabajo en el punto donde se unen diseño y código.

## Principios

| | |
|---|---|
| ♿ **Accesible por defecto** | WCAG 2.2 AA y patrones WAI-ARIA. Cada historia se revisa con axe-core: **0 violaciones** en claro y oscuro. |
| 🎨 **Tokens primero** | Los componentes solo usan tokens semánticos (`--mr-color-primary`, `--mr-space-4`…). Un tema nuevo = tokens nuevos. |
| 🧱 **Nativo cuando se puede** | `<dialog>`, `<input type="checkbox">` y `<button>` ya traen teclado y semántica: se les da estilo en vez de reinventarlos. |
| ✅ **Probado** | 25 pruebas con Vitest + Testing Library que verifican el comportamiento real con mouse y teclado. |

## Componentes

| Componente | Lo importante |
|---|---|
| `Button` | 4 variantes, 3 tamaños, estado de carga con `aria-busy`, área táctil ≥ 40px |
| `TextField` | Etiqueta siempre visible, ayuda y error conectados con `aria-describedby` |
| `Checkbox` | Casilla nativa con estilo propio y descripción |
| `Switch` | `role="switch"`, controlado o no controlado |
| `Badge` | 6 tonos; el color nunca es la única señal |
| `Card` | Nivel de encabezado configurable para respetar la jerarquía |
| `Tabs` | Flechas, Inicio/Fin y *roving tabindex*; salta pestañas deshabilitadas |
| `Dialog` | Sobre `<dialog>`: atrapa el foco, cierra con Esc y devuelve el foco |

## Uso

```tsx
import { Button, TextField } from '@mariana-restrepo/mariana-ui'
import '@mariana-restrepo/mariana-ui/styles.css'

export function Login() {
  return (
    <div data-theme="dark">
      <TextField label="Correo" type="email" />
      <Button>Continuar</Button>
    </div>
  )
}
```

El tema se cambia con `data-theme="light" | "dark"` en cualquier contenedor.

## Desarrollo

```bash
npm install
npm run dev        # Storybook en http://localhost:6006
npm test           # pruebas
npm run build      # librería en dist/
```

## Estructura

```
src/
├── tokens/tokens.css        # primitivos + semánticos, claro y oscuro
├── components/<Nombre>/
│   ├── <Nombre>.tsx         # componente
│   ├── <Nombre>.css         # estilos (solo tokens)
│   ├── <Nombre>.test.tsx    # pruebas de comportamiento
│   └── <Nombre>.stories.tsx # documentación
└── docs/                    # introducción y tokens en Storybook
```

## Próximos pasos

- [ ] Select, Tooltip, Toast y Alert
- [ ] Tokens exportados desde Figma (Variables) con Style Dictionary
- [ ] Usar mariana-ui en mi [portafolio](https://github.com/Mariana-Restrepo/Mi-Portafolio)

## Licencia

MIT
