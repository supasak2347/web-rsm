import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ... (Font and Metadata declarations remain the same) ...
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Supasak Resume", // Better title for the resume
  description:
    "Web Developer Resume Landing Page for Supasak Najaireeb Nickname is Polo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background`}
      >
        {/*
          --- START: Centering and Responsive Wrapper ---

          1. flex justify-center: Centers the content horizontally.
          2. min-h-screen: Ensures the body takes up at least the full viewport height.
          3. p-4 sm:p-8: Adds padding for small screens, increasing for larger screens.
        */}
        <div className="flex justify-center min-h-screen p-4 sm:p-8">
          {/*
            4. max-w-4xl: Limits the width of the content for readability (e.g., 48rem).
            5. w-full: Makes the container take the full width up to max-w-4xl.
            6. space-y-8: Optional, adds vertical spacing between main sections.
          */}

          {/* --- Gradient Blur Ball (Bottom-Right) --- */}
          <div
            aria-hidden="true" // Improves accessibility for decorative elements
            className="
            absolute // Position absolutely
            bottom-0 right-0 // Anchor to bottom-right
            h-[300px] w-[300px] // Size of the ball
            md:h-[400px] md:w-[400px] // Larger on medium screens
            lg:h-[500px] lg:w-[500px] // Even larger on large screens
            rounded-full // Make it circular
            bg-linear-to-br from-violet-100 to-pink-100 // Soft pastel gradient
            filter blur-3xl // Apply significant
            opacity-50 // Make it semi-transparent
            -translate-x-1/2 translate-y-1/2 // Offset to move it partially off-screen
            pointer-events-none // Ensure it doesn't interfere with clicks
            z-0 // Place it behind content
          "
          ></div>
          <main className="w-full max-w-4xl">{children}</main>
        </div>
        {/* --- END: Centering and Responsive Wrapper --- */}
      </body>
    </html>
  );
}
