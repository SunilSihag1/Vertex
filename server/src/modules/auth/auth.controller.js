import * as authService from "./auth.service.js";

/* =========================
   SIGNUP
========================= */
const signup = async (req, res) => {
    try {

        const result = await authService.signup(req.body);

        return res.status(201).json(result);

    } catch (err) {

        if (err.message === "User already exists") {
            return res.status(409).json({ message: err.message });
        }

        return res.status(400).json({ message: err.message });
    }
};


/* =========================
   LOGIN
========================= */
const login = async (req, res) => {
    try {

        const { accessToken, refreshToken } =
            await authService.login(req.body, req.ip);

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({ accessToken });

    } catch (err) {

        if (
            err.message === "Invalid credentials" ||
            err.message === "User not verified"
        ) {
            return res.status(401).json({ message: err.message });
        }

        if (err.message === "Account locked. Try later.") {
            return res.status(423).json({ message: err.message });
        }

        return res.status(400).json({ message: err.message });
    }
};


/* =========================
   REFRESH TOKEN
========================= */
const refresh = async (req, res) => {
    try {

        const token = req.cookies.refreshToken;

        if (!token) {
            return res.status(401).json({ message: "Refresh token missing" });
        }

        const { accessToken, refreshToken } =
            await authService.refresh(token);

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({ accessToken });

    } catch (err) {

        return res.status(401).json({ message: err.message });
    }
};

/* =========================
   GOOGLE AUTH
========================= */
const googleAuth = async (req, res) => {
    try {

        const { name, email, googleId } = req.body;

        const result = await authService.googleAuth({
            name,
            email,
            googleId
        });

        return res.status(200).json(result);

    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};

/* =========================
   LOGOUT
========================= */
const logout = async (req, res) => {
    try {

        await authService.logout(req.user.userId);

        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict"
        });

        return res.status(200).json({ message: "Logged out successfully" });

    } catch (err) {

        return res.status(400).json({ message: err.message });
    }
};


/* =========================
   EXPORT
========================= */
export default {
    signup,
    login,
    refresh,
    logout,
    googleAuth
};