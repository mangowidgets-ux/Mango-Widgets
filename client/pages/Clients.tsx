import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Clients = () => {
  const industries = [
    {
      title: "Banking & Fintech",
      description: "Building secure, compliant financial solutions.",
      icon: "🏦",
    },
    {
      title: "E-Commerce",
      description: "Creating engaging shopping experiences.",
      icon: "🛒",
    },
    {
      title: "Gaming",
      description: "Developing immersive gaming platforms.",
      icon: "🎮",
    },
    {
      title: "Sports & E-Sports",
      description: "Powering sports technology solutions.",
      icon: "⚽",
    },
    {
      title: "Media & News",
      description: "Building content distribution platforms.",
      icon: "📰",
    },
    {
      title: "Healthcare",
      description: "Creating patient-centric health solutions.",
      icon: "⚕️",
    },
    {
      title: "AgriTech",
      description: "Revolutionizing agriculture with technology.",
      icon: "🌾",
    },
    {
      title: "Travel & Mobility",
      description: "Transforming travel experiences.",
      icon: "✈️",
    },
    {
      title: "E-Learning",
      description: "Building educational platforms.",
      icon: "📚",
    },
    {
      title: "Real Estate",
      description: "Innovating property solutions.",
      icon: "🏠",
    },
    {
      title: "Supply Chain",
      description: "Optimizing logistics and distribution.",
      icon: "📦",
    },
    {
      title: "Manufacturing",
      description: "Digitizing manufacturing processes.",
      icon: "🏭",
    },
  ];

  const clientLogos = [
    "Butterflies",
    "TechCorp",
    "InnovateLabs",
    "DigitalFirst",
    "CloudSync",
    "SmartOps",
    "VentureTech",
    "FutureWorks",
    "DataDrive",
    "GrowthPath",
    "EliteCode",
    "NextGen",
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center justify-center bg-background dark:bg-[#0a0e27] relative">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground dark:text-white mb-6">
            Our Clients
          </h1>
          <p className="text-xl text-foreground/70 dark:text-gray-300 max-w-2xl mx-auto">
            We're proud to work with innovative companies across diverse industries.
          </p>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 md:py-32 bg-card dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground dark:text-white mb-12 text-center">
            Industries We Serve
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="p-6 bg-background dark:bg-[#0a0e27] rounded-lg border border-border dark:border-slate-800 hover:shadow-lg hover:shadow-accent/10 dark:hover:shadow-cyan-400/10 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <p className="text-4xl mb-3">{industry.icon}</p>
                <h3 className="text-lg font-bold text-foreground dark:text-white mb-2">
                  {industry.title}
                </h3>
                <p className="text-foreground/70 dark:text-gray-400 text-sm">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 md:py-32 bg-background dark:bg-[#0a0e27]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground dark:text-white mb-12 text-center">
            Trusted Partners
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="p-6 bg-card dark:bg-slate-900/50 rounded-lg border border-border dark:border-slate-800 flex items-center justify-center text-center hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 40}ms` }}
              >
                <p className="font-semibold text-foreground dark:text-white text-sm">
                  {client}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-20 md:py-32 bg-card dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <p className="text-4xl md:text-5xl font-bold text-accent dark:text-cyan-400 mb-2">
                150+
              </p>
              <p className="text-foreground/70 dark:text-gray-400">Active Clients</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <p className="text-4xl md:text-5xl font-bold text-accent dark:text-cyan-400 mb-2">
                500+
              </p>
              <p className="text-foreground/70 dark:text-gray-400">Projects</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <p className="text-4xl md:text-5xl font-bold text-accent dark:text-cyan-400 mb-2">
                12+
              </p>
              <p className="text-foreground/70 dark:text-gray-400">Industries</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <p className="text-4xl md:text-5xl font-bold text-accent dark:text-cyan-400 mb-2">
                98%
              </p>
              <p className="text-foreground/70 dark:text-gray-400">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-background dark:bg-[#0a0e27]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-lg text-foreground/70 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve new heights.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent dark:bg-cyan-400 text-white dark:text-slate-900 rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 dark:hover:shadow-cyan-400/50 transition-all"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Clients;
