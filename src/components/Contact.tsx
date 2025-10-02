import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("https://formspree.io/f/xwprblja",{ 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSent(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 3000);
      } else {
        setError("Failed to send message. Try again!");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred. Try again!");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden w-full">
      <div className="absolute bottom-20 left-10 w-60 h-60 sm:w-80 md:w-96 md:h-96 bg-secondary/20 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 gradient-hero mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
           I’m a fresher front-end developer excited to learn, grow, and contribute. 
           Whether it’s guidance, collaboration, or an opportunity to start my career, 
           I’d love to connect with you.
          </p>
        </motion.div>

        <div className="lg:flex lg:gap-12 lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 flex flex-col flex-1"
          >
            <Card className="p-8 gradient-card border-primary/20 backdrop-blur-sm flex-1">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
  {/* Email */}
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
      <Mail className="h-5 w-5" />
    </div>
    <div>
      <h4 className="font-semibold mb-1">Email</h4>
      <a
        href="mailto:mouneesh.kandhasamy@gmail.com"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        mouneesh.kandhasamy@gmail.com
      </a>
    </div>
  </div>

  {/* Phone */}
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
      <Phone className="h-5 w-5" />
    </div>
    <div>
      <h4 className="font-semibold mb-1">Phone</h4>
      <a
        href="tel:+919360878498"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        +91 9360878498
      </a>
    </div>
  </div>

  {/* Location */}
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
      <MapPin className="h-5 w-5" />
    </div>
    <div>
      <h4 className="font-semibold mb-1">Location</h4>
      <a
        href="https://www.google.com/maps?q=Tamilnadu,India"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        Tamilnadu, India
      </a>
    </div>
  </div>
</div>
            </Card>

            <Card className="p-8 gradient-accent border-secondary/20 backdrop-blur-sm flex-1">
              <h3 className="text-2xl font-bold mb-4">Let’s Build Together</h3>
              <p className="text-gray-800">
                As I begin my journey as a front-end developer, I’m eager to work on real-world 
                projects, explore creative ideas, and gain hands-on experience. 
                If you have opportunities or advice, I’d be glad to hear from you!
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col flex-1"
          >
            <Card className="p-8 gradient-card mt-[24px] lg:mt-0 border-primary/20 backdrop-blur-sm flex-1">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary glow-primary focus:glow-primary transition-smooth"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary glow-primary focus:glow-primary transition-smooth"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background/50 border-primary/20 focus:border-primary glow-primary focus:glow-primary transition-smooth resize-none"
                    placeholder="Write your message here..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full gradient-hero glow-primary hover:scale-105 transition-smooth"
                  size="lg"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
               <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="mt-4 text-green-500 font-semibold text-center"
                  >
                   Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                 {error && (
                   <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: 20 }}
                     className="mt-4 text-red-500 font-semibold text-center"
                   >
                     {error}
                   </motion.div>
                 )}
              </AnimatePresence>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
