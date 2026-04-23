import { Link } from "react-router-dom";
import {
  Zap,
  Palette,
  Code,
  Smartphone,
  Database,
  // Brain,
  // Headphones,
  // Cube,
  TrendingUp,
  Users,
  Award,
  Rocket,
  ArrowRight,
  Star,
} from "lucide-react";
import { WordReveal } from "../components/ui/WordReveal";
import { WaveVisualizer } from "../components/ui/WaveVisualizer";

const Index = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Designing elevated experiences and intuitive interfaces for the users.",
    },
    {
      icon: Code,
      title: "Front-end Development",
      description:
        "Developing optimal user experiences and streamlined API integration.",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Building a robust, scalable mobile application encompassing both iOS and Android platforms.",
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "Constructing resilient, adaptable, and proficient backend architecture.",
    },
    {
      icon: Zap,
      title: "QA Testing",
      description:
        "Assessing the created software guaranteeing its high standard of quality and reliability.",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description:
        "Promoting your brand, products, and services through visually pleasing visuals.",
    },
  ];

  const features = [
    {
      icon: Rocket,
      title: "MVP Development",
      description:
        "Fast-track your product to market with our rapid MVP development services.",
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description:
        "Scale your business with innovative solutions designed for sustainable growth.",
    },
    {
      icon: Award,
      title: "Enterprise Solutions",
      description:
        "Robust, scalable solutions tailored for large-scale enterprise needs.",
    },
  ];

  const stats = [
    { label: "150+", description: "Happy Clients" },
    { label: "500+", description: "Projects Delivered" },
    { label: "50+", description: "Team Members" },
    { label: "10+", description: "Years Experience" },
  ];

  const testimonials = [
    {
      name: "Saravana Kumar",
      company: "butterfflies | Architects & Engineers | India",
      text: "Exceptional team that delivered beyond our expectations. Highly recommended!",
      rating: 5,
    },
    {
      name: "Raul's",
      company: "Martis Laggers | Construction | Real Estate | Australia",
      text: "Professional, responsive, and results-driven. A pleasure to work with.",
      rating: 5,
    },
    {
      name: "Ramana murthy",
      company: "Finbeheer | Fintech | Europe",
      text: "Outstanding quality and timely delivery. They truly understand our vision.",
      rating: 5,
    },
  ];

  const clients = [
    "Butterflies",
    "TechCorp",
    "InnovateLabs",
    "DigitalFirst",
    "CloudSync",
    "SmartOps",
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-20 min-h-[calc(100vh-80px)] flex items-center justify-center bg-white relative overflow-hidden">
                 {/* Light mode floating elements */}

        <div className="absolute inset-0 pointer-events-none">
          {/* <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-8 bg-gradient-to-r from-blue-200 to-purple-200 top-10 -left-48" style={{animation: 'float 20s ease-in-out infinite'}} /> */}
          {/* <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-8 bg-gradient-to-r from-cyan-200 to-blue-200 bottom-10 -right-48" style={{animation: 'float 25s ease-in-out infinite', animationDelay: '5s'}} /> */}
           {/* <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" /> */}
        </div> 
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
              <WordReveal
                baseText="We design and develop human experiences that are"
                animatedWords={["engaging", "impactful", "effective"]}
                displayDuration={3000}
                typingSpeed={50}
                className="inline"
              />
            </h1>
            {/* <p className="text-lg md:text-xl text-foreground/75 mb-8 max-w-2xl mx-auto">
              We provide web app design, front-end development, mobile UI
              design, mobile app development & more.
            </p> */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="px-8 py-3 bg-button-yellow text-gray-900 rounded-lg font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center gap-2"
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Wave Visualizer */}
            <div className="mt-12 pt-12">
              <WaveVisualizer />
            </div>

            {/* <div className=" mt-16 py-16 border-t">
              <h3 className="text-sm text-foreground/60 mb-4 font-medium">
                Clients: UX, UI, & Development
              </h3>
            <div className="flex mt-12 items-center gap-8">
            <div className="">
              <p className="text-2xl font-semibold text-foreground">
               Butterflies
              </p>
              <img src="./images/butterfflies.svg" alt="butterfflies"/>

              
            </div>

            
            <div className="">
              <img src="./images/ml_logo.jpeg" alt="ml"/>

           
            </div>

            <div className="">
              <img src="./images/finbeheer.jpg" alt="finbeheer"/>

             
            </div>
            </div>
            </div> */}
              
              {/* <p className="text-xs mt-4 text-foreground/50 uppercase tracking-wider">
                Indian Client
              </p>  */}

               {/* <p className="text-xs mt-4 text-foreground/50 uppercase tracking-wider">
                Europe Client
              </p>  */}
              {/* <p className="text-2xl font-semibold text-foreground">
                Butterflies
              </p>
              <p className="text-xs text-foreground/50 uppercase tracking-wider">
                Architects & Engineers
              </p> */}


                 {/* <p className="text-xs mt-4 text-foreground/50 uppercase tracking-wider">
                Australia  Client
              </p>  */}
              {/* <p className="text-2xl font-semibold text-foreground">
                Butterflies
              </p>
              <p className="text-xs text-foreground/50 uppercase tracking-wider">
                Architects & Engineers
              </p> */}

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-16">
            <p className="text-accent font-semibold uppercase tracking-wider mb-2">
              Our Expertise
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Experience a radically sensible approach to user-centered design.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-background rounded-xl border border-border card-hover-lift group animate-fade-in-up relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative z-10">
                    <Icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-card rounded-xl border border-border text-center card-hover-lift animate-fade-in-up relative overflow-hidden group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="inline-block p-4 bg-accent/10 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-foreground/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 md:py-32 bg-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-4xl md:text-5xl font-bold text-background mb-2">
                  {stat.label}
                </p>
                <p className="text-sm md:text-base text-background/70">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section className="py-20 bg-muted relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-background rounded-xl border border-border card-hover-lift animate-fade-in-up relative overflow-hidden group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-foreground/60">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      {/* <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Trusted by Industry Leaders
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-lg border border-border flex items-center justify-center text-center card-hover-lift animate-fade-in-up relative overflow-hidden group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <p className="font-semibold text-foreground relative z-10">
                  {client}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-accent border-y projectbg border-accent/30 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent/10" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Got a Project? Talk To Us
            </h2>
            <p className="text-lg text-foreground/75 mb-8">
              Let's collaborate and create something amazing together.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-foreground text-background rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
