/* =====================================================================
   Navždy spolu — Love Countdown  •  script.js
   Pre: Vivien 💕  /  Od: Alex
   ===================================================================== */
const CONFIG = {
    // Začiatok vzťahu
    startDate: new Date("2025-01-25T19:00:00"),

    // Citáty
    quotes: [
        "Láska nie je o tom, koľko dní ste spolu, ale o tom, koľko lásky ste do tých dní vložili.",
        "S tebou je každá obyčajná chvíľa tou najkrajšou na svete.",
        "Nájsť teba bolo to najlepšie, čo sa mi kedy stalo.",
        "Ty si môj domov — nech som kdekoľvek.",
        "Milujem ťa dnes, zajtra a každú ďalšiu sekundu navždy."
    ]
};

/* =====================================================================
   1) POČÍTADLO
   ===================================================================== */
function declension(value, one, few, many) {
    if (value === 1) return one;
    if (value >= 2 && value <= 4) return few;
    return many;
}

function diffParts(start, now) {
    let y  = now.getFullYear()  - start.getFullYear();
    let mo = now.getMonth()     - start.getMonth();
    let d  = now.getDate()      - start.getDate();
    let h  = now.getHours()     - start.getHours();
    let mi = now.getMinutes()   - start.getMinutes();
    let s  = now.getSeconds()   - start.getSeconds();

    if (s  < 0) { s  += 60; mi--; }
    if (mi < 0) { mi += 60; h--;  }
    if (h  < 0) { h  += 24; d--;  }
    if (d  < 0) {
        const daysInPrevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        d += daysInPrevMonth;
        mo--;
    }
    if (mo < 0) { mo += 12; y--; }

    return { y, mo, d, h, mi, s };
}

const els = {
    years:   document.getElementById('years'),
    months:  document.getElementById('months'),
    days:    document.getElementById('days'),
    hours:   document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds'),
    yearsL:   document.getElementById('years-label'),
    monthsL:  document.getElementById('months-label'),
    daysL:    document.getElementById('days-label'),
    hoursL:   document.getElementById('hours-label'),
    minutesL: document.getElementById('minutes-label'),
    secondsL: document.getElementById('seconds-label'),
};

function setUnit(numEl, labelEl, value, forms) {
    if (numEl.textContent !== String(value)) {
        numEl.textContent = value;
        numEl.classList.remove('tick');
        void numEl.offsetWidth; // reštart animácie
        numEl.classList.add('tick');
    }
    labelEl.textContent = declension(value, forms[0], forms[1], forms[2]);
}

function updateCounter() {
    const p = diffParts(CONFIG.startDate, new Date());
    setUnit(els.years,   els.yearsL,   p.y,  ["rok", "roky", "rokov"]);
    setUnit(els.months,  els.monthsL,  p.mo, ["mesiac", "mesiace", "mesiacov"]);
    setUnit(els.days,    els.daysL,    p.d,  ["deň", "dni", "dní"]);
    setUnit(els.hours,   els.hoursL,   p.h,  ["hodina", "hodiny", "hodín"]);
    setUnit(els.minutes, els.minutesL, p.mi, ["minúta", "minúty", "minút"]);
    setUnit(els.seconds, els.secondsL, p.s,  ["sekunda", "sekundy", "sekúnd"]);
}

updateCounter();
setInterval(updateCounter, 1000);

/* =====================================================================
   1b) MÍĽNIKY
   Všetko sa počíta z CONFIG.startDate — netreba nič dopĺňať ručne.
   ===================================================================== */
(function milestones() {
    const grid = document.getElementById('milestone-grid');
    if (!grid) return;

    const MONTHS = ['januára', 'februára', 'marca', 'apríla', 'mája', 'júna',
                    'júla', 'augusta', 'septembra', 'októbra', 'novembra', 'decembra'];

    const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
    const DAY = 86400000;
    const start = CONFIG.startDate;
    const today = startOfDay(new Date());
    const daysTogether = Math.floor((today - startOfDay(start)) / DAY);

    const formatDate = (d) => `${d.getDate()}. ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;

    // o koľko dní — s korektným skloňovaním
    function inDays(n) {
        if (n === 0) return 'dnes';
        if (n === 1) return 'zajtra';
        return 'o ' + n + ' ' + declension(n, 'deň', 'dni', 'dní');
    }

    const items = [];

    // 1) Najbližšia okrúhla stovka dní
    const nextHundred = (Math.floor(daysTogether / 100) + 1) * 100;
    const hundredDate = new Date(startOfDay(start).getTime() + nextHundred * DAY);
    items.push({
        big: nextHundred.toLocaleString('sk-SK'),
        unit: declension(nextHundred, 'deň', 'dni', 'dní') + ' spolu',
        date: formatDate(hundredDate),
        left: Math.round((hundredDate - today) / DAY)
    });

    // 2) Najbližšie mesačné výročie
    let monthly = new Date(today.getFullYear(), today.getMonth(), start.getDate());
    if (monthly <= today) monthly = new Date(today.getFullYear(), today.getMonth() + 1, start.getDate());
    const monthsCount = (monthly.getFullYear() - start.getFullYear()) * 12
                      + (monthly.getMonth() - start.getMonth());
    items.push({
        big: String(monthsCount),
        unit: declension(monthsCount, 'mesiac', 'mesiace', 'mesiacov') + ' spolu',
        date: formatDate(monthly),
        left: Math.round((monthly - today) / DAY)
    });

    // 3) Najbližšie výročie
    let yearly = new Date(today.getFullYear(), start.getMonth(), start.getDate());
    if (yearly <= today) yearly = new Date(today.getFullYear() + 1, start.getMonth(), start.getDate());
    const yearsCount = yearly.getFullYear() - start.getFullYear();
    items.push({
        big: String(yearsCount),
        unit: declension(yearsCount, 'rok', 'roky', 'rokov') + ' spolu',
        date: formatDate(yearly),
        left: Math.round((yearly - today) / DAY)
    });

    // najbližší míľnik zvýrazníme
    const soonest = Math.min(...items.map(i => i.left));

    grid.innerHTML = '';
    items.forEach(item => {
        const card = document.createElement('article');
        card.className = 'milestone-card' + (item.left === soonest ? ' is-next' : '');
        card.innerHTML =
            '<span class="milestone-big"></span>' +
            '<span class="milestone-unit"></span>' +
            '<span class="milestone-date"></span>' +
            '<span class="milestone-left"></span>';
        card.querySelector('.milestone-big').textContent = item.big;
        card.querySelector('.milestone-unit').textContent = item.unit;
        card.querySelector('.milestone-date').textContent = item.date;
        card.querySelector('.milestone-left').textContent = inDays(item.left);
        grid.appendChild(card);
    });
})();

/* =====================================================================
   2) CITÁTY
   ===================================================================== */
(function rotatingQuotes() {
    const el = document.getElementById('quote-text');
    if (!el || CONFIG.quotes.length <= 1) return;

    let i = 0;
    setInterval(() => {
        el.classList.add('fade');
        setTimeout(() => {
            i = (i + 1) % CONFIG.quotes.length;
            el.textContent = CONFIG.quotes[i];
            el.classList.remove('fade');
        }, 800);
    }, 7000);
})();

/* =====================================================================
   3) SCROLL REVEAL & PARALLAX
   ===================================================================== */
(function scrollEffects() {
    // Reveal
    const items = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    obs.unobserve(e.target);
                }
            });
        }, { threshold: 0.15 });
        items.forEach(el => obs.observe(el));
    } else {
        items.forEach(el => el.classList.add('visible'));
    }

    // Parallax
    const parallaxEl = document.querySelector('[data-parallax]');
    if (parallaxEl && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            parallaxEl.style.transform = `translateY(${scrolled * 0.4}px)`;
            parallaxEl.style.opacity = 1 - (scrolled * 0.003);
        }, { passive: true });
    }
})();

/* =====================================================================
   4) ÚVOD
   ===================================================================== */
(function intro() {
    const intro = document.getElementById('intro');
    if (!intro) return;
    const hide = () => intro.classList.add('hide');
    setTimeout(hide, 3200);
    intro.addEventListener('click', hide);
})();

/* =====================================================================
   5) PRÉMIOVÝ PARTICLE SYSTEM (Canvas)
   ===================================================================== */
(function particlesCanvas() {
    const canvas = document.getElementById('hearts-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    function resize() {
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width  = W * dpr;
        canvas.height = H * dpr;
        canvas.style.width  = W + 'px';
        canvas.style.height = H + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    // Farby pre častice (luxusné ružové a fialkové odtiene)
    const COLORS = ['#ff4d6d', '#ffb3c1', '#c9184a', '#ff758f', '#ffc2d1'];
    const pick = arr => arr[Math.floor(Math.random() * arr.length)];

    class Particle {
        constructor(opts) {
            this.x = opts.x;
            this.y = opts.y;
            this.size = opts.size;
            this.color = opts.color;
            this.vx = opts.vx;
            this.vy = opts.vy;
            this.gravity = opts.gravity || 0;
            this.alpha = opts.alpha || 0.8;
            this.fade = opts.fade || 0;
            this.life = true;
            this.glow = opts.glow || false;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.vy += this.gravity;
            if (this.fade) this.alpha -= this.fade;
            
            // oscilácia do strán
            this.x += Math.sin(this.y * 0.05) * 0.5;

            if (this.alpha <= 0 || this.y < -50 || this.y > H + 50 || this.x < -50 || this.x > W + 50) {
                this.life = false;
            }
        }
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.globalAlpha = Math.max(0, this.alpha);
            
            if (this.glow) {
                ctx.shadowColor = this.color;
                ctx.shadowBlur = 15;
            }
            
            ctx.beginPath();
            ctx.arc(0, 0, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            
            ctx.restore();
        }
    }

    let particles = [];
    const MAX = 120;

    // Ambientné stúpajúce svetielka
    function spawnAmbient() {
        if (reduceMotion || particles.length > MAX) return;
        particles.push(new Particle({
            x: Math.random() * W,
            y: H + 20,
            size: 1 + Math.random() * 3,
            color: pick(COLORS),
            vx: (Math.random() - 0.5) * 0.5,
            vy: -(0.5 + Math.random() * 1.5),
            alpha: 0.2 + Math.random() * 0.5,
            fade: 0.001,
            glow: true
        }));
    }

    // Salva pri kliknutí
    function burst(x, y) {
        const n = 20 + Math.floor(Math.random() * 15);
        for (let i = 0; i < n; i++) {
            const angle = (Math.PI * 2 * i) / n + Math.random() * 0.5;
            const speed = 2 + Math.random() * 5;
            particles.push(new Particle({
                x, y,
                size: 2 + Math.random() * 5,
                color: pick(COLORS),
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 2,
                gravity: 0.08,
                alpha: 1,
                fade: 0.015 + Math.random() * 0.01,
                glow: true
            }));
        }
    }

    function onTap(x, y) {
        burst(x, y);
        const hint = document.getElementById('tap-hint');
        if (hint) hint.classList.add('hide');
    }

    window.addEventListener('click', e => onTap(e.clientX, e.clientY));
    window.addEventListener('touchstart', e => {
        const t = e.touches[0];
        if (t) onTap(t.clientX, t.clientY);
    }, { passive: true });

    if (!reduceMotion) setInterval(spawnAmbient, 300);

    function loop() {
        ctx.clearRect(0, 0, W, H);
        for (const p of particles) { p.update(); p.draw(); }
        particles = particles.filter(p => p.life);
        requestAnimationFrame(loop);
    }
    loop();
})();

setTimeout(() => {
    const hint = document.getElementById('tap-hint');
    if (hint) hint.classList.add('hide');
}, 8000);
