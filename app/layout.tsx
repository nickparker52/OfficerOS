import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OfficerOS",
  description: "Military pay calculator, BAH lookup, and financial tools for service members.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 text-gray-900 antialiased`}
      >
        <div className="mx-auto max-w-6xl px-6">
          <header className="flex items-center justify-between py-6">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              OfficerOS
            </Link>

            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/pay" className="hover:underline">
                Pay
              </Link>
              <Link href="/toolkits" className="hover:underline">
                Toolkits
              </Link>
              <Link href="/about" className="hover:underline">
                About
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </nav>
          </header>

          <main className="pb-16">{children}</main>

          <footer className="border-t py-8 text-xs text-gray-500">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                © {new Date().getFullYear()} OfficerOS. Not affiliated with the U.S. Department of Defense.
                <br />
                For educational purposes only — verify financial decisions with DFAS and official sources.
              </div>

              <div className="flex items-center gap-4">
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
                <a
                  href="https://buymeacoffee.com/YOURNAME"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Buy us a coffee
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}