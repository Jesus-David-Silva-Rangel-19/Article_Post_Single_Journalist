
import { Link } from "react-router-dom";
import { Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <Link to="/" className="text-6xl font-alegreya font-black text-white">
            Globe<span className="text-red-500">.</span>
          </Link>
          
          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="#" className="hover:text-article-accent transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-article-accent transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-article-accent transition-colors">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © 2024 Globe. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
