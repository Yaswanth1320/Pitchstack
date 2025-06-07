import type { Metadata } from "next";
import localFonts from "next/font/local";
import "./globals.css";
import "easymde/dist/easymde.min.css";

export const metadata: Metadata = {
  title: "PitchStack",
  description: "Pitch, Vote and Grow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
function localFont(arg0: { src: never[]; variable: string }) {
  throw new Error("Function not implemented.");
}
/* Removed unused localFont stub */
