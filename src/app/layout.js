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
      <head />
      <body suppressHydrationWarning>
        <Script
          src="https://upload-widget.cloudinary.com/global/all.js"
          strategy="afterInteractive"
        />
        <SessionProvider>
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
