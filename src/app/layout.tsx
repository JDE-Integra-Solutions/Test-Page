import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Consultoría IT + Industrial para PYMEs en Perú",
    template: "%s",
  },
  description:
    "Consultoría para PYMEs peruanas: logística e Industria 4.0 ligera, ERP modular de inventario y facturación electrónica con API SUNAT.",
  keywords: [
    "consultoría Perú",
    "ERP PYME",
    "inventario",
    "facturación electrónica SUNAT",
    "industria 4.0",
  ],
  openGraph: {
    title: "De Excel a ERP en 3 semanas — Consultoría PYME en Perú",
    description:
      "Stock bajo control, facturación SUNAT sin errores e IA aplicada para PYMEs.",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem("nd-theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark");document.documentElement.style.colorScheme="dark";}}catch(e){}})();`}
        </Script>
        {children}
      </body>
    </html>
  );
}
