/**
 * Valentine's Day Animation Timeline
 * Modernized with GSAP 3
 */

const animationTimeline = () => {
  // Split chars that need to be animated individually
  const textBoxChars = document.querySelector(".hbd-chatbox");
  const hbd = document.querySelector(".wish-hbd");

  if (textBoxChars) {
    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
      .split("")
      .join("</span><span>")}</span>`;
  }

  if (hbd) {
    hbd.innerHTML = `<span>${hbd.innerHTML
      .split("")
      .join("</span><span>")}</span>`;
  }

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

  // GSAP 3 Timeline
  const tl = gsap.timeline();

  tl.to(".container", {
    duration: 0.1,
    visibility: "visible",
  })
    .from(".one", {
      duration: 0.7,
      opacity: 0,
      y: 10,
    })
    .from(".two", {
      duration: 0.4,
      opacity: 0,
      y: 10,
    })
    .to(".one", {
      duration: 0.7,
      opacity: 0,
      y: 10,
      delay: 2.5,
    })
    .to(".two", {
      duration: 0.7,
      opacity: 0,
      y: 10,
    }, "<") // Start at the same time as previous animation minus 0.7 would be overlap, but GSAP 3 uses labels/offsets better
    .from(".three", {
      duration: 0.7,
      opacity: 0,
      y: 10,
    })
    .to(".three", {
      duration: 0.7,
      opacity: 0,
      y: 10,
      delay: 2,
    })
    .to(".four .text-box", {
      duration: 0.5,
      visibility: "visible",
      opacity: 1,
      x: 0,
      delay: 1,
    })
    .from(".fake-btn", {
      duration: 0.3,
      scale: 0.2,
      opacity: 0,
    })
    .to(".hbd-chatbox span", {
      duration: 0.5,
      visibility: "visible",
      stagger: 0.05,
    })
    .to(".fake-btn", {
      duration: 0.1,
      backgroundColor: "rgb(127, 206, 248)",
    })
    .to(".four", {
      duration: 0.5,
      scale: 0.2,
      opacity: 0,
      y: -150,
      delay: 0.7,
    })
    .from(".idea-1", {
      duration: 0.7,
      ...ideaTextTrans,
    })
    .to(".idea-1", {
      duration: 0.7,
      ...ideaTextTransLeave,
      delay: 1.5,
    })
    .from(".idea-2", {
      duration: 0.7,
      ...ideaTextTrans,
    })
    .to(".idea-2", {
      duration: 0.7,
      ...ideaTextTransLeave,
      delay: 1.5,
    })
    .from(".idea-3", {
      duration: 0.7,
      ...ideaTextTrans,
    })
    .to(".idea-3 strong", {
      duration: 0.5,
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", {
      duration: 0.7,
      ...ideaTextTransLeave,
      delay: 1.5,
    })
    .from(".idea-4", {
      duration: 0.7,
      ...ideaTextTrans,
    })
    .to(".idea-4", {
      duration: 0.7,
      ...ideaTextTransLeave,
      delay: 1.5,
    })
    .from(".idea-5", {
      duration: 0.7,
      rotationX: 15,
      rotationZ: -10,
      skewY: "-5deg",
      y: 50,
      z: 10,
      opacity: 0,
      delay: 0.5,
    })
    .to(".idea-5 span", {
      duration: 0.7,
      rotation: 90,
      x: 8,
      delay: 0.4,
    })
    .to(".idea-5", {
      duration: 0.7,
      scale: 0.2,
      opacity: 0,
      delay: 2,
    })
    .from(".idea-6 span", {
      duration: 0.8,
      scale: 3,
      opacity: 0,
      rotation: 15,
      ease: "expo.out",
      stagger: 0.2,
    })
    .to(".idea-6 span", {
      duration: 0.8,
      scale: 3,
      opacity: 0,
      rotation: -15,
      ease: "expo.out",
      stagger: 0.2,
      delay: 1,
    })
    .from(".girl-dp", {
      duration: 0.5,
      scale: 3.5,
      opacity: 0,
      x: 25,
      y: -25,
      rotationZ: -45,
    }, "-=2")
    .from(".hat", {
      duration: 0.5,
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .to(".wish", {
      duration: 0.5,
      visibility: "visible",
      opacity: 1,
    })
    .from(".wish-hbd span", {
      duration: 0.7,
      opacity: 0,
      y: -50,
      rotation: 150,
      skewX: "30deg",
      ease: "elastic.out(1, 0.5)",
      stagger: 0.1,
    })
    .fromTo(".wish-hbd span", {
      scale: 1.4,
      rotationY: 150,
    }, {
      duration: 0.7,
      scale: 1,
      rotationY: 0,
      color: "#ff69b4",
      ease: "expo.out",
      stagger: 0.1,
    }, "party")
    .from(".wish h5", {
      duration: 0.5,
      opacity: 0,
      y: 10,
      skewX: "-15deg",
    }, "party")
    .to(".eight svg", {
      duration: 1.5,
      visibility: "visible",
      opacity: 0,
      scale: 80,
      repeat: 3,
      repeatDelay: 1.4,
      stagger: 0.3,
    })
    .to(".six", {
      duration: 0.5,
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .from(".nine p", {
      duration: 1,
      ...ideaTextTrans,
      stagger: 1.2,
    })
    .to(".last-smile", {
      duration: 0.5,
      rotation: 90,
      delay: 1,
    });

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  if (replyBtn) {
    replyBtn.addEventListener("click", () => {
      tl.restart();
    });
  }

  // Continuous floating animation function
  function floatBalloon(element) {
    const duration = Math.random() * 5 + 5;
    const xSway = Math.random() * 100 - 50;

    gsap.fromTo(element, {
      y: window.innerHeight + 100,
      x: Math.random() * window.innerWidth,
      opacity: 0.8,
      rotation: Math.random() * 360
    }, {
      duration: duration,
      y: -200,
      x: "+=" + xSway,
      rotation: "+=" + (Math.random() * 360),
      opacity: 1,
      ease: "power1.inOut",
      repeat: -1,
      delay: Math.random() * 5
    });
  }

  const balloons = document.querySelectorAll(".baloons img");
  balloons.forEach(balloon => {
    floatBalloon(balloon);
  });
};

// Import the data to customize and insert them into page
const fetchData = async () => {
  try {
    const response = await fetch("customize.json");
    const data = await response.json();
    Object.keys(data).forEach((customData) => {
      const element = document.getElementById(customData);
      if (element && data[customData] !== "") {
        if (customData === "imagePath") {
          element.setAttribute("src", data[customData]);
        } else {
          element.innerText = data[customData];
        }
      }
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Export to window for access from init.js
window.animationTimeline = animationTimeline;
window.fetchData = fetchData;

// Run fetch 
fetchData();
