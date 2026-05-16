import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, Instagram, Twitter, ExternalLink, ArrowLeft } from "lucide-react";

const C = {
  bg:      "#f5f2ed",
  white:   "#ffffff",
  dark:    "#3a3230",
  primary: "#8b4f47",
  accent:  "#c4504a",
  deep:    "#6d3d37",
  border:  "#d4c5b0",
  textMuted: "#6b7280",
};

function YagasuriBg({ className = "" }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <pattern id="yagasuri" x="0" y="0" width="40" height="80" patternUnits="userSpaceOnUse">
          <rect width="40" height="80" fill="transparent"/>
          <path d="M 20 0 L 10 20 L 20 20 L 30 20 Z" fill="currentColor" opacity="0.15"/>
          <path d="M 20 20 L 10 40 L 20 40 L 30 40 Z" fill="currentColor" opacity="0.08"/>
          <path d="M 20 40 L 10 60 L 20 60 L 30 60 Z" fill="currentColor" opacity="0.15"/>
          <path d="M 20 60 L 10 80 L 20 80 L 30 80 Z" fill="currentColor" opacity="0.08"/>
          <path d="M 0 0 L 10 20 L 0 20 Z" fill="currentColor" opacity="0.1"/>
          <path d="M 0 20 L 10 40 L 0 40 Z" fill="currentColor" opacity="0.05"/>
          <path d="M 0 40 L 10 60 L 0 60 Z" fill="currentColor" opacity="0.1"/>
          <path d="M 0 60 L 10 80 L 0 80 Z" fill="currentColor" opacity="0.05"/>
          <path d="M 40 0 L 30 20 L 40 20 Z" fill="currentColor" opacity="0.1"/>
          <path d="M 40 20 L 30 40 L 40 40 Z" fill="currentColor" opacity="0.05"/>
          <path d="M 40 40 L 30 60 L 40 60 Z" fill="currentColor" opacity="0.1"/>
          <path d="M 40 60 L 30 80 L 40 80 Z" fill="currentColor" opacity="0.05"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#yagasuri)"/>
    </svg>
  );
}

function SectionHeading({ en, ja }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "4rem", position: "relative" }}>
      <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: -16, width: 128, height: 128, color: C.accent, opacity: 0.1, pointerEvents: "none" }}>
        <YagasuriBg />
      </div>
      <p style={{ fontSize: "0.75rem", color: C.textMuted, marginBottom: "0.5rem", letterSpacing: "0.25em", position: "relative" }}>{en}</p>
      <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", marginBottom: "1rem", fontFamily: "serif", position: "relative", fontWeight: 400 }}>{ja}</h2>
      <div style={{ width: 64, height: 4, background: C.accent, margin: "0 auto", position: "relative" }} />
    </div>
  );
}

function ContactCard({ icon: Icon, title, children }) {
  return (
    <div style={{ display: "flex", gap: "1rem", background: C.white, padding: "1.5rem", border: `1px solid ${C.border}`, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, right: 0, width: 96, height: 96, color: C.primary, opacity: 0.05, pointerEvents: "none" }}><YagasuriBg /></div>
      <div style={{ width: 48, height: 48, background: C.primary, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Icon color="#fff" size={20} />
      </div>
      <div>
        <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem", letterSpacing: "0.1em" }}>{title}</h3>
        {children}
      </div>
    </div>
  );
}

/* ── PORTFOLIO PAGE ── */
const PORTFOLIO_ITEMS = [
  { id: 1, title: "老舗和菓子店のブランド刷新", category: "意匠", tag: "Branding", grad: `linear-gradient(135deg, #8b4f47, #6d3d37)`, desc: "創業100年の和菓子店のロゴ・パッケージを全面リニューアル。伝統を守りながら現代的な感覚を取り入れたデザインに。" },
  { id: 2, title: "旅館予約サイトの体験設計", category: "図案", tag: "UI/UX", grad: "linear-gradient(135deg, #5e8c6a, #4a6e56)", desc: "老舗旅館のオンライン予約システムをゼロから設計。ユーザー離脱率を40%改善。" },
  { id: 3, title: "日本酒メーカーのVI開発", category: "意匠", tag: "Branding", grad: `linear-gradient(135deg, #c4504a, #9d3f36)`, desc: "蔵元の世界観をビジュアルに落とし込んだVI。海外展開を見据えたバイリンガル対応。" },
  { id: 4, title: "伝統工芸ECの利用体験改善", category: "図案", tag: "UI/UX", grad: "linear-gradient(135deg, #6b5d4f, #554a3f)", desc: "職人の技を伝えるECサイトのUX改善。購入率が2.3倍に向上。" },
  { id: 5, title: "茶道具メーカーのカタログ", category: "装飾", tag: "Print", grad: "linear-gradient(135deg, #4a6e6b, #3a5856)", desc: "和の美意識を活かしたプロダクトカタログ。余白と素材感を大切にしたデザイン。" },
  { id: 6, title: "神社の御朱印帳デザイン", category: "装飾", tag: "Print", grad: "linear-gradient(135deg, #7a5c3a, #5e4528)", desc: "地域の神社向けに特別デザインした御朱印帳。伝統文様を現代的にアレンジ。" },
];

const FILTERS = ["すべて", "意匠", "図案", "装飾"];

function PortfolioPage({ onBack }) {
  const [active, setActive] = useState("すべて");
  const [hovered, setHovered] = useState(null);
  const filtered = active === "すべて" ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter(p => p.category === active);

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: "'Helvetica Neue', Arial, sans-serif", color: C.dark }}>
      {/* fixed nav */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: `${C.bg}f5`, backdropFilter: "blur(8px)", borderBottom: `2px solid ${C.primary}33` }}>
        <nav style={{ maxWidth: 1200, margin: "0 auto", padding: "1rem 1.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
          <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem", color: C.primary, fontSize: "0.9rem", letterSpacing: "0.1em" }}>
            <ArrowLeft size={16} /> ホームに戻る
          </button>
          <div style={{ width: 1, height: 20, background: C.border }} />
          <span style={{ fontSize: "1.2rem", fontWeight: 700, letterSpacing: "0.2em" }}>YOICHI<span style={{ color: C.accent }}>.</span></span>
          <span style={{ color: C.textMuted, fontSize: "0.85rem", letterSpacing: "0.15em" }}>/ PORTFOLIO</span>
        </nav>
      </header>

      <div style={{ paddingTop: "6rem", padding: "7rem 1.5rem 5rem", maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeading en="PORTFOLIO" ja="制作実績" />

        {/* フィルター */}
        <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", marginBottom: "3rem", flexWrap: "wrap" }}>
          {FILTERS.map(f => (
            <button key={f} onClick={() => setActive(f)}
              style={{ padding: "0.5rem 1.4rem", border: `2px solid ${active === f ? C.accent : C.border}`, background: active === f ? C.accent : "transparent", color: active === f ? "#fff" : C.dark, cursor: "pointer", fontSize: "0.85rem", letterSpacing: "0.12em", transition: "all 0.2s", fontFamily: "serif" }}
            >{f}</button>
          ))}
        </div>

        {/* グリッド */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}>
          {filtered.map(p => (
            <div key={p.id}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ background: C.white, border: `2px solid ${hovered === p.id ? C.accent : C.border}`, transition: "all 0.3s", transform: hovered === p.id ? "translateY(-4px)" : "none", boxShadow: hovered === p.id ? "0 12px 32px rgba(0,0,0,0.12)" : "none", overflow: "hidden" }}
            >
              {/* サムネイル */}
              <div style={{ height: 200, background: p.grad, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, right: 0, width: 160, height: 160, color: "#fff", opacity: 0.1 }}><YagasuriBg /></div>
                <div style={{ position: "absolute", top: 16, right: 16, width: 40, height: 40, border: "1px solid rgba(255,255,255,0.3)", transform: "rotate(45deg)" }} />
                <div style={{ position: "absolute", bottom: 16, left: 16 }}>
                  <span style={{ background: "rgba(255,255,255,0.2)", color: "#fff", fontSize: "0.72rem", padding: "0.2rem 0.6rem", letterSpacing: "0.12em" }}>{p.tag}</span>
                </div>
              </div>
              {/* テキスト */}
              <div style={{ padding: "1.5rem" }}>
                <div style={{ fontSize: "0.72rem", color: C.textMuted, letterSpacing: "0.2em", marginBottom: "0.5rem" }}>{p.category}</div>
                <h3 style={{ fontSize: "1.1rem", fontFamily: "serif", fontWeight: 400, marginBottom: "0.8rem", lineHeight: 1.5 }}>{p.title}</h3>
                <p style={{ fontSize: "0.88rem", color: C.textMuted, lineHeight: 1.8 }}>{p.desc}</p>
                <div style={{ marginTop: "1rem", display: "flex", alignItems: "center", gap: "0.4rem", color: C.accent, fontSize: "0.82rem", letterSpacing: "0.1em", opacity: hovered === p.id ? 1 : 0, transition: "opacity 0.3s" }}>
                  <ExternalLink size={14} /> 詳細を見る
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* フッター */}
      <footer style={{ borderTop: `1px solid ${C.border}`, padding: "2rem 1.5rem", textAlign: "center", background: C.dark, color: C.bg }}>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, color: C.primary, opacity: 0.1 }}><YagasuriBg /></div>
          <p style={{ fontSize: "0.8rem", color: "#9ca3af", letterSpacing: "0.12em", position: "relative" }}>© 令和八年 株式会社YOICHI</p>
        </div>
      </footer>
    </div>
  );
}

/* ── MAIN HOME PAGE ── */
export default function App() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredWork, setHoveredWork] = useState(null);
  const [hoveredSns, setHoveredSns] = useState(null);

  if (page === "portfolio") return <PortfolioPage onBack={() => setPage("home")} />;

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = [
    { label: "サービス",     id: "services"   },
    { label: "実績",         id: "works"      },
    { label: "会社概要",     id: "about"      },
    { label: "SNS",          id: "sns"        },
  ];

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: "'Helvetica Neue', Arial, sans-serif", color: C.dark, overflowX: "hidden" }}>
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", opacity: 0.4, color: C.primary, zIndex: 0 }}><YagasuriBg /></div>

      {/* HEADER */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: `${C.bg}f5`, backdropFilter: "blur(8px)", borderBottom: `2px solid ${C.primary}33` }}>
        <nav style={{ maxWidth: 1200, margin: "0 auto", padding: "1rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ width: 48, height: 48, background: C.primary, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontFamily: "serif", fontSize: "1.4rem" }}>Y</span>
            </div>
            <span style={{ fontSize: "1.5rem", letterSpacing: "0.2em", fontWeight: 700 }}>YOICHI</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            {navLinks.map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)}
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.95rem", letterSpacing: "0.12em", color: C.dark, transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = C.accent}
                onMouseLeave={e => e.target.style.color = C.dark}
              >{l.label}</button>
            ))}
            <button onClick={() => setPage("portfolio")}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.95rem", letterSpacing: "0.12em", color: C.dark, transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = C.accent}
              onMouseLeave={e => e.target.style.color = C.dark}
            >Portfolio</button>
            <button onClick={() => scrollTo("contact")}
              style={{ padding: "0.55rem 1.4rem", background: C.primary, color: "#fff", border: "none", cursor: "pointer", letterSpacing: "0.12em", fontSize: "0.9rem", transition: "background 0.2s" }}
              onMouseEnter={e => e.target.style.background = C.deep}
              onMouseLeave={e => e.target.style.background = C.primary}
            >お問い合わせ</button>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "25%", left: "25%", width: 256, height: 256, color: C.accent, opacity: 0.2, pointerEvents: "none" }}><YagasuriBg /></div>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "8rem 1.5rem 5rem", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 750 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "3rem" }}>
              <div style={{ width: 120, height: 120, background: C.primary, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3.5rem" }}>
                <span style={{ color: "#fff", fontFamily: "serif" }}>Y</span>
              </div>
              <div>
                <h1 style={{ fontSize: "clamp(2.5rem,6vw,4rem)", letterSpacing: "0.2em", fontWeight: 700, marginBottom: "0.5rem" }}>YOICHI</h1>
                <div style={{ height: 4, width: 96, background: C.accent }} />
              </div>
            </div>
            <div style={{ borderLeft: `4px solid ${C.accent}`, paddingLeft: "1rem", paddingTop: "0.5rem", paddingBottom: "0.5rem", marginBottom: "2rem" }}>
              <h2 style={{ fontSize: "clamp(2rem,5vw,3.5rem)", lineHeight: 1.5, fontFamily: "serif", fontWeight: 400 }}>想いをカタチに<br />笑顔をそばに</h2>
            </div>
            <div style={{ paddingLeft: "1rem", marginBottom: "2rem" }}>
              <p style={{ fontSize: "1.3rem", color: "#555", borderLeft: `2px solid ${C.primary}`, paddingLeft: "1rem", marginBottom: "1rem", fontFamily: "serif" }}>繋がりを大切に</p>
              <p style={{ color: "#555", lineHeight: 1.9 }}>伝統と革新が調和するデザインで、<br />お客様の想いを形にいたします。</p>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", paddingLeft: "1rem" }}>
              <button onClick={() => scrollTo("contact")}
                style={{ padding: "1rem 2rem", background: C.primary, color: "#fff", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem", letterSpacing: "0.12em", fontSize: "0.95rem", transition: "background 0.2s", boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
                onMouseEnter={e => e.currentTarget.style.background = C.deep}
                onMouseLeave={e => e.currentTarget.style.background = C.primary}
              ><span>ご相談はこちら</span><ArrowRight size={18} /></button>
              <button onClick={() => setPage("portfolio")}
                style={{ padding: "1rem 2rem", background: "transparent", color: C.primary, border: `2px solid ${C.primary}`, cursor: "pointer", letterSpacing: "0.12em", fontSize: "0.95rem", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.primary; }}
              >制作実績</button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "5rem 1.5rem", background: C.white, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(to right, transparent, ${C.accent}55, transparent)` }} />
        <div style={{ position: "absolute", top: 40, right: 40, width: 192, height: 192, color: C.primary, opacity: 0.08, pointerEvents: "none" }}><YagasuriBg /></div>
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <SectionHeading en="SERVICES" ja="事業内容" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "2rem" }}>
            {[
              { title: "意匠", sub: "ブランディング", desc: "企業の本質を見極め、唯一無二の価値を創出いたします。家紋から連なる日本の紋章文化を現代に昇華させ、永く愛されるブランドを築きます。" },
              { title: "図案", sub: "UI/UXデザイン",  desc: "使い手の心に寄り添う設計思想。茶道の「一期一会」の精神で、人とデジタルの調和を追求し、心地よい体験を創造します。" },
              { title: "装飾", sub: "グラフィックデザイン", desc: "伝統的な美意識と現代の技術を融合。印刷物からデジタルまで、日本らしい繊細さと品格を備えた表現をお届けします。" },
            ].map((s, i) => (
              <div key={i} style={{ background: C.bg, padding: "2rem", border: `2px solid ${C.border}`, position: "relative", overflow: "hidden", transition: "border-color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = C.accent}
                onMouseLeave={e => e.currentTarget.style.borderColor = C.border}
              >
                <div style={{ position: "absolute", bottom: 0, left: 0, width: 128, height: 128, color: C.primary, opacity: 0.05, pointerEvents: "none" }}><YagasuriBg /></div>
                <div style={{ marginBottom: "1.5rem" }}>
                  <div style={{ display: "inline-block", borderBottom: `2px solid ${C.accent}`, paddingBottom: "0.4rem", marginBottom: "0.5rem" }}>
                    <span style={{ fontSize: "1.8rem", fontFamily: "serif" }}>{s.title}</span>
                  </div>
                  <p style={{ fontSize: "0.8rem", color: C.textMuted, letterSpacing: "0.12em" }}>{s.sub}</p>
                </div>
                <p style={{ color: "#555", lineHeight: 1.9, fontSize: "0.95rem" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section id="works" style={{ padding: "5rem 1.5rem", background: C.bg, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(to right, transparent, ${C.accent}55, transparent)` }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <SectionHeading en="WORKS" ja="制作実績" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}>
            {PORTFOLIO_ITEMS.slice(0, 4).map((w) => (
              <div key={w.id}
                onMouseEnter={() => setHoveredWork(w.id)}
                onMouseLeave={() => setHoveredWork(null)}
                style={{ position: "relative", height: 280, overflow: "hidden", cursor: "pointer", border: `4px solid ${C.white}`, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
              >
                <div style={{ position: "absolute", inset: 0, background: w.grad, transition: "transform 0.35s ease", transform: hoveredWork === w.id ? "scale(1.05)" : "scale(1)" }} />
                <div style={{ position: "absolute", top: 0, right: 0, width: 160, height: 160, color: "#fff", opacity: 0.1 }}><YagasuriBg /></div>
                <div style={{ position: "absolute", top: 16, right: 16, width: 48, height: 48, border: "1px solid rgba(255,255,255,0.3)", transform: "rotate(45deg)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2rem", background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }}>
                  <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.85)", marginBottom: "0.4rem", letterSpacing: "0.15em" }}>{w.category}</p>
                  <h3 style={{ fontSize: "1.2rem", color: "#fff", fontFamily: "serif", fontWeight: 400 }}>{w.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <button onClick={() => setPage("portfolio")}
              style={{ padding: "1rem 2.5rem", background: "transparent", color: C.primary, border: `2px solid ${C.primary}`, cursor: "pointer", letterSpacing: "0.12em", fontSize: "0.95rem", transition: "all 0.2s", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              onMouseEnter={e => { e.currentTarget.style.background = C.primary; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.primary; }}
            >すべての実績を見る <ArrowRight size={16} /></button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "5rem 1.5rem", background: C.white, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(to right, transparent, ${C.accent}55, transparent)` }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <SectionHeading en="ABOUT US" ja="会社概要" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div style={{ borderLeft: `4px solid ${C.accent}`, paddingLeft: "1.5rem" }}>
              <h3 style={{ fontSize: "1.8rem", fontFamily: "serif", fontWeight: 400, lineHeight: 1.8, marginBottom: "1.5rem" }}>想いをカタチに、<br />笑顔をそばに、<br />繋がりを大切に</h3>
              {["私たちYOICHIは、「想いをカタチに」をモットーに、お客様一人ひとりの想いをデザインとしてカタチにしています。", "お客様との出会いは私たちにとって新たな物語の始まりです。それぞれのお客様のビジョンを理解し、共に創造する過程は私たちにとって大きなやりがいです。", "共に歩む中で築かれる信頼と絆は、私たちの大切な財産です。"].map((p, i) => (
                <p key={i} style={{ color: "#555", lineHeight: 2, marginBottom: "1rem", fontSize: "0.95rem" }}>{p}</p>
              ))}
              <div style={{ background: C.bg, padding: "1.5rem", borderLeft: `2px solid ${C.accent}`, marginTop: "1.5rem" }}>
                {[["会社名","YOICHI"],["設立","2026年"],["代表","横山 真一郎"],["副代表","住谷 永人"]].map(([k,v]) => (
                  <div key={k} style={{ display: "flex", gap: "1rem", marginBottom: "0.6rem", fontSize: "0.95rem" }}>
                    <span style={{ color: C.textMuted, minWidth: 80 }}>{k}</span><span>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: -16, left: -16, right: 0, bottom: 0, border: `2px solid ${C.accent}`, opacity: 0.2 }} />
              <div style={{ position: "relative", aspectRatio: "1", background: C.white, padding: "4rem", border: `2px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "100%", height: "100%", background: C.primary, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10rem" }}>
                  <span style={{ color: "#fff", fontFamily: "serif", lineHeight: 1 }}>Y</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SNS SECTION ── */}
      <section id="sns" style={{ padding: "5rem 1.5rem", background: C.bg, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(to right, transparent, ${C.accent}55, transparent)` }} />
        <div style={{ position: "absolute", inset: 0, color: C.primary, opacity: 0.05, pointerEvents: "none" }}><YagasuriBg /></div>
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <SectionHeading en="FOLLOW US" ja="SNS" />
          <p style={{ textAlign: "center", color: C.textMuted, marginBottom: "3rem", letterSpacing: "0.05em", lineHeight: 1.9 }}>
            日々の制作風景やデザインの想いを発信しています。<br />ぜひフォローしてください。
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "2rem", maxWidth: 760, margin: "0 auto" }}>
            {/* Instagram */}
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
              onMouseEnter={() => setHoveredSns("ig")}
              onMouseLeave={() => setHoveredSns(null)}
              style={{ textDecoration: "none", display: "block" }}
            >
              <div style={{ background: hoveredSns === "ig" ? "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)" : C.white, border: `2px solid ${hoveredSns === "ig" ? "transparent" : C.border}`, padding: "2.5rem 2rem", transition: "all 0.3s", position: "relative", overflow: "hidden", transform: hoveredSns === "ig" ? "translateY(-4px)" : "none", boxShadow: hoveredSns === "ig" ? "0 12px 32px rgba(131,58,180,0.25)" : "none" }}>
                <div style={{ position: "absolute", bottom: 0, right: 0, width: 120, height: 120, color: hoveredSns === "ig" ? "#fff" : C.primary, opacity: 0.08 }}><YagasuriBg /></div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: 52, height: 52, background: hoveredSns === "ig" ? "rgba(255,255,255,0.2)" : "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Instagram color="#fff" size={26} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "1.1rem", color: hoveredSns === "ig" ? "#fff" : C.dark, letterSpacing: "0.05em" }}>Instagram</div>
                    <div style={{ fontSize: "0.8rem", color: hoveredSns === "ig" ? "rgba(255,255,255,0.8)" : C.textMuted }}>@yoichi_design</div>
                  </div>
                </div>
                <p style={{ fontSize: "0.88rem", color: hoveredSns === "ig" ? "rgba(255,255,255,0.9)" : "#555", lineHeight: 1.8 }}>
                  制作の舞台裏や完成作品を毎日更新。和の美意識を大切にしたビジュアルをお届けします。
                </p>
                <div style={{ marginTop: "1.2rem", display: "flex", alignItems: "center", gap: "0.4rem", color: hoveredSns === "ig" ? "#fff" : C.accent, fontSize: "0.82rem", letterSpacing: "0.1em" }}>
                  フォローする <ExternalLink size={13} />
                </div>
              </div>
            </a>

            {/* X (Twitter) */}
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"
              onMouseEnter={() => setHoveredSns("x")}
              onMouseLeave={() => setHoveredSns(null)}
              style={{ textDecoration: "none", display: "block" }}
            >
              <div style={{ background: hoveredSns === "x" ? "#000" : C.white, border: `2px solid ${hoveredSns === "x" ? "#000" : C.border}`, padding: "2.5rem 2rem", transition: "all 0.3s", position: "relative", overflow: "hidden", transform: hoveredSns === "x" ? "translateY(-4px)" : "none", boxShadow: hoveredSns === "x" ? "0 12px 32px rgba(0,0,0,0.2)" : "none" }}>
                <div style={{ position: "absolute", bottom: 0, right: 0, width: 120, height: 120, color: hoveredSns === "x" ? "#fff" : C.primary, opacity: 0.08 }}><YagasuriBg /></div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: 52, height: 52, background: hoveredSns === "x" ? "rgba(255,255,255,0.15)" : "#000", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Twitter color="#fff" size={26} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "1.1rem", color: hoveredSns === "x" ? "#fff" : C.dark, letterSpacing: "0.05em" }}>X (Twitter)</div>
                    <div style={{ fontSize: "0.8rem", color: hoveredSns === "x" ? "rgba(255,255,255,0.6)" : C.textMuted }}>@yoichi_design</div>
                  </div>
                </div>
                <p style={{ fontSize: "0.88rem", color: hoveredSns === "x" ? "rgba(255,255,255,0.85)" : "#555", lineHeight: 1.8 }}>
                  デザインの考え方や業界の最新情報を発信。お気軽にリプライやDMもどうぞ。
                </p>
                <div style={{ marginTop: "1.2rem", display: "flex", alignItems: "center", gap: "0.4rem", color: hoveredSns === "x" ? "#fff" : C.accent, fontSize: "0.82rem", letterSpacing: "0.1em" }}>
                  フォローする <ExternalLink size={13} />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "5rem 1.5rem", background: C.white, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(to right, transparent, ${C.accent}55, transparent)` }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <SectionHeading en="CONTACT" ja="お問い合わせ" />
          <p style={{ textAlign: "center", color: "#555", maxWidth: 600, margin: "0 auto 3rem", lineHeight: 1.9 }}>ご相談、お見積もりなど、お気軽にお問い合わせくださいませ</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <ContactCard icon={Mail} title="電子郵便">
                <a href="mailto:info@yoichi.co.jp" style={{ color: "#555", textDecoration: "none" }}>info@yoichi.co.jp</a>
              </ContactCard>
              <ContactCard icon={Phone} title="電話番号">
                <a href="tel:+81-3-1234-5678" style={{ color: "#555", textDecoration: "none" }}>〇三（一二三四）五六七八</a>
                <p style={{ fontSize: "0.85rem", color: C.textMuted, marginTop: 4 }}>営業時間：平日 9:00 - 18:00</p>
              </ContactCard>
              <ContactCard icon={MapPin} title="所在地">
                <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.95rem" }}>〒150-0001<br />東京都渋谷区神宮前一丁目二番三号<br />和デザインビルディング 五階</p>
              </ContactCard>
            </div>
            <div style={{ background: C.bg, padding: "2rem", border: `2px solid ${C.border}`, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", bottom: -40, right: -40, width: 192, height: 192, color: C.primary, opacity: 0.05 }}><YagasuriBg /></div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", position: "relative" }}>
                {[{label:"お名前",type:"text",ph:"山田 太郎"},{label:"メールアドレス",type:"email",ph:"example@email.com"}].map(f => (
                  <div key={f.label}>
                    <label style={{ display: "block", marginBottom: "0.5rem", letterSpacing: "0.1em", fontSize: "0.95rem" }}>{f.label}</label>
                    <input type={f.type} placeholder={f.ph}
                      style={{ width: "100%", padding: "0.75rem 1rem", border: `2px solid ${C.border}`, background: C.white, fontSize: "0.95rem", outline: "none", boxSizing: "border-box", transition: "border-color 0.2s" }}
                      onFocus={e => e.target.style.borderColor = C.accent}
                      onBlur={e => e.target.style.borderColor = C.border}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", letterSpacing: "0.1em", fontSize: "0.95rem" }}>お問い合わせ内容</label>
                  <textarea rows={5} placeholder="ご相談内容をご記入ください"
                    style={{ width: "100%", padding: "0.75rem 1rem", border: `2px solid ${C.border}`, background: C.white, fontSize: "0.95rem", outline: "none", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box", transition: "border-color 0.2s" }}
                    onFocus={e => e.target.style.borderColor = C.accent}
                    onBlur={e => e.target.style.borderColor = C.border}
                  />
                </div>
                <button style={{ padding: "1rem", background: C.primary, color: "#fff", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", letterSpacing: "0.12em", fontSize: "0.95rem", transition: "background 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.background = C.deep}
                  onMouseLeave={e => e.currentTarget.style.background = C.primary}
                ><span>送信する</span><ArrowRight size={18} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: C.dark, color: C.bg, padding: "3rem 1.5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(to right, transparent, ${C.accent}, transparent)` }} />
        <div style={{ position: "absolute", inset: 0, color: C.primary, opacity: 0.1 }}><YagasuriBg /></div>
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ width: 56, height: 56, background: C.primary, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem" }}>
              <span style={{ color: "#fff", fontFamily: "serif" }}>Y</span>
            </div>
            <span style={{ fontSize: "1.8rem", letterSpacing: "0.2em", fontWeight: 700 }}>YOICHI</span>
          </div>
          <p style={{ fontSize: "0.85rem", color: "#9ca3af", letterSpacing: "0.05em" }}>想いをカタチに、笑顔をそばに、繋がりを大切に</p>
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
            {[...navLinks, { label: "Portfolio", id: "portfolio" }, { label: "お問い合わせ", id: "contact" }].map(l => (
              l.id === "portfolio"
                ? <button key="portfolio" onClick={() => setPage("portfolio")} style={{ background: "none", border: "none", color: "#9ca3af", cursor: "pointer", fontSize: "0.85rem", letterSpacing: "0.12em", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = C.accent} onMouseLeave={e => e.target.style.color = "#9ca3af"}>Portfolio</button>
                : <button key={l.id} onClick={() => scrollTo(l.id)} style={{ background: "none", border: "none", color: "#9ca3af", cursor: "pointer", fontSize: "0.85rem", letterSpacing: "0.12em", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = C.accent} onMouseLeave={e => e.target.style.color = "#9ca3af"}>{l.label}</button>
            ))}
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ width: 36, height: 36, background: "rgba(255,255,255,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s" }} onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.2)"} onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}><Instagram color="#fff" size={16} /></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{ width: 36, height: 36, background: "rgba(255,255,255,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s" }} onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.2)"} onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}><Twitter color="#fff" size={16} /></a>
          </div>
          <div style={{ width: 64, height: 1, background: C.accent, opacity: 0.4 }} />
          <p style={{ fontSize: "0.8rem", color: "#6b7280", letterSpacing: "0.12em" }}>© 令和八年 株式会社YOICHI</p>
        </div>
      </footer>

      <style>{`html{scroll-behavior:smooth;}*{box-sizing:border-box;margin:0;padding:0;}::placeholder{color:#aaa;}`}</style>
    </div>
  );
}
