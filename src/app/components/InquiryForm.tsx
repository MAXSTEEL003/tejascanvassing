import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import { Send, Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  riceType: string;
  quantity: string;
  message: string;
};

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "#ffffff",
  fontSize: "14px",
  fontFamily: "var(--font-sans)",
  fontWeight: 300,
  outline: "none",
  transition: "border-color 0.2s ease, background 0.2s ease",
  borderRadius: "2px",
};

const labelStyle = {
  display: "block",
  fontSize: "9px",
  fontFamily: "var(--font-sans)",
  fontWeight: 600,
  letterSpacing: "0.2em",
  textTransform: "uppercase" as const,
  color: "rgba(255,255,255,0.4)",
  marginBottom: "8px",
};

export default function InquiryForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));

    const message = [
      `*New Enquiry — Tejas Canvassing*`,
      ``,
      `*Name:* ${data.name}`,
      `*Company:* ${data.company || "N/A"}`,
      `*Email:* ${data.email}`,
      `*Phone:* ${data.phone || "N/A"}`,
      `*Rice / Product:* ${data.riceType || "N/A"}`,
      `*Quantity Needed:* ${data.quantity || "N/A"}`,
      `*Message:* ${data.message || "N/A"}`,
    ].join("\n");

    const waUrl = `https://wa.me/919342380981?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");

    toast.success("Opening WhatsApp with your enquiry details!", {
      duration: 4000,
    });
    reset();
  };

  const focusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "rgba(201,161,88,0.5)";
    e.target.style.background = "rgba(255,255,255,0.06)";
  };
  const blurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "rgba(255,255,255,0.1)";
    e.target.style.background = "rgba(255,255,255,0.03)";
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ background: "var(--brand-dark)", padding: "128px 0 160px" }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(27,71,49,0.4) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 relative z-10">

        <div className="grid lg:grid-cols-5 gap-20 lg:gap-24">

          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-2 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ background: "var(--gold)" }} />
              <span style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", fontFamily: "var(--font-sans)", fontWeight: 500 }}>
                Get a Quote
              </span>
            </div>
            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(38px, 4.5vw, 60px)",
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                color: "#ffffff",
              }}
            >
              Let's Build a<br />
              <span style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Supply Partnership</span>
            </h2>
            <p
              className="mb-12"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "15px",
                fontWeight: 300,
                lineHeight: 1.85,
                color: "rgba(255,255,255,0.45)",
              }}
            >
              Share your requirements and our team will respond with pricing, availability, and delivery options within one business day.
            </p>

            {/* Contact details */}
            <div className="space-y-6 mb-12">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div
                  className="w-9 h-9 flex items-center justify-center rounded-sm shrink-0"
                  style={{ background: "rgba(201,161,88,0.1)", border: "1px solid rgba(201,161,88,0.2)" }}
                >
                  <MapPin size={15} style={{ color: "var(--gold)" }} />
                </div>
                <div>
                  <p style={{ fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-sans)", marginBottom: "3px" }}>
                    Visit Us
                  </p>
                  <a
                    href="https://maps.app.goo.gl/TZcms2SCaaN6GC2SA"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-sans)", fontWeight: 300, lineHeight: 1.7, display: "block" }}
                  >
                    123, 4th Main Rd, K. N. Extension,<br />
                    APMC Yard, Yeshwanthpur,<br />
                    Bengaluru, Karnataka 560022
                  </a>
                  <a
                    href="https://maps.app.goo.gl/TZcms2SCaaN6GC2SA"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "10px", color: "var(--gold)", fontFamily: "var(--font-sans)", fontWeight: 500, letterSpacing: "0.1em", marginTop: "6px", display: "inline-flex", alignItems: "center", gap: "4px" }}
                  >
                    Get Directions ↗
                  </a>
                </div>
              </div>

              {/* Phone / WhatsApp / Email */}
              {[
                { icon: Phone, label: "Direct Line", value: "+91 9916416995", href: "tel:+919916416995" },
                { icon: MessageCircle, label: "WhatsApp Business", value: "+91 9916416995", href: "https://wa.me/919916416995" },
                { icon: Mail, label: "Business Enquiries", value: "tejascanvassing@gmail.com", href: "mailto:tejascanvassing@gmail.com" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 flex items-center justify-center rounded-sm shrink-0"
                    style={{ background: "rgba(201,161,88,0.1)", border: "1px solid rgba(201,161,88,0.2)" }}
                  >
                    <item.icon size={15} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <p style={{ fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-sans)", marginBottom: "3px" }}>
                      {item.label}
                    </p>
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-sans)", fontWeight: 300 }}>
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Office hours */}
            <div
              className="mt-auto p-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "2px",
              }}
            >
              <p style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", fontFamily: "var(--font-sans)", marginBottom: "12px", fontWeight: 500 }}>
                Office Hours (IST)
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-sans)", fontWeight: 300 }}>Monday – Saturday</span>
                  <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-sans)", fontWeight: 400 }}>9:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-sans)", fontWeight: 300 }}>Sunday</span>
                  <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-sans)", fontWeight: 300 }}>Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-3"
          >
            <div
              className="p-8 lg:p-12"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "2px",
              }}
            >
              <h3
                className="mb-8"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "26px",
                  fontWeight: 400,
                  color: "#ffffff",
                  letterSpacing: "-0.01em",
                }}
              >
                Inquiry Details
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Row 1 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label style={labelStyle}>Full Name</label>
                    <input
                      {...register("name", { required: "Required" })}
                      placeholder="John Doe"
                      style={inputStyle}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                    />
                    {errors.name && <p style={{ fontSize: "11px", color: "#F87171", marginTop: "4px", fontFamily: "var(--font-sans)" }}>{errors.name.message}</p>}
                  </div>
                  <div>
                    <label style={labelStyle}>Company Name</label>
                    <input
                      {...register("company", { required: "Required" })}
                      placeholder="Global Foods Ltd."
                      style={inputStyle}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                    />
                    {errors.company && <p style={{ fontSize: "11px", color: "#F87171", marginTop: "4px", fontFamily: "var(--font-sans)" }}>{errors.company.message}</p>}
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input
                      {...register("email", { required: "Required", pattern: { value: /^\S+@\S+$/, message: "Invalid email" } })}
                      placeholder="john@example.com"
                      style={inputStyle}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                    />
                    {errors.email && <p style={{ fontSize: "11px", color: "#F87171", marginTop: "4px", fontFamily: "var(--font-sans)" }}>{errors.email.message}</p>}
                  </div>
                  <div>
                    <label style={labelStyle}>Phone / WhatsApp</label>
                    <input
                      {...register("phone", { required: "Required" })}
                      placeholder="+1 234 567 890"
                      style={inputStyle}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                    />
                    {errors.phone && <p style={{ fontSize: "11px", color: "#F87171", marginTop: "4px", fontFamily: "var(--font-sans)" }}>{errors.phone.message}</p>}
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label style={labelStyle}>Rice Variety</label>
                    <select
                      {...register("riceType")}
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                    >
                      <option value="Basmati 1121" style={{ background: "#0D2318" }}>Basmati 1121</option>
                      <option value="Basmati 1509" style={{ background: "#0D2318" }}>Basmati 1509</option>
                      <option value="Sona Masoori" style={{ background: "#0D2318" }}>Sona Masoori</option>
                      <option value="Ponni Boiled" style={{ background: "#0D2318" }}>Ponni Boiled</option>
                      <option value="Brown Rice" style={{ background: "#0D2318" }}>Organic Brown Rice</option>
                      <option value="Other" style={{ background: "#0D2318" }}>Other / Multiple</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Quantity Required (MT)</label>
                    <input
                      {...register("quantity")}
                      type="number"
                      placeholder="e.g. 50"
                      style={inputStyle}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle}>Additional Requirements</label>
                  <textarea
                    {...register("message")}
                    placeholder="Describe your packaging preferences, destination port, delivery timeline, or any specific quality requirements..."
                    style={{
                      ...inputStyle,
                      height: "140px",
                      resize: "none",
                      display: "block",
                    }}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 transition-all duration-300 active:scale-[0.99]"
                  style={{
                    padding: "18px",
                    background: isSubmitting ? "rgba(201,161,88,0.5)" : "var(--gold)",
                    color: "var(--brand-dark)",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-sans)",
                    border: "none",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    borderRadius: "2px",
                    boxShadow: isSubmitting ? "none" : "0 4px 20px rgba(201,161,88,0.25)",
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending Inquiry…
                    </>
                  ) : (
                    <>
                      Send Inquiry
                      <Send size={14} />
                    </>
                  )}
                </button>

                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", textAlign: "center", fontFamily: "var(--font-sans)", fontWeight: 300 }}>
                  We respond to all inquiries within one business day.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
