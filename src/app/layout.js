// src/app/layout.js
import { SessionProvider } from '@/context/SessionContext';
import { LanguageProvider } from '@/context/LanguageContext';
import { Toaster } from 'sonner';
import './globals.css';
import Script from "next/script";

export const metadata = {
  title: "Bizmate",
  description: "XperHR - Efficient HR and Operations Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Manrope:wght@400;500;600;700;800&family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning style={{ fontFamily: "'Inter', sans-serif" }}>
        <Script
          src="https://upload-widget.cloudinary.com/global/all.js"
          strategy="afterInteractive"
        />
        <SessionProvider>
          <LanguageProvider>
            {children}
            <Toaster richColors closeButton position="top-right" toastOptions={{ style: { zIndex: 9999 } }} />
          </LanguageProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
