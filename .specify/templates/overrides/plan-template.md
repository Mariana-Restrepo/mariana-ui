# Plan de implementación (Implementation Plan): [FEATURE]

**Rama (Branch)**: `[###-feature-name]` | **Fecha**: [DATE] | **Especificación**: [link]

**Entrada**: Especificación en `/specs/[###-feature-name]/spec.md`

**Nota**: Esta plantilla la completa el comando `/speckit-plan`. Plantilla propia de mariana-ui, en español.

## Resumen (Summary)

[Requisito principal de la especificación + enfoque técnico elegido]

## Contexto técnico (Technical Context)

<!-- Valores fijos del proyecto (constitución → Restricciones técnicas). Ajusta solo lo que cambie. -->

**Lenguaje/Versión**: TypeScript 5.8 (`strict`), React ≥ 18 como dependencia *peer*

**Dependencias principales**: ninguna en tiempo de ejecución además de React

**Almacenamiento**: N/A

**Pruebas**: Vitest + Testing Library (jsdom); axe-core en Storybook

**Plataforma objetivo**: Web responsive (Chrome, Edge, Firefox y Safari en sus dos últimas versiones; Safari iOS 16+)

**Tipo de proyecto**: Librería de componentes (sistema de diseño)

**Metas de rendimiento**: [ej. sin re-renderizados innecesarios; animaciones a 60 fps o NEEDS CLARIFICATION]

**Restricciones**: [ej. sin dependencias nuevas; CSS solo con tokens]

**Alcance**: [componentes y variantes que entrega este plan]

## Verificación de la constitución (Constitution Check)

*PUERTA: debe pasar antes de la investigación (fase 0) y revisarse de nuevo después del diseño (fase 1).*

| # | Principio | ¿Cumple? | Cómo se cumple / qué falta |
|---|---|---|---|
| I | Accesibilidad primero (rol, teclado, foco, axe 0 en 4 combinaciones) | [ ] | |
| II | Tokens antes que valores (sin literales; tokens nuevos justificados) | [ ] | |
| III | Dos estilos, un componente (Minimal y Creativo, claro y oscuro, comparación en Storybook) | [ ] | |
| IV | Pruebas primero (pruebas escritas y fallando antes de implementar) | [ ] | |
| V | Web responsive pensada para móvil (375, 430, 768, 1280; 320 px sin desbordar) | [ ] | |
| VI | Nativo y simple (elemento HTML nativo, sin dependencias nuevas, API coherente) | [ ] | |
| VII | Documentado en español (cuándo usar, accesibilidad, ejemplos web y móvil) | [ ] | |

## Tokens (Principio II)

<!-- Lista los tokens que usa el componente. Todo token nuevo debe existir en los dos estilos y los dos temas. -->

| Token | Capa | ¿Nuevo? | Minimal | Creativo | Justificación |
|---|---|---|---|---|---|
| `--mr-…` | forma / color | sí / no | | | |

**Selectores específicos de estilo** (`[data-style='creativo'] …`): [ninguno, o cuál y por qué un token no basta]

## Estructura del proyecto (Project Structure)

### Documentación (de esta funcionalidad)

```text
specs/[###-feature]/
├── plan.md              # Este archivo (/speckit-plan)
├── research.md          # Fase 0 (/speckit-plan)
├── data-model.md        # Fase 1: anatomía, props, estados (/speckit-plan)
├── quickstart.md        # Fase 1: cómo probarlo a mano (/speckit-plan)
├── contracts/           # Fase 1: API pública en TypeScript (/speckit-plan)
└── tasks.md             # Fase 2 (/speckit-tasks; NO lo crea /speckit-plan)
```

### Código fuente

```text
src/
├── components/
│   └── [Nombre]/
│       ├── [Nombre].tsx           # componente
│       ├── [Nombre].css           # estilos (solo tokens)
│       ├── [Nombre].test.tsx      # pruebas de comportamiento (se escriben primero)
│       └── [Nombre].stories.tsx   # documentación y comparación de estilos
├── tokens/tokens.css              # tokens nuevos o modificados
├── docs/                          # páginas de documentación generales
└── index.ts                       # exportación pública
```

**Decisión de estructura**: [Confirma la estructura o explica cualquier cambio]

## Seguimiento de complejidad (Complexity Tracking)

> **Completar SOLO si la verificación de la constitución tiene excepciones que deban justificarse**

| Excepción | Por qué se necesita | Alternativa más simple descartada porque |
|---|---|---|
| [ej. selector específico de estilo] | [necesidad concreta] | [por qué un token no basta] |
