# Likhith Nagaralu Gurumurthy — Portfolio

Personal portfolio site showcasing my AI/ML and data engineering work: about,
experience, projects, skills, achievements, and a contact section.

## Tech stack

- [React 19](https://react.dev/)
- [Vite 7](https://vite.dev/) (dev server and build)
- [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/vite`
- [GSAP](https://gsap.com/) and Lenis for animation and smooth scrolling
- [OGL](https://github.com/oframe/ogl) for the WebGL background
- [react-icons](https://react-icons.github.io/react-icons/)
- ESLint for linting

## Getting started

Requires Node.js 20.19+ (or 22.12+), as needed by Vite 7.

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build locally
npm run lint     # run ESLint
```

## Project structure

```
index.html              # HTML entry (title, meta description, favicon)
public/                 # static files served as-is (favicon)
src/
  App.jsx               # page layout, section order
  components/           # one component per section (Hero, About, Projects, ...)
  utils/constants.jsx   # all site content: socials, experience, projects, skills
  assets/images/        # logos and project images
  assets/resume/        # resume.pdf (linked from Hero and Footer)
```

Most content edits happen in `src/utils/constants.jsx`.

## Keeping it up to date

- **Resume:** replace `src/assets/resume/resume.pdf` with the latest version
  (keep the same filename so the download links keep working).
- **Contact form:** currently opens the visitor's mail app via `mailto:`. To
  receive submissions directly, create a [Formspree](https://formspree.io/) form
  and set the form `action` in `src/components/ContactMe.jsx` to
  `https://formspree.io/f/<your-form-id>`.

## Deploy

The site is a static build (`npm run build` outputs `dist/`), so any static host works.

- **Vercel:** import the repo; framework preset "Vite", build command
  `npm run build`, output directory `dist`.
- **Netlify:** new site from Git; build command `npm run build`, publish
  directory `dist`.
- **GitHub Pages:** set `base: "/<repo-name>/"` in `vite.config.js` (unless using
  a custom domain or a `<user>.github.io` repo), build, and publish `dist/` with a
  GitHub Actions workflow (e.g. `actions/upload-pages-artifact` +
  `actions/deploy-pages`) or the `gh-pages` package.
