# Alagappa Matriculation Hr. Sec. School: Website

React + Vite + React Router.

## Run
```
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # production files in /dist (upload these to hosting)
```

## Where to edit content
| What | File |
|---|---|
| School name, phones, email, address, social links, menus | `src/data/site.js` |
| Stats, news, gallery, events, toppers, results, founders, facilities, FAQs, etc. | `src/data/content.js` |
| Page paragraphs and headings | `src/pages/*.jsx` |
| Colours and fonts | top of `src/styles/style.css` (`:root`) |

Text containing `[EDIT]` shows a yellow "Edit" tag on the site, marking placeholder copy.

## Images
- `public/images/` holds the photos taken from the school's Google Drive, already converted from HEIC
  where needed and resized for the web (max 1800px). Reference them as `"/images/folder/file.jpg"`.
  - `logo/` holds the school crest and the group institution logos; `founders/`, `campus/`, `life/` (student photos),
    `toppers/`, `results/` (result posters) and `events/` (Dr. Umayal Ramanathan birthday 2025).
- Any path without a leading `/` (e.g. `"spotlight/karate.jpg"`) still loads older photos from the
  current school website. Replace these with local photos when you have them.

## Hosting
`public/.htaccess` makes page refreshes work on Apache/cPanel hosting. On Netlify, add a
`_redirects` file with `/* /index.html 200`.
