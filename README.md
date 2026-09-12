# DESI ADDA — Restaurant Website

A React + Vite website for DESI ADDA, an Indian restaurant. Built with React Router, Tailwind CSS, and Radix UI. This project runs fully standalone — no backend, no login, no third-party platform account required.

## Tech stack

- **React 18** + **Vite** — UI and build tooling
- **React Router** — client-side routing
- **Tailwind CSS** + **Radix UI** — styling and accessible UI primitives
- **TanStack Query** — data fetching/caching utilities

## Project structure

```
src/
  data/           Restaurant info, menu items, and image URLs (edit these to update site content)
    restaurant.js  Name, address, phone, hours, social links, online ordering URL
    menu.js        Menu sections and items
    images.js      Dish/gallery image references
  components/
    site/          Page sections (Hero, Menu, Gallery, Featured Dishes, etc.)
    ui/            Reusable UI primitives (buttons, cards, dialogs, etc.)
  pages/
    Home.jsx       The main (and only) page
  App.jsx          Routes
  main.jsx         App entry point
public/            Static assets (favicon, etc.)
```

## Editing restaurant content

Most day-to-day edits (address, phone, hours, menu items, prices, social links, online ordering link) only require changing plain data files — no component code needs to change:

- **Restaurant details & online ordering link:** `src/data/restaurant.js`
- **Menu items:** `src/data/menu.js`
- **Images:** `src/data/images.js`

## Running locally

Requires [Node.js](https://nodejs.org/) 18 or later.

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`. Hot reload is enabled — edits to any file show up immediately.

### Build for production

```bash
npm run build
```

Outputs static files to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Deploying to GitHub Pages

This repo includes a ready-to-go GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and publishes the site automatically on every push to `main`.

1. Push this project to a GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Push to `main` (or go to the **Actions** tab and manually run the "Deploy to GitHub Pages" workflow).
5. Once the workflow's `build` and `deploy` jobs both show a green checkmark, your site is live at:
   ```
   https://<your-github-username>.github.io/<repo-name>/
   ```

The workflow automatically builds with the correct base path for whatever repository name you use, so no manual configuration is needed.

## Notes

- Dish and gallery photos are served from a public image CDN — no image hosting setup needed.
- There is no backend or database. All content lives in the `src/data/` files listed above.
