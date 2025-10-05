<?php
// Nastavte počiatočný dátum a čas (25.01., 19:00)
$startDate = new DateTime('2025-01-25 19:00:00');
$now = new DateTime('now');
$interval = $startDate->diff($now);
?>
<!DOCTYPE html>
<html lang="sk">
<head>
    <meta charset="UTF-8">
    <title>Alex ❤️ Vivien - Náš príbeh lásky</title>
    <link href="https://fonts.googleapis.com/css2?family=Sacramento&family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            background: linear-gradient(135deg, #ffdde1 0%, #ee9ca7 100%);
            min-height: 100vh;
            font-family: 'Montserrat', sans-serif;
            margin: 0;
            color: #ad1457;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .heart {
            font-size: 5rem;
            color: #e53935;
            animation: heartbeat 1s infinite;
            margin: 20px 0;
        }
        @keyframes heartbeat {
            0%, 100% { transform: scale(1);}
            20% { transform: scale(1.2);}
            40% { transform: scale(0.9);}
            60% { transform: scale(1.1);}
            80% { transform: scale(1);}
        }
        h1 {
            font-family: 'Sacramento', cursive;
            font-size: 3rem;
            margin: 0 0 10px 0;
            letter-spacing: 2px;
        }
        .names {
            font-size: 2rem;
            font-family: 'Sacramento', cursive;
            margin-bottom: 20px;
        }
        .counter {
            background: rgba(255,255,255,0.8);
            border-radius: 20px;
            padding: 25px 35px;
            box-shadow: 0 4px 24px rgba(255, 120, 120, 0.2);
            font-size: 1.4rem;
            text-align: center;
        }
        .footer {
            margin-top: 40px;
            font-size: 1rem;
            color: #c2185b;
            opacity: 0.8;
        }
        .love-quote {
            margin: 30px 0;
            font-style: italic;
            font-size: 1.3rem;
            color: #ad1457;
        }
    </style>
</head>
<body>
    <div class="heart">💖</div>
    <h1>Navždy spolu...</h1>
    <div class="names">Alex & Vivien</div>
    <div class="counter" id="counter">
        <strong>Sme spolu už:</strong><br>
        <?php
            echo $interval->y . " rokov, ";
            echo $interval->m . " mesiacov, ";
            echo $interval->d . " dní,<br>";
            echo $interval->h . " hodín, ";
            echo $interval->i . " minút a ";
            echo $interval->s . " sekúnd";
        ?>
    </div>
    <div class="love-quote">
        „Láska je, keď myslíš viac na druhého než na seba. <br>
        Tvoja ruka v mojej, navždy spolu.“ <br><br>
        <span style="font-size:1.6rem; color:#e53935;">❤️</span>
    </div>
    <div class="footer">
        Začiatok našej lásky: 25.01.2025, 19:00 <br>
        Milujem ťa, Vivien!<br>
        <span style="font-size:1.1rem;">Tvoj Alex</span>
    </div>
    <script>
        // JavaScript pre živý counter
        const start = new Date("2025-01-25T19:00:00");
        function updateCounter() {
            const now = new Date();
            let diff = Math.floor((now - start) / 1000);

            const years = Math.floor(diff / (365.25 * 24 * 60 * 60));
            diff -= years * 365.25 * 24 * 60 * 60;

            const months = Math.floor(diff / (30.44 * 24 * 60 * 60));
            diff -= months * 30.44 * 24 * 60 * 60;

            const days = Math.floor(diff / (24 * 60 * 60));
            diff -= days * 24 * 60 * 60;

            const hours = Math.floor(diff / (60 * 60));
            diff -= hours * 60 * 60;

            const minutes = Math.floor(diff / 60);
            const seconds = diff - minutes * 60;

            document.getElementById('counter').innerHTML =
                "<strong>Sme spolu už:</strong><br>" +
                years + " rokov, " +
                months + " mesiacov, " +
                days + " dní,<br>" +
                hours + " hodín, " +
                minutes + " minút a " +
                seconds + " sekúnd";
        }
        setInterval(updateCounter, 1000);
    </script>
</body>
</html>