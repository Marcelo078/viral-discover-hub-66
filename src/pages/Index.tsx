import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import ProductCarousel from "@/components/ProductCarousel";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const Index = () => {
  const featuredArticles = [
    {
      title: "Fábrica de Comissões: Vale a Pena? Análise Completa 2025",
      description: "Descubra se o curso de Deborah Oliveira realmente funciona. Análise detalhada com depoimentos reais de alunos que mudaram de vida.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
      slug: "fabrica-comissoes-vale-pena",
      category: "Marketing Digital",
      readTime: "12 min",
      views: "15.2k"
    },
    {
      title: "Shorts Virais: O Segredo dos Criadores de Conteúdo Mais Bem-Sucedidos",
      description: "Como criar vídeos virais no YouTube Shorts e TikTok. Estratégias testadas e aprovadas por milhares de criadores.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop",
      slug: "shorts-virais-segredo-criadores",
      category: "Criação de Conteúdo",
      readTime: "10 min",
      views: "23.8k"
    },
    {
      title: "700 Receitas de Bolos e Tortas: Empreenda na Gastronomia",
      description: "Transforme sua paixão por confeitaria em um negócio lucrativo. Receitas testadas e aprovadas para você começar hoje.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=450&fit=crop",
      slug: "700-receitas-bolos-tortas",
      category: "Gastronomia",
      readTime: "8 min",
      views: "18.5k"
    },
    {
      title: "Influencer Milionário: Como Construir Sua Autoridade Online",
      description: "O treinamento LEGACY do Tio San revela o passo a passo completo para se tornar um influenciador de sucesso em 2025.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=450&fit=crop",
      slug: "influencer-milionario-legacy",
      category: "Marketing Digital",
      readTime: "15 min",
      views: "31.2k"
    },
    {
      title: "Método ADL: Comprar Imóveis Antes do Leilão com Segurança",
      description: "Aprenda a estratégia que tem ajudado milhares de pessoas a adquirir imóveis com até 70% de desconto de forma legal e segura.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=450&fit=crop",
      slug: "metodo-adl-comprar-imoveis",
      category: "Investimentos",
      readTime: "11 min",
      views: "12.9k"
    },
    {
      title: "Academia da Riqueza Digital: Formação Completa em Marketing",
      description: "Ana Paula Noleto ensina do zero como criar e escalar um negócio digital lucrativo mesmo sem experiência prévia.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
      slug: "academia-riqueza-digital",
      category: "Marketing Digital",
      readTime: "13 min",
      views: "19.7k"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <TrendingUp className="h-4 w-4" />
              <span>Análises Honestas de Produtos Digitais</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Descubra os{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Melhores Produtos
              </span>{" "}
              para Transformar Sua Vida
            </h1>
            <p className="text-xl text-muted-foreground">
              Análises completas, depoimentos reais e recomendações baseadas em resultados comprovados.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                Ver Análises Completas
              </Button>
              <Button size="lg" variant="outline">
                Produtos Mais Vendidos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Análises em Destaque</h2>
            <Button variant="ghost">Ver Todas</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Product Carousel */}
      <ProductCarousel title="Produtos Mais Recomendados" />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold">
              Pronto para Começar Sua Jornada de Sucesso?
            </h2>
            <p className="text-lg opacity-90">
              Junte-se a milhares de pessoas que já transformaram suas vidas com os produtos que recomendamos.
            </p>
            <Button size="lg" variant="secondary" className="shadow-xl">
              Explorar Todas as Categorias
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
