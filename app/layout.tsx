import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taylor Faragher's Portfolio",
  description: "Full Stack Engineer with a concentration on NodeJs, JavaScript, TypeScript, React, and AWS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <meta name="title" content="Taylor Faragher's Portfolio" />
        <meta name="description" content="Full Stack Engineer with a concentration on NodeJs, JavaScript, TypeScript, React, and AWS" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://taylorfaragher.com" />
        <meta property="og:title" content="Taylor Faragher's Portfolio" />
        <meta property="og:description" content="Full Stack Engineer with a concentration on NodeJs, JavaScript, TypeScript, React, and AWS" />
        <meta property="og:image" content="https://taylorfaragher.com/WebsitePreview.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://taylorfaragher.com" />
        <meta property="twitter:title" content="Taylor Faragher's Portfolio" />
        <meta property="twitter:description" content="Full Stack Engineer with a concentration on NodeJs, JavaScript, TypeScript, React, and AWS" />
        <meta property="twitter:image" content="https://taylorfaragher.com/WebsitePreview.png" />

      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
