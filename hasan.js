// ===== FUNCTION TO SHOW SECTIONS =====
function showSection(id) {
    // إخفاء كل الأقسام
    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active");
    });
    // عرض القسم المختار
    document.getElementById(id).classList.add("active");

    // توهج الزر النشط
    document.querySelectorAll("nav button").forEach(btn => {
        btn.style.boxShadow = "none";
    });
    const activeBtn = document.querySelector(`nav button[onclick="showSection('${id}')"]`);
    activeBtn.style.boxShadow = "0 0 10px #00ff88, 0 0 20px #00ff88";
}

// ===== HACKER-TEXT EFFECT =====
const hackerTextElements = document.querySelectorAll("h1, h2, p");

// دالة تغير الأحرف عشوائياً بشكل مؤقت
function hackerEffect(el) {
    const originalText = el.textContent;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!";

    let iterations = 0;
    const interval = setInterval(() => {
        el.textContent = originalText.split("").map(char => {
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
        }).join("");

        iterations++;
        if (iterations > 5) { // بعد عدة تغييرات ارجع للنص الأصلي
            clearInterval(interval);
            el.textContent = originalText;
        }
    }, 50);
}

// إضافة التأثير عند مرور الماوس على النصوص
hackerTextElements.forEach(el => {
    el.addEventListener("mouseenter", () => hackerEffect(el));
});

// ===== GLOW BUTTONS EFFECT =====
const navButtons = document.querySelectorAll("nav button");
navButtons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.boxShadow = "0 0 10px #00ff88, 0 0 20px #00ff88";
    });
    btn.addEventListener("mouseleave", () => {
        // يزيل التوهج إذا لم يكن الزر نشط
        const sectionId = btn.getAttribute("onclick").match(/'(\w+)'/)[1];
        if (!document.getElementById(sectionId).classList.contains("active")) {
            btn.style.boxShadow = "none";
        }
    });
});
