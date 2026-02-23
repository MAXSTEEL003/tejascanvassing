import { Outlet, Link, useLocation } from "react-router";
import { Toaster } from "sonner";
import { Menu, X, Globe, Phone, Mail, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why-us" },
  { label: "Presence", href: "#global-presence" },
];

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <div className="font-sans text-stone-800 min-h-screen flex flex-col" style={{ background: "var(--warm-bg)", fontFamily: "var(--font-sans)" }}>

      {/* ── Navigation ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: isScrolled ? "rgba(248, 244, 238, 0.92)" : "transparent",
          backdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(201, 161, 88, 0.12)" : "none",
          padding: isScrolled ? "16px 0" : "24px 0",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="transition-transform duration-300 group-hover:scale-105">
              <img
                src="/logo.png"
                alt="Tejas Canvassing Logo"
                className="w-10 h-10 object-contain"
                style={{ filter: "drop-shadow(0 2px 8px rgba(13,35,24,0.3))" }}
              />
            </div>
            <div>
              <div
                className="tracking-widest transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "15px",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  color: isScrolled ? "#0D2318" : "#ffffff",
                }}
              >
                TEJAS CANVASSING
              </div>
              <div
                className="tracking-[0.2em] uppercase transition-colors duration-300"
                style={{
                  fontSize: "8px",
                  color: isScrolled ? "var(--gold)" : "rgba(255,255,255,0.6)",
                }}
              >
                Premium Rice Dealers
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-all duration-200 relative group"
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: isScrolled ? "#374151" : "rgba(255,255,255,0.85)",
                }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                  style={{ background: "var(--gold)" }}
                />
              </a>
            ))}
            <a
              href="#contact"
              className="transition-all duration-300 hover:opacity-90 active:scale-95"
              style={{
                padding: "10px 28px",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                background: isScrolled ? "var(--brand)" : "rgba(255,255,255,0.12)",
                color: "#ffffff",
                border: isScrolled ? "1px solid transparent" : "1px solid rgba(255,255,255,0.3)",
                backdropFilter: isScrolled ? "none" : "blur(8px)",
                borderRadius: "2px",
              }}
            >
              Request Quote
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 transition-colors duration-200 rounded-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: isScrolled ? "#111827" : "#ffffff" }}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-40 flex flex-col justify-center lg:hidden"
            style={{ background: "var(--brand-dark)", fontFamily: "var(--font-serif)" }}
          >
            <div className="absolute top-6 right-8">
              <button onClick={() => setIsMobileMenuOpen(false)} style={{ color: "rgba(255,255,255,0.5)" }}>
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-8 px-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                  style={{ fontSize: "32px", fontWeight: 400, letterSpacing: "0.02em" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-10 py-4 text-white rounded-sm"
                style={{
                  background: "var(--gold)",
                  fontSize: "11px",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                Request Quote
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Toaster position="top-right" richColors />

      {/* ── Footer ── */}
      <footer style={{ background: "var(--dark-bg)", color: "#9CA3AF" }}>

        {/* Top stripe */}
        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "80px 0" }}>
          <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

              {/* Brand */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-8">
                  <img
                    src="/logo.png"
                    alt="Tejas Canvassing Logo"
                    className="w-10 h-10 object-contain"
                  />
                  <span className="text-white tracking-widest" style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 600, letterSpacing: "0.15em" }}>
                    TEJAS CANVASSING
                  </span>
                </div>
                <p className="mb-8 leading-[1.9]" style={{ fontSize: "14px", color: "#6B7280", maxWidth: "340px" }}>
                  Connecting the finest rice-growing regions of South Asia with wholesale markets across India. Quality without compromise, supply without disruption.
                </p>
                <div className="flex gap-3">
                  {[Linkedin, Instagram, Twitter].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-9 h-9 flex items-center justify-center rounded-sm transition-all duration-200 hover:opacity-80"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#6B7280" }}
                      onMouseEnter={e => (e.currentTarget.style.background = "rgba(201,161,88,0.12)")}
                      onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div>
                <h5 className="text-white mb-6" style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>Company</h5>
                <ul className="space-y-3">
                  {["About Us", "Our Story", "Export Process", "Certifications", "Careers"].map(item => (
                    <li key={item}>
                      <a href="#" className="transition-colors duration-200 hover:text-white" style={{ fontSize: "14px", color: "#6B7280" }}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-white mb-6" style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>Products</h5>
                <ul className="space-y-3">
                  {["Basmati 1121", "Basmati 1509", "Sona Masoori", "Ponni Boiled", "Organic Brown"].map(item => (
                    <li key={item}>
                      <a href="#products" className="transition-colors duration-200 hover:text-white" style={{ fontSize: "14px", color: "#6B7280" }}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-white mb-6" style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>Contact</h5>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3" style={{ fontSize: "14px", color: "#6B7280" }}>
                    <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: "var(--gold)" }} />
                    <a
                      href="https://maps.app.goo.gl/TZcms2SCaaN6GC2SA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="leading-relaxed transition-colors duration-200 hover:text-white"
                      style={{ color: "#6B7280" }}
                    >
                      123, 4th Main Rd, K. N. Extension,<br />APMC Yard, Yeshwanthpur,<br />Bengaluru, Karnataka 560022
                    </a>
                  </li>
                  <li className="flex items-center gap-3" style={{ fontSize: "14px", color: "#6B7280" }}>
                    <Phone size={15} style={{ color: "var(--gold)" }} />
                    <span>+91 9916416995</span>
                  </li>
                  <li className="flex items-center gap-3" style={{ fontSize: "14px", color: "#6B7280" }}>
                    <Mail size={15} style={{ color: "var(--gold)" }} />
                    <span>tejascanvassing@gmail.com</span>
                  </li>
                  <li className="flex items-center gap-3" style={{ fontSize: "14px", color: "#6B7280" }}>
                    <Globe size={15} style={{ color: "var(--gold)" }} />
                    <span>www.tejascanvassing.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p style={{ fontSize: "12px", color: "#4B5563" }}>
            © 2025 Tejas Canvassing Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map(item => (
              <a key={item} href="#" className="transition-colors hover:text-white" style={{ fontSize: "12px", color: "#4B5563" }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
