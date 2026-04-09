import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <img src="./images/logo-name.png" alt="logo"  />
            
            <p className="text-sm opacity-75 mb-4">
              Creating seamless digital experiences and cutting-edge solutions..
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/mangowidgets/reels/?hl=en"
                className="hover:text-accent transition-colors"
                aria-label="Instagram"
                target="_blank"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services"
                  className="opacity-75 hover:opacity-100 hover:text-accent transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="opacity-75 hover:opacity-100 hover:text-accent transition-colors"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="opacity-75 hover:opacity-100 hover:text-accent transition-colors"
                >
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="opacity-75 hover:opacity-100 hover:text-accent transition-colors"
                >
                  Blockchain Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="opacity-75 hover:opacity-100 hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="opacity-75 hover:opacity-100 hover:text-accent transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/clients"
                  className="opacity-75 hover:opacity-100 hover:text-accent transition-colors"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="opacity-75 hover:opacity-100 hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 opacity-75">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>mangowidgets@gmail.com</span>
              </li>
              <li className="flex gap-2 opacity-75">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+91 8125569195</span>
              </li>
              <li className="flex gap-2 opacity-75">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Bangalore, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="bg-accent/10 rounded-lg p-8 mb-12 text-center border border-accent/20">
          <h3 className="text-2xl font-bold mb-2">Got a Project?</h3>
          <p className="opacity-75 mb-4">
            Let's talk about how we can help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:mangowidgets@gmail.com"
              className="px-6 py-2 bg-accent hover:bg-accent/90 rounded-lg font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4 inline mr-2" />
              Chat with Sales Team
            </a>
            <a
              href="tel:+91-800-000-0000"
              className="px-6 py-2 border border-accent text-accent hover:bg-accent/10 rounded-lg font-medium transition-colors"
            >
              <Phone className="w-4 h-4 inline mr-2" />
              Inquiry Call
            </a>
          </div>
        </div> */}

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 text-sm opacity-75 text-center">
          <p>
            &copy; {currentYear} Mango Widgets. All rights reserved. | Privacy
            Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};
