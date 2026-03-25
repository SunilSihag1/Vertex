/**
 * device.util.js
 * Location: server/src/utils/device.util.js
 *
 * Two responsibilities:
 *  1. Parse User-Agent string → structured device info (browser, OS, type)
 *  2. Resolve IP address → country code (offline, no API key needed)
 *
 * Install: npm install ua-parser-js geoip-lite
 */

import { UAParser } from "ua-parser-js";
import geoip from "geoip-lite";

// ─── Device Parser ────────────────────────────────────────────────────────────

/**
 * Parses a raw User-Agent string into structured device info.
 *
 * @param {string | undefined} userAgent   Raw UA string from req.headers["user-agent"]
 * @returns {{ browser: string, os: string, type: "desktop" | "mobile" | "tablet" | "unknown" }}
 *
 * @example
 * parseDevice("Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)...")
 * // → { browser: "Mobile Safari 17", os: "iOS 17", type: "mobile" }
 *
 * parseDevice("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36...")
 * // → { browser: "Chrome 124", os: "Windows 10", type: "desktop" }
 */
export const parseDevice = (userAgent) => {
    if (!userAgent) {
        return { browser: "Unknown", os: "Unknown", type: "unknown" };
    }

    const parser = new UAParser(userAgent);
    const result = parser.getResult();

    const browserName  = result.browser?.name  ?? "Unknown";
    const browserMajor = result.browser?.major ?? "";
    const osName       = result.os?.name       ?? "Unknown";
    const osVersion    = result.os?.version    ?? "";

    // ua-parser-js sets device.type to "mobile" | "tablet" | undefined
    // undefined means desktop (browser on a PC/Mac/Linux)
    const rawType = result.device?.type;
    let type;

    if (rawType === "mobile")       type = "mobile";
    else if (rawType === "tablet")  type = "tablet";
    else if (browserName !== "Unknown" || osName !== "Unknown") type = "desktop";
    else                            type = "unknown";

    return {
        browser: browserMajor ? `${browserName} ${browserMajor}` : browserName,
        os:      osVersion    ? `${osName} ${osVersion}`          : osName,
        type,
    };
};

// ─── Country Resolver ─────────────────────────────────────────────────────────

/**
 * Resolves a country code from an IP address using an offline MaxMind GeoLite2
 * database bundled with geoip-lite. No API key, no network call.
 *
 * @param {string | undefined} ip   IPv4 or IPv6 address from req.ip
 * @returns {string}  ISO 3166-1 alpha-2 code (e.g. "IN", "US") or "Local" / "Unknown"
 *
 * @example
 * resolveCountry("106.51.0.1")   // → "IN"
 * resolveCountry("8.8.8.8")      // → "US"
 * resolveCountry("127.0.0.1")    // → "Local"
 * resolveCountry(undefined)      // → "Unknown"
 */
export const resolveCountry = (ip) => {
    if (!ip) return "Unknown";

    // Express behind a proxy may give IPv6-mapped IPv4: "::ffff:1.2.3.4"
    const cleanIp = ip.replace(/^::ffff:/, "");

    // Private / loopback ranges — geoip-lite returns null for these
    const isPrivate =
        cleanIp === "127.0.0.1"       ||
        cleanIp === "::1"              ||
        cleanIp.startsWith("10.")      ||
        cleanIp.startsWith("192.168.") ||
        /^172\.(1[6-9]|2\d|3[01])\./.test(cleanIp);

    if (isPrivate) return "Local";

    const geo = geoip.lookup(cleanIp);
    return geo?.country ?? "Unknown";
};