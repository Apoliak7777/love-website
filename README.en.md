<div align="center">

[![Slovencina](https://img.shields.io/badge/SK-Sloven%C4%8Dina-30363d?style=for-the-badge)](README.md) [![English](https://img.shields.io/badge/EN-English-2ea043?style=for-the-badge)](README.en.md)

</div>

<div align="center">

# 💕 Together Forever — Love Countdown

**A romantic page that counts every single second Alex & Vivien have spent together, in real time.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![No dependencies](https://img.shields.io/badge/dependencies-none-ff4d6d?style=flat-square)
![License](https://img.shields.io/badge/license-GPL--3.0-2ea043?style=flat-square)

[🌐 Live site](https://apoliak7777.github.io/love-website/)

</div>

---

## 📑 Contents

- [💫 About the project](#-about-the-project)
- [✨ What the page does](#-what-the-page-does)
- [🚀 Quick start](#-quick-start)
- [🗂 Project structure](#-project-structure)
- [🔧 Configuration](#-configuration)
- [🎨 Design and colors](#-design-and-colors)
- [🌍 Deployment](#-deployment)
- [⚠️ Good to know](#️-good-to-know)
- [📄 License](#-license)

---

## 💫 About the project

A static website — one `index.html`, one `style.css`, one `script.js`. No build, no framework, no package manager. Open it in a browser and it runs straight away.

The page counts down (more precisely: counts **up**) the time since `25 January 2025, 19:00` in years, months, days, hours, minutes and seconds — and it does so with Slovak grammatical inflection, so it really does display *1 rok*, *2 roky*, *5 rokov*. Besides the counter it features an intro animation with a beating heart, a personal message, a gallery, rotating quotes and a canvas particle system that fires off a burst of glowing lights on click.

> This version is a complete redesign of the original — a dark "luxury" backdrop, glassmorphism, serif fonts from Google Fonts.

## ✨ What the page does

- ⏱ **Live counter** — calculated from a fixed date, refreshed every second via `setInterval`; every digit that changes gets a short `pop` animation.
- 🇸🇰 **Slovak inflection** — the `declension()` function picks the right word form based on the value (1 / 2–4 / 5+), so the labels under the numbers are grammatically correct.
- 🎇 **Canvas particles** — ambient rising lights (new ones stop spawning above 120 particles) plus a burst of 20–34 particles on every click or touch.
- 💌 **Intro animation** — a glowing beating heart with the text "Náš príbeh…", fading out after 3.2 s or on click.
- 💬 **Rotating quotes** — five quotes alternate every 7 seconds with a smooth cross-fade.
- 🪞 **Glassmorphism** — the counter and message cards use `backdrop-filter: blur(20px)`, subtle borders and a glow shadow on hover.
- 📜 **Scroll reveal + parallax** — sections are revealed via `IntersectionObserver`, the hero shifts and fades as you scroll.
- 📱 **Responsive layout** — the counter is always 3 columns, the gallery shrinks from 3 columns to 2 below 768 px.
- ♿ **Respects `prefers-reduced-motion`** — CSS animations and transitions are cut to zero and ambient particles never spawn; the click burst still fires.

## 🚀 Quick start

```bash
git clone https://github.com/Apoliak7777/love-website.git
cd love-website
```

After that just open `index.html` in a browser — the project has no dependencies and no build step.

If you would rather use a local server (e.g. for cleaner paths):

```bash
python -m http.server 5173
# or
npx serve .
```

Then open `http://localhost:5173`.

## 🗂 Project structure

```text
love-website/
├─ index.html    # the entire page structure: intro, hero, counter, message, gallery, quotes, footer
├─ style.css     # CSS variables, glassmorphism, keyframes, responsiveness, reduced-motion
├─ script.js     # CONFIG (date + quotes), counter, inflection, scroll effects, canvas particles
├─ CNAME         # custom domain for GitHub Pages
├─ README.md     # documentation in Slovak
├─ README.en.md  # this documentation (English)
└─ LICENSE       # GNU GPL v3
```

## 🔧 Configuration

Everything that matters sits at the top of `script.js` in the `CONFIG` object:

```js
const CONFIG = {
    startDate: new Date("2025-01-25T19:00:00"),
    quotes: [
        "Láska nie je o tom, koľko dní ste spolu, ale o tom, koľko lásky ste do tých dní vložili.",
        // ... more quotes
    ]
};
```

| What to change | Where | Note |
|---|---|---|
| Start date and time | `CONFIG.startDate` in `script.js` | Format `YYYY-MM-DDTHH:mm:ss`, read in the browser's local time |
| Quotes | `CONFIG.quotes` in `script.js` | An array of strings, rotating every 7 s; with a single item the rotation is disabled |
| Names and headings | `index.html` — `.hero-title` | The text `Alex & Vivien` |
| The date in the "Naša cesta začala…" line | `index.html` — `.since` | **Not** tied to `CONFIG.startDate`, has to be edited by hand |
| Personal message and signature | `index.html` — `.love-letter`, `.signature` | |
| Photos | `index.html` — `.photo-grid` | Currently placeholder photos from Unsplash |
| Colors and fonts | `:root` in `style.css` | CSS variables all in one place |
| Domain | `CNAME` | |

## 🎨 Design and colors

| Variable | Value | Used for |
|---|---|---|
| `--bg-dark` | `#1a0510` | base background |
| `--bg-wine` | `#38081f` | dark wine shade in the gradients |
| `--bg-rose` | `#611030` | rosy tint of the background |
| `--accent-glow` | `#ff4d6d` | main accent, hearts, glow |
| `--accent-light` | `#ffb3c1` | counter digits, quotes, signature |
| `--text-main` | `#fdf0f3` | body text |
| `--text-muted` | `#ffc2d1` | labels and secondary text |

Fonts (Google Fonts): **Playfair Display** (headings and numbers), **Lora** (body text), **Sacramento** (signatures and the ampersand).

## 🌍 Deployment

The site runs on **GitHub Pages** from branch `main`, folder `/ (root)`:

<https://apoliak7777.github.io/love-website/>

If you ever attach a custom domain:

1. Add a `CNAME` file to the repository root with the domain on a single line.
2. In your DNS, point a `CNAME` record for the subdomain to `apoliak7777.github.io`.
3. Enable *Enforce HTTPS* once the domain is verified.

Since these are purely static files, Vercel, Netlify and Cloudflare Pages work just as well — just connect the repo, no build command and no output directory needed.

## ⚠️ Good to know

> **The gallery photos are placeholders.** Six images are loaded from Unsplash via external URLs — so on first load the page pulls data from a third-party server. Replace them with your own photos whenever you like.

> **The date is duplicated in the text.** The sentence "Naša cesta začala 25. januára 2025 o 19:00" is hardcoded in `index.html`. If you change `CONFIG.startDate`, update that line too, otherwise the page will contradict itself.

> **The counter runs in the visitor's local time.** `new Date("2025-01-25T19:00:00")` carries no time zone, so in a different zone the result shifts slightly.

> **The fonts require an internet connection.** `Playfair Display`, `Lora` and `Sacramento` are loaded from Google Fonts; offline the page falls back to the system serif.

## 📄 License

The project is licensed under the **GNU General Public License v3.0** — the full text is in the [LICENSE](LICENSE) file.

---

<div align="center">

*I love you more with every passing second.* ❤️

Built by **Alex Poliak** - [GitHub](https://github.com/Apoliak7777) - [alexpoliak21@gmail.com](mailto:alexpoliak21@gmail.com)

</div>
