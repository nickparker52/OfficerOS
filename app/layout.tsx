import type { Metadata } from "next";
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
  description: "Military pay & benefits tools — accurate, visual, and simple.",
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
          
          {/* Header */}
          <header className="flex items-center justify-between py-6">
            <a href="/" className="text-xl font-semibold tracking-tight">
              OfficerOS
            </a>

            <nav className="flex items-center gap-6 text-sm font-medium">
              <a href="/" className="hover:underline">
                Home
              </a>
              <a href="/pay" className="hover:underline">
                Pay
              </a>
              <a href="/toolkits" className="hover:underline">
                Toolkits
              </a>
              <a href="/about" className="hover:underline">
                About
              </a>
            </nav>
          </header>

          {/* Main Content */}
          <main className="pb-16">{children}</main>

          {/* Footer */}
          <footer className="border-t py-8 text-xs text-gray-500">
            © {new Date().getFullYear()} OfficerOS. Not official — verify with DFAS/DoD.
          </footer>

        </div>
      </body>
    </html>
  );
}
