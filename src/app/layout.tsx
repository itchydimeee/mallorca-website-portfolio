import type { Metadata } from "next";
import { Playfair_Display, DM_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes"
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zyd Reic G. Mallorca — Frontend Software Engineer",
  description:
    "Portfolio of Zyd Reic G. Mallorca, a frontend software engineer from Iloilo City, Philippines specializing in React and Next.js.",
  openGraph: {
    title: "Zyd Reic G. Mallorca",
    description: "Frontend Software Engineer · React · Next.js · TypeScript",
    url: "https://yoursite.com",
    type: "website",
  },
  keywords: [
    "frontend developer",
    "React",
    "Next.js",
    "TypeScript",
    "Philippines",
    "Software Engineer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${dmMono.variable} antialiased`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
