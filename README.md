# Cleansimur

Cleansimur is a heritage-led herbal wellness website for Nigeria. The site presents the brand story, wellness positioning, available product sizes, compensation plan, and a link to the main Cleansimur website.

## Tech stack

- HTML5
- CSS3
- Vanilla JavaScript
- [`serve`](https://www.npmjs.com/package/serve) for local development
- Vercel-compatible static deployment

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build check

```bash
npm run build
```

This is a static site, so the build command verifies that the site is ready to serve without generating a separate output directory.

## Project structure

```text
.
├── index.html      # Main page markup and content
├── styles.css      # Site layout, responsive styles, and visual design
├── script.js       # Mobile navigation behavior
├── public/         # Images and other public assets
├── package.json    # Scripts and development dependency
└── vercel.json     # Vercel URL configuration
```

## Deployment

The project can be deployed directly to Vercel as a static site. Import the repository into Vercel, keep the project root as the deployment root, and use the existing configuration in `vercel.json`.

For a CLI deployment, install and authenticate with the Vercel CLI, then run:

```bash
vercel
```

## Content note

Product information on the site is for general wellness purposes only and is not medical advice.
