# Calculadora 24-K-PRO

Calculadora web construida con React, TypeScript y Bun.

## Requisitos

- [Bun](https://bun.sh) >= 1.0
- [Docker](https://docker.com) (opcional, para despliegue)

## Instalación

```bash
bun install
```

## Scripts disponibles

```bash
bun dev          # servidor de desarrollo en localhost:5173
bun run build    # compilar para producción
bun run test     # correr tests
bun run lint     # verificar estilo de código
bun run storybook        # storybook en localhost:6006
bun run build-storybook  # compilar storybook
```

## Funcionalidades

- Suma, resta, multiplicación, división y módulo
- Punto decimal
- Cambio de signo (+/-)
- Límite de 9 caracteres en pantalla
- Muestra `ERROR` si el resultado es negativo o mayor a 999,999,999
- División continua truncada a 9 caracteres (ej: 22/7)

## Correr con Docker

```bash
# Construir y levantar
docker compose up --build

# Abrir en el navegador
http://localhost:3000
```

Para detener:

```bash
docker compose down
```

## Estructura del proyecto

```
src/
├── components/      # Componentes React (≤20 líneas c/u)
│   ├── Display.tsx
│   ├── Boton.tsx
│   ├── TecladoNumerico.tsx
│   └── Calculadora.tsx
├── hooks/
│   └── useCalculadora.ts   # Lógica central
├── stories/         # Historias de Storybook
├── tests/           # Tests con Vitest
└── types.ts
```

## Tests

```bash
bun test
```

17 tests que cubren: operaciones básicas, límites de caracteres, manejo de errores, decimales, signo y encadenamiento de operaciones.

## Linting

```bash
bun run lint
```

Configurado con ESLint + TypeScript. Reglas activas:
- Sin punto y coma
- Máximo 120 caracteres por línea

## Tecnologías

- React 18 + TypeScript
- Vite
- Bun (package manager)
- Vitest + Testing Library
- Storybook
- ESLint

## Notas para el servidor

Subir el contenido de `dist/` después de `bun run build`, o usar Docker directamente si el servidor lo soporta.