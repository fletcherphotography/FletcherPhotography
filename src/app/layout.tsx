import { Raleway, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sans = Raleway({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const displayHeading = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${displayHeading.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
