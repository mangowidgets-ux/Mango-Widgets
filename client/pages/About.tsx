import { Link } from "react-router-dom";
import { Users, Target, Lightbulb, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center justify-center bg-background dark:bg-[#0a0e27] relative">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground dark:text-white mb-6">
            About Mango Widgets
          </h1>
          <p className="text-xl text-foreground/70 dark:text-gray-300 max-w-2xl mx-auto">
            We're a team of passionate designers and developers building the future of digital experiences.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="bg-card dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Story */}
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold text-foreground dark:text-white mb-4">
                Our Story
              </h2>
              <p className="text-lg text-foreground/70 dark:text-gray-400 leading-relaxed mb-4">
                Founded with a vision to revolutionize digital experiences, Mango Widgets has grown into a trusted partner for businesses looking to innovate and scale. Our journey began with a simple belief: great design and engineering can transform businesses.
              </p>
              <p className="text-lg text-foreground/70 dark:text-gray-400 leading-relaxed">
                Today, we work with startups and enterprises across industries, delivering solutions that balance aesthetics with functionality.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <div className="p-8 bg-background dark:bg-[#0a0e27] rounded-lg border border-border dark:border-slate-800">
                <Users className="w-8 h-8 text-accent dark:text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-foreground dark:text-white mb-2">
                  Client-Centric
                </h3>
                <p className="text-foreground/70 dark:text-gray-400">
                  We prioritize understanding your needs and delivering solutions that exceed expectations.
                </p>
              </div>

              <div className="p-8 bg-background dark:bg-[#0a0e27] rounded-lg border border-border dark:border-slate-800">
                <Lightbulb className="w-8 h-8 text-accent dark:text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-foreground dark:text-white mb-2">
                  Innovation First
                </h3>
                <p className="text-foreground/70 dark:text-gray-400">
                  We embrace cutting-edge technologies and methodologies to create forward-thinking solutions.
                </p>
              </div>

              <div className="p-8 bg-background dark:bg-[#0a0e27] rounded-lg border border-border dark:border-slate-800">
                <Target className="w-8 h-8 text-accent dark:text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-foreground dark:text-white mb-2">
                  Quality Excellence
                </h3>
                <p className="text-foreground/70 dark:text-gray-400">
                  Every project is treated with meticulous attention to detail and rigorous quality standards.
                </p>
              </div>
            </div>

            {/* Team */}
            <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <h2 className="text-3xl font-bold text-foreground dark:text-white mb-4">
                Our Team
              </h2>
              <p className="text-lg text-foreground/70 dark:text-gray-400 leading-relaxed mb-4">
                Our team comprises talented designers, developers, and strategists from diverse backgrounds. With over 10 years of combined experience, we bring expertise across web, mobile, and enterprise solutions.
              </p>
              <p className="text-lg text-foreground/70 dark:text-gray-400 leading-relaxed">
                We believe in continuous learning and foster a culture of creativity, collaboration, and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-background dark:bg-[#0a0e27]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-foreground/70 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent dark:bg-cyan-400 text-white dark:text-slate-900 rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 dark:hover:shadow-cyan-400/50 transition-all"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
