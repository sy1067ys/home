import { Menu, X, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import YagasuriBg from './components/YagasuriBg';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f2ed] relative">
      <div className="fixed inset-0 pointer-events-none opacity-40 text-[#8b4f47]">
        <YagasuriBg className="w-full h-full" />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f2ed]/95 backdrop-blur-sm border-b-2 border-[#8b4f47]/20">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
          <a href="#" className="flex items-center gap-4">
            <img src="../imports/yoichi__________-1.png" alt="YOICHI" className="h-14 w-14" />
            <div className="flex flex-col">
              <span className="text-2xl tracking-widest font-bold text-[#3a3230]">YOICHI</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="hover:text-[#c4504a] transition-colors tracking-wider">サービス</a>
            <a href="#works" className="hover:text-[#c4504a] transition-colors tracking-wider">実績</a>
            <a href="#about" className="hover:text-[#c4504a] transition-colors tracking-wider">会社概要</a>
            <a href="#contact" className="px-6 py-2 bg-[#8b4f47] text-white hover:bg-[#6d3d37] transition-colors tracking-wider">
              お問い合わせ
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {menuOpen && (
          <div className="md:hidden bg-[#f5f2ed] border-t border-[#d4c5b0] px-6 py-4 relative">
            <div className="flex flex-col gap-4">
              <a href="#services" className="py-2 hover:text-[#c4504a] transition-colors tracking-wider" onClick={() => setMenuOpen(false)}>サービス</a>
              <a href="#works" className="py-2 hover:text-[#c4504a] transition-colors tracking-wider" onClick={() => setMenuOpen(false)}>実績</a>
              <a href="#about" className="py-2 hover:text-[#c4504a] transition-colors tracking-wider" onClick={() => setMenuOpen(false)}>会社概要</a>
              <a href="#contact" className="py-2 text-[#8b4f47] tracking-wider" onClick={() => setMenuOpen(false)}>お問い合わせ</a>
            </div>
          </div>
        )}
      </header>

      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/5 h-full opacity-30">
          <img
            src="../imports/________.png"
            alt="和柄"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 opacity-20">
          <img
            src="../imports/________.png"
            alt="和柄"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-1/4 left-1/4 w-64 h-64 text-[#c4504a] opacity-20">
          <YagasuriBg className="w-full h-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <div className="mb-12 flex items-center gap-6">
              <img src="../imports/yoichi__________-1.png" alt="YOICHI Logo" className="w-32 h-32 md:w-40 md:h-40" />
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl md:text-5xl tracking-widest font-bold text-[#3a3230]">YOICHI</h1>
                <div className="h-1 w-24 bg-[#c4504a]"></div>
              </div>
            </div>

            <div className="mb-8 relative">
              <div className="absolute -left-8 -top-8 w-24 h-24 text-[#c4504a] opacity-20">
                <YagasuriBg className="w-full h-full" />
              </div>
              <div className="inline-block border-l-4 border-[#c4504a] pl-4 relative bg-[#f5f2ed]/80 backdrop-blur-sm py-2">
                <h2 className="text-4xl md:text-6xl leading-tight" style={{ fontFamily: 'serif' }}>
                  想いをカタチに<br />笑顔をそばに
                </h2>
              </div>
            </div>
            <div className="pl-4 mb-8 space-y-4">
              <p className="text-2xl text-gray-700 leading-relaxed border-l-2 border-[#8b4f47] pl-4" style={{ fontFamily: 'serif' }}>
                繋がりを大切に
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                伝統と革新が調和するデザインで、<br />
                お客様の想いを形にいたします。
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pl-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-[#8b4f47] text-white hover:bg-[#6d3d37] transition-colors flex items-center gap-2 tracking-wider relative overflow-hidden group shadow-lg"
              >
                <div className="absolute inset-0 text-white opacity-0 group-hover:opacity-20 transition-opacity">
                  <YagasuriBg className="w-full h-full" />
                </div>
                <span className="relative">ご相談はこちら</span>
                <ArrowRight size={20} className="relative" />
              </a>
              <a
                href="#works"
                className="px-8 py-4 border-2 border-[#8b4f47] text-[#8b4f47] hover:bg-[#8b4f47] hover:text-white transition-colors tracking-wider relative overflow-hidden group"
              >
                <div className="absolute inset-0 text-[#8b4f47] opacity-0 group-hover:opacity-20 transition-opacity">
                  <YagasuriBg className="w-full h-full" />
                </div>
                <span className="relative">制作実績</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c4504a] to-transparent opacity-30"></div>

        <div className="absolute top-10 right-10 w-48 h-48 text-[#8b4f47] opacity-10">
          <YagasuriBg className="w-full h-full" />
        </div>

        <div className="absolute bottom-20 left-10 w-32 h-32 text-[#c4504a] opacity-10">
          <YagasuriBg className="w-full h-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16 relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-32 h-32 text-[#c4504a] opacity-10">
              <YagasuriBg className="w-full h-full" />
            </div>
            <p className="text-sm text-gray-600 mb-2 tracking-widest relative">SERVICES</p>
            <h2 className="text-4xl md:text-5xl mb-4 relative" style={{ fontFamily: 'serif' }}>事業内容</h2>
            <div className="w-16 h-1 bg-[#c4504a] mx-auto relative"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '意匠',
                subtitle: 'ブランディング',
                description: '企業の本質を見極め、唯一無二の価値を創出いたします。家紋から連なる日本の紋章文化を現代に昇華させ、永く愛されるブランドを築きます。'
              },
              {
                title: '図案',
                subtitle: 'UI/UXデザイン',
                description: '使い手の心に寄り添う設計思想。茶道の「一期一会」の精神で、人とデジタルの調和を追求し、心地よい体験を創造します。'
              },
              {
                title: '装飾',
                subtitle: 'グラフィックデザイン',
                description: '伝統的な美意識と現代の技術を融合。印刷物からデジタルまで、日本らしい繊細さと品格を備えた表現をお届けします。'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-[#f5f2ed] p-8 border-2 border-[#d4c5b0] hover:border-[#c4504a] transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity">
                  <img src="../imports/________.png" alt="pattern" className="w-full h-full object-cover" />
                </div>

                <div className="absolute bottom-0 left-0 w-32 h-32 text-[#8b4f47] opacity-5 group-hover:opacity-10 transition-opacity">
                  <YagasuriBg className="w-full h-full" />
                </div>

                <div className="relative">
                  <div className="mb-6">
                    <div className="inline-block border-b-2 border-[#c4504a] pb-2">
                      <span className="text-3xl" style={{ fontFamily: 'serif' }}>{service.title}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2 tracking-wider">{service.subtitle}</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="works" className="py-20 bg-[#f5f2ed] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c4504a] to-transparent opacity-30"></div>

        <div className="absolute -top-10 -left-10 w-64 h-64 text-[#8b4f47] opacity-10 rotate-45">
          <YagasuriBg className="w-full h-full" />
        </div>

        <div className="absolute -bottom-10 -right-10 w-64 h-64 text-[#c4504a] opacity-10 -rotate-45">
          <YagasuriBg className="w-full h-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16 relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-32 h-32 text-[#c4504a] opacity-10">
              <YagasuriBg className="w-full h-full" />
            </div>
            <p className="text-sm text-gray-600 mb-2 tracking-widest relative">WORKS</p>
            <h2 className="text-4xl md:text-5xl mb-4 relative" style={{ fontFamily: 'serif' }}>制作実績</h2>
            <div className="w-16 h-1 bg-[#c4504a] mx-auto relative"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: '老舗和菓子店のブランド刷新', category: '意匠', color: 'from-[#8b4f47] to-[#6d3d37]' },
              { title: '旅館予約サイトの体験設計', category: '図案', color: 'from-[#5e8c6a] to-[#4a6e56]' },
              { title: '日本酒メーカーのVI開発', category: '意匠', color: 'from-[#c4504a] to-[#9d3f36]' },
              { title: '伝統工芸ECの利用体験改善', category: '図案', color: 'from-[#6b5d4f] to-[#554a3f]' }
            ].map((work, index) => (
              <div
                key={index}
                className="group relative h-80 overflow-hidden cursor-pointer border-4 border-white shadow-lg"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${work.color} group-hover:scale-105 transition-transform duration-300`}></div>

                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <img src="../imports/________.png" alt="pattern" className="w-full h-full object-cover" />
                </div>

                <div className="absolute top-0 right-0 w-40 h-40 text-white opacity-10 group-hover:opacity-20 transition-opacity">
                  <YagasuriBg className="w-full h-full" />
                </div>

                <div className="absolute inset-0 flex items-end">
                  <div className="w-full p-8 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="text-white">
                      <p className="text-sm mb-2 opacity-90 tracking-wider">{work.category}</p>
                      <h3 className="text-2xl" style={{ fontFamily: 'serif' }}>{work.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-12 h-12 border border-white/30 rotate-45"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c4504a] to-transparent opacity-30"></div>

        <div className="absolute top-1/3 left-0 w-48 h-96 text-[#8b4f47] opacity-10">
          <YagasuriBg className="w-full h-full" />
        </div>

        <div className="absolute top-1/4 right-0 w-48 h-96 text-[#c4504a] opacity-10">
          <YagasuriBg className="w-full h-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16 relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-32 h-32 text-[#c4504a] opacity-10">
              <YagasuriBg className="w-full h-full" />
            </div>
            <p className="text-sm text-gray-600 mb-2 tracking-widest relative">ABOUT US</p>
            <h2 className="text-4xl md:text-5xl mb-4 relative" style={{ fontFamily: 'serif' }}>会社概要</h2>
            <div className="w-16 h-1 bg-[#c4504a] mx-auto relative"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="border-l-4 border-[#c4504a] pl-6">
                <h3 className="text-3xl mb-6" style={{ fontFamily: 'serif' }}>
                  想いをカタチに、<br />
                  笑顔をそばに、<br />
                  繋がりを大切に
                </h3>

                <div className="space-y-6 mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    私たちYOICHIは、「想いをカタチに」をモットーに、お客様一人ひとりの想いを
                    デザインとしてカタチにしています。
                    私たちの提供する商品・サービスは、その一つ一つに心を込め
                    お客様と共に作り上げる一つの芸術作品です。
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    お客様との出会いは私たちにとって新たな物語の始まりです。
                    それぞれのお客様のビジョンを理解し、共に創造する過程は私たちにとって
                    大きなやりがいであり、誇りです。
                    お客様の夢を実現するために、私たちは常に全力を尽くします。
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    共に歩む中で築かれる信頼と絆は、私たちの大切な財産です。
                    これからも、お客様と共に新しい価値観を生み出し
                    感動を共有できる瞬間を創り続けていきます。
                  </p>
                </div>

                <div className="space-y-3 bg-[#f5f2ed] p-6 border-l-2 border-[#c4504a]">
                  <div className="flex gap-4">
                    <span className="text-gray-600 min-w-24">会社名</span>
                    <span>YOICHI</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-600 min-w-24">設立</span>
                    <span>2026年</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-600 min-w-24">代表</span>
                    <span>横山 真一郎</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-600 min-w-24">副代表</span>
                    <span>住谷 永人</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 relative">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#c4504a] opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-full h-full text-[#8b4f47] opacity-10">
                  <YagasuriBg className="w-full h-full" />
                </div>
                <div className="relative aspect-square bg-white p-16 border-2 border-[#d4c5b0] flex items-center justify-center">
                  <img
                    src="../imports/yoichi__________-1.png"
                    alt="YOICHI Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="absolute top-8 right-8 w-32 h-32 opacity-10">
                <img src="../imports/________.png" alt="pattern" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-[#f5f2ed] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c4504a] to-transparent opacity-30"></div>

        <div className="absolute top-20 left-1/2 w-96 h-96 text-[#8b4f47] opacity-10 -translate-x-1/2">
          <YagasuriBg className="w-full h-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16 relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-32 h-32 text-[#c4504a] opacity-10">
              <YagasuriBg className="w-full h-full" />
            </div>
            <p className="text-sm text-gray-600 mb-2 tracking-widest relative">CONTACT</p>
            <h2 className="text-4xl md:text-5xl mb-4 relative" style={{ fontFamily: 'serif' }}>お問い合わせ</h2>
            <div className="w-16 h-1 bg-[#c4504a] mx-auto mb-4 relative"></div>
            <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed relative">
              ご相談、お見積もりなど、お気軽にお問い合わせくださいませ
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4 bg-white p-6 border border-[#d4c5b0] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 text-[#8b4f47] opacity-5 group-hover:opacity-10 transition-opacity">
                  <YagasuriBg className="w-full h-full" />
                </div>
                <div className="w-12 h-12 bg-[#8b4f47] flex items-center justify-center flex-shrink-0 relative">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-xl mb-2 tracking-wider">電子郵便</h3>
                  <a href="mailto:info@yoichi.co.jp" className="text-gray-700 hover:text-[#c4504a] transition-colors">
                    info@yoichi.co.jp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 border border-[#d4c5b0] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 text-[#8b4f47] opacity-5 group-hover:opacity-10 transition-opacity">
                  <YagasuriBg className="w-full h-full" />
                </div>
                <div className="w-12 h-12 bg-[#8b4f47] flex items-center justify-center flex-shrink-0 relative">
                  <Phone className="text-white" size={20} />
                </div>
                <div className="relative">
                  <h3 className="text-xl mb-2 tracking-wider">電話番号</h3>
                  <a href="tel:+81-3-1234-5678" className="text-gray-700 hover:text-[#c4504a] transition-colors">
                    〇三（一二三四）五六七八
                  </a>
                  <p className="text-sm text-gray-600 mt-1">営業時間：平日 9:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 border border-[#d4c5b0] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 text-[#8b4f47] opacity-5 group-hover:opacity-10 transition-opacity">
                  <YagasuriBg className="w-full h-full" />
                </div>
                <div className="w-12 h-12 bg-[#8b4f47] flex items-center justify-center flex-shrink-0 relative">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-xl mb-2 tracking-wider">所在地</h3>
                  <p className="text-gray-700">
                    〒150-0001<br />
                    東京都渋谷区神宮前一丁目二番三号<br />
                    和デザインビルディング 五階
                  </p>
                </div>
              </div>
            </div>

            <form className="space-y-6 bg-white p-8 border-2 border-[#d4c5b0] relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-48 h-48 text-[#8b4f47] opacity-5">
                <YagasuriBg className="w-full h-full" />
              </div>

              <div className="relative">
                <label className="block mb-2 tracking-wider">お名前</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-[#d4c5b0] bg-[#f5f2ed] focus:outline-none focus:border-[#c4504a] transition-colors"
                  placeholder="山田 太郎"
                />
              </div>

              <div className="relative">
                <label className="block mb-2 tracking-wider">メールアドレス</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border-2 border-[#d4c5b0] bg-[#f5f2ed] focus:outline-none focus:border-[#c4504a] transition-colors"
                  placeholder="example@email.com"
                />
              </div>

              <div className="relative">
                <label className="block mb-2 tracking-wider">お問い合わせ内容</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-[#d4c5b0] bg-[#f5f2ed] focus:outline-none focus:border-[#c4504a] transition-colors"
                  placeholder="ご相談内容をご記入ください"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#8b4f47] text-white hover:bg-[#6d3d37] transition-colors flex items-center justify-center gap-2 tracking-wider relative overflow-hidden group"
              >
                <div className="absolute inset-0 text-white opacity-0 group-hover:opacity-20 transition-opacity">
                  <YagasuriBg className="w-full h-full" />
                </div>
                <span className="relative">送信する</span>
                <ArrowRight size={20} className="relative" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-[#3a3230] text-[#f5f2ed] py-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c4504a] to-transparent"></div>

        <div className="absolute inset-0 text-[#8b4f47] opacity-10">
          <YagasuriBg className="w-full h-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <img src="../imports/yoichi__________-1.png" alt="YOICHI Logo" className="h-16 w-16" />
              <div className="text-center">
                <div className="text-2xl tracking-widest font-bold">YOICHI</div>
              </div>
            </div>

            <div className="text-center text-sm text-gray-400 max-w-md leading-relaxed">
              <p>想いをカタチに、笑顔をそばに、繋がりを大切に</p>
            </div>

            <div className="flex gap-8 text-sm">
              <a href="#services" className="hover:text-[#c4504a] transition-colors tracking-wider">サービス</a>
              <a href="#works" className="hover:text-[#c4504a] transition-colors tracking-wider">実績</a>
              <a href="#about" className="hover:text-[#c4504a] transition-colors tracking-wider">会社概要</a>
              <a href="#contact" className="hover:text-[#c4504a] transition-colors tracking-wider">お問い合わせ</a>
            </div>

            <div className="w-16 h-px bg-[#c4504a] opacity-30"></div>

            <p className="text-gray-400 text-sm tracking-wider">
              © 令和八年 株式会社YOICHI
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}