import { useState } from "react";
import { Mail, MapPin, MessageCircle, Linkedin, Instagram,  } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xlgoknjz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({ name: "", email: "", company: "", message: "" });
          setSubmitted(false);
        }, 3000);
      } else {
        alert("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Error sending message. Please try again.");
    }
  };

  const offices = [
    {
      name: "Bangalore Office",
      location: "Yesvantpur, Bengaluru, Karnataka 560022",
    },
    {
      name: "Shivamogga Office",
      location: "Durgagudi, Shivamogga - 577201",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center justify-center bg-background dark:bg-[#0a0e27] relative py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground dark:text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-foreground/70 dark:text-gray-300 max-w-2xl mx-auto">
            Our team is here to help you. Reach out and let's discuss your project.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-b from-card to-background dark:from-slate-900/50 dark:to-[#0a0e27]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold text-foreground dark:text-white mb-8">
                Send us a Message
              </h2>
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground dark:text-white mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background dark:bg-[#0a0e27] border border-border dark:border-slate-800 text-foreground dark:text-white focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-cyan-400"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground dark:text-white mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background dark:bg-[#0a0e27] border border-border dark:border-slate-800 text-foreground dark:text-white focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-cyan-400"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground dark:text-white mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background dark:bg-[#0a0e27] border border-border dark:border-slate-800 text-foreground dark:text-white focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-cyan-400"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground dark:text-white mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-background dark:bg-[#0a0e27] border border-border dark:border-slate-800 text-foreground dark:text-white focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-cyan-400"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-accent dark:bg-cyan-400 text-white dark:text-slate-900 rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 dark:hover:shadow-cyan-400/50 transition-all"
                  >
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-8 h-8 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground dark:text-white mb-3">Thank you!</h3>
                  <p className="text-foreground/70 dark:text-gray-300 text-sm">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <div>
                <h2 className="text-3xl font-bold text-foreground dark:text-white mb-8">
                  Our Team is There to Help You
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Mail className="w-6 h-6 text-accent dark:text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground dark:text-white mb-1">
                        Email Us
                      </h3>
                      <a
                        href="mailto:mangowidgets@gmail.com"
                        className="text-foreground/70 dark:text-gray-400 hover:text-accent dark:hover:text-cyan-400 transition-colors"
                      >
                        mangowidgets@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* <div className="flex gap-4">
                    <Phone className="w-6 h-6 text-accent dark:text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground dark:text-white mb-1">
                        Call Us
                      </h3>
                      <a
                        href="tel:+918000000000"
                        className="text-foreground/70 dark:text-gray-400 hover:text-accent dark:hover:text-cyan-400 transition-colors"
                      >
                        +91 8125569195
                      </a>
                    </div>
                  </div> */}

                  <div className="flex gap-4">
                    <MessageCircle className="w-6 h-6 text-accent dark:text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground dark:text-white mb-1">
                        Chat with Sales Team
                      </h3>
                      <a
                      target="_blank"
                        href="https://api.whatsapp.com/send/?phone=8125569195&text&type=phone_number&app_absent=0"
                        className="text-foreground/70 dark:text-gray-400 hover:text-accent dark:hover:text-cyan-400 transition-colors"
                      >
                        +91 8125569195
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Offices */}
              <div className="pt-8 border-t border-border dark:border-slate-800">
                <h3 className="text-2xl font-bold text-foreground dark:text-white mb-6">
                  Visit Us
                </h3>
                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <div key={index}>
                      <p className="font-semibold text-foreground dark:text-white mb-1">
                        {office.name}
                      </p>
                      <p className="text-sm text-foreground/70 dark:text-gray-400 mb-2">
                        {office.location}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-border dark:border-slate-800">
                <p className="text-sm font-medium text-foreground dark:text-white mb-4">
                  Follow Us
                </p>
                <div className="flex gap-4">
                  {/* <a
                    href="#"
                    className="p-2 rounded-lg hover:bg-secondary dark:hover:bg-slate-800 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a> */}
                  <a
                    href="https://www.instagram.com/mangowidgets/reels/?hl=en"
                    className="p-2 rounded-lg hover:bg-secondary dark:hover:bg-slate-800 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
