import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "We've been sourcing Basmati from Tejas Canvassing for over four years. Their consistency in quality and delivery reliability is genuinely unmatched in the Indian wholesale market.",
    name: "Ravi Sharma",
    role: "Procurement Manager",
    company: "Delhi Wholesale Traders, New Delhi",
    initials: "RS",
    accentColor: "var(--gold)",
  },
  {
    id: 2,
    quote: "The transparency they offer — from farm documentation to batch quality reports — gives our business the confidence our retail customers demand. Their Sona Masoori is our fastest-moving SKU.",
    name: "Meena Patel",
    role: "Owner",
    company: "Patel Grocery Distributors, Ahmedabad",
    initials: "MP",
    accentColor: "#6EE7B7",
  },
  {
    id: 3,
    quote: "Competitive pricing, premium quality, and zero excuses on timelines. Tejas Canvassing operates with the professionalism of a top-tier supplier. We've consolidated our entire rice procurement with them.",
    name: "Suresh Iyer",
    role: "Director",
    company: "South India Rice Merchants, Chennai",
    initials: "SI",
    accentColor: "#93C5FD",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  };
  const prev = () => goTo(index === 0 ? testimonials.length - 1 : index - 1);
  const next = () => goTo(index === testimonials.length - 1 ? 0 : index + 1);

  const current = testimonials[index];

  return (
    <section
      style={{ padding: "128px 0 160px", background: "var(--warm-bg)" }}
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ background: "var(--gold)" }} />
              <span style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", fontFamily: "var(--font-sans)", fontWeight: 500 }}>
                Testimonials
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
              Trusted by<br />
              <span style={{ fontStyle: "italic" }}>India's Best</span>
            </h2>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 flex items-center justify-center rounded-sm transition-all duration-200"
              style={{
                border: "1px solid rgba(0,0,0,0.1)",
                background: "transparent",
                color: "#374151",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "var(--brand)";
                e.currentTarget.style.borderColor = "var(--brand)";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)";
                e.currentTarget.style.color = "#374151";
              }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 flex items-center justify-center rounded-sm transition-all duration-200"
              style={{
                border: "1px solid rgba(0,0,0,0.1)",
                background: "transparent",
                color: "#374151",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "var(--brand)";
                e.currentTarget.style.borderColor = "var(--brand)";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)";
                e.currentTarget.style.color = "#374151";
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Testimonial */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current.id}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div
              className="relative overflow-hidden"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(201,161,88,0.1)",
                borderRadius: "2px",
                padding: "64px 80px",
              }}
            >
              {/* Decorative quote mark */}
              <div
                className="absolute top-8 right-10"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "200px",
                  lineHeight: 1,
                  color: "rgba(201,161,88,0.06)",
                  fontWeight: 700,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                "
              </div>

              <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-12 items-center">
                {/* Quote text */}
                <blockquote>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(20px, 2.5vw, 28px)",
                      fontWeight: 400,
                      fontStyle: "italic",
                      lineHeight: 1.55,
                      color: "#1F2937",
                      marginBottom: "40px",
                    }}
                  >
                    "{current.quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div
                      className="w-12 h-12 rounded-sm flex items-center justify-center shrink-0"
                      style={{ background: current.accentColor + "22", border: `1px solid ${current.accentColor}44` }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "16px",
                          fontWeight: 600,
                          color: current.accentColor,
                        }}
                      >
                        {current.initials}
                      </span>
                    </div>
                    <div>
                      <h4
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#111827",
                          marginBottom: "2px",
                        }}
                      >
                        {current.name}
                      </h4>
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "12px",
                          color: "#9CA3AF",
                          fontWeight: 400,
                        }}
                      >
                        {current.role} · {current.company}
                      </p>
                    </div>
                  </div>
                </blockquote>

                {/* Index indicators */}
                <div className="flex lg:flex-col items-center gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className="transition-all duration-300 rounded-full"
                      style={{
                        width: i === index ? "6px" : "4px",
                        height: i === index ? "6px" : "4px",
                        background: i === index ? "var(--gold)" : "rgba(0,0,0,0.15)",
                        transform: i === index ? "scale(1.2)" : "scale(1)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Partners row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex items-center justify-center gap-3"
        >
          <div className="h-px flex-1" style={{ background: "rgba(0,0,0,0.06)", maxWidth: "120px" }} />
          <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9CA3AF", fontFamily: "var(--font-sans)" }}>
            Trusted by 150+ wholesale partners across India
          </span>
          <div className="h-px flex-1" style={{ background: "rgba(0,0,0,0.06)", maxWidth: "120px" }} />
        </motion.div>
      </div>
    </section>
  );
}
