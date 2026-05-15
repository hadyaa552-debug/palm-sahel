import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"

const cairo = Cairo({ subsets: ["arabic", "latin"], weight: ["300","400","600","700","900"] })

export const metadata: Metadata = {
  title: "Palm Hills | Hacienda Bay · Hacienda Waters · Disney Land",
  description: "مشاريع Palm Hills الساحلية — Hacienda Bay وHacienda Waters وأرض ديزني المرتقب. ساحل شمالي فاخر. تواصل مع Nurline Brokerage.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={cairo.className}>{children}</body>
    </html>
  )
}
