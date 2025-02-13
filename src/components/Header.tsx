
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b border-article-border">
      <div className="container mx-auto px-4">
        {/* Top Logo */}
        <div className="flex justify-center py-4">
          <Link to="/" className="text-6xl font-alegreya font-black">
            Globe<span className="text-red-500">.</span>
          </Link>
        </div>
        
        {/* Navigation */}
        <nav className="flex items-center justify-between py-4">
          <NavigationMenu>
            <ul className="flex space-x-6 font-medium text-article-title">
              <li><Link to="/" className="hover:text-article-accent">INICIO</Link></li>
              <li><Link to="/mundo" className="hover:text-article-accent">MUNDO</Link></li>
              <li><Link to="/mercado" className="hover:text-article-accent">MERCADO</Link></li>
              <li><Link to="/seguros" className="hover:text-article-accent">SEGUROS</Link></li>
              <li><Link to="/paginas" className="hover:text-article-accent">PÁGINAS</Link></li>
              <li><Link to="/contacto" className="hover:text-article-accent">CONTACTO</Link></li>
            </ul>
          </NavigationMenu>
        </nav>
      </div>
    </header>
  );
};

export default Header;
