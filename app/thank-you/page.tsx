"use client"
import { useEffect } from "react"

export default function ThankYou() {
  useEffect(() => {
    // Form conversion
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17979866472/pJDrCJn537IcEOj6u_1C'
      })
    }
  }, [])

  return (
    <div style={{
      minHeight: "100vh",
      background: "#F9F6F1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Almarai', system-ui, sans-serif",
      direction: "rtl",
      padding: "2rem",
    }}>
      <div style={{
        textAlign: "center",
        maxWidth: 480,
        width: "100%",
      }}>
        {/* Icon */}
        <div style={{
          width: 80, height: 80,
          borderRadius: "50%",
          background: "#1a3a2a",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 28px",
          fontSize: "2rem",
        }}>✅</div>

        {/* Heading */}
        <h1 style={{
          fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
          fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
          fontWeight: 500,
          color: "#1a1a1a",
          marginBottom: 12,
          lineHeight: 1.2,
        }}>
          تم استلام طلبك
        </h1>

        <p style={{
          fontSize: "1rem",
          color: "#6b6b6b",
          marginBottom: 8,
          lineHeight: 1.7,
        }}>
          شكراً لاهتمامك بمشاريع Palm Hills الساحلية
        </p>
        <p style={{
          fontSize: "0.9rem",
          color: "#9a9a9a",
          marginBottom: 40,
        }}>
          سيتواصل معك أحد مستشارينا خلال 24 ساعة
        </p>

        {/* Divider */}
        <div style={{ width: 48, height: 1, background: "#c9a84c", margin: "0 auto 36px" }} />

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="https://wa.me/201117322733?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D9%86%D8%A7%20%D9%85%D9%87%D8%AA%D9%85%20%D8%A8%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9%20Palm%20Hills%20%D8%A7%D9%84%D8%B3%D8%A7%D8%AD%D9%84%D9%8A%D8%A9"
            target="_blank" rel="noopener noreferrer"
            onClick={() => (window as any).trackWhatsapp && (window as any).trackWhatsapp()}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#25D366", color: "white",
              padding: "12px 24px", borderRadius: 8,
              textDecoration: "none", fontWeight: 700, fontSize: "0.9rem",
            }}>
            💬 تواصل واتساب
          </a>
          <a
            href="tel:+201117322733"
            onClick={() => (window as any).trackCall && (window as any).trackCall()}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#1a1a1a", color: "white",
              padding: "12px 24px", borderRadius: 8,
              textDecoration: "none", fontWeight: 700, fontSize: "0.9rem",
            }}>
            📞 اتصل بنا
          </a>
        </div>

        {/* Back link */}
        <div style={{ marginTop: 32 }}>
          <a href="/" style={{ fontSize: "0.8rem", color: "#9a9a9a", textDecoration: "none" }}>
            ← العودة للصفحة الرئيسية
          </a>
        </div>
      </div>
    </div>
  )
}
