import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, phone, project, subject } = body

    const RESEND_API_KEY = process.env.RESEND_API_KEY!
    const TO_EMAIL = "apkzoz85@gmail.com"
    const CC_EMAIL = "Info@nurlinebrokerage.com"

    const htmlContent = `
      <div dir="rtl" style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
        <h2 style="color:#8B0000;border-bottom:2px solid #8B0000;padding-bottom:10px;">🏠 ليد جديد — Palm Hills</h2>
        <table style="width:100%;border-collapse:collapse;margin-top:16px;">
          <tr style="border-bottom:1px solid #eee;">
            <td style="padding:12px;font-weight:700;color:#555;width:120px;">الاسم</td>
            <td style="padding:12px;">${name || "—"}</td>
          </tr>
          <tr style="border-bottom:1px solid #eee;">
            <td style="padding:12px;font-weight:700;color:#555;">رقم الهاتف</td>
            <td style="padding:12px;" dir="ltr">${phone || "—"}</td>
          </tr>
          ${project ? `<tr style="border-bottom:1px solid #eee;">
            <td style="padding:12px;font-weight:700;color:#555;">المشروع</td>
            <td style="padding:12px;">${project}</td>
          </tr>` : ""}
        </table>
        <p style="margin-top:24px;font-size:0.85rem;color:#999;">Sent from palm-hills.org</p>
      </div>
    `

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Palm Hills Leads <leads@palm-hills.org>",
        to: [TO_EMAIL],
        cc: [CC_EMAIL],
        subject: subject || "ليد جديد — Palm Hills",
        html: htmlContent,
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      console.error("Resend error:", data)
      return NextResponse.json({ success: false, error: data }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data.id })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
