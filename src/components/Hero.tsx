import { ArrowRight, Award, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-machining.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/60" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-primary/30">
            Há mais de 30 anos de experiência no mercado
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Excelência em{" "}
            <span className="text-primary">Usinagem</span> de Alta Precisão
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl">
            Fabricação de peças e componentes de alta precisão para setores automotivo, 
            industrial, aeronáutico e muito mais. Soluções rápidas com qualidade superior.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" asChild className="group">
              <a href="#contato">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
            >
              <a href="#servicos">Nossos Serviços</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <div className="p-3 rounded-lg bg-primary/20 backdrop-blur-sm">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-lg">+30 Anos</p>
                <p className="text-sm text-primary-foreground/70">de Experiência</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <div className="p-3 rounded-lg bg-primary/20 backdrop-blur-sm">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-lg">Alta Precisão</p>
                <p className="text-sm text-primary-foreground/70">Garantia de Qualidade</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <div className="p-3 rounded-lg bg-primary/20 backdrop-blur-sm">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-lg">Prazo</p>
                <p className="text-sm text-primary-foreground/70">Cumprimento Garantido</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
