"use client";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="relative pt-20 pb-10 px-6"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(99,102,241,0.5), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Main footer grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  background: "white",
                  border: "1px solid rgba(255,255,255,0.15)",
                  padding: "3px",
                  flexShrink: 0,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.png" alt="SAÜ Blockchain Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
              <div>
                <div className="font-bold text-lg leading-none gradient-text">SAÜ</div>
                <div className="text-[10px] text-slate-400 font-medium tracking-widest leading-none">
                  BLOCKCHAIN
                </div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Sakarya Üniversitesi Blockchain Topluluğu. Geleceğin
              teknolojilerini birlikte keşfediyor ve inşa ediyoruz.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/saublockchain/"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-instagram"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(99,102,241,0.3)]"
                style={{
                  background: "rgba(15,23,42,0.6)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(99,102,241,0.5)";
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(99,102,241,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(15,23,42,0.6)";
                }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links column */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">
              Hızlı Linkler
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Ana Sayfa", href: "#hero" },
                { label: "Hakkımızda", href: "#about" },
                { label: "Ekibimiz", href: "#team" },
                { label: "Instagram", href: "https://www.instagram.com/saublockchain/" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-200"
                      style={{ background: "rgba(99,102,241,0.4)" }}
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">
              İletişim
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)" }}>
                  <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Konum</div>
                  <div className="text-slate-400 text-xs mt-0.5">Sakarya Üniversitesi, Serdivan, Sakarya</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)" }}>
                  <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Instagram</div>
                  <a
                    href="https://www.instagram.com/saublockchain/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 text-xs mt-0.5 hover:text-indigo-300 transition-colors"
                  >
                    @saublockchain
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-slate-500 text-xs">
            © {currentYear} SAÜ Blockchain Topluluğu. Tüm hakları saklıdır.
          </p>
          <p className="text-slate-600 text-xs">
            Sakarya Üniversitesi &bull; Blockchain &bull; Web3 &bull; Solana
          </p>
        </div>
      </div>
    </footer>
  );
}
