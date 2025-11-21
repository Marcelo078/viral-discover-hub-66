import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import ProductCarousel from "@/components/ProductCarousel";
import { Button } from "@/components/ui/button";
import { Megaphone, TrendingUp } from "lucide-react";

const MarketingDigital = () => {
  useEffect(() => {
    document.title = "Marketing Digital: Cursos e Estratégias 2025 | Gera Renda";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Domine o marketing digital com os melhores cursos e estratégias. Aprenda afiliados, tráfego pago, Instagram, YouTube e muito mais.');
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Marketing Digital - Cursos e Estratégias",
      "description": "Guia completo de marketing digital com análises dos melhores cursos",
      "url": "https://gerarenda.com/marketing-digital"
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
      title: "Shorts Virais: O Segredo dos Criadores de Conteúdo Mais Bem-Sucedidos",
      description: "Como criar vídeos virais no YouTube Shorts e TikTok. Estratégias testadas e aprovadas por milhares de criadores.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop",
      slug: "shorts-virais-segredo-criadores",
      category: "Criação de Conteúdo",
      readTime: "10 min",
      views: "23.8k"
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
              <Megaphone className="h-4 w-4" />
              <span>Estratégias Comprovadas</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-primary-foreground">
              Marketing Digital que Gera Resultados
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Aprenda com os melhores especialistas em marketing digital do Brasil. Cursos completos de afiliados, tráfego pago, redes sociais e muito mais.
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <TrendingUp className="h-5 w-5" />
                <span className="font-semibold">+500 mil alunos formados</span>
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
            <span className="text-foreground font-medium">Marketing Digital</span>
          </nav>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold mb-4">
              O Que é Marketing Digital?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              <strong className="text-foreground">Marketing Digital</strong> é o conjunto de estratégias e ações realizadas em canais digitais para promover produtos, serviços ou marcas. Com o crescimento exponencial da internet, dominar o marketing digital se tornou essencial para quem deseja empreender online ou trabalhar remotamente.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              No Brasil, milhares de pessoas estão transformando suas vidas através do marketing digital, seja como <strong className="text-foreground">afiliados</strong>, <strong className="text-foreground">gestores de tráfego</strong>, <strong className="text-foreground">criadores de conteúdo</strong> ou <strong className="text-foreground">consultores especializados</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Cursos de Marketing Digital</h2>
              <p className="text-muted-foreground">Análises completas dos melhores treinamentos do mercado</p>
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
      <ProductCarousel title="Cursos de Marketing Digital Recomendados" />

      {/* SEO Content */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold mb-6">
              Principais Áreas do Marketing Digital
            </h2>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">
              Marketing de Afiliados
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              O <strong className="text-foreground">marketing de afiliados</strong> é uma das formas mais acessíveis de começar no digital. Você promove produtos de terceiros e recebe comissões por cada venda. Não precisa criar produtos, estocar ou lidar com entrega — apenas divulgar.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Tráfego Pago
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Dominar <strong className="text-foreground">tráfego pago</strong> (Facebook Ads, Google Ads, TikTok Ads) é uma das habilidades mais valorizadas do mercado. Profissionais qualificados cobram entre R$ 3 mil e R$ 10 mil por mês para gerenciar campanhas.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Criação de Conteúdo
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Com o crescimento de plataformas como Instagram, TikTok e YouTube, <strong className="text-foreground">criar conteúdo</strong> relevante se tornou fundamental. Aprenda a produzir reels, shorts e vídeos que engajam e convertem.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              E-mail Marketing
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              O <strong className="text-foreground">e-mail marketing</strong> continua sendo um dos canais com melhor ROI. Para cada R$ 1 investido, o retorno médio é de R$ 42. Aprender a construir listas e criar sequências que vendem é essencial.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Copywriting
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              <strong className="text-foreground">Copywriting</strong> é a arte de escrever textos persuasivos que vendem. Seja em anúncios, páginas de vendas ou e-mails, um bom copy pode multiplicar suas conversões.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold">
              Comece Sua Carreira no Marketing Digital
            </h2>
            <p className="text-lg opacity-90">
              Escolha o curso ideal para você e dê o primeiro passo rumo à sua independência financeira.
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

export default MarketingDigital;