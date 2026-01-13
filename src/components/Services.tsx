import { Cog, Wrench, Settings, Ruler, Factory, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import machinedParts from "@/assets/machined-parts.jpg";

const Services = () => {
  const services = [
    {
      icon: Cog,
      title: "Centro de Usinagem CNC",
      description:
        "Usinagem CNC 3 eixos com movimentação simultânea e repetibilidade superior para peças complexas.",
      features: ["Alta Precisão", "Peças Complexas", "Automação"],
    },
    {
      icon: Wrench,
      title: "Ferramentaria Completa",
      description:
        "Produção de dispositivos, gabaritos, ferramentas e protótipos com estrutura completa.",
      features: ["Torno Convencional", "Fresadora", "Solda TIG/MIG"],
    },
    {
      icon: Settings,
      title: "Fabricação de Peças",
      description:
        "Peças únicas e pequenos lotes com qualidade e precisão para sua produção.",
      features: ["Peças Únicas", "Pequenos Lotes", "Nacionalização"],
    },
    {
      icon: Ruler,
      title: "Controle de Qualidade",
      description:
        "Rastreabilidade completa assegurando que qualquer ajuste seja feito de forma ágil.",
      features: ["Inspeção Rigorosa", "Rastreabilidade", "Certificação"],
    },
  ];

  const sectors = [
    { name: "Automotivo", icon: Factory },
    { name: "Aeronáutico", icon: Factory },
    { name: "Industrial", icon: Factory },
    { name: "Mineração", icon: Factory },
    { name: "Agrícola", icon: Factory },
    { name: "Petróleo e Gás", icon: Factory },
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Services Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wide text-sm">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Soluções Completas em Usinagem
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos um portfólio completo de serviços de usinagem de precisão 
            para atender às mais exigentes demandas industriais.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sectors Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-semibold uppercase tracking-wide text-sm">
              Áreas de Atuação
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-6">
              Atendemos Diversos Setores Industriais
            </h3>
            <p className="text-muted-foreground mb-8">
              Nossa expertise abrange múltiplos segmentos da indústria, oferecendo 
              soluções customizadas para cada necessidade específica.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {sectors.map((sector, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-secondary rounded-lg hover:bg-primary/5 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <sector.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{sector.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={machinedParts}
              alt="Peças usinadas FEMAP"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
