/**
 * Two build targets share this config:
 * - default (`npm run build`) — a normal Next.js server build.
 * - `CAPACITOR_BUILD=1` — a fully static export (`out/`) that is bundled into the
 *   Android app by Capacitor. All pages are already statically generated.
 */
const isCapacitorBuild = process.env.CAPACITOR_BUILD === "1";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Lint is run explicitly with `npm run lint`; builds must not silently ignore code errors.
    ignoreDuringBuilds: false,
  },
  ...(isCapacitorBuild
    ? {
        output: "export",
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
