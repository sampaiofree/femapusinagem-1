import { Target, Heart, Compass } from "lucide-react";
import qualityImage from "@/assets/quality-control.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description:
        "Garantir que você receba suas peças com precisão e no prazo combinado, sempre com a qualidade que sua produção exige. Ao escolher a FEMAP, você opta por um parceiro de confiança para otimizar seu processo de produção e reduzir retrabalhos.",
    },
    {
      icon: Heart,
      title: "Valores",
      description:
        "Somos um parceiro industrial confiável na fabricação de peças e dispositivos, com alto padrão de qualidade, precisão e cumprimento de prazos. Contamos com profissionais com mais de 30 anos de experiência.",
    },
    {
      icon: Compass,
      title: "Propósito",
      description:
        "Através da parceria com nossos colaboradores buscamos: Comprometimento, colaboração, respeito, foco no cliente e responsabilidade com o meio ambiente.",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src={qualityImage}
                alt="Controle de qualidade FEMAP"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-4xl font-bold">30+</p>
              <p className="text-sm">Anos de Experiência</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-wide text-sm">
              Quem Somos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Especialistas em Usinagem de Precisão
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              A Femap Usinagem é especializada na fabricação de peças e componentes de 
              alta precisão, além da nacionalização de peças, ideais para setores como 
              automotivo, industrial, aeronáutico e muito mais. Garantimos soluções 
              rápidas e com qualidade superior, reduzindo seus custos e prazos de produção.
            </p>

            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
