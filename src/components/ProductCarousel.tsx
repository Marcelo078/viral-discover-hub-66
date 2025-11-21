import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Star } from "lucide-react";

interface Product {
  title: string;
  author: string;
  description: string;
  buyLink: string;
  rating: number;
  category: string;
}

const products: Product[] = [
  {
    title: "FÁBRICA DE COMISSÕES",
    author: "Deborah Oliveira",
    description: "Aprenda a criar um negócio rentável de afiliados do zero",
    buyLink: "https://pay.kiwify.com.br/N3NYPE4?afid=P8U9TjQM",
    rating: 4.9,
    category: "Marketing Digital"
  },
  {
    title: "SHORTS VIRAIS",
    author: "Matheus Bolognesi",
    description: "Domine a arte de criar conteúdo viral no YouTube Shorts",
    buyLink: "https://pay.kiwify.com.br/NizgIAY?afid=HqmgdEky",
    rating: 4.8,
    category: "Criação de Conteúdo"
  },
  {
    title: "Influencer Milionário LEGACY",
    author: "TIO SAN",
    description: "Treinamento completo para se tornar um influenciador de sucesso",
    buyLink: "https://kiwify.app/ge9QR3E?afid=alNgRff5",
    rating: 4.9,
    category: "Marketing Digital"
  },
  {
    title: "Método ADL",
    author: "Pâmela Zelia Pan Toniolo",
    description: "Aprenda a comprar imóveis antes do leilão com segurança",
    buyLink: "https://kiwify.app/itNNPGK?afid=sczZtkvA",
    rating: 4.7,
    category: "Investimentos"
  },
  {
    title: "700 Receitas Bolos, Tortas e Sobremesas",
    author: "Lucas Andrade",
    description: "Coleção completa de receitas para empreender na gastronomia",
    buyLink: "https://kiwify.app/Ae5oNZe?afid=eDWLErf4",
    rating: 4.8,
    category: "Gastronomia"
  },
  {
    title: "Super Presell",
    author: "Nodz",
    description: "Técnicas avançadas de pré-venda para aumentar conversões",
    buyLink: "https://kiwify.app/qeDlA3h?afid=6Kybii5i",
    rating: 4.6,
    category: "Marketing Digital"
  },
  {
    title: "ACADEMIA DA RIQUEZA DIGITAL",
    author: "Ana Paula Noleto",
    description: "Formação completa em marketing digital e empreendedorismo",
    buyLink: "https://kiwify.app/Xoqjz5T?afid=JbfKYymn",
    rating: 4.9,
    category: "Marketing Digital"
  },
  {
    title: "Método Delivery de Sucesso",
    author: "Restaurante Comeria Ltda",
    description: "Sistema completo para escalar seu negócio de delivery",
    buyLink: "https://kiwify.app/LPGXVer?afid=Eq7whBMe",
    rating: 4.7,
    category: "Gastronomia"
  },
  {
    title: "COMUNIDADE MILHAS 3.0",
    author: "Silvino Toiti",
    description: "Aprenda a viajar gastando pouco usando milhas aéreas",
    buyLink: "https://kiwify.app/ixrSBze?afid=U2Uv4XK5",
    rating: 4.8,
    category: "Viagens"
  },
  {
    title: "Método Ondas Perfeitas",
    author: "Paulo Militão",
    description: "Estratégia comprovada para lucrar com trading",
    buyLink: "https://kiwify.app/mEnAtSz?afid=Ol9dVQ7B",
    rating: 4.6,
    category: "Investimentos"
  }
];

interface ProductCarouselProps {
  title?: string;
}

const ProductCarousel = ({ title = "Produtos Recomendados" }: ProductCarouselProps) => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {products.map((product, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                        {product.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-energy text-energy" />
                        <span className="text-sm font-bold">{product.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{product.title}</CardTitle>
                    <CardDescription className="text-sm">por {product.author}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3">{product.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                    >
                      <a href={product.buyLink} target="_blank" rel="noopener noreferrer">
                        Comprar Agora
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProductCarousel;
