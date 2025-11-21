import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import ProductCarousel from "@/components/ProductCarousel";
import { Button } from "@/components/ui/button";
import { ChefHat, TrendingUp } from "lucide-react";

const Gastronomia = () => {
  useEffect(() => {
    document.title = "Cursos de Gastronomia e Confeitaria 2025 | Gera Renda";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transforme sua paixão por culinária em negócio. Cursos de bolos, tortas, sobremesas e delivery. Aprenda e empreenda na gastronomia.');
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Cursos de Gastronomia e Confeitaria",
      "description": "Cursos práticos para empreender na gastronomia",
      "url": "https://gerarenda.com/gastronomia"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const articles = [
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
      title: "Método Delivery de Sucesso: Sistema Completo para Restaurantes",
      description: "Aprenda a montar e escalar um negócio de delivery lucrativo com o método testado por milhares de restaurantes.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=450&fit=crop",
      slug: "metodo-delivery-sucesso",
      category: "Gastronomia",
      readTime: "11 min",
      views: "14.2k"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-hero">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium">
              <ChefHat className="h-4 w-4" />
              <span>Receitas Testadas</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-primary-foreground">
              Empreenda na Gastronomia
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Transforme sua paixão por culinária em um negócio lucrativo. Cursos práticos de confeitaria, bolos, tortas e delivery.
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <TrendingUp className="h-5 w-5" />
                <span className="font-semibold">+50 mil empreendedores gastronômicos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 border-b bg-muted/30">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary transition-colors">Início</a>
            <span>/</span>
            <span className="text-foreground font-medium">Gastronomia</span>
          </nav>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold mb-4">
              Por Que Empreender na Gastronomia?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A <strong className="text-foreground">gastronomia</strong> é um dos setores mais aquecidos do Brasil. Com baixo investimento inicial, você pode começar produzindo em casa e atendendo sua vizinhança, crescendo até ter uma loja física ou um delivery de sucesso.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Os cursos desta categoria foram cuidadosamente selecionados para quem quer <strong className="text-foreground">profissionalizar</strong> suas habilidades culinárias e transformá-las em <strong className="text-foreground">fonte de renda</strong>. Receitas testadas, técnicas profissionais e dicas de precificação e marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Cursos de Gastronomia</h2>
              <p className="text-muted-foreground">Aprenda e empreenda na culinária</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <ProductCarousel title="Cursos de Gastronomia Recomendados" />

      {/* SEO Content */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold mb-6">
              Como Começar na Gastronomia
            </h2>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">
              1. Escolha Seu Nicho
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Não tente fazer de tudo no começo. Escolha uma especialidade: <strong className="text-foreground">bolos decorados</strong>, <strong className="text-foreground">doces finos</strong>, <strong className="text-foreground">salgados</strong>, <strong className="text-foreground">marmitas fit</strong>, etc. Ser especialista em algo específico facilita muito na hora de divulgar.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              2. Invista em Conhecimento
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Um curso profissional faz toda a diferença. Você aprende <strong className="text-foreground">técnicas corretas</strong>, <strong className="text-foreground">precificação</strong>, <strong className="text-foreground">conservação</strong> e muito mais. Evita erros que poderiam custar caro no início.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              3. Comece Pequeno
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Não precisa alugar um ponto comercial logo de cara. Comece produzindo em casa, divulgando nas redes sociais e atendendo conhecidos. O <strong className="text-foreground">boca a boca</strong> funciona muito bem na gastronomia.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              4. Use as Redes Sociais
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              <strong className="text-foreground">Instagram</strong> e <strong className="text-foreground">WhatsApp</strong> são suas principais ferramentas. Poste fotos bonitas dos seus produtos, use hashtags locais e crie uma lista de transmissão no WhatsApp para divulgar novidades.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              5. Precifique Corretamente
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Muitos empreendedores gastronômicos quebram por não saber precificar. Calcule <strong className="text-foreground">custos de ingredientes</strong>, <strong className="text-foreground">embalagens</strong>, <strong className="text-foreground">gás/energia</strong>, <strong className="text-foreground">mão de obra</strong> e ainda adicione sua <strong className="text-foreground">margem de lucro</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold">
              Comece Seu Negócio Gastronômico Hoje
            </h2>
            <p className="text-lg opacity-90">
              Aprenda receitas profissionais e técnicas de sucesso para empreender na gastronomia.
            </p>
            <Button size="lg" variant="secondary" className="shadow-xl">
              Ver Todos os Cursos
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gastronomia;