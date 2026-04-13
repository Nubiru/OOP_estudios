# OOP Abril 2026 — Ejercicios TypeScript

**Alumno:** Gabriel Osemberg

Repositorio con los ejercicios de la actividad practica de Programacion Orientada a Objetos
(Abril 2026). Todos los ejercicios estan resueltos en **TypeScript** y se encuentran en la
carpeta `ejercicios/`.

## Requisitos

- [Node.js](https://nodejs.org/) (v18 o superior)
- TypeScript (se instala con `npm install`)

## Instalacion

```bash
npm install
```

## Scripts disponibles

### Compilar todos los ejercicios

Compila cada archivo `.ts` de la carpeta `ejercicios/` a su equivalente `.js`:

```bash
npm run compile
```

### Ejecutar todos los ejercicios

Ejecuta todos los ejercicios compilados uno tras otro, mostrando un encabezado con el nombre
del archivo antes de cada salida:

```bash
npm run start
```

### Flujo completo (compilar + ejecutar)

```bash
npm run compile && npm run start
```

## Ejecutar un ejercicio individual

```bash
npx tsc ejercicios/ejercicio05.ts && node ejercicios/ejercicio05.js
```

## Estructura

Los ejercicios estan organizados en subcarpetas de 20 en 20:

```
abril/
├── ejercicios/
│   ├── 01-20/          Ejercicios 1 al 20 (incluye ejercicio01_1 con HTML)
│   ├── 21-40/          Ejercicios 21 al 40
│   ├── 41-60/          Ejercicios 41 al 60
│   └── 61-80/          Ejercicios 61 al 70 (en progreso)
├── docs/               Documentacion interna (ignorada por git)
├── package.json        Scripts y dependencias
└── README.md           Este archivo
```

Los scripts `npm run compile` y `npm run start` recorren todas las subcarpetas
automaticamente.
