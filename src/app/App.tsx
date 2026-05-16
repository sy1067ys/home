import { Menu, X, ArrowRight, Mail, Phone, MapPin, Instagram, Twitter, ExternalLink, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import YagasuriBg from './components/YagasuriBg';
import yoichiLogo from '../assets/yoichi__________-1.png';

/* ── ポートフォリオデータ ── */
const PORTFOLIO_ITEMS = [
  { id: 1, title: '老舗和菓子店のブランド刷新',   category: '意匠', tag: 'Branding', color: 'from-[#8b4f47] to-[#6d3d37]', desc: '創業100年の和菓子店のロゴ・パッケージを全面リニューアル。伝統を守りながら現代的な感覚を取り入れたデザインに。' },
  { id: 2, title: '旅館予約サイトの体験設計',     category: '図案', tag: 'UI/UX',    color: 'from-[#5e8c6a] to-[#4a6e56]', desc: '老舗旅館のオンライン予約システムをゼロから設計。ユーザー離脱率を40%改善。' },
  { id: 3, title: '日本酒メーカーのVI開発',       category: '意匠', tag: 'Branding', color: 'from-[#c4504a] to-[#9d3f36]', desc: '蔵元の世界観をビジュアルに落とし込んだVI。海外展開を見据えたバイリンガル対応。' },
  { id: 4, title: '伝統工芸ECの利用体験改善',     category: '図案', tag: 'UI/UX',    color: 'from-[#6b5d4f] to-[#554a3f]', desc: '職人の技を伝えるECサイトのUX改善。購入率が2.3倍に向上。' },
  { id: 5, title: '茶道具メーカーのカタログ',     category: '装飾', tag: 'Print',    color: 'from-[#4a6e6b] to-[#3a5856]', desc: '和の美意識を活かしたプロダクトカタログ。余白と素材感を大切にしたデザイン。' },
  { id: 6, title: '神社の御朱印帳デザイン',       category: '装飾', tag: 'Print',    color: 'from-[#7a5c3a] to-[#5e4528]', desc: '地域の神社向けに特別デザインした御朱印帳。伝統文様を現代的にアレンジ。' },
];

/* ── Portfolioページ ── */
function PortfolioPage({ onBack }) {
  const [active, setActive] = useState('すべて');
  const filters = ['すべて', '意匠', '図案', '装飾'];
  const filtered = active === 'すべて' ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter(p => p.category === active);

  return (
    <div className="min-h-screen bg-[#f5f2ed] relative">
      <div className="fixed inset-0 pointer-events-none opacity-40 text-[#8b4f47]">
        <YagasuriBg className="w-full h-full" />
      </div>

      {/* ナビ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f2ed]/95 backdrop-blur-sm border-b-2 border-[#8b4f47]/20">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4 relative">
          <button onClick={onBack} className="flex items-center gap-2 text-[#8b4f47] hover:text-[#c4504a] transition-colors tracking-wider text-sm">
            <ArrowLeft size={16} /> ホームに戻る
          </button>
          <div className="w-px h-5 bg-[#d4c5b0]" />
          <div className="flex items-center gap-3">
            <img src={yoichiLogo} alt="YOICHI" className="h-20 w-20" />
            <span className="text-xl tracking-widest font-bold text-[#3a3230]">YOICHI</span>
          </div>
          <span className="text-[#8b4f47] text-sm tracking-widest">/ PORTFOLIO</span>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-6 pt-36 pb-20 relative z-10">
        {/* 見出し */}
        <div className="text-center mb-12 relative">
          <p className="text-sm text-gray-600 mb-2 tracking-widest">PORTFOLIO</p>
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'serif' }}>制作実績</h2>
          <div className="w-16 h-1 bg-[#c4504a] mx-auto"></div>
        </div>

        {/* フィルター */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)}
              className={`px-5 py-2 border-2 text-sm tracking-wider transition-all ${active === f ? 'border-[#c4504a] bg-[#c4504a] text-white' : 'border-[#d4c5b0] text-[#3a3230] hover:border-[#c4504a]'}`}
              style={{ fontFamily: 'serif' }}
            >{f}</button>
          ))}
        </div>

        {/* グリッド */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(p => (
            <div key={p.id} className="bg-white border-2 border-[#d4c5b0] hover:border-[#c4504a] transition-all group overflow-hidden hover:-translate-y-1 hover:shadow-lg">
              <div className={`h-48 bg-gradient-to-br ${p.color} relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-40 h-40 text-white opacity-10">
                  <YagasuriBg className="w-full h-full" />
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 border border-white/30 rotate-45" />
                <div className="absolute bottom-3 left-4">
                  <span className="bg-white/20 text-white text-xs px-2 py-1 tracking-wider">{p.tag}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500 tracking-widest mb-2">{p.category}</p>
                <h3 className="text-lg mb-3 leading-relaxed" style={{ fontFamily: 'serif' }}>{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-[#c4504a] text-xs tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={12} /> 詳細を見る
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-[#3a3230] text-[#f5f2ed] py-8 relative overflow-hidden">
        <div className="absolute inset-0 text-[#8b4f47] opacity-10"><YagasuriBg className="w-full h-full" /></div>
        <p className="text-center text-sm text-gray-400 tracking-wider relative">© 令和八年 株式会社YOICHI</p>
      </footer>
    </div>
  );
}

/* ── メインホームページ ── */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [page, setPage] = useState('home');

  if (page === 'portfolio') return <PortfolioPage onBack={() => setPage('home')} />;

  return (
    <div className="min-h-screen bg-[#f5f2ed] relative">
      <div className="fixed inset-0 pointer-events-none opacity-40 text-[#8b4f47]">
        <YagasuriBg className="w-full h-full" />
      </div>

      {/* ── HEADER ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f2ed]/95 backdrop-blur-sm border-b-2 border-[#8b4f47]/20">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
          <a href="#" className="flex items-center gap-4">
            <img src={yoichiLogo} alt="YOICHI" className="h-20 w-20" />
            <span className="text-2xl tracking-widest font-bold text-[#3a3230]">YOICHI</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="hover:text-[#c4504a] transition-colors tracking-wider">サービス</a>
            <a href="#works" className="hover:text-[#c4504a] transition-colors tracking-wider">実績</a>
            <a href="#about" className="hover:text-[#c4504a] transition-colors tracking-wider">会社概要</a>
            <a href="#sns" className="hover:text-[#c4504a] transition-colors tracking-wider">SNS</a>
            <button onClick={() => setPage('portfolio')} className="hover:text-[#c4504a] transition-colors tracking-wider bg-transparent border-none cursor-pointer text-base">
              Portfolio
            </button>
            <a href="#contact" className="px-6 py-2 bg-[#8b4f47] text-white hover:bg-[#6d3d37] transition-colors tracking-wider">
              お問い合わせ
            </a>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {menuOpen && (
          <div className="md:hidden bg-[#f5f2ed] border-t border-[#d4c5b0] px-6 py-4 relative">
            <div className="flex flex-col gap-4">
              <a href="#services" className="py-2 hover:text-[#c4504a] transition-colors tracking-wider" onClick={() => setMenuOpen(false)}>サービス</a>
              <a href="#works" className="py-2 hover:text-[#c4504a] transition-colors tracking-wider" onClick={() => setMenuOpen(false)}>実績</a>
              <a href="#about" className="py-2 hover:text-[#c4504a] transition-colors tracking-wider" onClick={() => setMenuOpen(false)}>会社概要</a>
              <a href="#sns" className="py-2 hover:text-[#c4504a] transition-colors tracking-wider" onClick={() => setMenuOpen(false)}>SNS</a>
              <button onClick={() => { setPage('portfolio'); setMenuOpen(false); }} className="py-2 text-left hover:text-[#c4504a] transition-colors tracking-wider bg-transparent border-none cursor-pointer text-base">Portfolio</button>
              <a href="#contact" className="py-2 text-[#8b4f47] tracking-wider" onClick={() => setMenuOpen(false)}>お問い合わせ</a>
            </div>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 text-[#c4504a] opacity-20">
          <YagasuriBg className="w-full h-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <div className="mb-12 flex items-center gap-6">
              <img src={yoichiLogo} alt="YOICHI Logo" className="w-48 h-48 md:w-64 md:h-64" />
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl md:text-5xl tracking-widest font-bold text-[#3a3230]">YOICHI</h1>
                <div className="h-1 w-24 bg-[#c4504a]"></div>
              </div>
            </div>

            <div className="mb-8 relative">
              <div className="inline-block border-l-4 border-[#c4504a] pl-4 relative bg-[#f5f2ed]/80 backdrop-blur-sm py-2">
                <h2 className="text-4xl md:text-6xl leading-tight" style={{ fontFamily: 'serif' }}>
                  想いをカタチに<br />笑顔をそばに
                </h2>
              </div>
            </div>
            <div className="pl-4 mb-8 space-y-4">
              <p className="text-2xl text-gray-700 leading-relaxed border-l-2 border-[#8b4f47] pl-4" style={{ fontFamily: 'serif' }}>繋がりを大切に</p>
              <p className="text-lg text-gray-600 leading-relaxed">伝統と革新が調和するデザインで、<br />お客様の想いを形にいたします。</p>
            </div>
            <div className="flex flex-wrap gap-4 pl-4">
              <a href="#contact" className="px-8 py-4 bg-[#8b4f47] text-white hover:bg-[#6d3d37] transition-colors flex items-center gap-2 tracking-wider relative overflow-hidden group shadow-lg">
                <div className="absolute inset-0 text-white opacity-0 group-hover:opacity-20 transition-opacity"><YagasuriBg className="w-full h-full" /></div>
                <span className="relative">ご相談はこちら</span>
                <ArrowRight size={20} className="relative" />
              </a>
              <button onClick={() => setPage('portfolio')} className="px-8 py-4 border-2 border-[#8b4f47] text-[#8b4f47] hover:bg-[#8b4f47] hover:text-white transition-colors tracking-wider relative overflow-hidden group bg-transparent cursor-pointer text-base">
                <div className="absolute inset-0 text-[#8b4f47] opacity-0 group-hover:opacity-20 transition-opacity"><YagasuriBg className="w-full h-full" /></div>
                <span className="relative">制作実績</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c4504a] to-transparent opacity-30"></div>
        <div className="absolute top-10 right-10 w-48 h-48 text-[#8b4f47] opacity-10"><YagasuriBg className="w-full h-full" /></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 text-[#c4504a] opacity-10"><YagasuriBg className="w-full h-full" /></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16 relative">
            <p className="text-sm text-gray-600 mb-2 tracking-widest">SERVICES</p>
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'serif' }}>事業内容</h2>
            <div className="w-16 h-1 bg-[#c4504a] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '意匠', subtitle: 'ブランディング', description: '企業の本質を見極め、唯一無二の価値を創出いたします。家紋から連なる日本の紋章文化を現代に昇華させ、永く愛されるブランドを築きます。' },
              { title: '図案', subtitle: 'UI/UXデザイン', description: '使い手の心に寄り添う設計思想。茶道の「一期一会」の精神で、人とデジタルの調和を追求し、心地よい体験を創造します。' },
              { title: '装飾', subtitle: 'グラフィックデザイン', description: '伝統的な美意識と現代の技術を融合。印刷物からデジタルまで、日本らしい繊細さと品格を備えた表現をお届けします。' },
            ].map((s, i) => (
              <div key={i} className="bg-[#f5f2ed] p-8 border-2 border-[#d4c5b0] hover:border-[#c4504a] transition-all group relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-32 h-32 text-[#8b4f47] opacity-5 group-hover:opacity-10 transition-opacity"><YagasuriBg className="w-full h-full" /></div>
                <div className="relative">
                  <div className="mb-6">
                    <div className="inline-block border-b-2 border-[#c4504a] pb-2">
                      <span className="text-3xl" style={{ fontFamily: 'serif' }}>{s.title}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2 tracking-wider">{s.subtitle}</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORKS ── */}
      <section id="works" className="py-20 bg-[#f5f2ed] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c4504a] to-transparent opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-600 mb-2 tracking-widest">WORKS</p>
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'serif' }}>制作実績</h2>
            <div className="w-16 h-1 bg-[#c4504a] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PORTFOLIO_ITEMS.slice(0, 4).map((work) => (
              <div key={work.id} className="group relative h-80 overflow-hidden cursor-pointer border-4 border-white shadow-lg">
                <div className={`absolute inset-0 bg-gradient-to-br ${work.color} group-hover:scale-105 transition-transform duration-300`}></div>
                <div className="absolute top-0 right-0 w-40 h-40 text-white opacity-10 group-hover:opacity-20 transition-opacity"><YagasuriBg className="w-full h-full" /></div>
                <div className="absolute inset-0 flex items-end">
                  <div className="w-full p-8 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-sm mb-2 opacity-90 tracking-wider text-white">{work.category}</p>
                    <h3 className="text-2xl text-white" style={{ fontFamily: 'serif' }}>{work.title}</h3>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 border border-white/30 rotate-45"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button onClick={() => setPage('portfolio')}
              className="px-8 py-4 border-2 border-[#8b4f47] text-[#8b4f47] hover:bg-[#8b4f47] hover:text-white transition-colors tracking-wider inline-flex items-center gap-2 bg-transparent cursor-pointer text-base"
            >
              すべての実績を見る <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c4504a] to-transparent opacity-30"></div>
        <div className="absolute top-1/3 left-0 w-48 h-96 text-[#8b4f47] opacity-10"><YagasuriBg className="w-full h-full" /></div>
        <div className="absolute top-1/4 right-0 w-48 h-96 text-[#c4504a] opacity-10"><YagasuriBg className="w-full h-full" /></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-600 mb-2 tracking-widest">ABOUT US</p>
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'serif' }}>会社概要</h2>
            <div className="w-16 h-1 bg-[#c4504a] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="border-l-4 border-[#c4504a] pl-6">
                <h3 className="text-3xl mb-6" style={{ fontFamily: 'serif' }}>
                  想いをカタチに、<br />笑顔をそばに、<br />繋がりを大切に
                </h3>
                <div className="space-y-6 mb-8">
                  <p className="text-gray-700 leading-relaxed">私たちYOICHIは、「想いをカタチに」をモットーに、お客様一人ひとりの想いをデザインとしてカタチにしています。私たちの提供する商品・サービスは、その一つ一つに心を込めお客様と共に作り上げる一つの芸術作品です。</p>
                  <p className="text-gray-700 leading-relaxed">お客様との出会いは私たちにとって新たな物語の始まりです。それぞれのお客様のビジョンを理解し、共に創造する過程は私たちにとって大きなやりがいであり、誇りです。お客様の夢を実現するために、私たちは常に全力を尽くします。</p>
                  <p className="text-gray-700 leading-relaxed">共に歩む中で築かれる信頼と絆は、私たちの大切な財産です。これからも、お客様と共に新しい価値観を生み出し感動を共有できる瞬間を創り続けていきます。</p>
                </div>
                <div className="space-y-3 bg-[#f5f2ed] p-6 border-l-2 border-[#c4504a]">
                  <div className="flex gap-4"><span className="text-gray-600 min-w-24">会社名</span><span>YOICHI</span></div>
                  <div className="flex gap-4"><span className="text-gray-600 min-w-24">設立</span><span>2026年</span></div>
                  <div className="flex gap-4"><span className="text-gray-600 min-w-24">代表</span><span>横山 真一郎</span></div>
                  <div className="flex gap-4"><span className="text-gray-600 min-w-24">副代表</span><span>住谷 永人</span></div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#c4504a] opacity-20"></div>
                <div className="relative aspect-square bg-white p-16 border-2 border-[#d4c5b0] flex items-center justify-center">
                  <img src={yoichiLogo} alt="YOICHI Logo" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SNS ── */}
      <section id="sns" className="py-20 bg-[#f5f2ed] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c4504a] to-transparent opacity-30"></div>
        <div className="absolute inset-0 text-[#8b4f47] opacity-5 pointer-events-none"><YagasuriBg className="w-full h-full" /></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-600 mb-2 tracking-widest">FOLLOW US</p>
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'serif' }}>SNS</h2>
            <div className="w-16 h-1 bg-[#c4504a] mx-auto mb-6"></div>
            <p className="text-gray-600 leading-relaxed">日々の制作風景やデザインの想いを発信しています。<br />ぜひフォローしてください。</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Instagram */}
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
              className="block bg-white border-2 border-[#d4c5b0] p-8 relative overflow-hidden group hover:-translate-y-1 hover:shadow-lg transition-all"
              style={{ textDecoration: 'none' }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)' }} />
              <div className="absolute bottom-0 right-0 w-24 h-24 text-[#8b4f47] opacity-5"><YagasuriBg className="w-full h-full" /></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)' }}>
                    <Instagram color="white" size={28} />
                  </div>
                  <div>
                    <div className="font-bold text-lg tracking-wide text-[#3a3230] group-hover:text-white transition-colors">Instagram</div>
                    <div className="text-sm text-gray-500 group-hover:text-white/80 transition-colors">@yoichi_design</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-white/90 transition-colors">制作の舞台裏や完成作品を毎日更新。和の美意識を大切にしたビジュアルをお届けします。</p>
                <div className="mt-4 flex items-center gap-1 text-[#c4504a] group-hover:text-white text-sm tracking-wider transition-colors">
                  フォローする <ExternalLink size={13} />
                </div>
              </div>
            </a>

            {/* X (Twitter) */}
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"
              className="block bg-white border-2 border-[#d4c5b0] p-8 relative overflow-hidden group hover:-translate-y-1 hover:shadow-lg transition-all hover:bg-black hover:border-black"
              style={{ textDecoration: 'none' }}
            >
              <div className="absolute bottom-0 right-0 w-24 h-24 text-[#8b4f47] opacity-5"><YagasuriBg className="w-full h-full" /></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <Twitter color="white" size={28} />
                  </div>
                  <div>
                    <div className="font-bold text-lg tracking-wide text-[#3a3230] group-hover:text-white transition-colors">X (Twitter)</div>
                    <div className="text-sm text-gray-500 group-hover:text-white/60 transition-colors">@yoichi_design</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-white/85 transition-colors">デザインの考え方や業界の最新情報を発信。お気軽にリプライやDMもどうぞ。</p>
                <div className="mt-4 flex items-center gap-1 text-[#c4504a] group-hover:text-white text-sm tracking-wider transition-colors">
                  フォローする <ExternalLink size={13} />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c4504a] to-transparent opacity-30"></div>
        <div className="absolute top-20 left-1/2 w-96 h-96 text-[#8b4f47] opacity-10 -translate-x-1/2"><YagasuriBg className="w-full h-full" /></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-600 mb-2 tracking-widest">CONTACT</p>
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'serif' }}>お問い合わせ</h2>
            <div className="w-16 h-1 bg-[#c4504a] mx-auto mb-4"></div>
            <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">ご相談、お見積もりなど、お気軽にお問い合わせくださいませ</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                { icon: Mail, title: '電子郵便', content: <a href="mailto:info@yoichi.co.jp" className="text-gray-700 hover:text-[#c4504a] transition-colors">info@yoichi.co.jp</a> },
                { icon: Phone, title: '電話番号', content: <><a href="tel:+81-3-1234-5678" className="text-gray-700 hover:text-[#c4504a] transition-colors">〇三（一二三四）五六七八</a><p className="text-sm text-gray-600 mt-1">営業時間：平日 9:00 - 18:00</p></> },
                { icon: MapPin, title: '所在地', content: <p className="text-gray-700">〒150-0001<br />東京都渋谷区神宮前一丁目二番三号<br />和デザインビルディング 五階</p> },
              ].map(({ icon: Icon, title, content }) => (
                <div key={title} className="flex items-start gap-4 bg-[#f5f2ed] p-6 border border-[#d4c5b0] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 text-[#8b4f47] opacity-5 group-hover:opacity-10 transition-opacity"><YagasuriBg className="w-full h-full" /></div>
                  <div className="w-12 h-12 bg-[#8b4f47] flex items-center justify-center flex-shrink-0"><Icon className="text-white" size={20} /></div>
                  <div><h3 className="text-xl mb-2 tracking-wider">{title}</h3>{content}</div>
                </div>
              ))}
            </div>

            <form className="space-y-6 bg-[#f5f2ed] p-8 border-2 border-[#d4c5b0] relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-48 h-48 text-[#8b4f47] opacity-5"><YagasuriBg className="w-full h-full" /></div>
              <div className="relative">
                <label className="block mb-2 tracking-wider">お名前</label>
                <input type="text" className="w-full px-4 py-3 border-2 border-[#d4c5b0] bg-white focus:outline-none focus:border-[#c4504a] transition-colors" placeholder="山田 太郎" />
              </div>
              <div className="relative">
                <label className="block mb-2 tracking-wider">メールアドレス</label>
                <input type="email" className="w-full px-4 py-3 border-2 border-[#d4c5b0] bg-white focus:outline-none focus:border-[#c4504a] transition-colors" placeholder="example@email.com" />
              </div>
              <div className="relative">
                <label className="block mb-2 tracking-wider">お問い合わせ内容</label>
                <textarea rows={5} className="w-full px-4 py-3 border-2 border-[#d4c5b0] bg-white focus:outline-none focus:border-[#c4504a] transition-colors" placeholder="ご相談内容をご記入ください" />
              </div>
              <button type="submit" className="w-full px-8 py-4 bg-[#8b4f47] text-white hover:bg-[#6d3d37] transition-colors flex items-center justify-center gap-2 tracking-wider relative overflow-hidden group">
                <div className="absolute inset-0 text-white opacity-0 group-hover:opacity-20 transition-opacity"><YagasuriBg className="w-full h-full" /></div>
                <span className="relative">送信する</span>
                <ArrowRight size={20} className="relative" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#3a3230] text-[#f5f2ed] py-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c4504a] to-transparent"></div>
        <div className="absolute inset-0 text-[#8b4f47] opacity-10"><YagasuriBg className="w-full h-full" /></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <img src={yoichiLogo} alt="YOICHI Logo" className="h-16 w-16" />
              <div className="text-2xl tracking-widest font-bold">YOICHI</div>
            </div>
            <p className="text-center text-sm text-gray-400 max-w-md leading-relaxed">想いをカタチに、笑顔をそばに、繋がりを大切に</p>
            <div className="flex gap-8 text-sm flex-wrap justify-center">
              <a href="#services" className="hover:text-[#c4504a] transition-colors tracking-wider">サービス</a>
              <a href="#works" className="hover:text-[#c4504a] transition-colors tracking-wider">実績</a>
              <a href="#about" className="hover:text-[#c4504a] transition-colors tracking-wider">会社概要</a>
              <a href="#sns" className="hover:text-[#c4504a] transition-colors tracking-wider">SNS</a>
              <button onClick={() => setPage('portfolio')} className="hover:text-[#c4504a] transition-colors tracking-wider bg-transparent border-none text-[#f5f2ed] cursor-pointer text-sm">Portfolio</button>
              <a href="#contact" className="hover:text-[#c4504a] transition-colors tracking-wider">お問い合わせ</a>
            </div>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"><Instagram size={16} /></a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"><Twitter size={16} /></a>
            </div>
            <div className="w-16 h-px bg-[#c4504a] opacity-30"></div>
            <p className="text-gray-400 text-sm tracking-wider">© 令和八年 株式会社YOICHI</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
