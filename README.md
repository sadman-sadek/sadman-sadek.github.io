# TH3-C1PH3R — Sadman Sadek Portfolio

A fast, dependency-light personal portfolio for Sadman Sadek (TH3-C1PH3R).

## Files

- `index.html` — page structure, SEO metadata and social links
- `styles.css` — visual design, responsive layout and animations
- `script.js` — interactions and ambient background
- `data.js` — **the main editable content file**
- `robots.txt` — crawler instructions
- `sitemap.xml` — replace the placeholder URL after choosing a domain
- `favicon.svg` — simple site icon

## Update your portfolio

Most future edits should happen in `data.js`.

Add a project:

```js
{
  title: "Your Project",
  description: "What you built and what you learned.",
  tags: ["Python", "Networking"],
  link: "https://github.com/...",
  status: "Completed"
}
```

Add a skill by editing the `skills` array.

## Local preview

Because this is a static site, you can open `index.html` directly, but a local server is better.

With Python:

```bash
python -m http.server 8000
```

Then open:

`http://localhost:8000`

## GitHub

Recommended repository name:

`th3-c1ph3r.github.io` is available only if that GitHub account exists, so for your current account the safe choice is:

`sadman-sadek.github.io`

Push these files to the repository.

## Cloudflare

Recommended production flow:

GitHub → Cloudflare Pages/Workers → automatic deployment.

Connect the GitHub repository in Cloudflare, select the repository, and deploy it as a static site. No build framework is required for this project.

## Before launch

1. Add your final site URL to `index.html` where `og:url` and JSON-LD `url` are currently empty.
2. Replace the placeholder in `sitemap.xml`.
3. Add the site to Google Search Console.
4. Submit `/sitemap.xml`.
5. Keep GitHub, LinkedIn and X profiles consistent with the name `Sadman Sadek` and handle `TH3-C1PH3R`.

## Important

Do not put passwords, API keys, private certificates, private addresses, or other secrets in this repository.
