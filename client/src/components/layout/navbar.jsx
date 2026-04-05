import { useState, useEffect } from "react";
import { setTheme } from "../../utils/theme";
import { useNavigate } from "react-router-dom";
import { Settings } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

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

export const ThemeSwitcher = () => {
    const [theme, setThemeState] = useState("light");

    useEffect(() => {
        const saved = localStorage.getItem("theme_vertex") || "light";
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
            className="relative w-14 h-8 flex items-center rounded-full bg-slate-200 dark:bg-slate-700 transition-all duration-500 p-1 cursor-pointer"
        >
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
    const navigate = useNavigate();
    const [hovered, setHovered] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const { isAuthenticated, logout } = useAuth();


    const handleLogout = async () => {
        await logout();
        navigate("/login");
    };

    return (
        <header className="fixed top-0 z-50 w-full bg-white dark:bg-background-dark backdrop-blur-xl border-b border-slate-300 dark:border-slate-800/50">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3 group">
                    <div className="p-2">
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

                <nav className="hidden min-[950px]:flex items-center gap-10">
                    {["View Stores", "Contact Us",].map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => setHovered(null)}
                            className="relative text-slate-500 dark:text-slate-300 font-semibold text-sm tracking-wide transition-colors duration-300 hover:text-primary hover:dark:text-sage"
                        >
                            {item}
                            <span
                                className={`absolute left-0 -bottom-1 h-0.5 bg-primary dark:bg-sage transition-all duration-500 ${hovered === index ? "w-full" : "w-0"
                                    }`}
                            ></span>
                        </a>
                    ))}
                </nav>



                <div className="flex items-center gap-4">

                    <button
                        onClick={() => navigate("/settings")}
                        className="hidden min-[950px]:flex items-center justify-center w-10 h-10 rounded-full 
    bg-slate-200 dark:bg-slate-700 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
                    >
                        <Settings size={18} />
                    </button>

                    {!isAuthenticated ? (
                        <a
                            onClick={() => navigate("/login")}
                            className="cursor-pointer hidden min-[950px]:block px-5 py-2.5 text-slate-700 dark:text-slate-400 font-bold text-sm transition-all duration-300 hover:text-primary dark:hover:text-sage hover:scale-105"
                        >
                            Log In
                        </a>
                    ) : (
                        <a
                            onClick={handleLogout}
                            className="cursor-pointer hidden min-[950px]:block px-5 py-2.5 text-red-500 font-bold text-sm transition-all duration-300 hover:scale-105"
                        >
                            Logout
                        </a>
                    )}

                    <button className="hidden min-[950px]:block shimmer-btn bg-primary hover:shadow-primary/30 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
                        Start Free Trial
                    </button>

                    <ThemeSwitcher />

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="min-[950px]:hidden w-10 h-10 rounded-lg flex flex-col justify-center items-center gap-1 bg-primary dark:bg-primary transition-all duration-300 cursor-pointer"
                    >
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-20 right-0 h-full w-72 shadow-2xl transform transition-transform duration-500 ease-in-out z-40 min-[950px]:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="p-6 flex flex-col gap-6 bg-white dark:bg-background-dark h-screen border-l border-slate-700">

                    {["Platform", "Solutions", "Resources", "Pricing"].map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            onClick={() => setMenuOpen(false)}
                            className="relative text-slate-500 dark:text-slate-300 font-semibold text-sm tracking-wide transition-colors duration-300 hover:text-primary hover:dark:text-sage"
                        >
                            {item}
                        </a>
                    ))}



                    <div className="border-t border-slate-200 dark:border-slate-700 my-4"></div>

                    <a
                        onClick={() => {
                            navigate("/settings");
                            setMenuOpen(false);
                        }}
                        className="px-5 py-2.5 text-slate-700 dark:text-slate-400 font-bold text-sm cursor-pointer"
                    >
                        Settings
                    </a>

                    {!isAuthenticated ? (
                        <a
                            onClick={() => {
                                navigate("/login");
                                setMenuOpen(false);
                            }}
                            className="px-5 py-2.5 text-slate-700 dark:text-slate-400 font-bold text-sm"
                        >
                            Log In
                        </a>
                    ) : (
                        <a
                            onClick={() => {
                                handleLogout();
                                setMenuOpen(false);
                            }}
                            className="px-5 py-2.5 text-red-500 font-bold text-sm"
                        >
                            Logout
                        </a>
                    )}

                    <button
                        onClick={() => setMenuOpen(false)}
                        className="shimmer-btn bg-primary hover:shadow-primary/30 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                    >
                        Start Free Trial
                    </button>

                </div>
            </div>

            {menuOpen && (
                <div onClick={() => setMenuOpen(false)}></div>
            )}
        </header>
    );
};

export default Navbar;