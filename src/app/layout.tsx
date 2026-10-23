import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppProvider } from "@/lib/store";
import AppShell from "@/components/AppShell";

export const metadata: Metadata = {
  title: {
    default: "English Mastery — အခြေခံမှ အဆင့်မြင့်သို့",
    template: "%s · English Mastery",
  },
  description:
    "မြန်မာဘာသာဖြင့် ရှင်းပြထားသော အင်္ဂလိပ် သင်ရိုး — သင်ခန်းစာ ၄၀၊ စကားလုံးဘဏ်၊ spaced repetition၊ ဖတ်/နား/ရေး/ပြော လေ့ကျင့်ခန်းများနှင့် စစ်ဆေးမှုများ။",
  applicationName: "English Mastery",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const THEME_SCRIPT = `try{var raw=localStorage.getItem("english-mastery.state.v1");if(raw){var parsed=JSON.parse(raw);if(parsed&&parsed.theme==="dark"){document.documentElement.classList.add("dark");document.documentElement.style.colorScheme="dark";}}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="my" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body>
        <AppProvider>
          <AppShell>{children}</AppShell>
        </AppProvider>
      </body>
    </html>
  );
}
