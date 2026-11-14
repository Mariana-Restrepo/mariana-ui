---

description: "Plantilla de tareas de mariana-ui (en español, pruebas primero)"
---

# Tareas (Tasks): [FEATURE NAME]

**Entrada**: Documentos de diseño en `/specs/[###-feature-name]/`

**Requisitos previos**: plan.md (obligatorio), spec.md (obligatorio), research.md, data-model.md, contracts/

**Pruebas**: OBLIGATORIAS en mariana-ui (Principio IV). Las tareas de pruebas van antes que las de implementación y deben fallar primero.

**Organización**: las tareas se agrupan por historia, para que cada una se pueda implementar, probar y mostrar por separado.

## Formato: `[ID] [P?] [Historia] Descripción`

- **[P]**: se puede hacer en paralelo (archivos distintos, sin dependencias)
- **[Historia]**: a qué historia pertenece (US1, US2, US3…)
- Cada tarea incluye la ruta exacta del archivo

<!--
  ============================================================================
  IMPORTANTE: las tareas de abajo son EJEMPLOS.
  /speckit-tasks DEBE reemplazarlas por tareas reales basadas en spec.md y plan.md,
  y NO debe dejar estos ejemplos en el tasks.md generado.
  ============================================================================
-->

## Fase 1: Preparación (Setup)

**Propósito**: dejar lista la carpeta del componente

- [ ] T001 Crear `src/components/[Nombre]/` con sus 4 archivos vacíos (`.tsx`, `.css`, `.test.tsx`, `.stories.tsx`)

---

## Fase 2: Fundacional (Foundational)

**Propósito**: tokens que necesita el componente, en los dos estilos y los dos temas

**⚠️ CRÍTICO**: ninguna historia empieza antes de terminar esta fase

- [ ] T002 Agregar o ajustar tokens en `src/tokens/tokens.css` (Minimal y Creativo, claro y oscuro)
- [ ] T003 [P] Documentar los tokens nuevos en `src/docs/Tokens.stories.tsx`

**Punto de control**: tokens listos; se pueden empezar las historias

---

## Fase 3: Historia 1 - [Título] (Prioridad: P1) 🎯 MVP

**Objetivo**: [Qué entrega esta historia]

**Prueba independiente**: [Cómo verificarla por sí sola]

### Pruebas de la historia 1 (se escriben PRIMERO y deben FALLAR) ⚠️

- [ ] T004 [P] [US1] Prueba de rol y nombre accesible en `src/components/[Nombre]/[Nombre].test.tsx`
- [ ] T005 [P] [US1] Prueba de interacción con mouse y teclado en `src/components/[Nombre]/[Nombre].test.tsx`

### Implementación de la historia 1

- [ ] T006 [US1] Implementar el componente en `src/components/[Nombre]/[Nombre].tsx` (hasta que T004 y T005 pasen)
- [ ] T007 [US1] Estilos solo con tokens en `src/components/[Nombre]/[Nombre].css`
- [ ] T008 [US1] Historias de Storybook y comparación Minimal vs. Creativo en `src/components/[Nombre]/[Nombre].stories.tsx`
- [ ] T009 [US1] Exportar desde `src/index.ts`

**Punto de control**: la historia 1 funciona y se puede mostrar a Mariana

---

## Fase 4: Historia 2 - [Título] (Prioridad: P2)

**Objetivo**: [Qué entrega esta historia]

**Prueba independiente**: [Cómo verificarla por sí sola]

### Pruebas de la historia 2 (se escriben PRIMERO y deben FALLAR) ⚠️

- [ ] T010 [P] [US2] Prueba de [estado o variante] en `src/components/[Nombre]/[Nombre].test.tsx`

### Implementación de la historia 2

- [ ] T011 [US2] Implementar [estado o variante] en `src/components/[Nombre]/[Nombre].tsx`
- [ ] T012 [US2] Historias de Storybook de [estado o variante]

**Punto de control**: las historias 1 y 2 funcionan cada una por su cuenta

---

[Agrega más fases de historias siguiendo el mismo patrón]

---

## Fase N: Puertas de calidad y documentación

**Propósito**: cumplir las puertas de calidad de la constitución antes de integrar a `main`

- [ ] TXXX [P] Documentación en español en Storybook: cuándo usar y cuándo no, accesibilidad, ejemplos web y móvil
- [ ] TXXX `npm run typecheck`, `npm test`, `npm run build` y `npm run build-storybook` sin errores
- [ ] TXXX axe-core con 0 violaciones en las 4 combinaciones (Minimal/Creativo × claro/oscuro)
- [ ] TXXX Revisión visual en Móvil 375, Móvil grande 430, Tablet 768 y Escritorio 1280
- [ ] TXXX Mostrar el resultado a Mariana y obtener su aprobación antes de integrar y publicar

---

## Dependencias y orden de ejecución

### Dependencias entre fases

- **Preparación (fase 1)**: sin dependencias
- **Fundacional (fase 2)**: depende de la preparación y BLOQUEA todas las historias
- **Historias (fase 3 en adelante)**: dependen de la fase fundacional; se hacen en orden de prioridad (P1 → P2 → P3)
- **Puertas de calidad (fase final)**: dependen de todas las historias incluidas

### Dentro de cada historia

- Las pruebas se escriben y FALLAN antes de implementar
- El componente antes que sus estilos finos, y los estilos antes que las historias de Storybook
- La historia se termina y se muestra antes de pasar a la siguiente

### Oportunidades de paralelismo

- Las tareas marcadas [P] tocan archivos distintos y pueden hacerse a la vez
- Las pruebas [P] de una misma historia pueden escribirse juntas

---

## Estrategia de implementación

### MVP primero (solo la historia 1)

1. Completar la fase 1 (preparación) y la fase 2 (fundacional)
2. Completar la fase 3 (historia 1)
3. **PARAR Y VALIDAR**: mostrar la historia 1 a Mariana en los dos estilos y los dos temas
4. Seguir con la siguiente historia solo con su aprobación

### Entrega incremental

Cada historia agrega valor sin romper las anteriores, y cada una se muestra antes de continuar (paso a paso).

---

## Notas

- [P] = archivos distintos, sin dependencias
- [Historia] enlaza cada tarea con su historia para tener trazabilidad
- Verificar que las pruebas fallen antes de implementar
- Un commit (Conventional Commits en español) por tarea o grupo lógico
- Evitar: tareas vagas, conflictos en un mismo archivo y dependencias entre historias que rompan su independencia
