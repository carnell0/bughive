# BugHive

A lightweight bug tracker for small teams, built with React, TypeScript, Supabase, and a feature-based folder structure.

## Overview

BugHive currently provides email/password authentication, protected routes, a projects list, a project board with drag-and-drop ticket status updates, and a ticket detail panel. The app is built as a small product-style React project with a Supabase backend.

## Features

- **Authentication** — Email/password login with protected routes and logout
- **Projects** — List projects, create a project, and delete a project
- **Board** — Open a project board and move tickets between To Do, In Progress, and Done
- **Tickets** — Create tickets and inspect their details from the board
- **Responsive layout** — Desktop sidebar plus mobile sidebar overlay
- **Testing** — Login flow covered with Vitest and React Testing Library

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS v4 |
| State management | Zustand for auth state |
| Backend | Supabase (Auth + Postgres) |
| Routing | React Router 7 |
| Drag & drop | dnd-kit |
| Testing | Vitest + React Testing Library + jsdom |

## Routes

- `/login` — login page
- `/projects` — projects list
- `/my-issues` — placeholder page currently scaffolded in the app
- `/projects/:id/board` — Kanban board for a project

## Project Structure

```
src/
├── components/        # Layout, Sidebar, ProtectedRoute
├── features/
│   ├── projects/      # project modal + project hook
│   └── tickets/       # board, cards, modals, hooks
├── lib/               # Supabase client
├── pages/             # route-level pages
├── store/             # Zustand auth store
├── test/              # test setup
└── types/             # shared TypeScript types
```

## Getting Started

### Prerequisites

- Node.js 18+
- A Supabase project

### Installation

```bash
git clone https://github.com/carnell0/bughive.git
cd bughive
npm install
```

### Environment variables

Copy `.env.example` to `.env` at the root and fill in your Supabase values:

```bash
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Supabase setup

Create `projects` and `tickets` tables in Supabase, with Row Level Security enabled. The shared data shapes are defined in [src/types/index.ts](src/types/index.ts).

### Run locally

```bash
npm run dev
```

### Run tests

```bash
npm run test
```

## Author

**Carnell THON** — Frontend & Mobile Developer
[GitHub](https://github.com/carnell0)
