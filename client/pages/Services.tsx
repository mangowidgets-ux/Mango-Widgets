import { Link } from "react-router-dom";
import {
  Palette,
  Code,
  Smartphone,
  Database,
  Brain,
  Zap,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      icon: Palette,
      title: "Design Services",
      description:
        "Create stunning, user-centric designs that captivate and engage.",
      services: [
        "UI/UX Design",
        "User Research",
        "Wireframing & Prototyping",
        "Brand Design",
      ],
    },
    {
      icon: Code,
      title: "Development Services",
      description:
        "Build robust, scalable applications with cutting-edge technology.",
      services: [
        "Frontend Development",
        "Backend Development",
        "Full Stack Solutions",
        "API Development",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Services",
      description:
        "Develop powerful mobile applications for iOS and Android platforms.",
      services: [
        "Native iOS Development",
        "Native Android Development",
        "Cross-Platform Development",
        "App Maintenance",
      ],
    },
    {
      icon: Brain,
      title: "AI & ML Solutions",
      description:
        "Leverage artificial intelligence and machine learning for business growth.",
      services: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
      ],
    },
    {
      icon: Database,
      title: "Data Solutions",
      description: "Transform data into actionable insights with big data solutions.",
      services: [
        "Data Analytics",
        "Big Data Processing",
        "Data Visualization",
        "Database Optimization",
      ],
    },
    {
      icon: Zap,
      title: "QA & Testing",
      description: "Ensure quality and reliability through comprehensive testing.",
      services: [
        "Manual Testing",
        "Automated Testing",
        "Performance Testing",
        "Security Testing",
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center justify-center bg-background dark:bg-[#0a0e27] relative py-20">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground dark:text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-foreground/70 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions designed to elevate your business and bring
            your vision to life.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-card to-background dark:from-slate-900/50 dark:to-[#0a0e27]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-background dark:bg-[#0a0e27] rounded-xl border border-border dark:border-slate-800 hover:shadow-lg hover:shadow-accent/10 dark:hover:shadow-cyan-400/10 transition-all duration-300 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-10 h-10 text-accent dark:text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold text-foreground dark:text-white mb-3">
                    {category.title}
                  </h3>
                  <p className="text-foreground/70 dark:text-gray-400 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <ul className="space-y-2">
                    {category.services.map((service, i) => (
                      <li
                        key={i}
                        className="text-sm text-foreground/60 dark:text-gray-400 flex items-start gap-2"
                      >
                        <ArrowRight className="w-4 h-4 text-accent dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-accent/10 dark:bg-cyan-400/10 border-t border-accent/20 dark:border-cyan-400/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-6">
            Ready to Transform Your Project?
          </h2>
          <p className="text-lg text-foreground/70 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help achieve your business goals.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-accent dark:bg-cyan-400 text-white dark:text-slate-900 rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 dark:hover:shadow-cyan-400/50 transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
