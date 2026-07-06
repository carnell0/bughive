# BugHive — Journal de progression

## Session 1 — Fondations

### Ce que j'ai mis en place
- Projet Vite + React + TypeScript initialisé
- Mode strict activé dans tsconfig.app.json
- Tailwind CSS v4 configuré via @tailwindcss/vite
- Imports absolus avec l'alias @/ configuré dans vite.config.ts et tsconfig
- React Router v6 installé et configuré
- Structure de dossiers feature-based créée
- Layout principal avec sidebar et Outlet en place

### Ce que j'ai compris
- main.tsx est le point d'entrée unique, App.tsx est juste un composant
- .tsx pour les fichiers avec du JSX, .ts pour la logique pure
- react-router-dom est la version web de react-router
- Zustand résout le prop drilling en créant un store global
- Les Layout Routes permettent d'appliquer un layout à certaines pages seulement
- Outlet est le trou dans le layout où React Router injecte la page enfant
- flex sur le parent aligne les enfants, pas sur l'enfant lui-même

### Ce qui reste flou
-