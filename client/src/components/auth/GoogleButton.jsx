/**
 * GoogleButton.jsx
 * Location: client/src/components/auth/GoogleButton.jsx
 *
 * Single reusable Google button for both Login and Signup pages.
 *
 * Usage in Login.jsx:
 *   <GoogleButton redirectTo={redirectTo} label="Continue with Google" />
 *
 * Usage in Signup.jsx:
 *   <GoogleButton redirectTo="/" label="Sign up with Google" />
 *
 * That's it. No other changes needed in Login or Signup for Google auth.
 */

import useGoogleAuth from "../../hooks/useGoogleAuth";

/**
 * @param {{
 *   redirectTo? : string,
 *   label?      : string,
 *   className?  : string,
 * }} props
 */
const GoogleButton = ({
    redirectTo = "/",
    label      = "Continue with Google",
    className  = "",
}) => {
    const { handleGoogleAuth, isLoading, error, clearError } = useGoogleAuth({ redirectTo });

    return (
        <div className={`w-full flex flex-col gap-2 ${className}`}>

            {/* ── Button ────────────────────────────────────────────────────── */}
            <button
                type="button"
                onClick={handleGoogleAuth}
                disabled={isLoading}
                className="
                    w-full py-3.5 flex items-center justify-center gap-3 border border-slate-200 dark:border-slate-700 rounded-lg  font-medium shimmer-btn bg-primary text-white px-10 text-lg shadow-2xl shadow-primary/30 transition-all hover:scale-105 cursor-pointer
                "
            >
                {isLoading ? (
                    /* Spinner — matches the button's height */
                    <span className="size-5 rounded-full border-2 border-slate-300 border-t-primary animate-spin" />
                ) : (
                    /* Official Google G logo colors */
                    <svg className="size-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                )}

                <span>{isLoading ? "Signing in…" : label}</span>
            </button>

            {/* ── Error Message ────────────────────────────────────────────── */}
            {error && (
                <div className="flex items-start gap-2 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg px-3 py-2">
                    <p className="text-xs text-red-600 dark:text-red-400 flex-1">{error}</p>
                    <button
                        type="button"
                        onClick={clearError}
                        className="text-red-400 hover:text-red-600 text-xs shrink-0"
                        aria-label="Dismiss error"
                    >
                        ✕
                    </button>
                </div>
            )}
        </div>
    );
};

export default GoogleButton;