import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Twitter,
  Linkedin,
  Github,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#0F2A44] to-[#05111D] text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent opacity-30"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="p-2 bg-white/5 rounded-xl border border-white/10 group-hover:border-secondary/50 transition-colors">
                <Image
                  src="/logo.png"
                  alt="Anivera Logo"
                  width={200}
                  height={200}
                  className="w-20 h-20 object-contain brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Empowering businesses with scalable, future-proof technology
              solutions. We engineer the digital systems of tomorrow.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((Social, index) => (
                <a
                  key={index}
                  href={Social.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1 border border-white/5 hover:border-transparent"
                >
                  <Social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 !text-white border-b border-white/10 pb-2 inline-block">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Our Work", href: "/work" },
                { name: "Industries", href: "/industries" },
                { name: "Careers", href: "/careers" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-secondary transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 opacity-0 group-hover:opacity-100 text-secondary mr-1">
                      →
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services/Legals */}
          <div>
            <h3 className="text-lg font-bold mb-6 !text-white border-b border-white/10 pb-2 inline-block">
              Solutions
            </h3>
            <ul className="space-y-3">
              {[
                "SaaS Development",
                "Enterprise Systems",
                "Cloud Architecture",
                "AI & Automation",
                "Consulting",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-secondary transition-colors text-sm block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h3 className="text-sm font-bold mb-4 !text-white">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy"
                    className="text-xs text-gray-500 hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-xs text-gray-500 hover:text-white"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 !text-white border-b border-white/10 pb-2 inline-block">
              Stay Connected
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for the latest tech insights.
            </p>
            <div className="flex mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border border-white/10 text-white px-4 py-2.5 rounded-l-lg focus:outline-none focus:border-secondary w-full text-sm placeholder:text-gray-400"
              />
              <button className="bg-secondary hover:bg-secondary-dark text-white px-4 py-2.5 rounded-r-lg transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@aniveratech.com"
                  className="hover:text-white transition-colors"
                >
                  info@aniveratech.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>
                  Global Technology Hub
                  <br />
                  India • USA • UAE
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            Copyright &copy; {currentYear}{" "}
            <span className="font-semibold text-gray-300">
              Anivera Technologies Pvt. Ltd.
            </span>{" "}
            All rights reserved.
          </p>

          <p className="text-gray-500 text-sm flex items-center gap-1">
            Design and developed by
            <a
              href="https://ethicscomputer.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary font-medium transition-colors border-b border-white/20 hover:border-secondary"
            >
              EthicsComputer
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
