import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Keshar Kali",
    type: "Kollam Raw Rice",
    description: "Pure Kollam raw rice known for its naturally soft texture, bright white grain and excellent cooking quality. A staple for households across South India.",
    image: "/images/keshar_kali.png",
    tags: ["Kollam Raw", "Premium Grade", "South India"],
    origin: "Maharashtra, India",
  },
  {
    id: 2,
    name: "Mahendra Cow",
    type: "Kollam Raw & Steam Rice",
    description: "A trusted name offering both Kollam raw and steam varieties. Consistent quality and superior taste make it a favourite among retailers and households.",
    image: "/images/cow.jpg",
    tags: ["Kollam Raw", "Steam Rice", "Trusted Brand"],
    origin: "Miryalaguda, India",
  },
  {
    id: 3,
    name: "JMR",
    type: "HMT · Steam · Raw · Kollam",
    description: "A versatile brand offering HMT steam, raw and Kollam raw rice — catering to the widest range of cooking preferences across all markets.",
    image: "/images/jmr.jpg",
    tags: ["HMT Steam", "Raw Rice", "Kollam Raw"],
    origin: "Miryalaguda, India",
  },
  {
    id: 4,
    name: "Bellric",
    type: "Basmati 1121",
    description: "Premium Basmati 1121 with extra-long grains, rich aroma and fluffy non-sticky texture. Ideal for biryani, pulao and fine dining preparations.",
    image: "/images/bellric.png",
    tags: ["Basmati 1121", "Long Grain", "Premium Aroma"],
    origin: "Punjab, India",
  },
  {
    id: 5,
    name: "Keshar Madhuram",
    type: "Scented Rice",
    description: "A fragrant, naturally scented rice variety prized for its delicate aroma and light texture. Perfect for aromatic rice dishes and everyday cooking.",
    image: "/images/keshar_madhuram.png",
    tags: ["Scented Variety", "Aromatic", "Premium Quality"],
    origin: "Maharashtra, India",
  },
  {
    id: 6,
    name: "VNT Anuram",
    type: "Sona Masoori · Steam · KNM",
    description: "Offering Sona Masoori raw, steam rice and KNM steam — a comprehensive range for diverse market needs, known for its lightness and consistent quality.",
    image: "/images/vnt_anuram.jpg",
    tags: ["Sona Masoori", "Steam Rice", "KNM Steam"],
    origin: "Andhra Pradesh, India",
  },
  {
    id: 7,
    name: "Simha",
    type: "Urad Dal",
    description: "High-quality Urad Dal sourced from premium farms. Clean, well-sorted and packed for long shelf life — a must-have for any wholesale staples portfolio.",
    image: "/images/simha.png",
    tags: ["Urad Dal", "Premium Grade", "Wholesale"],
    origin: "Karnataka, India",
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" style={{ background: "var(--warm-bg)", padding: "128px 0 160px" }}>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">

        {/* Section Header */}
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
              Our Brands
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(42px, 5vw, 72px)",
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#0D1F15",
                maxWidth: "520px",
              }}
            >
              Premium Brands,<br />
              <span style={{ fontStyle: "italic" }}>India's Finest</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "15px",
                fontWeight: 300,
                lineHeight: 1.8,
                color: "#6B7280",
                maxWidth: "360px",
              }}
            >
              Every brand we carry is rigorously selected for quality, consistency and market trust — from aromatic Basmati to everyday Kollam raw rice.
            </p>
          </div>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="group flex flex-col overflow-hidden"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(201,161,88,0.12)",
                borderRadius: "2px",
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: "260px" }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  style={{ background: "linear-gradient(to top, rgba(13,35,24,0.7) 0%, transparent 60%)" }}
                />
                {/* Origin badge */}
                <div
                  className="absolute top-4 left-4"
                  style={{
                    padding: "4px 10px",
                    background: "rgba(13,35,24,0.75)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "1px",
                    fontSize: "9px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.8)",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                  }}
                >
                  {product.origin}
                </div>
                {/* Hover CTA */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <a
                    href="#contact"
                    className="flex items-center justify-between w-full transition-colors duration-200"
                    style={{
                      padding: "12px 16px",
                      background: "var(--gold)",
                      color: "var(--brand-dark)",
                      fontSize: "10px",
                      fontWeight: 600,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      fontFamily: "var(--font-sans)",
                      borderRadius: "1px",
                    }}
                  >
                    Inquire Now
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                <span
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--gold-dark)",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    marginBottom: "6px",
                    display: "block",
                  }}
                >
                  {product.type}
                </span>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "22px",
                    fontWeight: 500,
                    color: "#111827",
                    lineHeight: 1.2,
                  }}
                >
                  {product.name}
                </h3>
                <p
                  className="flex-grow mb-5"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px",
                    fontWeight: 300,
                    lineHeight: 1.75,
                    color: "#6B7280",
                  }}
                >
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}>
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "3px 8px",
                        background: "rgba(27,71,49,0.06)",
                        color: "var(--brand)",
                        fontSize: "10px",
                        letterSpacing: "0.05em",
                        fontFamily: "var(--font-sans)",
                        fontWeight: 500,
                        borderRadius: "1px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Custom Sourcing Note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <div className="h-px flex-1" style={{ background: "rgba(201,161,88,0.2)", maxWidth: "120px" }} />
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "14px",
              fontWeight: 400,
              color: "#6B7280",
              textAlign: "center",
              fontStyle: "italic",
            }}
          >
            We also source any type of rice according to customer needs.
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(201,161,88,0.2)", maxWidth: "120px" }} />
        </motion.div>

        {/* Catalogue CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center mt-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 group transition-all duration-300"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--brand)",
            }}
          >
            <span style={{ textDecoration: "underline", textUnderlineOffset: "4px", textDecorationColor: "var(--gold)", textDecorationThickness: "1px" }}>
              Get a Quote for Any Product
            </span>
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

