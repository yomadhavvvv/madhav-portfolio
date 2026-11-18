import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Madhav Kumar — AI & Backend Engineer",
  description: "Madhav Kumar is a computer science student building intelligent systems, AI-powered products and reliable backend software.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Madhav Kumar — AI & Backend Engineer",
    description: "Building intelligent systems & thoughtful software.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
