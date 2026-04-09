import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-background dark:bg-[#0a0e27] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent dark:from-cyan-400/5 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <p className="text-8xl md:text-9xl font-bold text-accent dark:text-cyan-400 mb-4 opacity-50">
            404
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-lg text-foreground/70 dark:text-gray-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-8 py-3 bg-accent dark:bg-cyan-400 text-white dark:text-slate-900 rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 dark:hover:shadow-cyan-400/50 transition-all inline-flex items-center justify-center gap-2"
            >
              Return to Home
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-accent dark:border-cyan-400 text-accent dark:text-cyan-400 rounded-lg font-semibold hover:bg-accent/10 dark:hover:bg-cyan-400/10 transition-colors inline-flex items-center justify-center gap-2"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
