function toggleDarkMode() {
    const root = document.documentElement;

    const isDark = root.classList.toggle("dark-mode");

    sessionStorage.setItem("theme", isDark ? "dark" : "light");
}

document.addEventListener("DOMContentLoaded", () => {
    const theme = sessionStorage.getItem("theme");

    if (theme === "dark") {
        document.documentElement.classList.add("dark-mode");
    }
});
