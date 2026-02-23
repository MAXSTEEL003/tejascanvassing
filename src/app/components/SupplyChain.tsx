import { motion } from "motion/react";
import { Sprout, Factory, FlaskConical, Package, Ship } from "lucide-react";


const steps = [
  {
    id: 1,
    title: "Farm Sourcing",
    detail: "Direct procurement from contracted farms across the finest rice-growing belts — Punjab, Andhra Pradesh, and Tamil Nadu.",
    icon: Sprout,
  },
  {
    id: 2,
    title: "Milling & Processing",
    detail: "State-of-the-art Satake milling technology preserves grain integrity, aroma, and whiteness uniformity.",
    icon: Factory,
  },
  {
    id: 3,
    title: "Lab Quality Testing",
    detail: "Every batch is tested for moisture content, purity percentage, grain length, broken grain ratio, and food safety compliance.",
    icon: FlaskConical,
  },
  {
    id: 4,
    title: "Hygienic Packaging",
    detail: "Automated moisture-proof packaging in 5 kg, 25 kg, and 50 kg formats with custom OEM branding available.",
    icon: Package,
  },
  {
    id: 5,
    title: "Delivery Across India",
    detail: "Pan-India logistics with reliable transport partners — ensuring on-time delivery to wholesale markets, mandis, and distributors.",
    icon: Ship,
  },
];

export default function SupplyChain() {
  return (
    <section id="process" style={{ background: "#ffffff", padding: "128px 0 160px" }}>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">

        {/* Two-column header layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ background: "var(--gold)" }} />
              <span style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", fontFamily: "var(--font-sans)", fontWeight: 500 }}>
                Our Process
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(40px, 5vw, 68px)",
                fontWeight: 400,
                lineHeight: 1.06,
                letterSpacing: "-0.02em",
                color: "#0D1F15",
              }}
            >
              Farm to<br />
              <span style={{ fontStyle: "italic" }}>Your Doorstep</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: 1.85,
                color: "#6B7280",
              }}
            >
              We maintain complete control over the supply chain — from procurement agreements with farmers to delivery at wholesale markets and distributors across India. This end-to-end visibility ensures consistent quality and reliable supply.
            </p>
          </motion.div>
        </div>

        {/* Process visual with image */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-stretch">

          {/* Branded Logo Panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-2 relative overflow-hidden rounded-sm flex flex-col items-center justify-center"
            style={{
              minHeight: "500px",
              background: "var(--brand-dark)",
            }}
          >
            {/* Decorative corner frames */}
            <div className="absolute top-5 left-5 w-12 h-12" style={{ borderTop: "1px solid rgba(201,161,88,0.4)", borderLeft: "1px solid rgba(201,161,88,0.4)" }} />
            <div className="absolute top-5 right-5 w-12 h-12" style={{ borderTop: "1px solid rgba(201,161,88,0.4)", borderRight: "1px solid rgba(201,161,88,0.4)" }} />
            <div className="absolute bottom-5 left-5 w-12 h-12" style={{ borderBottom: "1px solid rgba(201,161,88,0.4)", borderLeft: "1px solid rgba(201,161,88,0.4)" }} />
            <div className="absolute bottom-5 right-5 w-12 h-12" style={{ borderBottom: "1px solid rgba(201,161,88,0.4)", borderRight: "1px solid rgba(201,161,88,0.4)" }} />

            {/* Subtle radial glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at center, rgba(27,71,49,0.6) 0%, transparent 70%)" }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-10">
              {/* Gold divider top */}
              <div className="w-12 h-px mb-10" style={{ background: "var(--gold)" }} />

              {/* Logo */}
              <img
                src="/logo.png"
                alt="Tejas Canvassing"
                className="w-28 h-28 object-contain mb-8"
                style={{ filter: "brightness(1.15) drop-shadow(0 4px 20px rgba(201,161,88,0.25))" }}
              />

              {/* Brand name */}
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "18px",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  marginBottom: "4px",
                }}
              >
                Tejas Canvassing
              </div>
              <div
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "32px",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                }}
              >
                Premium Rice Dealers
              </div>

              {/* Gold divider */}
              <div className="w-8 h-px mb-8" style={{ background: "rgba(201,161,88,0.4)" }} />

              {/* Quote */}
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "16px",
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.7,
                  maxWidth: "260px",
                }}
              >
                "Every grain passes through 7 quality checkpoints"
              </p>

              {/* Gold divider bottom */}
              <div className="w-12 h-px mt-10" style={{ background: "var(--gold)" }} />
            </div>
          </motion.div>

          {/* Steps Column */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex items-start gap-6 group py-6"
                style={{
                  borderBottom: index < steps.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
                  cursor: "default",
                }}
              >
                {/* Number & Icon */}
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-sm transition-all duration-300 group-hover:scale-105"
                    style={{
                      background: "rgba(27,71,49,0.07)",
                      border: "1px solid rgba(27,71,49,0.12)",
                    }}
                  >
                    <step.icon size={18} style={{ color: "var(--brand)" }} />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "11px",
                      color: "rgba(201,161,88,0.6)",
                      fontWeight: 400,
                    }}
                  >
                    0{step.id}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <h3
                    className="mb-2 transition-colors duration-300 group-hover:text-emerald-900"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#111827",
                      lineHeight: 1.2,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "13px",
                      fontWeight: 300,
                      lineHeight: 1.8,
                      color: "#9CA3AF",
                    }}
                  >
                    {step.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
