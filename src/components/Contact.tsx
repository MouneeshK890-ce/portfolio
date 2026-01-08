import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import confetti from "canvas-confetti";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sent || sending) return;

    setSending(true);
    setError(null);

    try {
      const response = await fetch("https://formspree.io/f/xwprblja", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSent(true);
        setFormData({ name: "", email: "", message: "" });

        // 🎉 Confetti once
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#22c55e", "#16a34a", "#4ade80"],
        });
      } else {
        setError("Failed to send message. Try again!");
      }
    } catch {
      setError("An error occurred. Try again!");
    } finally {
      setSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden w-full">
      <div className="absolute bottom-20 left-10 w-60 h-60 sm:w-80 md:w-96 md:h-96 bg-secondary/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 gradient-hero mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Intrested in working together? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="lg:flex lg:gap-12 lg:items-stretch">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 flex flex-col flex-1"
          >
            <Card className="p-8 gradient-card border-primary/20 backdrop-blur-sm flex-1">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <InfoItem
                icon={<Mail className="h-5 w-5" />}
                title="Email"
                value="mouneesh.kandhasamy@gmail.com"
                href="mailto:mouneesh.kandhasamy@gmail.com"
              />
              <InfoItem
                icon={<Phone className="h-5 w-5" />}
                title="Phone"
                value="+91 9360878498"
                href="tel:+919360878498"
              />
              <InfoItem
                icon={<MapPin className="h-5 w-5" />}
                title="Location"
                value="Chennai, India"
                href="https://www.google.com/maps?q=chennai,India"
              />
            </Card>

            {/* LET'S BUILD TOGETHER — PRESERVED */}
            <Card className="p-8 gradient-accent border-secondary/20 backdrop-blur-sm flex-1">
              <h3 className="text-2xl font-bold mb-4">Let’s Build Together</h3>
              <p>
              I'm actively looking for oppurtunities to work on front-end projects, collaborate with teams, and gain real-world experience.
               If you have a role, project, or feedback - feel free to reach out!
              </p>
            </Card>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col flex-1"
          >
            <Card className="p-8 gradient-card mt-[24px] lg:mt-0 border-primary/20 backdrop-blur-sm flex-1">
              <form onSubmit={handleSubmit} className="space-y-10">
                <Field
                  label="Your Name"
                  id="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={sent}
                />
                <Field
                  label="Your Email"
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={sent}
                />
                <Field
                  label="Your Message"
                  id="message"
                  textarea
                  placeholder="Tell me about the Oppurtunity or project..."
                  value={formData.message}
                  onChange={handleChange}
                  disabled={sent}
                />

                {/* BUTTON — BEHAVIOR ONLY */}
                <motion.button
                  type="submit"
                  disabled={sent || sending}
                  whileHover={!sent && !sending ? { scale: 1.05 } : {}}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 360, damping: 22 }}
                  className={`
                    w-full h-12 rounded-xl font-semibold
                    flex items-center justify-center gap-2
                    ${
                      sent
                        ? "bg-emerald-500 text-white cursor-not-allowed"
                        : sending
                        ? "bg-primary/80 text-white"
                        : "gradient-hero glow-primary"
                    }
                  `}
                >
                  <AnimatePresence mode="wait">
                    {sent ? (
                      <motion.span key="sent">✓ Sent Successfully</motion.span>
                    ) : (
                      <motion.span key="send" className="flex gap-2">
                        <Send className="h-4 w-4" />
                        {sending ? "Sending..." : "Send Message"}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>

              {/* SUCCESS — PERMANENT */}
              {sent && (
                <div className="mt-8 text-green-500 text-lg font-semibold text-center">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {error && (
                <div className="mt-4 text-red-500 font-semibold text-center">
                  {error}
                </div>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ---------- helpers (UI preserved) ---------- */

const InfoItem = ({ icon, title, value, href }: any) => (
  <div className="flex items-start gap-4 mb-6">
    <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold mb-1">{title}</h4>
      <a href={href} className="text-muted-foreground hover:text-primary">
        {value}
      </a>
    </div>
  </div>
);

const Field = ({ label, id, textarea, ...props }: any) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium mb-2">
      {label}
    </label>
    {textarea ? (
      <Textarea
        id={id}
        name={id}
        rows={5}
        className="bg-background/50 border-primary/20"
        {...props}
      />
    ) : (
      <Input
        id={id}
        name={id}
        className="bg-background/50 border-primary/20"
        {...props}
      />
    )}
  </div>
);
