# mariana-ui

Sistema de diseño de **Mariana Restrepo Barrientos** para aplicaciones **web y móviles**, con dos estilos que comparten la misma base: **Minimal** y **Creativo**, cada uno en modo claro y oscuro.

**[Ver la documentación en vivo →](https://mariana-restrepo.github.io/mariana-ui/)**

Hecho por [Mariana Restrepo Barrientos](https://mariana-restrepo.github.io/Mi-Portafolio/), diseñadora UX/UI y desarrolladora frontend.

---

## La idea

Un mismo producto puede necesitar verse **sobrio** (un banco, una app de salud, una herramienta B2B) o **expresivo** (una marca, una comunidad, una app de lifestyle). En lugar de diseñar dos librerías, mariana-ui separa el **carácter** del **componente**: los componentes leerán solo tokens, y el estilo se elige con un atributo.

| | Minimal | Creativo |
|---|---|---|
| Para | Bancos, salud, B2B, herramientas de trabajo | Marcas, comunidades, lifestyle, apps de consumo |
| Forma | Esquinas discretas, bordes finos, sombras suaves | Píldoras, bordes de tinta, sombras sólidas desplazadas |
| Tipografía | Plus Jakarta Sans | Bricolage Grotesque + Plus Jakarta Sans |
| Color | Blanco y negro con acento violeta | Crema, rosa y violeta |

```html
<div data-style="creativo" data-theme="dark">
  …tu aplicación…
</div>
```

## Arquitectura de tokens

```
1. Primitivos   paleta cruda (--mr-violet-600, --mr-pink-400…)       nunca se usan en componentes
2. Forma        según data-style (--mr-radius-control, --mr-border-width…)
3. Color        según data-style × data-theme (--mr-color-primary, --mr-shadow-surface…)
```

Las sombras y el anillo de foco se declaran junto al **color** (no junto a la forma) para que un contenedor con otro tema herede el color correcto.

## Documentación con marca propia

La interfaz de Storybook cambia de piel con los selectores de la barra superior:

| | Claro | Oscuro |
|---|---|---|
| **Minimal → Editorial** | Crema, tinta y bronce | Espresso, crema y dorado |
| **Creativo → Neón** | Blanco lavanda con neones intensos | Ciruela con rosa, amarillo y menta |

Incluye vistas de **móvil (375 y 430), tablet (768) y escritorio (1280)**.

## Estado

Esta versión es la **base del sistema**: tokens y documentación. Los componentes se construirán sobre ella, paso a paso, comparando siempre cómo se ven en Minimal y en Creativo.

## Cómo se desarrolla: Spec Kit

Cada componente nace de una especificación, siguiendo [Spec Kit](https://github.com/github/spec-kit) y la
[constitución del proyecto](.specify/memory/constitution.md):

1. `/speckit-specify` · qué se necesita y por qué (web y móvil, Minimal y Creativo, accesibilidad)
2. `/speckit-clarify` · resolver dudas antes de planificar
3. `/speckit-plan` · decisiones técnicas, tokens y verificación de la constitución
4. `/speckit-tasks` · tareas con las pruebas primero
5. `/speckit-implement` · implementación paso a paso

Principios no negociables: **accesibilidad WCAG 2.2 AA**, **dos estilos para cada componente** y
**pruebas antes que código**. Las especificaciones viven en `specs/` y las plantillas propias en
`.specify/templates/overrides/`.

## Desarrollo

```bash
npm install
npm run dev        # Storybook en http://localhost:6006
npm test           # pruebas
npm run build      # librería en dist/
```

## Licencia

MIT
