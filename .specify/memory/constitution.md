# mariana-ui Constitution

Sistema de diseño de Mariana Restrepo Barrientos para aplicaciones web y móviles, con dos estilos
(Minimal y Creativo) que comparten una misma base de tokens y funcionan en modo claro y oscuro.

## Core Principles

### I. Accesibilidad primero (NO NEGOCIABLE)

- Todo componente DEBE cumplir WCAG 2.2 nivel AA en las 4 combinaciones
  (Minimal/Creativo × claro/oscuro).
- La revisión automática con axe-core DEBE dar 0 violaciones A/AA en cada historia de Storybook,
  en las 4 combinaciones.
- Todo control DEBE poder usarse solo con teclado, tener foco visible (`--mr-focus-ring`) y un
  nombre accesible. Los patrones interactivos DEBEN seguir la guía WAI-ARIA APG.
- Se DEBEN usar etiquetas visibles; el placeholder nunca reemplaza una etiqueta.
- El color NUNCA es la única señal de un estado: siempre va acompañado de texto, ícono o forma.
- El área táctil mínima DEBE ser de 24 × 24 px (WCAG 2.5.8); la meta del sistema es 40 px.
- Toda animación DEBE respetar `prefers-reduced-motion`.

**Por qué:** la accesibilidad es el diferencial del sistema y no se puede agregar al final sin
rehacer el componente.

### II. Tokens antes que valores

- Los componentes DEBEN leer solo tokens de las capas 2 (forma) y 3 (color). Los primitivos
  (`--mr-violet-600`, `--mr-gray-900`…) NUNCA se usan directamente en un componente.
- En el CSS de un componente NO DEBEN aparecer colores, radios, sombras ni tipografías literales.
  Se exceptúan valores estructurales neutros (`0`, `1px` de un separador, porcentajes de layout).
- Un token nuevo DEBE justificarse en el plan, existir en los dos estilos y los dos temas, y
  documentarse en la página Fundamentos → Tokens.
- Las sombras y el anillo de foco se declaran junto al color (capa 3), nunca junto a la forma,
  para que hereden el tema correcto.

**Por qué:** cambiar de estilo o de tema debe ser cambiar tokens, no reescribir componentes.

### III. Dos estilos, un componente (NO NEGOCIABLE)

- Ningún componente se publica si no está diseñado y verificado en Minimal y en Creativo, en
  claro y en oscuro.
- Las diferencias entre estilos DEBEN expresarse con tokens. Un selector específico de estilo
  (`[data-style='creativo'] …`) solo se permite cuando un token no basta, y DEBE quedar justificado
  en el plan.
- La API del componente (props, comportamiento, accesibilidad) es idéntica en ambos estilos;
  solo cambia su apariencia.
- Cada componente DEBE tener en Storybook una historia que compare ambos estilos lado a lado.

**Por qué:** demostrar que el mismo sistema sirve a un producto sobrio y a uno expresivo es la
razón de ser de mariana-ui.

### IV. Pruebas primero (NO NEGOCIABLE)

- Las pruebas de comportamiento se escriben ANTES de la implementación y DEBEN fallar primero
  (rojo → verde → refactorizar).
- Cada componente DEBE probar con Vitest y Testing Library: su rol y nombre accesible, la
  interacción con mouse y con teclado, sus estados (deshabilitado, error, carga…) y sus atributos
  ARIA.
- Las consultas de las pruebas DEBEN ser las que usaría una persona (`getByRole`, `getByLabelText`)
  y no clases CSS ni identificadores internos.
- Ninguna tarea se marca como terminada con pruebas en rojo.

**Por qué:** las pruebas describen el contrato del componente; escribirlas primero obliga a pensar
en quien lo usa antes que en cómo se implementa.

### V. Web responsive, pensada para móvil

- Los componentes se diseñan primero para móvil y DEBEN verificarse en las vistas de Storybook:
  Móvil 375, Móvil grande 430, Tablet 768 y Escritorio 1280.
- Ninguna función DEBE depender solo de `hover`; todo lo que se ve al pasar el mouse también es
  accesible con toque y con teclado.
- Los componentes DEBEN funcionar sin desbordamiento horizontal en 320 px de ancho (WCAG 1.4.10).
- La plataforma objetivo es la web (React). Los tokens se mantienen independientes del framework
  para poder llevarlos a nativo en el futuro.

**Por qué:** las aplicaciones que el sistema quiere representar se usan sobre todo desde el
celular.

### VI. Nativo y simple

- Se DEBE preferir el elemento HTML nativo (`<button>`, `<input>`, `<dialog>`, `<details>`…) antes
  que recrear su comportamiento con JavaScript.
- No se agregan dependencias de ejecución nuevas sin justificarlas en el plan. React y React DOM
  son dependencias *peer*; la librería no incluye otras en tiempo de ejecución.
- La API pública DEBE ser pequeña y coherente entre componentes (`variant`, `size`, `disabled`,
  `onXChange`, modo controlado y no controlado con `value`/`defaultValue`).
- Se construye solo lo que una especificación pide (YAGNI).

**Por qué:** menos código propio es menos código que mantener y menos errores de accesibilidad.

### VII. Documentado en español

- Todo componente DEBE tener documentación en Storybook, en español, con: cuándo usarlo y cuándo
  no, variantes, notas de accesibilidad (teclado y lector de pantalla) y ejemplos de uso en web y
  móvil.
- Las especificaciones, planes y tareas de Spec Kit se escriben en español. Los nombres de código,
  props y tokens se escriben en inglés.
- El contenido público (documentación, README, portafolio) NUNCA menciona proyectos, cifras ni
  trabajo de la empresa donde Mariana hace sus prácticas.

**Por qué:** la documentación es la cara pública del sistema y parte del portafolio de Mariana.

## Restricciones técnicas

- **Lenguaje y framework:** TypeScript en modo `strict` y React ≥ 18 como dependencia *peer*.
- **Estilos:** CSS plano con tokens (`--mr-*`) y clases con prefijo `mr-` en notación BEM
  (`mr-componente__parte--variante`). Sin CSS-in-JS ni frameworks de utilidades.
- **Tema y estilo:** se controlan con los atributos `data-style` (`minimal` | `creativo`) y
  `data-theme` (`light` | `dark`) en cualquier contenedor.
- **Construcción:** Vite en modo librería, salida ESM y tipos `.d.ts`; el CSS se distribuye como
  `styles.css`.
- **Pruebas:** Vitest + Testing Library en jsdom; accesibilidad con axe-core en Storybook.
- **Documentación:** Storybook 9 con la marca propia (Editorial y Neón), publicada en GitHub Pages
  mediante GitHub Actions.
- **Navegadores:** las dos últimas versiones de Chrome, Edge, Firefox y Safari, y Safari iOS 16+.
- **Estructura:** cada componente vive en `src/components/<Nombre>/` con
  `<Nombre>.tsx`, `<Nombre>.css`, `<Nombre>.test.tsx` y `<Nombre>.stories.tsx`, y se exporta desde
  `src/index.ts`.

## Flujo de trabajo y puertas de calidad

1. **Especificar** (`/speckit-specify`): qué se necesita y por qué, sin decidir tecnología.
   Incluye casos de uso en web y móvil y en ambos estilos.
2. **Aclarar** (`/speckit-clarify`): obligatorio si la especificación tiene dudas abiertas.
3. **Planificar** (`/speckit-plan`): decisiones técnicas, tokens nuevos o modificados y la
   verificación de esta constitución (*Constitution Check*).
4. **Tareas** (`/speckit-tasks`): las tareas de pruebas van antes que las de implementación.
5. **Implementar** (`/speckit-implement`): paso a paso, mostrando el resultado a Mariana.

- Cada funcionalidad se trabaja en su propia rama (`NNN-nombre-corto`, la que crea Spec Kit) y se
  integra a `main` cuando cumple todas las puertas.
- **Puertas de calidad antes de integrar:** `npm run typecheck`, `npm test`, `npm run build` y
  `npm run build-storybook` sin errores; 0 violaciones de axe-core en las 4 combinaciones; revisión
  visual en las 4 vistas.
- **Aprobación de Mariana:** la especificación y el resultado visual de cada componente DEBEN ser
  aprobados por Mariana antes de avanzar a la siguiente etapa y antes de publicar.
- Los commits siguen Conventional Commits en español (`feat:`, `fix:`, `docs:`, `refactor:`,
  `chore:`).
- La librería sigue versionado semántico: un componente nuevo es MINOR; un cambio que rompe la
  API o renombra tokens públicos es MAJOR.

## Governance

- Esta constitución prevalece sobre cualquier otra práctica del proyecto. Si una especificación o
  un plan la contradicen, se corrige la especificación o el plan, o se enmienda la constitución.
- Las enmiendas se hacen con `/speckit-constitution`, quedan registradas en git y requieren la
  aprobación de Mariana.
- **Versionado de la constitución:** MAJOR al eliminar o redefinir un principio; MINOR al agregar
  un principio o ampliar una regla de forma material; PATCH en aclaraciones y redacción.
- Todo plan DEBE incluir la verificación de esta constitución. Cualquier excepción DEBE quedar
  justificada en la sección *Complexity Tracking* del plan.
- Se revisa el cumplimiento al cerrar cada funcionalidad, con `/speckit-analyze` cuando la
  funcionalidad tenga más de un componente.

**Version**: 1.0.0 | **Ratified**: 2026-11-13 | **Last Amended**: 2026-11-13
