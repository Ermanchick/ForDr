// --- Навигация ---
function switchTab(viewId) {
  document
    .querySelectorAll(".view")
    .forEach((el) => el.classList.remove("active"));
  document.getElementById(viewId).classList.add("active");

  document
    .querySelectorAll(".nav-item")
    .forEach((btn) => btn.classList.remove("active"));
  // 3 вкладки: Home, Gallery, Secret
  const views = ["view-home", "view-gallery", "view-secret"];
  const index = views.indexOf(viewId);
  if (index !== -1)
    document.querySelectorAll(".nav-item")[index].classList.add("active");
}

// --- Дата и Таймер ---
function updateDate() {
  const now = new Date();
  document.getElementById("current-date").innerText = now.toLocaleDateString(
    "ru-RU",
    { weekday: "short", day: "numeric", month: "long" },
  );
}

const startDate = new Date("2025-09-21T20:32:36");

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;
  if (diff > 0) {
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);
    document.getElementById("days").innerText = d < 10 ? "0" + d : d;
    document.getElementById("hours").innerText = h < 10 ? "0" + h : h;
    document.getElementById("minutes").innerText = m < 10 ? "0" + m : m;
    document.getElementById("seconds").innerText = s < 10 ? "0" + s : s;
  }
}
setInterval(updateTimer, 1000);
updateDate();
updateTimer();

// --- Генератор Фактов ---
const facts = [
  "Настя умеет заряжать энергией одним взглядом.",
  "Её смех повышает FPS в реальной жизни.",
  "Уровень харизмы: Критический.",
  "Она знает толк в стиле.",
  "С ней даже обычный вторник становится праздником.",
  "Настя — главный источник хорошего настроения.",
  "Ее вкус безупречен во всем.",
  "Рядом с ней время летит незаметно.",
  "Она умеет слушать и слышать.",
  "Настя вдохновляет на свершения.",
  "Ее улыбка лечит любую грусть.",
  "Она уникальна, как снежинка.",
  "С Настей любые проблемы решаются легче.",
  "Она обладает невероятной интуицией.",
  "Настя — воплощение грации и ума.",
  "Ее поддержка бесценна.",
  "Она делает этот мир добрее.",
  "Настя всегда держит слово.",
  "Она настоящий друг.",
  "С ней хочется делить все радости жизни.",
];

function generateFact() {
  const textEl = document.getElementById("fact-text");
  textEl.style.opacity = 0;
  setTimeout(() => {
    textEl.innerText = facts[Math.floor(Math.random() * facts.length)];
    textEl.style.opacity = 1;
  }, 200);
}
generateFact();

// --- Секретный замок ---
function checkPasscode() {
  const input = document.getElementById("passcode");
  const value = input.value;

  if (value === "2025") {
    document.getElementById("lock-screen").classList.add("hidden");
    const letterContent = document.getElementById("letter-content");
    letterContent.classList.remove("hidden");
    letterContent.style.animation = "fadeInUp 0.5s ease-out forwards";
  } else {
    const err = document.getElementById("error-msg");
    err.innerText = "ACCESS DENIED";
    if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
  }
}

function lockAgain() {
  document.getElementById("lock-screen").classList.remove("hidden");
  document.getElementById("letter-content").classList.add("hidden");
  document.getElementById("passcode").value = "";
  document.getElementById("error-msg").innerText = "";
}

// --- Lightbox Logic ---
function openLightbox(element) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const captionText = document.getElementById("caption");

  const img = element.querySelector("img");
  const text = element.querySelector(".overlay span").innerText;

  lightbox.classList.add("active");
  lightboxImg.src = img.src;
  captionText.innerText = text;

  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
}

// --- Фон (Звезды JS) ---
const starContainer = document.getElementById("starfield");
for (let i = 0; i < 50; i++) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.animationDelay = Math.random() * 5 + "s";
  star.style.animationDuration = Math.random() * 10 + 5 + "s";
  starContainer.appendChild(star);
}
