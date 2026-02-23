import { motion } from "motion/react";

const stats = [
  { value: "15+", label: "Years of Market Excellence" },
  { value: "20+", label: "States Supplied Across India" },
  { value: "8", label: "Quality Certifications" },
  { value: "50k MT", label: "Annual Supply Capacity" },
];

export default function TrustStrip() {
  return (
    <section style={{ background: "var(--brand-dark)", padding: "80px 0" }}>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">

        {/* Section label */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.06)", maxWidth: "100px" }} />
          <span style={{ fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", fontFamily: "var(--font-sans)", fontWeight: 500 }}>
            By the Numbers
          </span>
          <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.06)", maxWidth: "100px" }} />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.05)" }}>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col items-center justify-center text-center"
              style={{
                padding: "48px 32px",
                background: "var(--brand-dark)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(44px, 5vw, 64px)",
                  fontWeight: 400,
                  lineHeight: 1,
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                  marginBottom: "12px",
                  display: "block",
                }}
              >
                {stat.value}
              </span>
              <div className="w-6 h-px mb-4" style={{ background: "var(--gold)" }} />
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                  fontWeight: 400,
                }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
