import { useState } from "react";
import { Mail, MapPin, Phone, Send, MessageSquare, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "Email", value: "safwankamar77@gmail.com", href: "mailto:safwankamar77@gmail.com" },
  { icon: Phone, label: "Phone", value: "+971 563257086", href: "tel:+971563257086" },
  { icon: MapPin, label: "Location", value: "Dubai, UAE (Native: Kerala, India)", href: "#" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/safwanonakkal", label: "LinkedIn" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 opacity-0 animate-fade-in">
              <MessageSquare size={20} className="text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Get In Touch
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Let's Work Together
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Have a project in mind or want to discuss blockchain, AI, or development opportunities? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 md:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 opacity-0 animate-fade-in-left" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 shadow-material-sm hover:shadow-material transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-material transition-all">
                      <info.icon size={20} className="text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {info.label}
                      </div>
                      <div className="font-medium text-foreground">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Connect With Me
                </h3>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 shadow-material-sm hover:shadow-material transition-all"
                      aria-label={social.label}
                    >
                      <social.icon size={22} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="mt-10 p-4 rounded-xl bg-success/10 border border-success/20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
                  <span className="text-sm font-medium text-success">Available for Work</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Currently open to freelance projects and full-time opportunities.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 opacity-0 animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-material">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12 shadow-material-sm"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12 shadow-material-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Project Discussion"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="h-12 shadow-material-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, requirements, or any questions you have..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="resize-none shadow-material-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full shadow-material hover:shadow-material-lg transition-shadow"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;