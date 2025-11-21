import { Link } from "react-router-dom";
import { TrendingUp, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50 mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="rounded-lg bg-gradient-primary p-2">
                <TrendingUp className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                GERA RENDA
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Análises honestas e completas dos melhores produtos digitais para você alcançar seus objetivos.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/cursos-online" className="text-muted-foreground hover:text-primary transition-colors">Cursos Online</Link></li>
              <li><Link to="/marketing-digital" className="text-muted-foreground hover:text-primary transition-colors">Marketing Digital</Link></li>
              <li><Link to="/gastronomia" className="text-muted-foreground hover:text-primary transition-colors">Gastronomia</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Institucional</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><Link to="/politica-privacidade" className="text-muted-foreground hover:text-primary transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/termos-uso" className="text-muted-foreground hover:text-primary transition-colors">Termos de Uso</Link></li>
              <li><Link to="/transparencia" className="text-muted-foreground hover:text-primary transition-colors">Transparência</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} GERA RENDA. Todos os direitos reservados.</p>
          <p className="mt-2">Este site contém links de afiliados. Podemos receber comissões por compras realizadas através desses links.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
