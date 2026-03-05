<div align="center">

# 🎨 AI UI Library

**The shared design system for [Open AI School](https://openaischool.vercel.app)**

[![npm version](https://img.shields.io/npm/v/@open-ai-school/ai-ui-library?color=6366f1&label=npm)](https://www.npmjs.com/package/@open-ai-school/ai-ui-library)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=white)](https://open-ai-school.github.io/ai-ui-library/)
[![CI](https://github.com/open-ai-school/ai-ui-library/actions/workflows/ci.yml/badge.svg)](https://github.com/open-ai-school/ai-ui-library/actions/workflows/ci.yml)
[![npm downloads](https://img.shields.io/npm/dm/@open-ai-school/ai-ui-library?color=6366f1)](https://www.npmjs.com/package/@open-ai-school/ai-ui-library)

A production-ready React component library built with TypeScript, Tailwind CSS, and Framer Motion. Designed as the single source of truth for UI across all Open AI School programs.

Published via **OIDC Trusted Publishing** — zero tokens, fully automated CI/CD.

[**📖 Live Storybook →**](https://open-ai-school.github.io/ai-ui-library/) · [**📦 npm →**](https://www.npmjs.com/package/@open-ai-school/ai-ui-library) · [**🚀 Open AI School →**](https://openaischool.vercel.app)

</div>

---

## ✨ Features

- 🧩 **Composable components** — Button, Card, Badge, ThemeToggle, ScrollReveal, and more
- 🎭 **Dark/light mode** — Built-in ThemeProvider with system preference detection
- 🎬 **Smooth animations** — Framer Motion integration in every interactive component
- 🎨 **Design tokens** — CSS custom properties for consistent theming
- 📦 **Tree-shakeable** — ESM + CJS dual output via tsup
- 🔒 **TypeScript strict** — Full type safety with exported interfaces
- ♿ **Accessible** — Keyboard-navigable, ARIA-compliant
- 📖 **Storybook** — Interactive component playground with docs

## 📦 Installation

```bash
npm install @open-ai-school/ai-ui-library
```

**Peer dependencies** (you likely already have these):

```bash
npm install react react-dom next
```

## 🚀 Quick Start

```tsx
import { Button, Card, Badge, ThemeProvider, ThemeToggle } from "@open-ai-school/ai-ui-library";
import "@open-ai-school/ai-ui-library/styles.css";

export default function App() {
  return (
    <ThemeProvider>
      <div className="p-8 space-y-6">
        <ThemeToggle />

        <Card variant="glass" hover>
          <Badge variant="success">New</Badge>
          <h2>Welcome to Open AI School</h2>
          <Button variant="primary" size="lg">
            Start Learning →
          </Button>
        </Card>
      </div>
    </ThemeProvider>
  );
}
```

## 🧩 Components

### `<Button />`

Animated button with multiple variants and sizes.

| Prop      | Type                                                    | Default     | Description           |
| --------- | ------------------------------------------------------- | ----------- | --------------------- |
| `variant` | `"primary" \| "secondary" \| "ghost" \| "outline" \| "accent"` | `"primary"` | Visual style          |
| `size`    | `"sm" \| "md" \| "lg"`                                 | `"md"`      | Size                  |
| `loading` | `boolean`                                               | `false`     | Shows spinner         |

### `<Card />`

Container with glassmorphism and hover effects.

| Prop      | Type                                                | Default     | Description            |
| --------- | --------------------------------------------------- | ----------- | ---------------------- |
| `variant` | `"default" \| "elevated" \| "glass" \| "outline"`  | `"default"` | Visual style           |
| `hover`   | `boolean`                                           | `false`     | Enable hover animation |

### `<Badge />`

Status indicator / label.

| Prop      | Type                                                        | Default     | Description              |
| --------- | ----------------------------------------------------------- | ----------- | ------------------------ |
| `variant` | `"default" \| "success" \| "warning" \| "error" \| "info"` | `"default"` | Semantic color           |
| `size`    | `"sm" \| "md"`                                              | `"sm"`      | Size                     |
| `color`   | `string`                                                    | —           | Custom hex color override|

### `<ThemeProvider />` & `<ThemeToggle />`

Dark/light mode with system preference detection and localStorage persistence.

### `<ScrollReveal />`

Intersection Observer–powered entrance animations.

### `<FloatingParticles />`

Ambient animated background particles.

### `<CourseProgress />` & `<WelcomeBanner />`

Education-specific components for progress tracking and personalized greetings.

## 🎨 Design Tokens

Import the CSS to get the full token system:

```css
@import "@open-ai-school/ai-ui-library/styles.css";
```

### Available tokens

| Token                   | Light          | Dark           |
| ----------------------- | -------------- | -------------- |
| `--color-primary`       | `#6366f1`      | `#818cf8`      |
| `--color-accent`        | `#f59e0b`      | `#fbbf24`      |
| `--color-bg`            | `#f8fafc`      | `#0f172a`      |
| `--color-bg-card`       | `#ffffff`      | `#1e293b`      |
| `--color-text`          | `#0f172a`      | `#f1f5f9`      |
| `--color-text-muted`    | `#64748b`      | `#94a3b8`      |
| `--color-border`        | `#e2e8f0`      | `#334155`      |

See [`src/theme/tokens.css`](./src/theme/tokens.css) for the complete set.

## 🏗️ Architecture

```
ai-ui-library/
├── src/
│   ├── components/     # React components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── ThemeProvider.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── FloatingParticles.tsx
│   │   ├── CourseProgress.tsx
│   │   └── WelcomeBanner.tsx
│   ├── hooks/          # Custom hooks
│   │   ├── useProgress.ts
│   │   └── useGuestProfile.ts
│   ├── theme/          # Design tokens
│   │   └── tokens.css
│   ├── utils/          # Shared utilities
│   └── index.ts        # Public API (barrel export)
├── .storybook/         # Storybook configuration
├── tsup.config.ts      # Build configuration
├── tsconfig.json       # TypeScript configuration
└── package.json
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start Storybook dev server
npm run storybook

# Build the library
npm run build

# Watch mode (rebuild on changes)
npm run dev
```

## 🌐 Used By

This library powers every repo in the [Open AI School](https://github.com/open-ai-school) org:

| Repo | Description |
|------|-------------|
| [`ai-platform`](https://github.com/open-ai-school/ai-platform) | Main Next.js app shell |
| [`ai-seeds`](https://github.com/open-ai-school/ai-seeds) | 🌱 Level 1: Absolute beginners |
| `ai-sprouts` | 🌿 Level 2: Foundations (coming soon) |
| `ai-branches` | 🌳 Level 3: Applied AI (coming soon) |
| `ai-canopy` | 🏕️ Level 4: Advanced (coming soon) |
| `ai-forest` | 🌲 Level 5: Expert (coming soon) |

## 🤝 Contributing

We welcome contributions! See our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repo
2. Create your feature branch: `git checkout -b feat/amazing-component`
3. Add your component in `src/components/`
4. Add a Storybook story
5. Run `npm run build` to verify
6. Submit a PR

## 📄 License

MIT © [Open AI School](https://github.com/open-ai-school)
