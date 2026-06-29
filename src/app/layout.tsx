import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { homePageSeo, company } from "@/lib/site-data";
import { buildMetadata } from "@/lib/seo";
import { localBusinessSchema } from "@/lib/schema";
import { jsonLd } from "@/lib/utils";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  ...buildMetadata(homePageSeo),
  applicationName: company.name,
  category: "Cleaning Services",
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-surface-1 text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(localBusinessSchema()) }}
        />
        <Header />
        <main className="min-h-screen pt-[var(--header-height)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
