"use client"
import React, { useState, useEffect } from "react"

const PHONE = "+201119770408"
const WA = "https://wa.me/201119770408"
const EMAIL = "Info@brokerage.com"

// Palm Hills brand colors — cream + dark charcoal + red accent
const DARK = "#1C1917"
const CREAM = "#F8F5F0"
const WARM = "#EDE8DF"
const RED = "#8B1A1A"
const MID = "#6B6560"
const BORDER = "rgba(28,25,23,0.1)"
const GOLD = "#C8A97E"

const PROJECTS = [
  {
    id: "disney",
    num: "01",
    name: "أرض ديزني",
    nameEn: "Disney Land Plot",
    tag: "🔥 إطلاق قريباً",
    location: "الساحل الشمالي",
    locationEn: "NORTH COAST",
    price: "تواصل للسعر",
    payment: "قريباً",
    desc: "أول مشروع Palm Hills المرتبط بعالم ديزني في مصر — إطلاق قريباً على الساحل الشمالي. سجّل اهتمامك الآن وكن من أوائل المحجوزين.",
    features: ["موقع استراتيجي على الساحل الشمالي","أول مشروع من نوعه في مصر","فرصة استثمارية استثنائية","تصميم عالمي المستوى"],
    img: "/images/disney-land.webp",
    coming: true,
  },
  {
    id: "bay",
    num: "02",
    name: "Hacienda Bay",
    nameEn: "Hacienda Bay",
    tag: "سيدي عبد الرحمن",
    location: "كيلو 124 — الساحل الشمالي",
    locationEn: "KM 124 — NORTH COAST",
    price: "تبدأ من 13.5 مليون",
    payment: "5% مقدم — 10 سنوات",
    desc: "واحدة من أرقى قرى الساحل الشمالي على مساحة 574 فداناً. شاليهات وتاون هاوس وتوين هاوس وفيلات مباشرة على البحر في سيدي عبد الرحمن. تصميم أوروبي راقٍ مع شاطئ خاص مميز.",
    features: ["574 فدان","شاطئ خاص مباشر على البحر","شاليهات — تاون — توين — فيلات","كيلو 124 طريق الإسكندرية","تصميم أوروبي فاخر"],
    units: [
      {type:"شاليه",price:"من 13,500,000 ج"},
      {type:"تاون هاوس",price:"من 25,000,000 ج"},
      {type:"توين هاوس",price:"من 37,326,715 ج"},
      {type:"فيلا",price:"من 40,397,965 ج"},
    ],
    img: "/images/hacienda-bay.webp",
  },
  {
    id: "waters",
    num: "03",
    name: "Hacienda Waters",
    nameEn: "Hacienda Waters",
    tag: "رأس الحكمة",
    location: "كيلو 190 — رأس الحكمة",
    locationEn: "KM 190 — RAS EL HEKMA",
    price: "تبدأ من 10 مليون",
    payment: "2.5% مقدم — 12 سنة",
    desc: "أحدث مشاريع Palm Hills على الساحل الشمالي — قلب رأس الحكمة. 161 فداناً بين كيلو 190 و191 على طريق الإسكندرية. كابينات وشاليهات وفيلات مع إطلالة بحر مع أقل مقدم في السوق.",
    features: ["161 فدان رأس الحكمة","كيلو 190 طريق الإسكندرية","مقدم يبدأ من 2.5% فقط","تقسيط 12 سنة","شاليهات من 42 م² — فيلات 374 م²"],
    units: [
      {type:"كابينة",price:"من 6,800,000 ج"},
      {type:"شاليه 2 غرفة",price:"من 10,000,000 ج"},
      {type:"شاليه 3 غرف",price:"من 14,000,000 ج"},
      {type:"فيلا",price:"تواصل للسعر"},
    ],
    img: "/images/hacienda-waters.png",
  },
]

// Images from Palm Hills website
const HERO_IMGS = [
  "/images/disney-land.webp",
  "/images/hacienda-bay.webp",
  "/images/hacienda-waters.png",
]

/* ── Lead Form ── */
function LeadForm({ subject, dark=false }: { subject:string; dark?:boolean }) {
  const [form, setForm] = useState({ name:"", phone:"", project:"" })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true)
    try {
      await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method:"POST", headers:{"Content-Type":"application/json",Accept:"application/json"},
        body: JSON.stringify({...form, _subject: subject, _captcha:"false", _template:"table"}),
      })
      setSent(true)
    } catch { setLoading(false) }
  }

  if (sent) return (
    <div style={{textAlign:"center",padding:"2.5rem 1rem"}}>
      <div style={{fontSize:"2.5rem",marginBottom:"12px"}}>✅</div>
      <p style={{fontWeight:700,fontSize:"1.1rem",color:dark?"white":DARK}}>تم الإرسال!</p>
      <p style={{fontSize:"0.8rem",marginTop:"6px",color:dark?"rgba(255,255,255,0.5)":MID}}>سيتواصل معك فريقنا خلال 24 ساعة</p>
    </div>
  )

  const bc = dark?"rgba(255,255,255,0.2)":BORDER
  const tc = dark?"white":DARK
  const ph = dark?"rgba(255,255,255,0.35)":MID

  const inpStyle: React.CSSProperties = {
    width:"100%",background:"transparent",border:"none",
    borderBottom:`1px solid ${bc}`,padding:"13px 0",
    fontSize:"0.85rem",color:tc,outline:"none",
    fontFamily:"'Almarai',system-ui,-apple-system,sans-serif",display:"block",marginBottom:"10px",
  }

  return (
    <form onSubmit={submit}>
      <style>{`.ph-inp::placeholder{color:${ph}}.ph-inp:focus{border-bottom-color:${dark?GOLD:RED}!important;transition:border-color .2s}`}</style>
      <input className="ph-inp" placeholder="الاسم الكريم *" value={form.name}
        onChange={e=>setForm({...form,name:e.target.value})} required style={inpStyle} />
      <input className="ph-inp" type="tel" placeholder="رقم الهاتف *" value={form.phone}
        onChange={e=>setForm({...form,phone:e.target.value})} required style={{...inpStyle,direction:"ltr"}} />
      <select value={form.project} onChange={e=>setForm({...form,project:e.target.value})}
        style={{...inpStyle,cursor:"pointer",color:form.project?tc:ph,marginBottom:"22px"}}>
        <option value="">اختر المشروع</option>
        <option value="أرض ديزني" style={{color:DARK}}>🔥 أرض ديزني — إطلاق قريباً</option>
        <option value="Hacienda Bay" style={{color:DARK}}>Hacienda Bay — كيلو 124</option>
        <option value="Hacienda Waters" style={{color:DARK}}>Hacienda Waters — رأس الحكمة</option>
      </select>
      <button type="submit" disabled={loading}
        style={{width:"100%",padding:"14px",background:dark?GOLD:DARK,color:"white",border:"none",
          fontWeight:700,fontSize:"0.82rem",letterSpacing:"0.08em",cursor:"pointer",
          fontFamily:"'Almarai',system-ui,-apple-system,sans-serif",opacity:loading?0.7:1,transition:"opacity .2s"}}>
        {loading?"...":"اطلب معلومات الآن"}
      </button>
    </form>
  )
}

/* ── Main ── */
export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [heroIdx, setHeroIdx] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [activeProject, setActiveProject] = useState<string|null>(null)

  useEffect(()=>{
    setMounted(true)
    const fn = ()=>setScrolled(window.scrollY>60)
    window.addEventListener("scroll",fn)
    const ti = setInterval(()=>setHeroIdx(i=>(i+1)%HERO_IMGS.length),5000)
    return ()=>{ window.removeEventListener("scroll",fn); clearInterval(ti) }
  },[])


  // ── EOI Popup ──
  const [showPopup, setShowPopup] = useState(false)
  const [popupForm, setPopupForm] = useState({name:"",phone:""})
  const [popupSent, setPopupSent] = useState(false)
  const [popupLoading, setPopupLoading] = useState(false)

  useEffect(()=>{
    try {
      if (!sessionStorage.getItem("ph_popup_seen")) {
        const t = setTimeout(()=>{ setShowPopup(true); sessionStorage.setItem("ph_popup_seen","1") }, 3000)
        return ()=>clearTimeout(t)
      }
    } catch {}
  },[])

  const submitPopup = async (e: React.FormEvent) => {
    e.preventDefault(); setPopupLoading(true)
    try {
      await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method:"POST", headers:{"Content-Type":"application/json",Accept:"application/json"},
        body: JSON.stringify({...popupForm, _subject:"EOI — أرض ديزني Palm Hills", _captcha:"false", _template:"table"}),
      })
      setPopupSent(true)
    } catch { setPopupLoading(false) }
  }

  const scroll = (id:string)=>document.getElementById(id)?.scrollIntoView({behavior:"smooth"})

  return (
    <div dir="rtl" style={{direction:"rtl"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;font-family:'Almarai',system-ui,-apple-system,sans-serif}
        html{scroll-behavior:smooth}
        body{background:${CREAM};color:${DARK};direction:rtl;font-size:18px;font-weight:400}
        .hov-red:hover{color:${RED}!important;transition:color .2s}
        .hov-scale:hover img{transform:scale(1.05);transition:transform .7s}
        .card-hover:hover{background:${WARM}!important;transition:background .3s}
        .card-hover:hover .card-bar{transform:scaleX(1)!important}
        @keyframes fade{0%{opacity:0}100%{opacity:1}}
        .fade-in{animation:fade .8s ease forwards}
        @keyframes slideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        .slide-up{animation:slideUp .7s ease forwards}
        .unit-row:hover{background:${WARM};transition:background .2s}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}

        /* ── MOBILE RESPONSIVE ── */
        @media(max-width:768px){
          /* NAV */
          .ph-nav{padding:0 16px!important;height:56px!important}
          .ph-nav-links{display:none!important}
          .ph-nav-logo-text{font-size:0.85rem!important}

          /* HERO */
          .ph-hero-grid{display:flex!important;flex-direction:column!important;padding:100px 20px 40px!important;gap:24px!important}
          .ph-hero-text h1{font-size:2.5rem!important}
          .ph-hero-text p{font-size:0.85rem!important}
          .ph-hero-badge{font-size:0.68rem!important;padding:5px 12px!important}
          .ph-hero-pills{gap:8px!important}
          .ph-hero-pills button{font-size:0.7rem!important;padding:6px 14px!important}
          .ph-hero-stats{flex-wrap:wrap!important;gap:16px!important}
          .ph-hero-stats>div{padding-left:0!important;margin-left:0!important;border-left:none!important}
          .ph-hero-form{padding:24px 20px!important}

          /* PROJECTS OVERVIEW */
          .ph-projects-grid{grid-template-columns:1fr!important}
          .ph-project-card{padding:32px 20px!important}

          /* PROJECT SECTIONS */
          .ph-project-banner{flex-direction:column!important;padding:20px!important;gap:12px!important;align-items:flex-start!important}
          .ph-project-banner-bg{font-size:3rem!important}
          .ph-project-banner-prices{gap:16px!important}
          .ph-project-content-grid{grid-template-columns:1fr!important;min-height:auto!important}
          .ph-project-img{min-height:250px!important;order:1!important}
          .ph-project-info{padding:32px 20px!important;order:2!important}
          .ph-project-info h3{font-size:2rem!important}
          .ph-project-info .ph-desc{font-size:0.92rem!important}

          /* ABOUT */
          .ph-about-grid{grid-template-columns:1fr!important}
          .ph-about-img{min-height:250px!important}
          .ph-about-text{padding:40px 20px!important}
          .ph-about-text h2{font-size:2rem!important}
          .ph-about-stats{grid-template-columns:1fr 1fr!important}

          /* CONTACT */
          .ph-contact-grid{grid-template-columns:1fr!important;min-height:auto!important}
          .ph-contact-red{padding:40px 20px!important}
          .ph-contact-red h2{font-size:2rem!important}
          .ph-contact-red a[dir="ltr"]{font-size:1.5rem!important}
          .ph-contact-form{padding:40px 20px!important}

          /* FOOTER */
          .ph-footer{flex-direction:column!important;gap:12px!important;padding:20px!important;padding-bottom:80px!important;text-align:center!important}
          .ph-footer span{font-size:0.55rem!important}

          /* FLOAT BUTTONS - hide on mobile since we have bottom bar */
          .ph-float-btns{display:none!important}

          /* SLIDESHOW DOTS */
          .ph-dots{bottom:16px!important}
        }
      `}</style>

      {/* ── HERO ── */}
      <section style={{position:"relative",minHeight:"100vh",display:"flex",flexDirection:"column"}}>
        {/* BG slideshow */}
        {mounted && HERO_IMGS.map((img,i)=>(
          <div key={i} style={{position:"absolute",inset:0,transition:"opacity 1s ease",opacity:i===heroIdx?1:0,overflow:"hidden"}}>
            <img src={img} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}} />
          </div>
        ))}
        {!mounted && <div style={{position:"absolute",inset:0,background:DARK}} />}
        <div style={{position:"absolute",inset:0,background:`linear-gradient(135deg, rgba(28,25,23,0.92) 0%, rgba(28,25,23,0.65) 50%, rgba(28,25,23,0.4) 100%)`}} />

        {/* NAV */}
        <nav className="ph-nav" style={{
          position:"fixed",top:0,left:0,right:0,zIndex:100,
          display:"flex",alignItems:"center",justifyContent:"space-between",
          padding:"0 48px",height:70,
          transition:"all .3s",
          background:scrolled?"rgba(248,245,240,0.97)":"transparent",
          borderBottom:scrolled?`1px solid ${BORDER}`:"none",
          boxShadow:scrolled?"0 2px 30px rgba(0,0,0,0.07)":"none",
        }}>
          {/* Logo */}
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <div style={{width:26,height:26,background:RED,transform:"rotate(45deg)",position:"relative",flexShrink:0}} />
            <div>
              <div className="ph-nav-logo-text" style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1rem",fontWeight:600,letterSpacing:"0.2em",color:scrolled?DARK:"white",lineHeight:1}}>PALM HILLS</div>
              <div style={{fontSize:"0.45rem",letterSpacing:"0.2em",color:scrolled?MID:"rgba(255,255,255,0.45)",marginTop:2}}></div>
            </div>
          </div>
          {/* Links */}
          <div className="ph-nav-links" style={{display:"flex",gap:32,alignItems:"center"}}>
            {[["المشاريع","projects"],["Hacienda Bay","bay"],["Hacienda Waters","waters"],["تواصل","contact"]].map(([l,id])=>(
              <button key={id} onClick={()=>scroll(id)} className="hov-red"
                style={{background:"none",border:"none",cursor:"pointer",fontSize:"0.72rem",fontWeight:600,letterSpacing:"0.08em",color:scrolled?MID:"rgba(255,255,255,0.65)"}}>
                {l}
              </button>
            ))}
            <a href={`tel:${PHONE}`} style={{fontSize:"0.82rem",fontWeight:700,color:scrolled?DARK:"white",textDecoration:"none"}} dir="ltr">01119770408</a>
            <button onClick={()=>scroll("contact")}
              style={{background:RED,color:"white",border:"none",padding:"10px 22px",fontWeight:700,fontSize:"0.72rem",letterSpacing:"0.08em",cursor:"pointer",fontFamily:"'Almarai',system-ui,-apple-system,sans-serif",transition:"opacity .2s"}}
              onMouseEnter={e=>((e.target as HTMLElement).style.opacity="0.85")}
              onMouseLeave={e=>((e.target as HTMLElement).style.opacity="1")}>
              تواصل الآن
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="ph-hero-grid" style={{
          position:"relative",zIndex:10,flex:1,
          display:"grid",gridTemplateColumns:"1fr 420px",
          gap:48,alignItems:"flex-end",
          maxWidth:1280,margin:"0 auto",width:"100%",
          padding:"120px 48px 80px",
        }}>
          <div className="slide-up ph-hero-text">
            <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20,flexDirection:"row-reverse",justifyContent:"flex-end"}}>
              <div style={{width:28,height:1,background:GOLD}} />
              <span style={{fontSize:"0.6rem",fontWeight:600,letterSpacing:"0.25em",color:GOLD}}>PALM HILLS DEVELOPMENTS • </span>
            </div>

            {/* Disney teaser badge */}
            <div className="ph-hero-badge" style={{
              display:"inline-flex",alignItems:"center",gap:8,
              marginBottom:20,padding:"6px 16px",
              background:"rgba(139,26,26,0.9)",
              color:"white",fontSize:"0.72rem",fontWeight:700,
            }}>
              🔥 أرض ديزني — إطلاق قريباً على الساحل الشمالي
            </div>

            <h1 style={{
              fontFamily:"'Cormorant Garamond',serif",
              fontSize:"clamp(3.5rem,7vw,6.5rem)",
              fontWeight:300,color:"white",
              lineHeight:0.95,marginBottom:20,letterSpacing:"-0.01em"
            }}>
              الساحل الشمالي<br/>
              <em style={{fontStyle:"italic",color:"rgba(255,255,255,0.45)"}}>بتوقيع</em><br/>
              Palm Hills
            </h1>

            <p style={{fontSize:"0.88rem",color:"rgba(255,255,255,0.55)",lineHeight:1.9,maxWidth:460,marginBottom:36}}>
              Hacienda Bay، Hacienda Waters، وأرض ديزني المرتقب — 3 مشاريع ساحلية من أقوى المطورين في مصر. تواصل معنا للأسعار والحجز.
            </p>

            {/* Project pills */}
            <div className="ph-hero-pills" style={{display:"flex",flexWrap:"wrap",gap:10,marginBottom:40}}>
              {PROJECTS.map(p=>(
                <button key={p.id} onClick={()=>scroll(p.id)}
                  style={{
                    border:`1px solid rgba(255,255,255,0.2)`,
                    color:"rgba(255,255,255,0.7)",
                    background:"transparent",padding:"8px 18px",
                    fontSize:"0.75rem",fontWeight:600,cursor:"pointer",
                    fontFamily:"'Almarai',system-ui,-apple-system,sans-serif",
                    transition:"all .2s",
                  }}
                  onMouseEnter={e=>{ const el=e.currentTarget; el.style.borderColor=RED; el.style.color="white"; el.style.background=RED }}
                  onMouseLeave={e=>{ const el=e.currentTarget; el.style.borderColor="rgba(255,255,255,0.2)"; el.style.color="rgba(255,255,255,0.7)"; el.style.background="transparent" }}>
                  {p.coming && "🔥 "}{p.name}
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className="ph-hero-stats" style={{display:"flex",gap:0,borderTop:"1px solid rgba(255,255,255,0.1)",paddingTop:24}}>
              {[{v:"1997",l:"تأسيس Palm Hills"},{v:"3",l:"مشاريع ساحلية"},{v:"LSE",l:"مدرجة في لندن"}].map((s,i)=>(
                <div key={i} style={{paddingLeft:i>0?24:0,marginLeft:i>0?24:0,borderLeft:i>0?"1px solid rgba(255,255,255,0.1)":"none"}}>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1.8rem",fontWeight:300,color:GOLD}}>{s.v}</div>
                  <div style={{fontSize:"0.6rem",color:"rgba(255,255,255,0.28)",marginTop:3,letterSpacing:"0.1em"}}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Form */}
          <div className="ph-hero-form slide-up" style={{
            background:"rgba(248,245,240,0.96)",backdropFilter:"blur(16px)",
            padding:"36px 32px",borderTop:`3px solid ${RED}`,
          }}>
            <p style={{fontSize:"0.6rem",fontWeight:700,letterSpacing:"0.2em",color:RED,marginBottom:12,textTransform:"uppercase"}}>اطلب معلومات</p>
            <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1.8rem",fontWeight:400,color:DARK,lineHeight:1.1,marginBottom:6}}>
              ابدأ رحلتك<br/>نحو الساحل
            </h2>
            <p style={{fontSize:"0.75rem",color:MID,marginBottom:24,lineHeight:1.7}}>سيتواصل معك فريقنا خلال 24 ساعة</p>
            <LeadForm subject="Lead — Palm Hills (Hero)" />
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:12}}>
              <a href={`${WA}?text=${encodeURIComponent("مرحباً، أنا مهتم بمشاريع Palm Hills الساحلية")}`}
                target="_blank" rel="noopener noreferrer"
                style={{padding:"11px",background:"#25D366",color:"white",fontWeight:700,fontSize:"0.72rem",textAlign:"center",textDecoration:"none"}}>
                💬 واتساب
              </a>
              <a href={`tel:${PHONE}`}
                style={{padding:"11px",border:`1px solid ${BORDER}`,color:DARK,fontWeight:700,fontSize:"0.72rem",textAlign:"center",textDecoration:"none",transition:"all .2s"}}
                onMouseEnter={e=>{(e.currentTarget.style.background=DARK);(e.currentTarget.style.color="white")}}
                onMouseLeave={e=>{(e.currentTarget.style.background="transparent");(e.currentTarget.style.color=DARK)}}>
                📞 اتصل
              </a>
            </div>
          </div>
        </div>

        {/* Slideshow dots */}
        {mounted && (
          <div className="ph-dots" style={{position:"absolute",bottom:32,left:"50%",transform:"translateX(-50%)",display:"flex",gap:8,zIndex:10}}>
            {HERO_IMGS.map((_,i)=>(
              <button key={i} onClick={()=>setHeroIdx(i)} style={{
                width:i===heroIdx?24:8,height:8,
                background:i===heroIdx?"white":"rgba(255,255,255,0.3)",
                border:"none",cursor:"pointer",transition:"all .3s",padding:0,
              }} />
            ))}
          </div>
        )}
      </section>

      {/* ── PROJECTS OVERVIEW ── */}
      <section id="projects" style={{padding:"0",background:CREAM}}>
        <div className="ph-projects-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:1,background:BORDER}}>
          {PROJECTS.map((p,i)=>(
            <div key={p.id} className="card-hover ph-project-card"
              style={{background:CREAM,padding:"48px 40px",cursor:"pointer",position:"relative",overflow:"hidden"}}
              onClick={()=>scroll(p.id)}>
              {/* Bottom border anim */}
              <div className="card-bar" style={{position:"absolute",bottom:0,left:0,right:0,height:2,background:RED,transform:"scaleX(0)",transition:"transform .3s",transformOrigin:"right"}} />
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"3.5rem",fontWeight:300,color:"rgba(28,25,23,0.05)",marginBottom:-8}}>{p.num}</div>
              <div style={{display:"inline-block",fontSize:"0.75rem",fontWeight:700,letterSpacing:"0.15em",color:p.coming?RED:MID,marginBottom:12,padding:p.coming?"4px 10px":"0",background:p.coming?"rgba(139,26,26,0.08)":"transparent",border:p.coming?`1px solid rgba(139,26,26,0.2)`:"none"}}>
                {p.tag}
              </div>
              <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1.8rem",fontWeight:400,marginBottom:6,color:DARK}}>{p.name}</h3>
              <p style={{fontSize:"0.82rem",color:MID,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:20}}>{p.location}</p>
              <div style={{borderTop:`1px solid ${BORDER}`,paddingTop:20,display:"flex",justifyContent:"space-between",alignItems:"flex-end"}}>
                <div>
                  <p style={{fontSize:"0.75rem",color:MID,marginBottom:4}}>يبدأ السعر من</p>
                  <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1.4rem",color:RED,fontWeight:300}}>{p.price}</p>
                </div>
                <div style={{width:32,height:32,border:`1px solid ${BORDER}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.9rem",transition:"all .2s"}}>
                  ↓
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJECT SECTIONS ── */}
      {PROJECTS.map((p, pi) => (
        <section key={p.id} id={p.id} style={{background: pi%2===0 ? CREAM : WARM}}>
          {/* Banner */}
          <div className="ph-project-banner" style={{
            padding:"28px 48px",display:"flex",justifyContent:"space-between",alignItems:"center",
            borderBottom:`1px solid ${BORDER}`,
            background: pi%2===0 ? WARM : CREAM,
            position:"relative",overflow:"hidden",
          }}>
            <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",pointerEvents:"none"}}>
              <span className="ph-project-banner-bg" style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"8rem",fontWeight:300,whiteSpace:"nowrap",color:"rgba(28,25,23,0.03)",letterSpacing:"0.2em"}}>{p.nameEn}</span>
            </div>
            <div style={{position:"relative"}}>
              <p style={{fontSize:"0.72rem",fontWeight:700,letterSpacing:"0.25em",color:RED,marginBottom:6,textTransform:"uppercase"}}>{p.num} — {p.locationEn}</p>
              <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"2rem",fontWeight:400,color:DARK}}>{p.name}</h2>
            </div>
            {!p.coming && (
              <div className="ph-project-banner-prices" style={{display:"flex",gap:32,position:"relative"}}>
                {[{v:p.price,l:"السعر يبدأ"},{v:p.payment,l:"السداد"}].map((s,i)=>(
                  <div key={i} style={{textAlign:"right"}}>
                    <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1.3rem",color:RED}}>{s.v}</div>
                    <div style={{fontSize:"0.75rem",color:MID,marginTop:2,letterSpacing:"0.08em"}}>{s.l}</div>
                  </div>
                ))}
              </div>
            )}
            {p.coming && (
              <div style={{padding:"10px 24px",border:`1px solid ${RED}`,color:RED,fontSize:"0.88rem",fontWeight:700,letterSpacing:"0.1em",animation:"pulse 2s infinite"}}>
                🔥 إطلاق قريباً — سجّل الآن
              </div>
            )}
          </div>

          <div className="ph-project-content-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",minHeight:"70vh"}}>
            {/* Image */}
            <div className="hov-scale ph-project-img" style={{position:"relative",overflow:"hidden",minHeight:"50vw",order:pi%2===0?1:2}}>
              <img src={p.img} alt={p.name} style={{width:"100%",height:"100%",objectFit:"cover",position:"absolute",inset:0,transition:"transform .7s"}} />
              <div style={{position:"absolute",inset:0,background:`linear-gradient(to top, rgba(28,25,23,0.4) 0%, transparent 50%)`}} />
              {p.coming && (
                <div style={{position:"absolute",top:24,right:24,background:RED,color:"white",padding:"8px 16px",fontSize:"0.7rem",fontWeight:700,letterSpacing:"0.1em"}}>
                  🔥 قريباً
                </div>
              )}
            </div>

            {/* Content */}
            <div className="ph-project-info" style={{
              padding:"60px 52px",display:"flex",flexDirection:"column",justifyContent:"center",
              order:pi%2===0?2:1,
              background: pi%2===0 ? CREAM : WARM,
            }}>
              <p style={{fontSize:"0.75rem",fontWeight:700,letterSpacing:"0.25em",color:RED,marginBottom:16,textTransform:"uppercase"}}>PALM HILLS DEVELOPMENTS</p>
              <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"2.5rem",fontWeight:300,color:DARK,lineHeight:1.05,marginBottom:8}}>{p.name}</h3>
              <p style={{fontSize:"0.85rem",color:MID,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:24}}>{p.location}</p>
              <div style={{width:32,height:1,background:RED,marginBottom:24}} />
              <p className="ph-desc" style={{fontSize:"1.05rem",color:MID,lineHeight:1.9,marginBottom:28}}>{p.desc}</p>

              {/* Features */}
              <div style={{marginBottom:24}}>
                {p.features.map((f,i)=>(
                  <div key={i} style={{display:"flex",alignItems:"center",gap:12,padding:"12px 0",borderBottom:`1px solid ${BORDER}`,fontSize:"1rem",color:DARK}}>
                    <div style={{width:6,height:6,background:RED,flexShrink:0}} />
                    {f}
                  </div>
                ))}
              </div>

              {/* Units if exists */}
              {p.units && (
                <div style={{marginBottom:24,border:`1px solid ${BORDER}`}}>
                  {p.units.map((u,i)=>(
                    <div key={i} className="unit-row" style={{display:"flex",justifyContent:"space-between",padding:"16px 20px",borderBottom:i<p.units!.length-1?`1px solid ${BORDER}`:"none"}}>
                      <span style={{fontWeight:600,fontSize:"1rem",color:DARK}}>{u.type}</span>
                      <span style={{fontSize:"1rem",color:RED,fontFamily:"'Cormorant Garamond',serif"}}>{u.price}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA */}
              <div style={{display:"flex",gap:10}}>
                <a href={`${WA}?text=${encodeURIComponent(`مرحباً، أنا مهتم بمشروع ${p.name} من Palm Hills`)}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{flex:1,padding:"16px",background:"#25D366",color:"white",fontWeight:700,fontSize:"0.92rem",textAlign:"center",textDecoration:"none"}}>
                  💬 واتساب
                </a>
                <a href={`tel:${PHONE}`}
                  style={{flex:1,padding:"16px",border:`1px solid ${DARK}`,color:DARK,fontWeight:700,fontSize:"0.92rem",textAlign:"center",textDecoration:"none",transition:"all .2s"}}
                  onMouseEnter={e=>{(e.currentTarget.style.background=DARK);(e.currentTarget.style.color="white")}}
                  onMouseLeave={e=>{(e.currentTarget.style.background="transparent");(e.currentTarget.style.color=DARK)}}>
                  📞 اتصل الآن
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── ABOUT PALM HILLS ── */}
      <section className="ph-about-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",background:DARK}}>
        <div className="ph-about-img" style={{
          background:`url('/images/hacienda-bay.webp') center/cover`,
          minHeight:480,position:"relative",
        }}>
          <div style={{position:"absolute",inset:0,background:"rgba(28,25,23,0.3)"}} />
          <div style={{position:"absolute",bottom:32,right:32,padding:"6px 16px",background:"rgba(28,25,23,0.7)",color:GOLD,fontSize:"0.65rem",fontWeight:700,letterSpacing:"0.15em"}}>
            SINCE 1997
          </div>
        </div>
        <div className="ph-about-text" style={{padding:"80px 60px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <p style={{fontSize:"0.6rem",fontWeight:700,letterSpacing:"0.25em",color:GOLD,marginBottom:20,textTransform:"uppercase"}}>عن Palm Hills</p>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"2.8rem",fontWeight:300,color:"white",lineHeight:1.1,marginBottom:20}}>
            بنيان يمتد<br/><em style={{fontStyle:"italic",color:"rgba(255,255,255,0.4)"}}>منذ 1997</em>
          </h2>
          <p style={{fontSize:"0.85rem",color:"rgba(255,255,255,0.5)",lineHeight:1.9,marginBottom:32}}>
            Palm Hills Developments من أكبر شركات التطوير العقاري في مصر — مدرجة في البورصة المصرية وبورصة لندن. تمتلك واحداً من أكبر بنوك الأراضي في البلاد مع أكثر من 34 مشروعاً في القاهرة الكبرى، الساحل الشمالي، والإسكندرية.
          </p>
          <div className="ph-about-stats" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:1,background:"rgba(255,255,255,0.06)"}}>
            {[{v:"34+",l:"مشروع نشط"},{v:"1997",l:"سنة التأسيس"},{v:"LSE",l:"مدرجة لندن"},{v:"الساحل",l:"شمالي + أكتوبر"},{v:"+29M",l:"م² محفظة أراضي"}].slice(0,4).map((s,i)=>(
              <div key={i} style={{background:"rgba(255,255,255,0.03)",padding:"24px 28px"}}>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"2rem",fontWeight:300,color:GOLD}}>{s.v}</div>
                <div style={{fontSize:"0.65rem",color:"rgba(255,255,255,0.3)",marginTop:6,letterSpacing:"0.1em"}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="ph-contact-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",minHeight:"65vh"}}>
        <div className="ph-contact-red" style={{padding:"80px 60px",background:RED,display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <p style={{fontSize:"0.6rem",fontWeight:700,letterSpacing:"0.25em",color:"rgba(255,255,255,0.6)",marginBottom:20,textTransform:"uppercase"}}>تواصل مع </p>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"3rem",fontWeight:300,color:"white",lineHeight:1.05,marginBottom:20}}>
            ابدأ رحلتك<br/>نحو الساحل
          </h2>
          <a href={`tel:${PHONE}`} style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"2rem",fontWeight:300,color:"white",textDecoration:"none",display:"block",marginBottom:32,transition:"opacity .2s"}}
            dir="ltr" onMouseEnter={e=>(e.currentTarget.style.opacity="0.7")} onMouseLeave={e=>(e.currentTarget.style.opacity="1")}>
            01119770408
          </a>
          <div style={{borderTop:"1px solid rgba(255,255,255,0.2)"}}>
            {[
              {k:"أرض ديزني",v:"🔥 إطلاق قريباً"},
              {k:"Hacienda Bay",v:"كيلو 124 — يبدأ من 13.5M"},
              {k:"Hacienda Waters",v:"رأس الحكمة — يبدأ من 10M"},
            ].map((d,i)=>(
              <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"14px 0",borderBottom:"1px solid rgba(255,255,255,0.1)"}}>
                <span style={{fontWeight:600,color:"white",fontSize:"0.82rem"}}>{d.v}</span>
                <span style={{fontSize:"0.68rem",color:"rgba(255,255,255,0.5)"}}>{d.k}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="ph-contact-form" style={{padding:"80px 60px",background:CREAM,display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <p style={{fontSize:"0.6rem",fontWeight:700,letterSpacing:"0.25em",color:RED,marginBottom:12,textTransform:"uppercase"}}>طلب معلومات</p>
          <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"2rem",fontWeight:300,color:DARK,marginBottom:6}}>نحن هنا لمساعدتك</h3>
          <p style={{fontSize:"0.78rem",color:MID,marginBottom:28}}>سيتواصل معك فريق Palm Hills خلال 24 ساعة</p>
          <LeadForm subject="Lead — Palm Hills (Contact)" />
          <div style={{display:"flex",gap:8,marginTop:12}}>
            <a href={`${WA}?text=${encodeURIComponent("مرحباً، أنا مهتم بمشاريع Palm Hills الساحلية")}`}
              target="_blank" rel="noopener noreferrer"
              style={{flex:1,padding:"12px",background:"#25D366",color:"white",fontWeight:700,fontSize:"0.72rem",textAlign:"center",textDecoration:"none"}}>
              💬 واتساب
            </a>
            <a href={`tel:${PHONE}`}
              style={{flex:1,padding:"12px",border:`1px solid ${BORDER}`,color:DARK,fontWeight:700,fontSize:"0.72rem",textAlign:"center",textDecoration:"none"}}>
              📞 اتصل الآن
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ph-footer" style={{
        padding:"20px 48px 80px",display:"flex",alignItems:"center",justifyContent:"space-between",
        background:DARK,borderTop:"1px solid rgba(255,255,255,0.05)",
      }}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:18,height:18,background:RED,transform:"rotate(45deg)"}} />
          <div>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"0.85rem",letterSpacing:"0.2em",color:GOLD,lineHeight:1}}>PALM HILLS</div>
            <div style={{fontSize:"0.45rem",color:"rgba(255,255,255,0.25)",letterSpacing:"0.15em",marginTop:2}}></div>
          </div>
        </div>
        <span style={{fontSize:"0.65rem",color:"rgba(255,255,255,0.2)"}}>© 2026 Palm Hills Developments | Palm Hills — وكيل معتمد</span>
      </footer>

      {/* ── EOI POPUP ── */}
      {showPopup && (
        <div style={{position:"fixed",inset:0,zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem",background:"rgba(0,0,0,0.75)",backdropFilter:"blur(4px)"}}>
          <div style={{background:"white",maxWidth:440,width:"100%",position:"relative",overflow:"hidden"}}>
            {/* Top red bar */}
            <div style={{background:RED,padding:"24px 28px 20px",color:"white"}}>
              <button onClick={()=>setShowPopup(false)} style={{position:"absolute",top:12,left:16,background:"none",border:"none",color:"rgba(255,255,255,0.6)",fontSize:"1.2rem",cursor:"pointer",lineHeight:1}}>✕</button>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
                <span style={{fontSize:"1.2rem"}}>🔥</span>
                <span style={{fontSize:"0.6rem",fontWeight:700,letterSpacing:"0.2em",opacity:0.7}}>إطلاق جديد — أرض ديزني</span>
              </div>
              <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1.7rem",fontWeight:300,lineHeight:1.1}}>
                أرض ديزني<br/>
                <span style={{fontWeight:600}}>سجّل بياناتك للحجز الآن</span>
              </h2>
            </div>
            {/* EOI badge */}
            <div style={{background:DARK,padding:"12px 28px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <div style={{width:8,height:8,borderRadius:"50%",background:"#4ade80",animation:"pulse 1.5s infinite"}} />
                <span style={{fontSize:"0.7rem",fontWeight:700,color:"white",letterSpacing:"0.1em"}}>نجمع EOI حالياً</span>
              </div>
              <span style={{fontSize:"0.65rem",color:"rgba(255,255,255,0.4)"}}>Palm Hills Developments</span>
            </div>
            {/* Form */}
            <div style={{padding:"24px 28px"}}>
              {popupSent ? (
                <div style={{textAlign:"center",padding:"2rem 0"}}>
                  <div style={{fontSize:"2.5rem",marginBottom:"12px"}}>✅</div>
                  <p style={{fontWeight:700,fontSize:"1.1rem",color:DARK}}>تم التسجيل!</p>
                  <p style={{fontSize:"0.8rem",color:MID,marginTop:6}}>سيتواصل معك فريقنا قريباً</p>
                  <button onClick={()=>setShowPopup(false)} style={{marginTop:16,padding:"10px 28px",background:RED,color:"white",border:"none",fontWeight:700,cursor:"pointer",fontFamily:"Cairo,sans-serif"}}>
                    إغلاق
                  </button>
                </div>
              ) : (
                <form onSubmit={submitPopup}>
                  <style>{`.popup-inp::placeholder{color:${MID}}.popup-inp:focus{border-bottom-color:${RED}!important}`}</style>
                  <p style={{fontSize:"0.78rem",color:MID,marginBottom:16,lineHeight:1.7}}>
                    سجّل اهتمامك الآن وكن من أوائل المحجوزين في أرض ديزني على الساحل الشمالي.
                  </p>
                  <input className="popup-inp" placeholder="الاسم الكريم *" value={popupForm.name}
                    onChange={e=>setPopupForm({...popupForm,name:e.target.value})} required
                    style={{width:"100%",background:"transparent",border:"none",borderBottom:`1px solid ${BORDER}`,padding:"12px 0",fontSize:"0.85rem",color:DARK,outline:"none",marginBottom:"10px",display:"block",fontFamily:"Almarai,sans-serif"}} />
                  <input className="popup-inp" type="tel" placeholder="رقم الهاتف *" value={popupForm.phone}
                    onChange={e=>setPopupForm({...popupForm,phone:e.target.value})} required dir="ltr"
                    style={{width:"100%",background:"transparent",border:"none",borderBottom:`1px solid ${BORDER}`,padding:"12px 0",fontSize:"0.85rem",color:DARK,outline:"none",marginBottom:"20px",display:"block",fontFamily:"Almarai,sans-serif"}} />
                  <button type="submit" disabled={popupLoading}
                    style={{width:"100%",padding:"14px",background:RED,color:"white",border:"none",fontWeight:700,fontSize:"0.82rem",letterSpacing:"0.08em",cursor:"pointer",fontFamily:"Almarai,sans-serif",opacity:popupLoading?0.7:1}}>
                    {popupLoading ? "..." : "🔥 سجّل اهتمامك الآن"}
                  </button>
                  <a href={`${WA}?text=${encodeURIComponent("مرحباً، أنا مهتم بالحجز في أرض ديزني من Palm Hills — الساحل الشمالي")}`}
                    target="_blank" rel="noopener noreferrer"
                    style={{display:"block",marginTop:8,padding:"12px",background:"#25D366",color:"white",fontWeight:700,fontSize:"0.75rem",textAlign:"center",textDecoration:"none"}}>
                    💬 تواصل واتساب مباشرة
                  </a>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* FLOAT BUTTONS */}
      <div className="ph-float-btns" style={{position:"fixed",bottom:80,left:24,zIndex:50,display:"flex",flexDirection:"column",gap:10}}>
        <a href={`tel:${PHONE}`}
          style={{width:44,height:44,borderRadius:"50%",background:RED,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 20px rgba(0,0,0,0.25)",textDecoration:"none",transition:"transform .2s"}}
          onMouseEnter={e=>(e.currentTarget.style.transform="scale(1.1)")} onMouseLeave={e=>(e.currentTarget.style.transform="scale(1)")}>
          <svg viewBox="0 0 24 24" style={{width:18,height:18,fill:"white"}}><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
        </a>
        <a href={`${WA}?text=${encodeURIComponent("مرحباً، أنا مهتم بمشاريع Palm Hills الساحلية")}`}
          target="_blank" rel="noopener noreferrer"
          style={{width:44,height:44,borderRadius:"50%",background:"#25D366",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 20px rgba(0,0,0,0.25)",textDecoration:"none",transition:"transform .2s"}}
          onMouseEnter={e=>(e.currentTarget.style.transform="scale(1.1)")} onMouseLeave={e=>(e.currentTarget.style.transform="scale(1)")}>
          <svg viewBox="0 0 24 24" style={{width:18,height:18,fill:"white"}}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
      </div>

      {/* MOBILE BAR */}
      <div style={{position:"fixed",bottom:0,left:0,right:0,zIndex:40,display:"grid",gridTemplateColumns:"1fr 1fr"}}>
        <a href={`tel:${PHONE}`} style={{padding:"16px",background:RED,color:"white",fontWeight:700,fontSize:"0.78rem",textAlign:"center",textDecoration:"none"}}>📞 اتصل الآن</a>
        <a href={`${WA}?text=${encodeURIComponent("مرحباً، أنا مهتم بمشاريع Palm Hills الساحلية")}`}
          target="_blank" rel="noopener noreferrer"
          style={{padding:"16px",background:"#25D366",color:"white",fontWeight:700,fontSize:"0.78rem",textAlign:"center",textDecoration:"none"}}>
          💬 واتساب
        </a>
      </div>
    </div>
  )
}
