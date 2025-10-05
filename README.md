# Navždy spolu – Love Countdown

Romantická a minimalistická webová stránka, ktorá v reálnom čase zobrazuje, ako dlho sú **Alex & Vivien** spolu – v rokoch, mesiacoch, dňoch, hodinách, minútach a sekundách. Dopĺňa ju citát o láske, jemný ružový gradient, emoji srdiečka a osobné venovanie.

> „Láska je, keď myslíš viac na druhého než na seba. Tvoja ruka v mojej, navždy spolu.“

## ✨ Funkcie
- ⏱ Realtime prepočet trvania vzťahu od pevného dátumu (`25.01.2025 19:00`)
- ❤️ Personalizované mená a venovanie
- 💬 Romantický citát (možnosť zmeniť alebo rotovať viac citátov)
- 🎨 Jemný, čistý a responzívny dizajn (mobil / desktop)
- 🧮 Prepočet: roky, mesiace, dni, hodiny, minúty, sekundy
- ⚙️ Jednoduchá konfigurácia – stačí upraviť dátum a mená
- 🌐 Možné hostovať na GitHub Pages / Vercel / Netlify

## 🗂 Štruktúra (príklad)
```
/
├─ index.html
├─ style.css
├─ script.js
└─ assets/
   └─ heart.svg
```

## 🔧 Konfigurácia
V `script.js` (alebo inom súbore podľa implementácie) nastav:
```js
const startDate = new Date("2025-01-25T19:00:00"); // Začiatok lásky
const personA = "Alex";
const personB = "Vivien";
const loveQuote = "Láska je, keď myslíš viac na druhého než na seba. Tvoja ruka v mojej, navždy spolu.";
```

## 🚀 Spustenie lokálne
1. Naklonuj repozitár:
   ```bash
   git clone https://github.com/USERNAME/REPO.git
   cd REPO
   ```
2. Otvor `index.html` v prehliadači  
   – alebo spusti jednoduchý server (napr.):
   ```bash
   python -m http.server 5173
   # alebo
   npx serve .
   ```
3. Uprav mená/dátum a refreshni stránku.

## 🌍 Nasadenie
| Platforma    | Ako |
|--------------|-----|
| GitHub Pages | Nastav branch `main` → Settings → Pages |
| Vercel       | Import repo → Deploy |
| Netlify      | Drag & drop build alebo prepojenie repo |
| Cloudflare Pages | Prepoj repo → Deploy |

## 🧪 Možné vylepšenia
- Viac jazykov (SK / EN toggle)
- Temný mód
- Rotácia náhodných citátov
- Animácia čísel pri zmene
- PWA (pridanie na plochu)
- Ukladanie vlastného dátumu cez UI

## 🤝 Príspevky
Pull requesty s vylepšeniami (dizajn, internacionalizácia, accessibility) sú vítané.

## 📄 Licencia
Vyber licenciu (napr. MIT), alebo nechaj súkromné, ak je projekt osobný.

---

# English Version

## Forever Together – Love Countdown

A romantic, minimalist webpage showing in real time how long **Alex & Vivien** have been together (years, months, days, hours, minutes, seconds), plus a love quote, soft pink gradient and a personal dedication.

## Features
- Live duration calculation since `25 Jan 2025 19:00`
- Personalized names, dedication & quote
- Clean responsive layout
- Breakdown into Y / M / D / H / M / S
- Easy to configure (edit one date & names)
- Ready for GitHub Pages / Vercel / Netlify

(…English sections mirror Slovak ones above…)

---

S láskou vytvorené.  
„Milujem ťa, Vivien!“ – Alex ❤️
