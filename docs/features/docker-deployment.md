# Feature: Docker Deployment

## Overview

Multi-stage Dockerfile for building and running the Astro site on a self-hosted VPS via Coolify. Uses `@astrojs/node` adapter in standalone mode.

## Astro Node Adapter

```javascript
// astro.config.mjs
import node from '@astrojs/node';

export default defineConfig({
  output: 'hybrid',
  adapter: node({
    mode: 'standalone',
  }),
});
```

Standalone mode produces a self-contained Node server at `dist/server/entry.mjs`.

## Dockerfile

```dockerfile
# Stage 1: Build
FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Stage 2: Runtime
FROM node:22-alpine AS runtime

WORKDIR /app

# Copy built output and production deps
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./

# Expose port
ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

# Run the server
CMD ["node", "dist/server/entry.mjs"]
```

### Notes

- **Multi-stage:** Build stage includes dev deps and source. Runtime stage is minimal — only built output and production node_modules.
- **Alpine:** Small base image.
- **Port 4321:** Astro's default. Coolify can map this to whatever external port/domain is needed.
- **Environment variables:** `HOST=0.0.0.0` ensures the server listens on all interfaces (required for Docker).

## Coolify Setup

1. Point Coolify at the Git repository
2. Set build method to Dockerfile
3. Coolify builds the Docker image and runs the container
4. Configure domain/SSL in Coolify (points to `amandasemporium.co.uk`)
5. Coolify handles HTTPS termination and reverse proxy

## Environment Variables

| Variable | Default | Purpose |
| -------- | ------- | ------- |
| `HOST` | `0.0.0.0` | Server bind address |
| `PORT` | `4321` | Server port |
| `SITE` | `https://amandasemporium.co.uk` | Used for sitemap generation and canonical URLs |

## Analytics (Separate Service)

Plausible or Umami runs as a separate Coolify service on the same VPS:

- Separate Docker container
- Separate database (PostgreSQL for Plausible, or SQLite/MySQL for Umami)
- Accessed via a subdomain (e.g., `analytics.amandasemporium.co.uk`) or reverse proxy path

The Astro site includes a small analytics script tag pointing to this service.

## Files Involved

- `Dockerfile` — at project root
- `astro.config.mjs` — Node adapter configuration
- `.dockerignore` — exclude `node_modules`, `.git`, `old/`, etc.

## .dockerignore

```text
node_modules
.git
old
docs
.claude
.devcontainer
*.md
```
