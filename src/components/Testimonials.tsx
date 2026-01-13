import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Eduardo",
      company: "Indústria Automotiva",
      role: "Gerente de Compras",
      content:
        "A FEMAP superou nossas expectativas. Peças entregues no prazo com precisão impecável. Reduziram nosso tempo de produção significativamente.",
      rating: 5,
    },
    {
      name: "Marcos Silva",
      company: "Indústria de Plásticos",
      role: "Diretor de Operações",
      content:
        "Parceria de anos com a FEMAP. Confiabilidade e qualidade são marcas registradas. A equipe técnica é extremamente competente e comprometida.",
      rating: 5,
    },
    {
      name: "Amanda Oliveira",
      company: "Setor Aeronáutico",
      role: "Eng. de Produção",
      content:
        "Para peças críticas do setor aeronáutico, a FEMAP é nossa escolha. O controle de qualidade e rastreabilidade são exemplares.",
      rating: 5,
    },
    {
      name: "Roberto Mendes",
      company: "Mineração Industrial",
      role: "Gerente de Manutenção",
      content:
        "A nacionalização de peças feita pela FEMAP nos ajudou a reduzir custos e prazos. Recomendo fortemente para projetos especiais.",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wide text-sm">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-muted-foreground text-lg">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Confira o que eles têm a dizer sobre nossa parceria.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-10 w-10 text-primary/20" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/90 text-lg mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} - {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos Placeholder */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">
            Empresas que confiam em nosso trabalho
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["Green Pack", "Indústrias Locais", "Parceiros Industriais"].map(
              (client, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-muted rounded-lg text-muted-foreground font-medium"
                >
                  {client}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
