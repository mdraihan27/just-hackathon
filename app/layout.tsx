import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JUST AI Hackathon 2026 | AI Powered Web Solutions",
  description:
    "A university-wide hackathon hosted by the Department of CSE at Jashore University of Science and Technology. Build AI-powered web solutions that solve real problems.",
  keywords:
    "hackathon, JUST, CSE, AI, web development, students, Bangladesh, university hackathon",
  openGraph: {
    title: "JUST AI Hackathon 2026 | AI Powered Web Solutions",
    description:
      "Build AI-powered web solutions that solve real university problems. Open to all departments.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
