import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});
const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "RAYEXPESS — Study. Work. Build Your Career.",
  description:
    "RAYEXPESS connects Canadian students with jobs matched to their field of study, skills, schedule and career goals. Gain real experience while you're still studying.",
  keywords: [
    "student jobs Canada",
    "staffing agency students",
    "recent graduate jobs",
    "field-matched employment",
    "RAYEXPESS",
    "part-time student work Ontario",
  ],
  metadataBase: new URL("https://rayexpess.ca"),
  openGraph: {
    title: "RAYEXPESS — Your Education Should Lead Somewhere.",
    description:
      "Career-aligned student placements across IT, Business, Healthcare, Engineering, Marketing and more.",
    type: "website",
    locale: "en_CA",
  },
  twitter: { card: "summary_large_image", title: "RAYEXPESS", description: "Study. Work. Build Your Career." },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${display.variable} ${body.variable} ${serif.variable} ${mono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-paper text-ink font-body">
        {children}
      </body>
    </html>
  );
}
