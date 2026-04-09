import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Full Stack Development",
      description: "A comprehensive e-commerce solution with advanced features.",
      image: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure and intuitive mobile banking application.",
      image: "bg-gradient-to-br from-green-500 to-green-600",
    },
    {
      title: "AI Analytics Dashboard",
      category: "AI & Data Solutions",
      description: "Real-time analytics dashboard powered by machine learning.",
      image: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
    {
      title: "Social Media Platform",
      category: "Web Development",
      description: "Modern social networking platform with real-time features.",
      image: "bg-gradient-to-br from-pink-500 to-pink-600",
    },
    {
      title: "Healthcare Management System",
      category: "Enterprise Solutions",
      description: "Integrated healthcare management and patient portal system.",
      image: "bg-gradient-to-br from-red-500 to-red-600",
    },
    {
      title: "Supply Chain Optimization",
      category: "Business Solutions",
      description: "Blockchain-based supply chain tracking and verification system.",
      image: "bg-gradient-to-br from-yellow-500 to-yellow-600",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center justify-center bg-background dark:bg-[#0a0e27] relative">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground dark:text-white mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-foreground/70 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped clients achieve their goals.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 md:py-32 bg-card dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-lg border border-border dark:border-slate-800 hover:shadow-lg hover:shadow-accent/20 dark:hover:shadow-cyan-400/20 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className={`h-48 ${project.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>

                {/* Project Info */}
                <div className="p-6 bg-background dark:bg-[#0a0e27]">
                  <p className="text-xs font-semibold text-accent dark:text-cyan-400 uppercase tracking-wider mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold text-foreground dark:text-white mb-2 group-hover:text-accent dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 dark:text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-accent dark:text-cyan-400 font-medium hover:gap-3 transition-all"
                  >
                    View Case Study
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-background dark:bg-[#0a0e27]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-6">
            Inspired by Our Work?
          </h2>
          <p className="text-lg text-foreground/70 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create something amazing for your project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent dark:bg-cyan-400 text-white dark:text-slate-900 rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 dark:hover:shadow-cyan-400/50 transition-all"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
