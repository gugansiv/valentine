/**
 * Initialization and Interaction Logic for ValentineWish
 * Enhanced with playful interactions and GSAP
 */

document.addEventListener('DOMContentLoaded', () => {
    const heartsContainer = document.getElementById('heartsContainer');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const bearImage = document.getElementById('bearImage');
    const questionContainer = document.getElementById('questionContainer');
    const successContainer = document.getElementById('successContainer');
    const continueBtn = document.getElementById('continueBtn');
    const yesNoSection = document.getElementById('yesNoSection');
    const storySection = document.getElementById('storySection');
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');

    if (bgMusic) bgMusic.volume = 1;

    console.log("Valentine App Initializing... 💖");

    // Continuous Heart Particles
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = ['💖', '💕', '💗', '❤️'][Math.floor(Math.random() * 4)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 8000);
    }
    setInterval(createHeart, 400);

    // Music Logic
    let isPlaying = false;

    const playMusic = () => {
        if (!isPlaying) {
            bgMusic.play().then(() => {
                console.log("Audio playing successfully! 🎵");
                isPlaying = true;
                musicToggle.classList.add('playing');
                musicToggle.innerHTML = '<span class="music-icon">🎵</span>';
            }).catch(e => {
                console.log("Playback failed/prevented:", e);
            });
        }
    };

    function toggleMusic(e) {
        e.stopPropagation(); // Prevent document click from firing
        if (isPlaying) {
            bgMusic.pause();
            musicToggle.classList.remove('playing');
            musicToggle.innerHTML = '<span class="music-icon">🔇</span>';
            isPlaying = false;
        } else {
            playMusic();
        }
    }

    musicToggle.addEventListener('click', toggleMusic);

    // Broader interaction listener for autoplay
    const initAudio = () => {
        playMusic();
        // Remove listeners after first successful attempt
        ['click', 'keydown', 'touchstart'].forEach(type => {
            document.removeEventListener(type, initAudio);
        });
    };

    ['click', 'keydown', 'touchstart'].forEach(type => {
        document.addEventListener(type, initAudio);
    });

    let noClickCount = 0;
    const noTexts = [
        'No',
        'Are you sure? 🥺',
        'Really sure? 💔',
        'Think again! 🙏',
        'Please? 🥹',
        "You're breaking my heart 😢",
        'Last chance! 💕',
        'Pretty please? 🌹',
        'Catch me! 🏃‍♂️'
    ];

    // Playful "Run Away" No Button Logic
    function moveNoButton() {
        if (noClickCount >= 5) {
            const padding = 50;
            const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - padding * 2) + padding;
            const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - padding * 2) + padding;

            gsap.to(noBtn, {
                duration: 0.3,
                position: 'fixed',
                left: x,
                top: y,
                rotation: Math.random() * 20 - 10,
                scale: Math.max(0.5, 1 - noClickCount * 0.05),
                ease: "power2.out"
            });
        }
    }

    noBtn.addEventListener('mouseover', moveNoButton);
    noBtn.addEventListener('touchstart', moveNoButton);

    noBtn.addEventListener('click', function () {
        noClickCount++;

        // Shake animation
        gsap.to(noBtn, {
            duration: 0.1,
            x: '+=10',
            yoyo: true,
            repeat: 5
        });

        if (bearImage) bearImage.src = './img/sad-bear.png';

        if (noClickCount < noTexts.length) {
            noBtn.textContent = noTexts[noClickCount];
        }

        // Grow Yes Button smoothly
        const nextFontSize = 18 + noClickCount * 8;
        const nextPaddingV = 15 + noClickCount * 5;
        const nextPaddingH = 40 + noClickCount * 10;

        gsap.to(yesBtn, {
            duration: 0.3,
            fontSize: nextFontSize,
            padding: `${nextPaddingV}px ${nextPaddingH}px`,
            ease: "back.out(1.7)"
        });

        if (noClickCount >= 5) {
            moveNoButton();
        }
    });

    yesBtn.addEventListener('click', function () {
        createConfettiBurst();
        gsap.to(questionContainer, {
            duration: 0.5,
            opacity: 0,
            scale: 0.8,
            onComplete: () => {
                questionContainer.style.display = 'none';
                successContainer.style.display = 'block';
                gsap.from(successContainer, {
                    duration: 0.8,
                    opacity: 0,
                    scale: 1.2,
                    ease: "elastic.out(1, 0.5)"
                });
                if (bearImage) bearImage.src = './img/happy-bear.png';
            }
        });
    });

    continueBtn.addEventListener('click', function () {
        // Magical transition to story
        const tl = gsap.timeline();
        tl.to(yesNoSection, {
            duration: 1.2,
            opacity: 0,
            scale: 1.1,
            filter: "blur(20px)",
            ease: "power3.inOut"
        })
            .set(yesNoSection, { display: 'none' })
            .set(storySection, { display: 'block', opacity: 0 })
            .to(storySection, {
                duration: 1.5,
                opacity: 1,
                onComplete: () => {
                    if (window.animationTimeline) {
                        window.animationTimeline();
                    }
                }
            });
    });

    function createConfettiBurst() {
        const colors = ['#ff1744', '#f50057', '#d500f9', '#651fff', '#00b0ff', '#00e676'];
        for (let i = 0; i < 200; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = '50%';
            confetti.style.top = '50%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            document.body.appendChild(confetti);

            const angle = Math.random() * Math.PI * 2;
            const velocity = 10 + Math.random() * 20;
            const tx = Math.cos(angle) * velocity * 20;
            const ty = Math.sin(angle) * velocity * 20 - 200;

            gsap.to(confetti, {
                duration: 2 + Math.random() * 2,
                x: tx,
                y: ty,
                rotation: Math.random() * 1000,
                opacity: 0,
                ease: "power2.out",
                onComplete: () => confetti.remove()
            });
        }
    }

    // Sparkle Mouse Trail
    let lastSparkle = 0;
    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastSparkle > 80) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            sparkle.style.left = e.clientX + 'px';
            sparkle.style.top = e.clientY + 'px';
            document.body.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 1000);
            lastSparkle = now;
        }
    });
});
