// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  const tl = new TimelineMax();

  tl.to(".container", 0.1, {
    visibility: "visible",
  })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10,
      // scale: 0.7
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2"
    )
    .to(".four .text-box", 0.5, {
      visibility: "visible",
      opacity: 1,
      x: 0,
    }, "+=1")
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible",
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)",
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=0.7"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=0.5"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8,
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=1"
    )
    .from(
      ".girl-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .to(".wish", 0.5, {
      visibility: "visible",
      opacity: 1,
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90,
      },
      "+=1"
    );

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });

  // Continuous floating animation function
  function floatBalloon(element) {
    const duration = Math.random() * 5 + 5; // Random duration between 5-10s
    const xSway = Math.random() * 100 - 50; // Sway left/right by 50px

    TweenMax.fromTo(element, duration, {
      y: window.innerHeight + 100,
      x: Math.random() * window.innerWidth, // Start at random X
      opacity: 0.8,
      rotation: Math.random() * 360
    }, {
      y: -200, // Float off screen top
      x: "+=" + xSway,
      rotation: "+=" + (Math.random() * 360),
      opacity: 1,
      ease: Power1.easeInOut,
      repeat: -1,
      delay: Math.random() * 5 // Random start delay
    });
  }

  // Apply floating animation to all balloons (run independently)
  const balloons = document.querySelectorAll(".baloons img");
  balloons.forEach(balloon => {
    floatBalloon(balloon);
  });
};

// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then((data) => data.json())
    .then((data) => {
      Object.keys(data).map((customData) => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .getElementById(customData)
              .setAttribute("src", data[customData]);
          } else {
            document.getElementById(customData).innerText = data[customData];
          }
        }
      });
    });
};

// Run fetch and animation in sequence
const resolveFetch = () => {
  return new Promise((resolve, reject) => {
    fetchData();
    resolve("Fetch done!");
  });
};

resolveFetch().then(animationTimeline());

// ===== MAGICAL ENHANCEMENTS =====

// Create confetti burst on page load
function createConfettiBurst() {
  const colors = ['#ff1744', '#f50057', '#d500f9', '#651fff', '#00b0ff', '#00e676', '#ffeb3b'];
  const confettiCount = 150;

  for (let i = 0; i < confettiCount; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti-piece');
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 0.5 + 's';
      confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
      confetti.style.width = (Math.random() * 6 + 4) + 'px';
      confetti.style.height = (Math.random() * 10 + 8) + 'px';
      document.body.appendChild(confetti);

      setTimeout(() => confetti.remove(), 5000);
    }, i * 15);
  }
}

// Create floating heart particles
function createHeartParticle() {
  const hearts = ['💖', '💕', '💗', '💓', '💝', '❤️', '🌹'];
  const heart = document.createElement('div');
  heart.classList.add('heart-particle');
  heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
  heart.style.left = Math.random() * 100 + '%';
  heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
  heart.style.animationDelay = Math.random() * 3 + 's';
  heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}

// Create sparkle effect
function createSparkle(x, y) {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  sparkle.style.left = x + 'px';
  sparkle.style.top = y + 'px';
  sparkle.style.animationDelay = Math.random() * 0.5 + 's';
  document.body.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 1500);
}

// Create floating particles
function createFloatingParticle() {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.left = Math.random() * 100 + '%';
  particle.style.animationDelay = Math.random() * 5 + 's';
  particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
  document.body.appendChild(particle);

  setTimeout(() => particle.remove(), 20000);
}

// Check if coming from Yes/No page
const urlParams = new URLSearchParams(window.location.search);
const fromYesPage = urlParams.get('from') === 'yes' || document.referrer.includes('index.html');

// Trigger confetti if coming from Yes page
if (fromYesPage) {
  setTimeout(createConfettiBurst, 500);
}

// Continuous heart particles
setInterval(createHeartParticle, 800);

// Continuous floating particles
setInterval(createFloatingParticle, 400);

// Add sparkle effect on mouse move (throttled)
let lastSparkle = 0;
document.addEventListener('mousemove', (e) => {
  const now = Date.now();
  if (now - lastSparkle > 200) {
    if (Math.random() > 0.7) {
      createSparkle(e.clientX, e.clientY);
    }
    lastSparkle = now;
  }
});

// Add glow effect to special text elements
setTimeout(() => {
  const specialTexts = document.querySelectorAll('.wish-hbd, .idea-5');
  specialTexts.forEach(text => {
    text.classList.add('glow-text');
  });
}, 3000);

console.log('✨ Magical Valentine effects loaded! 💖');
