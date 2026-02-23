import { motion } from "motion/react";
import { Leaf, Award, Truck, TrendingDown, ShieldCheck, Clock, ArrowUpRight } from "lucide-react";

const FIELD_IMAGE = "https://images.unsplash.com/photo-1761446261012-527815651ded?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGdyYWluJTIwZmFybWluZyUyMGxhbmRzY2FwZSUyMGdvbGRlbiUyMGZpZWxkfGVufDF8fHx8MTc3MTc4NDUyM3ww&ixlib=rb-4.1.0&q=80&w=1080";

const features = [
  {
    id: 1,
    title: "Farm-Direct Sourcing",
    description: "We operate direct procurement agreements with 200+ certified farms across India, eliminating middlemen and ensuring fair, traceable supply.",
    icon: Leaf,
  },
  {
    id: 2,
    title: "Consistent Quality",
    description: "Our 7-step quality assurance protocol guarantees identical standards across every delivery, batch after batch, every season.",
    icon: Award,
  },
  {
    id: 3,
    title: "Pan-India Distribution",
    description: "50,000 MT annual capacity with efficient logistics and just-in-time delivery — built for retailers, distributors and wholesale buyers across India.",
    icon: Truck,
  },
  {
    id: 4,
    title: "Competitive Pricing",
    description: "Farm-to-market optimization allows us to price premium rice at rates that protect your margins and keep your customers happy.",
    icon: TrendingDown,
  },
  {
    id: 5,
    title: "FSSAI Certified",
    description: "FSSAI, ISO 22000, and HACCP compliance across all products. Every grain meets India's highest food safety standards.",
    icon: ShieldCheck,
  },
  {
    id: 6,
    title: "On-Time Delivery",
    description: "Dedicated logistics coordinators ensure every order arrives on schedule with full documentation and quality certificates.",
    icon: Clock,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden"
      style={{ padding: "128px 0 160px", background: "var(--warm-bg-alt)" }}
    >
      {/* Background image with strong overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={FIELD_IMAGE}
          alt="Agricultural landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "rgba(8,20,14,0.92)" }} />
      </div>

      {/* Grain texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundSize: "200px" }} />

      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: "var(--gold)" }} />
            <span style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", fontFamily: "var(--font-sans)", fontWeight: 500 }}>
              Why Partner With Us
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(40px, 5vw, 68px)",
                fontWeight: 400,
                lineHeight: 1.06,
                letterSpacing: "-0.02em",
                color: "#ffffff",
                maxWidth: "480px",
              }}
            >
              The Tejas<br />
              <span style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Advantage</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "15px",
                fontWeight: 300,
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.45)",
                maxWidth: "380px",
              }}
            >
              We don't just supply rice — we build long-term supply partnerships built on transparency, reliability, and shared commercial success across India.
            </p>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="group relative"
              style={{
                padding: "48px 40px",
                background: "rgba(13,35,24,0.4)",
                backdropFilter: "blur(4px)",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(27,71,49,0.3)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(13,35,24,0.4)")}
            >
              {/* Icon */}
              <div
                className="mb-6 w-11 h-11 flex items-center justify-center rounded-sm transition-all duration-300"
                style={{
                  background: "rgba(201,161,88,0.1)",
                  border: "1px solid rgba(201,161,88,0.2)",
                }}
              >
                <feature.icon size={20} style={{ color: "var(--gold)" }} />
              </div>

              <h3
                className="mb-3"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "22px",
                  fontWeight: 500,
                  color: "#ffffff",
                  lineHeight: 1.25,
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 group transition-all duration-300"
            style={{
              padding: "16px 40px",
              border: "1px solid rgba(201,161,88,0.4)",
              color: "var(--gold-light)",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontFamily: "var(--font-sans)",
              borderRadius: "2px",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(201,161,88,0.1)";
              e.currentTarget.style.borderColor = "rgba(201,161,88,0.7)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(201,161,88,0.4)";
            }}
          >
            Start a Partnership
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
