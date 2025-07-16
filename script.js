<!-- ✅ script.js -->
  
function calculateProfit() { const dollars = parseFloat(document.getElementById("dollarInput").value); if (isNaN(dollars) || dollars <= 0) { document.getElementById("results").innerText = "Please enter a valid number."; return; } const notes = dollars * 9000; const weightKg = notes / 1000; // 1g per note const value = weightKg * 1.2; // $1.20/kg paper value const profit = value - dollars;

document.getElementById("results").innerHTML = 💵 Notes: <strong>${notes.toLocaleString()}</strong><br> 🧻 Weight: <strong>${weightKg.toFixed(2)} kg</strong><br> 📦 Sale Value: <strong>$${value.toFixed(2)}</strong><br> 🤑 Estimated Profit: <strong>$${profit.toFixed(2)}</strong>; }

function toggleDarkMode() { document.body.classList.toggle("dark-mode"); }

function submitForm(e) { e.preventDefault();

const form = document.getElementById("contactForm"); const formData = new FormData(form);

fetch("https://formspree.io/f/your-form-id", { method: "POST", headers: { 'Accept': 'application/json' }, body: formData }).then(response => { if (response.ok) { document.getElementById("contactMsg").innerText = "📬 Thank you! We'll burn this into our brains 🔥"; form.reset(); } else { document.getElementById("contactMsg").innerText = "❌ Oops! Something went wrong."; } }); }

// Easter Egg – Konami Code let keys = []; window.addEventListener("keydown", (e) => { keys.push(e.key); if (keys.join('').includes("ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba")) { document.body.style.background = "#fffbe6"; document.body.innerHTML += '<div style="position:fixed;bottom:10px;right:10px;padding:1rem;background:#ffcc00;border-radius:10px;">🧻 Toilet Paper Mode Activated!</div>'; } });
