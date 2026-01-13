import { Phone, Mail, MapPin } from "lucide-react";
import logoFemap from "@/assets/logo-femap.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#sobre", label: "Sobre Nós" },
    { href: "#servicos", label: "Serviços" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img src={logoFemap} alt="FEMAP Usinagem" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/70 mb-4 max-w-md">
              Especialistas em usinagem de alta precisão, oferecendo soluções 
              completas para os setores automotivo, industrial, aeronáutico e muito mais.
            </p>
            <p className="text-primary-foreground/50 text-sm">
              Mais de 30 anos de experiência no mercado.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Phone className="h-4 w-4 text-primary" />
                (62) 3539-1712
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Mail className="h-4 w-4 text-primary" />
                femapusinagem68@gmail.com
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm">
                  Av. São Jorge, Qd.47, N 1151, Goiânia - GO
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} FEMAP Usinagem. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/50 text-sm">
            CEP: 74685-490 | CNPJ disponível sob consulta
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
