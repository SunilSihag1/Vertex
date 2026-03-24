/**
 * authorize(...roles)
 *
 * Usage — place AFTER authMiddleware on any route that needs role gating:
 *
 *   router.get("/dashboard", authMiddleware, authorize("shop-owner", "admin"), handler);
 *   router.delete("/user/:id", authMiddleware, authorize("admin"), handler);
 *
 * authMiddleware must run first so that req.user (with .role) is populated.
 */
const authorize = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: "Authentication required" });
        }

        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: `Access denied. Required role(s): ${allowedRoles.join(", ")}`
            });
        }

        next();
    };
};

export default authorize;