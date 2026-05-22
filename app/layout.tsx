import type { Metadata } from "next"
import { Almarai } from "next/font/google"
import Script from "next/script"                // 👈 ضفنا ده
import "./globals.css"

const almarai = Almarai({ subsets: ["arabic"], weight: ["300","400","700","800"] })

export const metadata: Metadata = {
  title: "Palm Hills | Hacienda Bay · Hacienda Waters · أرض ديزني",
  description: "مشاريع Palm Hills الساحلية — Hacienda Bay وHacienda Waters وأرض ديزني المرتقب. ساحل شمالي فاخر. تواصل مع Palm Hills Developments.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>                                     {/* 👈 ضفنا head */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17979866472"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17979866472');
        `}</Script>
      </head>                                    {/* 👈 قفلنا head */}
      <body className={almarai.className}>{children}</body>
    </html>
  )
}
