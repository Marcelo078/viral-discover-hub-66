import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import ProductCarousel from "@/components/ProductCarousel";
import { Button } from "@/components/ui/button";
import { BookOpen, TrendingUp } from "lucide-react";

const CursosOnline = () => {
  useEffect(() => {
    document.title = "Melhores Cursos Online 2025 - Análises e Recomendações | Gera Renda";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Descubra os melhores cursos online de 2025. Análises completas, depoimentos reais e recomendações dos cursos mais eficazes para transformar sua carreira.');
    }

    // Schema.org para CollectionPage
    const schema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Melhores Cursos Online 2025",
      "description": "Análises completas dos melhores cursos online do mercado brasileiro",
      "url": "https://gerarenda.com/cursos-online"
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
      title: "Influencer Milionário: Como Construir Sua Autoridade Online",
      description: "O treinamento LEGACY do Tio San revela o passo a passo completo para se tornar um influenciador de sucesso em 2025.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=450&fit=crop",
      slug: "influencer-milionario-legacy",
      category: "Marketing Digital",
      readTime: "15 min",
      views: "31.2k"
    },
    {
      title: "Academia da Riqueza Digital: Formação Completa em Marketing",
      description: "Ana Paula Noleto ensina do zero como criar e escalar um negócio digital lucrativo mesmo sem experiência prévia.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
      slug: "academia-riqueza-digital",
      category: "Marketing Digital",
      readTime: "13 min",
      views: "19.7k"
    },
    {
      title: "Super Presell: Técnicas Avançadas de Pré-Venda",
      description: "Aprenda as estratégias que aumentam suas conversões em até 300% com o método Nodz de pré-vendas.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=450&fit=crop",
      slug: "super-presell-tecnicas",
      category: "Marketing Digital",
      readTime: "9 min",
      views: "11.3k"
    },
    {
      title: "700 Receitas de Bolos e Tortas: Empreenda na Gastronomia",
      description: "Transforme sua paixão por confeitaria em um negócio lucrativo. Receitas testadas e aprovadas para você começar hoje.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=450&fit=crop",
      slug: "700-receitas-bolos-tortas",
      category: "Gastronomia",
      readTime: "8 min",
      views: "18.5k"
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
              <BookOpen className="h-4 w-4" />
              <span>Análises Verificadas</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-primary-foreground">
              Melhores Cursos Online 2025
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Análises completas e honestas dos cursos digitais mais eficazes do mercado. Aprenda com quem realmente obteve resultados.
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <TrendingUp className="h-5 w-5" />
                <span className="font-semibold">+100 mil alunos aprovam</span>
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
            <span className="text-foreground font-medium">Cursos Online</span>
          </nav>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold mb-4">
              Por Que Investir em Cursos Online?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Os <strong className="text-foreground">cursos online</strong> revolucionaram a forma como as pessoas aprendem e se desenvolvem profissionalmente. Com a flexibilidade de estudar no seu próprio ritmo e a possibilidade de acesso aos melhores especialistas do Brasil, os cursos digitais se tornaram a escolha preferida de milhões de pessoas.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Nesta página, você encontrará <strong className="text-foreground">análises detalhadas e honestas</strong> dos cursos online mais populares e eficazes do mercado. Cada análise inclui depoimentos reais, prós e contras, investimento necessário e para quem o curso é mais indicado.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Análises Completas de Cursos</h2>
              <p className="text-muted-foreground">Avaliações detalhadas baseadas em resultados reais</p>
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
      <ProductCarousel title="Cursos Mais Recomendados" />

      {/* SEO Content */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold mb-6">
              Como Escolher o Curso Online Ideal para Você
            </h2>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">
              1. Defina Seus Objetivos
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Antes de investir em qualquer curso, é fundamental ter clareza sobre o que você deseja alcançar. Quer <strong className="text-foreground">empreender online</strong>? Busca uma <strong className="text-foreground">renda extra</strong>? Ou deseja se tornar um especialista em determinada área? Seus objetivos determinarão qual curso é mais adequado.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              2. Verifique a Credibilidade do Instrutor
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Um bom curso é ministrado por alguém que realmente obteve <strong className="text-foreground">resultados comprovados</strong> na área. Pesquise sobre o instrutor, veja seus cases de sucesso e procure por depoimentos de alunos anteriores.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              3. Analise o Conteúdo Programático
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Certifique-se de que o curso cobre todos os tópicos necessários para você alcançar seus objetivos. Um bom curso deve ir desde o <strong className="text-foreground">básico até o avançado</strong>, com exemplos práticos e aplicáveis.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              4. Considere o Suporte e Comunidade
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Cursos com <strong className="text-foreground">suporte ativo</strong> e <strong className="text-foreground">comunidade engajada</strong> fazem toda a diferença. Você terá onde tirar dúvidas, trocar experiências e manter a motivação durante a jornada.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              5. Avalie o Custo-Benefício
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              O preço não deve ser o único fator decisivo, mas é importante avaliar se o investimento cabe no seu orçamento e se os benefícios justificam o valor. Procure por cursos com <strong className="text-foreground">garantia de reembolso</strong> para reduzir o risco.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold">
              Comece Sua Transformação Hoje
            </h2>
            <p className="text-lg opacity-90">
              Explore nossas análises completas e escolha o curso que vai mudar sua vida profissional.
            </p>
            <Button size="lg" variant="secondary" className="shadow-xl">
              Ver Todas as Análises
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CursosOnline;