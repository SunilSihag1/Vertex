export const setTheme = (theme) => {
    if (theme === "system") {
        localStorage.removeItem("theme");

        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    } else {
        localStorage.setItem("theme", theme);

        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }
};

export const initTheme = () => {
    const saved = localStorage.getItem("theme");

    if (!saved) {
        document.documentElement.classList.remove("dark");
        return;
    }

    setTheme(saved);
};