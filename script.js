"use strict";

const nav = document.querySelector(".top-navigation");
const spinner = document.querySelector(".load");
const introSection = document.querySelector(".intro");
const services = document.querySelector(".services");
const mic = document.querySelector(".mic");
const micListen = document.querySelector(".lis-mic");
const para = document.querySelector(".para");
const content = document.querySelector(".content");
const deleteBtn = document.querySelector(".delHistory");
const tryBtn = document.querySelector(".try");
const speechSection = document.querySelector(".stt");
const mobNav = document.querySelector(".mobile-nav");
const threeLiner = document.querySelector(".three-liner");
const mobCross = document.querySelector(".mob-cross");
const mobLoginSignup = document.querySelector(".mob-login-signup");

const blurIn = function () {
  nav.style.filter = "blur(10px)";
  mobNav.style.filter = "blur(10px)";
  introSection.style.filter = "blur(10px)";
  services.style.filter = "blur(10px)";
  speechSection.style.filter = "blur(10px)";
};

const blurOut = function () {
  nav.style.filter = "blur(0px)";
  mobNav.style.filter = "blur(0px)";
  introSection.style.filter = "blur(0px)";
  services.style.filter = "blur(0px)";
  speechSection.style.filter = "blur(0px)";
};

//As page loads

const loadSpinner = function () {
  spinner.classList.remove("hidden");
  blurIn();

  setTimeout(function () {
    spinner.classList.add("hidden");
    blurOut();
    // blurIn();
  }, 3000);
};

window.addEventListener("load", loadSpinner);

// const stop = document.querySelector(".stop-btn");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

const recoginition = new SpeechRecognition();
recoginition.interimResults = false;

//Generating the text when speaked

const generate = function (text) {
  let html = `
  <div class="para">
        <p>👉${text}</p>
      </div>
      `;

  content.insertAdjacentHTML("beforeend", html);
};

//Checking the given operation is speaked or not

const checkOperation = function (text) {
  if (text.includes("YouTube")) {
    setTimeout(function () {
      window.open("https://www.youtube.com/");
    }, 2000);
  }

  if (text.includes("spotify") || text.includes("Spotify")) {
    setTimeout(function () {
      window.open("https://open.spotify.com/");
    }, 2000);
  }

  if (text.includes("gmail") || text.includes("Gmail")) {
    setTimeout(function () {
      window.open("https://mail.google.com/");
    }, 2000);
  }

  if (text.includes("LinkedIn")) {
    setTimeout(function () {
      window.open("https://www.linkedin.com/");
    }, 2000);
  }

  if (text.includes("Instagram")) {
    setTimeout(function () {
      window.open("https://www.instagram.com/");
    }, 2000);
  }

  if (text.includes("Twitter") || text.includes("twitter")) {
    setTimeout(function () {
      window.open("https://twitter.com/");
    }, 2000);
  }
};

//Listening the results

recoginition.addEventListener("result", function (e) {
  const text = e.results[0][0].transcript;
  generate(text);
  checkOperation(text);
});

//Starting listening when mic is tapped

mic.addEventListener("click", function () {
  recoginition.start();
  console.log("Ready to receive a color command.");
  mic.classList.add("hidden");
  micListen.classList.remove("hidden");
});

//removing the listening mic when speaking is off

recoginition.addEventListener("end", function () {
  mic.classList.remove("hidden");
  micListen.classList.add("hidden");
});

//Deleting the whole history when delete icon is clicked

deleteBtn.addEventListener("click", function () {
  content.innerHTML = "";
});

//Adding the scroll behaviour on the "free trial" button

tryBtn.addEventListener("click", function () {
  speechSection.scrollIntoView({ behaviour: "smooth" });
});

//Mobile features

threeLiner.addEventListener("click", function () {
  mobLoginSignup.classList.remove("hidden");
});

mobCross.addEventListener("click", function () {
  mobLoginSignup.classList.add("hidden");
});
