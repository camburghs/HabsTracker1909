function applyTheme() {
    const theme = sessionStorage.getItem("theme");

    if (theme === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}

// Run on every page load
document.addEventListener("DOMContentLoaded", applyTheme);

// Toggle function (call from button)
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        sessionStorage.setItem("theme", "dark");
    } else {
        sessionStorage.setItem("theme", "light");
    }
}