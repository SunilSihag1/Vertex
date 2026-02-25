import { useState, useEffect } from "react";
import { setTheme } from "../../utils/theme";


const SunIcon = () => (
    <svg className="w-5 h-5 text-primary dark:text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
);

const MoonIcon = () => (
    <svg className="w-5 h-5 text-primary dark:text-slate-700" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 12.79A9 9 0 0111.21 3a7 7 0 109.79 9.79z" />
    </svg>
);

const SystemIcon = () => (
    <svg className="w-5 h-5 text-primary dark:text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 20h8" />
    </svg>
);

const ThemeSwitcher = () => {
    const [theme, setThemeState] = useState("light");

    useEffect(() => {
        const saved = localStorage.getItem("theme") || "light";
        setThemeState(saved);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        setThemeState(newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative w-14 h-8 flex items-center rounded-full bg-slate-200 dark:bg-slate-700 transition-all duration-500 p-1"
        >
            {/* Sliding Circle */}
            <div
                className={`absolute w-6 h-6 rounded-full bg-white shadow-md transform transition-all duration-500 flex items-center justify-center
                ${theme === "dark" ? "translate-x-6 bg-primary" : "translate-x-0 bg-white"}`}
            >
                {theme === "dark" ? <MoonIcon /> : <SunIcon />}
            </div>
        </button>
    );
};
const Navbar = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <header className="fixed top-0 z-50 w-full bg-white/60 dark:bg-background-dark/60 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3 group">
                    <div className="p-2 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <a href="/">
                            <img
                                src="/logo/Brand Logo Light.svg"
                                alt="Brand Logo"
                                className="h-10 w-auto transition-all duration-500 drop-shadow-md group-hover:drop-shadow-xl dark:hidden block"
                            />
                        </a>
                        <a href="/">
                            <img
                                src="/logo/Brand Logo Dark.svg"
                                alt="Brand Logo"
                                className="h-10 w-auto transition-all duration-500 drop-shadow-md group-hover:drop-shadow-xl dark:block hidden"
                            />
                        </a>
                    </div>
                </div>
                <nav className="hidden md:flex items-center gap-10">
                    {["Platform", "Solutions", "Resources", "Pricing"].map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => setHovered(null)}
                            className="relative text-slate-500 dark:text-slate-300 font-semibold text-sm tracking-wide transition-colors duration-300 hover:text-primary hover:dark:text-sage"
                        >
                            {item}
                            <span
                                className={`absolute left-0 -bottom-1 h-[2px] bg-primary dark:bg-sage transition-all duration-500 ${hovered === index ? "w-full" : "w-0"
                                    }`}
                            ></span>
                        </a>
                    ))}
                </nav>
                <div className="flex items-center gap-4">
                    <a
                        href="/login"
                        className="px-5 py-2.5 text-slate-700 dark:text-slate-400 font-bold text-sm transition-all duration-300 hover:text-primary dark:hover:text-sage hover:scale-105"
                    >
                        Log In
                    </a>
                    <button className="shimmer-btn bg-primary hover:shadow-primary/30 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
                        Start Free Trial
                    </button>

                <ThemeSwitcher />
                </div>



            </div>
        </header>
    );
};

export default Navbar;