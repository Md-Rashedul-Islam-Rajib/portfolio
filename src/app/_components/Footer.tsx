import Link from "next/link";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-3xl">
            Ready to take <span className="text-sky-500">your</span> digital
            presence to the next level?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
          <Link
            href="/contact"
            className="group flex items-center gap-2 bg-transparent hover:bg-white/10 text-white px-6 py-3 rounded-full border border-white/20 transition-all duration-300"
          >
            <span className="font-medium">CONTACT ME NOW</span>
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Md Rashedul Islam. All rights reserved.
          </p>

          <div className="flex space-x-4">
            <Link
              href="https://github.com/Md-Rashedul-Islam-Rajib"
              aria-label="GitHub"
              className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-colors duration-300"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/rashedul-islam-rajib"
              aria-label="LinkedIn"
              className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-colors duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </Link>

            <Link
              href="mailto:rajib5570@gmail.com"
              aria-label="Email"
              className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-colors duration-300"
            >
              <Mail className="h-5 w-5" />
            </Link>
            <Link
              href="https://wa.me/qr/2H76PJHTCTAKA1"
              aria-label="WhatsApp"
              className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-colors duration-300"
            >
              <MessageCircle className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
