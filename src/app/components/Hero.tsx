import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1763397929062-eb0582008877?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwcGFkZHklMjBmaWVsZCUyMGdvbGRlbiUyMHN1bnJpc2UlMjBjaW5lbWF0aWMlMjBhZXJpYWx8ZW58MXx8fHwxNzcxNzg0NTE2fDA&ixlib=rb-4.1.0&q=80&w=1920";

export default function Hero() {
  return (
    <section className="relative flex items-end overflow-hidden" style={{ minHeight: "100svh" }}>

      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Aerial Rice Paddy Field"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 40%" }}
          loading="eager"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(8,20,14,0.85) 0%, rgba(8,20,14,0.55) 55%, rgba(8,20,14,0.15) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,20,14,0.7) 0%, transparent 60%)" }} />
        {/* Grain texture */}
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "200px" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 lg:px-12 pb-24 pt-40">
        <div className="max-w-[680px]">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-8" style={{ background: "var(--gold)" }} />
            <span style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", fontFamily: "var(--font-sans)", fontWeight: 500 }}>
              Premium Rice Dealers · Est. 2010
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-white mb-8"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(52px, 8vw, 96px)",
              fontWeight: 400,
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
            }}
          >
            Premium Quality.{" "}
            <span className="block" style={{ fontStyle: "italic", color: "var(--gold-light)" }}>
              India's Best.
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-12"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "17px",
              fontWeight: 300,
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.65)",
              maxWidth: "480px",
            }}
          >
            Sourcing the finest Basmati, Sona Masoori and premium rice varieties directly from farms to wholesale markets across India. Trusted by 150+ partners in 20+ states.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 group transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
              style={{
                padding: "16px 36px",
                background: "var(--gold)",
                color: "var(--brand-dark)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontFamily: "var(--font-sans)",
                borderRadius: "2px",
                boxShadow: "0 4px 24px rgba(201,161,88,0.35)",
              }}
            >
              Request a Quote
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center transition-all duration-300 hover:bg-white/10"
              style={{
                padding: "16px 36px",
                background: "rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.85)",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontFamily: "var(--font-sans)",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(8px)",
                borderRadius: "2px",
              }}
            >
              Explore Products
            </a>
          </motion.div>

          {/* Credentials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap gap-8"
          >
            {[
              { value: "20+", label: "States Served" },
              { value: "50k MT", label: "Annual Supply" },
              { value: "15 Yrs", label: "Experience" },
              { value: "8", label: "Certifications" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "28px",
                    fontWeight: 500,
                    lineHeight: 1,
                    color: "#ffffff",
                    marginBottom: "4px",
                  }}
                >
                  {stat.value}
                </span>
                <span style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-sans)" }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 right-12 hidden lg:flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="w-px"
          style={{ height: "60px", background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.3))" }}
          animate={{ scaleY: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span style={{ fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-sans)", writingMode: "vertical-lr" }}>
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
