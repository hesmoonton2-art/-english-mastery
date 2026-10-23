import type { CapacitorConfig } from "@capacitor/cli";

/**
 * Android wrapper configuration.
 * The web app is exported statically (`CAPACITOR_BUILD=1 npm run build`) into `out/`
 * and copied into the Android project by `npx cap sync android`.
 */
const config: CapacitorConfig = {
  appId: "com.englishmastery.app",
  appName: "English Mastery",
  webDir: "out",
  android: {
    allowMixedContent: false,
    backgroundColor: "#f5f6f8",
  },
  server: {
    androidScheme: "https",
  },
};

export default config;
