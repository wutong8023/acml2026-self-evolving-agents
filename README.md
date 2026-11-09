# ACML 2026 Tutorial

**From Continual Learning to Self-Evolving Agents**

A complete, responsive, dependency-free website for GitHub Pages. The content is based on the supplied tutorial proposal and programme image. The programme totals **150 minutes**, including the 10-minute closing discussion.

## Files

```text
.
├── index.html                       # All public tutorial content
├── 404.html                         # GitHub Pages error page
├── assets/
│   ├── styles.css                   # Responsive and print styles
│   ├── main.js                      # Accessible navigation and module controls
│   ├── favicon.svg                  # Local vector icon
│   └── acml2026-tutorial-proposal.pdf
├── .github/workflows/pages.yml      # GitHub Pages deployment
├── .nojekyll                        # Serve as a plain static site
├── .gitignore
└── README.md
```

No npm installation, build tool, external font, analytics, or API key is needed. All tutorial content, navigation, individual module disclosures, and reading links work without JavaScript. JavaScript adds the mobile menu, expand/collapse-all control, section highlighting, and direct module-link expansion.

## Preview locally

From this repository directory:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Open <http://127.0.0.1:8000>. Press Ctrl+C to stop the server. You can also open `index.html` directly in a browser.

## Deploy to GitHub Pages

The local repository is configured for:

<https://github.com/wutong8023/acml2026-self-evolving-agents>

1. Commit these files to the repository's `main` branch and push them to GitHub.
2. In the GitHub repository, open **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Open **Actions → Deploy GitHub Pages**. If the initial run happened before Pages was enabled, select **Run workflow** for the `main` branch.
5. After the workflow succeeds, GitHub provides the deployed URL in the `github-pages` environment.

Expected URL for the configured repository (only available after successful deployment):

<https://wutong8023.github.io/acml2026-self-evolving-agents/>

Subsequent pushes to `main` redeploy the website. The workflow stages only public website files in `_site`, so the README and repository configuration are not included in the published artifact.

Workflow structure follows [GitHub's custom Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

### Alternative: deploy from a branch

Instead of using the included Actions workflow, remove `.github/workflows/pages.yml`, then choose **Deploy from a branch → main → / (root)** in **Settings → Pages**. The `.nojekyll` file ensures plain static hosting. Use one deployment method at a time.

## Update the content

- **Title, abstract, learning outcomes, programme, bios, resources:** edit `index.html`.
- **Date, start time, room:** replace the `.schedule-note` paragraph when confirmed; add the same details to the hero if desired. No date or venue has been invented.
- **Slides or recordings:** add the files under `assets/` and real links under Resources when available. No placeholder buttons are included.
- **Colour, typography, spacing:** edit the variables and rules in `assets/styles.css`.
- **Site icon:** edit `assets/favicon.svg`.
- **Repository name or custom domain:** update the home link in `404.html` and the URLs in this README. Main-page assets and links are relative and support GitHub project paths.
- **Proposal:** replace `assets/acml2026-tutorial-proposal.pdf` if a revised version is supplied.

The presenter roles, affiliations, email addresses, publication details, and arXiv links reproduce the supplied proposal. The site does not assert independent verification of those details. The original PDF is included as a public downloadable resource; remove its two links and its file if it should not be published.

## Content and design notes

- English page content; `lang="en"` is set on both HTML pages.
- Native `<details>` elements provide keyboard-accessible module descriptions.
- Skip navigation, visible keyboard focus, reduced-motion support, and print styling are included.
- All fonts and design assets are local; external requests occur only when a visitor follows a reading or email link.
- No event registration, date, venue, speaker portrait, or official conference logo has been fabricated.
- No licence is assigned to the supplied proposal or other third-party research materials.
