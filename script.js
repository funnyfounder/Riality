

  // DOMContentLoaded - Ensures toggle and dark mode setup runs only after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("button[onclick='toggleDarkMode()']");
  
  if (localStorage.getItem("dark") === "true") {
    document.body.classList.add("dark-mode");
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem("dark", document.body.classList.contains("dark-mode"));
    });
  }
});

// 💰 Profit Calculator
function calculateProfit() {
  const dollars = parseFloat(document.getElementById("dollarInput").value);
  
  if (isNaN(dollars) || dollars <= 0) {
    document.getElementById("results").innerText = "Please enter a valid number.";
    return;
  }

  const notes = dollars * 9000;
  const weightKg = notes / 1000; // 1g per note
  const value = weightKg * 1.2;  // $1.20/kg paper value
  const profit = value - dollars;

  document.getElementById("results").innerHTML = `
    💵 Notes: <strong>${notes.toLocaleString()}</strong><br>
    🧻 Weight: <strong>${weightKg.toFixed(2)} kg</strong><br>
    📦 Sale Value: <strong>$${value.toFixed(2)}</strong><br>
    🤑 Estimated Profit: <strong>$${profit.toFixed(2)}</strong>
  `;
}

// 🌓 Dark Mode Toggle
const toggle = document.getElementById('darkToggle');
toggle.addEventListener('click', () => {
document.body.classList.toggle('dark');
});


// 📬 Contact Form (Formspree placeholder)
function submitForm(e) {
  e.preventDefault();
  document.getElementById("contactMsg").innerText = "✅ Feature ready. Add Formspree ID to activate.";
}

// 🧻 Konami Code Easter Egg
let keys = [];
window.addEventListener("keydown", (e) => {
  keys.push(e.key);
  if (keys.join('').includes("ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba")) {
    document.body.style.background = "#fffcf0";
    document.body.innerHTML += `
      <div style="position:fixed;bottom:10px;right:10px;padding:1rem;background:#ffee58;border-radius:10px;z-index:999">
        🧻 Toilet Paper Mode Activated!
      </div>
    `;
    keys = []; // Optional: reset the sequence so it doesn’t retrigger constantly
  }
});
