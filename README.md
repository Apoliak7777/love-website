<div align="center">

[![Slovencina](https://img.shields.io/badge/SK-Sloven%C4%8Dina-2ea043?style=for-the-badge)](README.md) [![English](https://img.shields.io/badge/EN-English-30363d?style=for-the-badge)](README.en.md)

</div>

<div align="center">

# 💕 Navždy spolu — Love Countdown

**Romantická stránka, ktorá v reálnom čase počíta každú sekundu, čo sú Alex & Vivien spolu.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Bez závislostí](https://img.shields.io/badge/z%C3%A1vislosti-%C5%BEiadne-ff4d6d?style=flat-square)
![Licencia](https://img.shields.io/badge/licencia-GPL--3.0-2ea043?style=flat-square)

[🌐 laska.apoliak.online](https://laska.apoliak.online)

</div>

---

## 📑 Obsah

- [💫 O projekte](#-o-projekte)
- [✨ Čo stránka vie](#-čo-stránka-vie)
- [🚀 Rýchly štart](#-rýchly-štart)
- [🗂 Štruktúra projektu](#-štruktúra-projektu)
- [🔧 Konfigurácia](#-konfigurácia)
- [🎨 Dizajn a farby](#-dizajn-a-farby)
- [🌍 Nasadenie](#-nasadenie)
- [⚠️ Dobré vedieť](#️-dobré-vedieť)
- [📄 Licencia](#-licencia)

---

## 💫 O projekte

Statická webová stránka — jeden `index.html`, jeden `style.css`, jeden `script.js`. Žiadny build, žiadny framework, žiadny package manager. Otvoríš ju v prehliadači a hneď beží.

Stránka odpočítava (presnejšie: **na**počítava) čas od `25. januára 2025, 19:00` v rokoch, mesiacoch, dňoch, hodinách, minútach a sekundách — a robí to so slovenským skloňovaním, takže sa naozaj zobrazí *1 rok*, *2 roky*, *5 rokov*. Okrem počítadla obsahuje úvodnú animáciu s tlčúcim srdcom, osobný odkaz, galériu, rotujúce citáty a canvas particle systém, ktorý pri kliknutí vystrelí salvu žiariacich svetielok.

> Táto verzia je kompletný redizajn oproti pôvodnej — tmavý „luxusný" podklad, glassmorfizmus, serifové fonty z Google Fonts.

## ✨ Čo stránka vie

- ⏱ **Živé počítadlo** — prepočet od pevného dátumu, aktualizácia každú sekundu cez `setInterval`; každá zmenená číslica dostane krátku `pop` animáciu.
- 🇸🇰 **Slovenské skloňovanie** — funkcia `declension()` vyberá tvar podľa hodnoty (1 / 2–4 / 5+), takže popisky pod číslami sedia gramaticky.
- 🎇 **Canvas particles** — ambientné stúpajúce svetielka (nové sa prestanú pridávať nad 120 časticami) plus salva 20–34 častíc pri každom kliknutí alebo dotyku.
- 💌 **Úvodná animácia** — svietiace tlčúce srdce s textom „Náš príbeh…", zmizne po 3,2 s alebo po kliknutí.
- 💬 **Rotujúce citáty** — päť citátov sa strieda každých 7 sekúnd s plynulým prelínaním.
- 🪞 **Glassmorfizmus** — karty počítadla a odkazu majú `backdrop-filter: blur(20px)`, jemné okraje a glow tieň pri hoveri.
- 📜 **Scroll reveal + parallax** — sekcie sa odhaľujú cez `IntersectionObserver`, hero sa pri scrollovaní posúva a stráca.
- 📱 **Responzívny layout** — počítadlo je vždy 3 stĺpce, galéria sa z 3 stĺpcov zmenší na 2 pod 768 px.
- ♿ **Rešpektuje `prefers-reduced-motion`** — CSS animácie a prechody sa skrátia na nulu a ambientné častice sa vôbec nespustia; salva pri kliknutí zostáva aktívna.

## 🚀 Rýchly štart

```bash
git clone https://github.com/Apoliak7777/love-website.git
cd love-website
```

Ďalej stačí otvoriť `index.html` v prehliadači — projekt nemá žiadne závislosti ani build krok.

Ak chceš radšej lokálny server (napr. kvôli čistejším cestám):

```bash
python -m http.server 5173
# alebo
npx serve .
```

Potom otvor `http://localhost:5173`.

## 🗂 Štruktúra projektu

```text
love-website/
├─ index.html    # celá štruktúra stránky: intro, hero, počítadlo, odkaz, galéria, citáty, pätička
├─ style.css     # CSS premenné, glassmorfizmus, keyframes, responzívnosť, reduced-motion
├─ script.js     # CONFIG (dátum + citáty), počítadlo, skloňovanie, scroll efekty, canvas particles
├─ CNAME         # vlastná doména pre GitHub Pages
├─ README.md     # táto dokumentácia (slovensky)
├─ README.en.md  # dokumentácia po anglicky
└─ LICENSE       # GNU GPL v3
```

## 🔧 Konfigurácia

Všetko podstatné je na začiatku `script.js` v objekte `CONFIG`:

```js
const CONFIG = {
    startDate: new Date("2025-01-25T19:00:00"),
    quotes: [
        "Láska nie je o tom, koľko dní ste spolu, ale o tom, koľko lásky ste do tých dní vložili.",
        // ... ďalšie citáty
    ]
};
```

| Čo zmeniť | Kde | Poznámka |
|---|---|---|
| Dátum a čas začiatku | `CONFIG.startDate` v `script.js` | Formát `YYYY-MM-DDTHH:mm:ss`, čítaný v lokálnom čase prehliadača |
| Citáty | `CONFIG.quotes` v `script.js` | Pole textov, rotujú každých 7 s; pri jednom prvku sa rotácia vypne |
| Mená a nadpisy | `index.html` — `.hero-title` | Text `Alex & Vivien` |
| Dátum v texte „Naša cesta začala…" | `index.html` — `.since` | **Nie je** naviazaný na `CONFIG.startDate`, treba upraviť ručne |
| Osobný odkaz a podpis | `index.html` — `.love-letter`, `.signature` | |
| Fotky | `index.html` — `.photo-grid` | Aktuálne placeholder fotky z Unsplash |
| Farby a fonty | `:root` v `style.css` | CSS premenné na jednom mieste |
| Doména | `CNAME` | |

## 🎨 Dizajn a farby

| Premenná | Hodnota | Použitie |
|---|---|---|
| `--bg-dark` | `#1a0510` | základné pozadie |
| `--bg-wine` | `#38081f` | tmavý vínový odtieň v gradientoch |
| `--bg-rose` | `#611030` | ružový nádych pozadia |
| `--accent-glow` | `#ff4d6d` | hlavný akcent, srdcia, glow |
| `--accent-light` | `#ffb3c1` | čísla počítadla, citáty, podpis |
| `--text-main` | `#fdf0f3` | základný text |
| `--text-muted` | `#ffc2d1` | popisky a doplnkový text |

Fonty (Google Fonts): **Playfair Display** (nadpisy a čísla), **Lora** (text), **Sacramento** (podpisy a ampersand).

## 🌍 Nasadenie

Repozitár obsahuje `CNAME` s doménou `laska.apoliak.online`, čiže je pripravený na **GitHub Pages**:

1. Settings → Pages → Source: branch `main`, priečinok `/ (root)`.
2. V DNS nastav `CNAME` záznam pre subdoménu na `<username>.github.io`.
3. Zapni *Enforce HTTPS*.

Keďže ide o čisto statické súbory, rovnako dobre funguje Vercel, Netlify aj Cloudflare Pages — stačí prepojiť repo, žiadny build command ani output directory.

## ⚠️ Dobré vedieť

> **Fotky v galérii sú placeholdery.** Šesť obrázkov sa načítava z Unsplash cez externé URL — stránka teda pri prvom načítaní ťahá dáta z cudzieho servera. Nahraď ich vlastnými fotkami, keď budeš chcieť.

> **Dátum v texte je duplikovaný.** Veta „Naša cesta začala 25. januára 2025 o 19:00" je natvrdo v `index.html`. Ak zmeníš `CONFIG.startDate`, uprav aj ju, inak si stránka bude protirečiť.

> **Počítadlo beží v lokálnom čase návštevníka.** `new Date("2025-01-25T19:00:00")` je bez časovej zóny, takže v inom pásme sa výsledok mierne posunie.

> **Fonty vyžadujú internet.** `Playfair Display`, `Lora` a `Sacramento` sa načítavajú z Google Fonts; offline sa stránka zobrazí so systémovým serifom.

## 📄 Licencia

Projekt je licencovaný pod **GNU General Public License v3.0** — plné znenie je v súbore [LICENSE](LICENSE).

---

<div align="center">

*Milujem ťa viac s každou sekundou.* ❤️

Vytvoril **Alex Poliak** - [GitHub](https://github.com/Apoliak7777) - [alexpoliak21@gmail.com](mailto:alexpoliak21@gmail.com)

</div>
