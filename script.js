// ======================================
// MUHAMMAD ADHINAN - PORTFOLIO
// Interactive Website Features
// ======================================
// 1. MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.innerHTML = isOpen ? "&times;" : "☰";
    });
    // Close menu when clicking a link
    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.innerHTML = "☰";
        });
    });
    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (
            !navLinks.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.innerHTML = "☰";
        }
    });
}
// 2. AUTOMATIC COPYRIGHT YEAR
const currentYear = document.getElementById("currentYear");
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
// 3. REVEAL ELEMENTS WHEN SCROLLING
const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".about-image, " +
    ".about-content, " +
    ".skill-card, " +
    ".project-card, " +
    ".interest-bar, " +
    ".contact-box"
);
revealElements.forEach(function (element) {
    element.classList.add("reveal");
});
if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );
    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });
} else {
    revealElements.forEach(function (element) {
        element.classList.add("visible");
    });
}
// 4. ACTIVE NAVIGATION LINK
const sections = document.querySelectorAll("main section[id]");
const pageLinks = document.querySelectorAll(
    '.navbar nav a[href^="#"]'
);
if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    pageLinks.forEach(function (link) {
                        const isActive =
                            link.getAttribute("href") === "#" + sectionId;
                        link.classList.toggle("active-link", isActive);
                    });
                }
            });
        },
        {
            rootMargin: "-25% 0px -60% 0px"
        }
    );
    sections.forEach(function (section) {
        sectionObserver.observe(section);
    });
}
// 5. SMOOTH NAVIGATION
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
        const targetId = link.getAttribute("href");
        if (!targetId || targetId === "#") {
            return;
        }
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            event.preventDefault();
            targetElement.scrollIntoView({
                behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches ? "auto" : "smooth",
                block: "start"
            });
            history.replaceState(null, "", targetId);
        }
    });
});
// 6. IMAGE FALLBACK
// If an online image fails to load, display a neutral placeholder.
document.querySelectorAll("img").forEach(function (img) {
    img.addEventListener("error", function () {
        img.style.opacity = "0.25";
        img.style.background = "#202020";
        img.alt = "Image unavailable - check your internet connection";
    });
});
// 7. CONSOLE MESSAGE
console.log(
    "Portfolio loaded successfully | Muhammad Adhinan | DevOps & Cloud"
);