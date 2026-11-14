# Especificación (Feature Specification): [FEATURE NAME]

**Rama (Feature Branch)**: `[###-feature-name]`

**Creada**: [DATE]

**Estado**: Borrador

**Entrada**: Descripción de Mariana: "$ARGUMENTS"

<!--
  mariana-ui · Plantilla propia (override de Spec Kit)
  - Se escribe en español. Los nombres de código, props y tokens van en inglés.
  - Describe QUÉ necesita la persona y POR QUÉ. No decide tecnología (eso va en el plan).
  - Cumple la constitución: accesibilidad, dos estilos, web y móvil, documentación en español.
  - Marca toda duda con [NEEDS CLARIFICATION: pregunta concreta] (máximo 3; el resto se asume).
-->

## Escenarios de uso y pruebas (User Scenarios & Testing) *(obligatorio)*

<!--
  Las historias van PRIORIZADAS (P1 es la más importante) y cada una se puede probar sola:
  si solo se construye la P1, el componente ya aporta valor.
  "Persona" puede ser quien usa una app hecha con mariana-ui o quien desarrolla con la librería.
-->

### Historia 1 (User Story 1) - [Título breve] (Prioridad: P1)

[Describe en lenguaje sencillo lo que la persona quiere lograr]

**Por qué esta prioridad**: [Valor que aporta y por qué va primero]

**Prueba independiente**: [Cómo se comprueba esta historia por sí sola]

**Escenarios de aceptación**:

1. **Dado** [estado inicial], **cuando** [acción], **entonces** [resultado esperado]
2. **Dado** [estado inicial], **cuando** [acción con teclado], **entonces** [resultado esperado]

---

### Historia 2 (User Story 2) - [Título breve] (Prioridad: P2)

[Describe en lenguaje sencillo lo que la persona quiere lograr]

**Por qué esta prioridad**: [Valor que aporta]

**Prueba independiente**: [Cómo se comprueba esta historia por sí sola]

**Escenarios de aceptación**:

1. **Dado** [estado inicial], **cuando** [acción], **entonces** [resultado esperado]

---

[Agrega más historias si hacen falta, cada una con su prioridad]

### Casos límite (Edge Cases)

<!-- Revisa como mínimo estos casos y elimina los que no apliquen. -->

- ¿Qué pasa con textos muy largos o en otro idioma?
- ¿Qué pasa a 320 px de ancho (sin desbordamiento horizontal)?
- ¿Qué pasa si el componente está deshabilitado, en error o cargando?
- ¿Qué pasa con `prefers-reduced-motion` activado?
- ¿Qué pasa con zoom del navegador al 200 %?

## Diseño en los dos estilos *(obligatorio · Principio III)*

<!-- La API y el comportamiento son idénticos; aquí solo se describe cómo se ve cada estilo. -->

| Aspecto | Minimal | Creativo |
|---|---|---|
| Carácter | [sobrio, discreto…] | [expresivo, juguetón…] |
| Forma (radios, bordes) | [ ] | [ ] |
| Sombra y elevación | [ ] | [ ] |
| Tipografía | [ ] | [ ] |
| Estados (hover, foco, activo) | [ ] | [ ] |

**Modo oscuro**: [Qué cambia o qué hay que cuidar en oscuro en cada estilo]

**Contexto de uso**: [Ejemplo de producto Minimal (banco, salud, B2B) y de producto Creativo (marca, comunidad, lifestyle) donde se usaría]

## Accesibilidad *(obligatorio · Principio I)*

- **Rol y patrón**: [rol ARIA o elemento nativo; patrón WAI-ARIA APG si aplica]
- **Nombre accesible**: [de dónde sale: etiqueta visible, aria-label…]
- **Teclado**: [Tab, Enter, Espacio, flechas, Esc… qué hace cada tecla]
- **Lector de pantalla**: [qué se anuncia y cuándo]
- **Foco**: [dónde empieza, a dónde vuelve, que siempre sea visible]
- **Criterios WCAG relevantes**: [ej. 1.4.3 contraste, 2.1.1 teclado, 2.5.8 tamaño del objetivo]

## Web y móvil *(obligatorio · Principio V)*

| Vista | Comportamiento esperado |
|---|---|
| Móvil · 375 | [ ] |
| Móvil grande · 430 | [ ] |
| Tablet · 768 | [ ] |
| Escritorio · 1280 | [ ] |

**Interacción táctil**: [área mínima, nada que dependa solo del hover]

## Requisitos (Requirements) *(obligatorio)*

### Requisitos funcionales (Functional Requirements)

- **FR-001**: El componente DEBE [capacidad concreta]
- **FR-002**: El componente DEBE [capacidad concreta]
- **FR-003**: Quien desarrolla DEBE poder [uso de la API, ej. modo controlado y no controlado]
- **FR-004**: El componente DEBE verse y funcionar en Minimal y Creativo, en claro y oscuro
- **FR-005**: El componente DEBE poder usarse completo solo con teclado

*Ejemplo de requisito con duda:*

- **FR-006**: El componente DEBE [capacidad] [NEEDS CLARIFICATION: pregunta concreta]

### Anatomía y API pública (Key Entities)

<!-- Partes visibles, variantes y estados, sin decidir implementación. -->

- **Partes**: [ej. contenedor, etiqueta, ícono, texto de ayuda]
- **Variantes**: [ej. primary, secondary, ghost]
- **Tamaños**: [ej. sm, md, lg]
- **Estados**: [ej. normal, hover, foco, activo, deshabilitado, error, cargando]

## Criterios de éxito (Success Criteria) *(obligatorio)*

### Resultados medibles (Measurable Outcomes)

- **SC-001**: 0 violaciones de axe-core (WCAG A/AA) en las 4 combinaciones de estilo y tema
- **SC-002**: Todas las acciones se completan solo con teclado
- **SC-003**: Sin desbordamiento horizontal a 320 px y área táctil ≥ 24 px (meta 40 px)
- **SC-004**: [Criterio propio del componente, medible y sin tecnología]

## Supuestos (Assumptions)

- [Supuesto razonable que se tomó porque la descripción no lo decía]

## Fuera de alcance

- [Lo que esta especificación NO incluye, para evitar crecer sin control]
