# Manogna.OS

An interactive desktop-inspired portfolio for Sista Manogna.

## Run locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Add your photograph

Place a transparent-background PNG portrait at `public/manogna-photo.png`. The homepage currently shows a styled placeholder if this file does not exist. A portrait cutout with a laptop or sitting pose works especially well.

## Edit your content

Update folder labels, projects, and window contents in `src/main.jsx`. Styles and responsive layout live in `src/style.css`.

The resume PDF is included in `public/Manogna_Sista_Resume.pdf`. Replace it when your resume changes.

## Deploy

Run `npm run build` and deploy the resulting `dist` directory on Vercel or Netlify, or import the repository into either provider. No backend is required.

## Notes

Project links are included only where repositories were confirmed. Other project links can be added once supplied. This is a first version, not a finished production release.
