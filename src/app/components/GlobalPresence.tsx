import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const MARKET_IMAGE = "https://images.unsplash.com/photo-1759272548470-d0686d071036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXBwaW5nJTIwY29udGFpbmVyJTIwcG9ydCUyMGdsb2JhbCUyMGxvZ2lzdGljc3xlbnwxfHx8fDE3NzE3ODQ1MTh8MA&ixlib=rb-4.1.0&q=80&w=1080";

const regions = [
  {
    name: "North India",
    markets: ["Delhi · Azadpur Mandi", "Punjab · Amritsar, Ludhiana", "Haryana · Karnal", "Uttar Pradesh · Kanpur, Lucknow"],
    color: "var(--gold)",
  },
  {
    name: "South India",
    markets: ["Karnataka · Bengaluru, Mysuru", "Tamil Nadu · Chennai, Coimbatore", "Andhra Pradesh · Vijayawada", "Telangana · Hyderabad"],
    color: "#6EE7B7",
  },
  {
    name: "West India",
    markets: ["Gujarat · Ahmedabad, Surat", "Maharashtra · Mumbai, Pune", "Rajasthan · Jaipur"],
    color: "#93C5FD",
  },
  {
    name: "East India",
    markets: ["West Bengal · Kolkata", "Odisha · Bhubaneswar", "Bihar · Patna"],
    color: "#F9A8D4",
  },
  {
    name: "Central India",
    markets: ["Madhya Pradesh · Indore, Bhopal", "Chhattisgarh · Raipur"],
    color: "#FCD34D",
  },
];

export default function GlobalPresence() {
  return (
    <section id="global-presence" style={{ background: "#ffffff", padding: "128px 0 160px" }}>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ background: "var(--gold)" }} />
              <span style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", fontFamily: "var(--font-sans)", fontWeight: 500 }}>
                Pan-India Reach
              </span>
            </div>
            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(40px, 4.5vw, 64px)",
                fontWeight: 400,
                lineHeight: 1.06,
                letterSpacing: "-0.02em",
                color: "#0D1F15",
              }}
            >
              Serving<br />
              <span style={{ fontStyle: "italic" }}>20+ States</span>
            </h2>
            <p
              className="mb-12"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "15px",
                fontWeight: 300,
                lineHeight: 1.85,
                color: "#6B7280",
                maxWidth: "440px",
              }}
            >
              With a dedicated distribution network, strong relationships with mandis and wholesale markets, and reliable logistics, we deliver consistently to every major rice market across India.
            </p>

            {/* Regions */}
            <div className="space-y-0">
              {regions.map((region, index) => (
                <motion.div
                  key={region.name}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="group flex items-start gap-5 py-5 cursor-default"
                  style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}
                >
                  <div
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-300 group-hover:scale-150"
                    style={{ background: region.color }}
                  />
                  <div className="flex-1">
                    <h4
                      className="mb-1.5"
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "#111827",
                      }}
                    >
                      {region.name}
                    </h4>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "12px",
                        color: "#9CA3AF",
                        lineHeight: 1.6,
                        fontWeight: 300,
                      }}
                    >
                      {region.markets.join(" · ")}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1"
                    style={{ color: "var(--gold)" }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Market Image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-sm" style={{ aspectRatio: "4/5" }}>
              <img
                src={MARKET_IMAGE}
                alt="India Wholesale Market"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(8,20,14,0.5) 0%, transparent 60%)" }}
              />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -left-8 p-6"
              style={{
                background: "var(--brand-dark)",
                border: "1px solid rgba(201,161,88,0.2)",
                borderRadius: "2px",
                minWidth: "200px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "48px",
                  fontWeight: 400,
                  color: "#ffffff",
                  lineHeight: 1,
                  marginBottom: "6px",
                }}
              >
                20<span style={{ color: "var(--gold)" }}>+</span>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "10px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)",
                  fontWeight: 500,
                }}
              >
                States Served
              </div>
            </motion.div>

            {/* Gold accent line */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24"
              style={{
                border: "1px solid rgba(201,161,88,0.2)",
                borderRadius: "2px",
                pointerEvents: "none",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
