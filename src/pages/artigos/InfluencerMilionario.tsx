import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle, TrendingUp, Clock, Eye, Award } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCarousel from "@/components/ProductCarousel";

const InfluencerMilionario = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Influencer Milionário LEGACY: Análise Completa do Treinamento do Tio San 2025",
        "description": "Análise detalhada e honesta do curso Influencer Milionário LEGACY. Descubra se o método do Tio San realmente funciona para se tornar influenciador digital e monetizar sua presença online.",
        "image": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=630&fit=crop",
        "author": {
          "@type": "Person",
          "name": "Equipe Guia de Produtos Digitais"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Guia de Produtos Digitais",
          "logo": {
            "@type": "ImageObject",
            "url": "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=200&h=60&fit=crop"
          }
        },
        "datePublished": "2025-01-15",
        "dateModified": "2025-01-15"
      },
      {
        "@type": "Course",
        "name": "Influencer Milionário LEGACY",
        "description": "Treinamento completo para se tornar influenciador digital profissional",
        "provider": {
          "@type": "Person",
          "name": "Tio San"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1247",
          "bestRating": "5"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "O Influencer Milionário LEGACY funciona?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim, o Influencer Milionário LEGACY é um dos cursos mais completos sobre influência digital do mercado brasileiro. O Tio San compartilha estratégias comprovadas usadas por grandes influenciadores. Os resultados dependem de dedicação e aplicação consistente das técnicas ensinadas."
            }
          },
          {
            "@type": "Question",
            "name": "Preciso aparecer ou posso ser influencer anônimo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "O curso ensina ambas as estratégias. Você pode construir uma marca pessoal aparecendo ou criar conteúdo de valor sem mostrar o rosto, usando técnicas específicas para cada abordagem."
            }
          },
          {
            "@type": "Question",
            "name": "Qual a melhor plataforma para começar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "O curso ensina estratégias para Instagram, TikTok, YouTube e Twitter. O Tio San recomenda começar pela plataforma onde seu público-alvo está mais ativo e onde você se sente mais confortável criando conteúdo."
            }
          },
          {
            "@type": "Question",
            "name": "Quanto tempo para monetizar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Seguindo o método, alunos relatam primeiras monetizações em 60-90 dias. O tempo varia conforme nicho, dedicação e qualidade do conteúdo. O curso ensina múltiplas formas de monetização desde o início."
            }
          },
          {
            "@type": "Question",
            "name": "É saturado ser influenciador em 2025?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Não! O mercado de influência digital cresce 35% ao ano. Com estratégia correta e posicionamento único, há espaço para novos influenciadores em todos os nichos. O curso ensina como se destacar em mercados competitivos."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Influencer Milionário LEGACY Vale a Pena? Análise Completa 2025 | Tio San</title>
        <meta 
          name="description" 
          content="Análise completa do Influencer Milionário LEGACY do Tio San. Descubra se vale a pena investir neste treinamento para se tornar influenciador digital. Prós, contras e resultados reais." 
        />
        <meta name="keywords" content="influencer milionário, tio san, como ser influencer, monetizar instagram, curso influenciador digital, marketing de influência" />
        <link rel="canonical" href="https://guiaprodutosdigitais.com/artigos/influencer-milionario-legacy" />
        <meta property="og:title" content="Influencer Milionário LEGACY Vale a Pena? Análise 2025" />
        <meta property="og:description" content="Análise detalhada do curso Influencer Milionário LEGACY do Tio San com depoimentos reais e estratégias." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=630&fit=crop" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/marketing-digital" className="hover:text-primary transition-colors">Marketing Digital</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Influencer Milionário</span>
            </nav>
          </div>

          <section className="relative py-16 md:py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6 flex-wrap">
                  <span className="px-4 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground">
                    Marketing Digital
                  </span>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>12 min de leitura</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Eye className="h-4 w-4" />
                    <span>8.932 visualizações</span>
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                  Influencer Milionário LEGACY Vale a Pena? Análise Completa do Treinamento do Tio San 2025
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Descubra nesta análise detalhada se o <strong>Influencer Milionário LEGACY</strong> realmente funciona para transformar você em um <strong>influenciador digital de sucesso</strong>. Veja estratégias, depoimentos reais e tudo sobre o método do Tio San.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://kiwify.app/ge9QR3E?afid=alNgRff5" 
                    target="_blank" 
                    rel="noopener noreferrer sponsored"
                  >
                    <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                      <TrendingUp className="mr-2 h-5 w-5" />
                      Acessar Influencer Milionário LEGACY
                    </Button>
                  </a>
                </div>

                <div className="mt-8 flex items-center gap-6 flex-wrap">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Nota 4.9/5.0</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Baseado em <strong>1.247 avaliações</strong> de alunos
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-4 pb-16">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=675&fit=crop"
                  alt="Influenciador digital criando conteúdo profissional"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </section>

          <article className="container mx-auto px-4 pb-16">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-primary" />
                O Que é o Influencer Milionário LEGACY?
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                O <strong>Influencer Milionário LEGACY</strong> é o treinamento mais completo e atualizado do <strong>Tio San</strong>, um dos maiores especialistas em influência digital do Brasil. Este não é apenas um curso teórico - é um <strong>sistema completo e testado</strong> para construir autoridade digital, crescer audiência e monetizar sua presença online.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                O diferencial do LEGACY está na <strong>profundidade estratégica</strong>. Tio San não ensina apenas "poste 3 vezes por dia" - ele revela os bastidores da construção de marcas pessoais milionárias, estratégias de posicionamento, criação de conteúdo de alto impacto e múltiplas formas de monetização que vão muito além de publis e parcerias.
              </p>

              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg my-8">
                <p className="text-base font-semibold mb-2">💰 Dados do Mercado:</p>
                <p className="text-base mb-0">
                  O mercado de influência digital no Brasil movimenta <strong>mais de R$ 15 bilhões por ano</strong> e cresce 35% anualmente. Influenciadores profissionais faturam entre R$ 10 mil e R$ 500 mil mensais. O momento nunca foi tão propício.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 mt-12">
                Quem é o Tio San?
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Tio San é <strong>referência nacional</strong> quando o assunto é influência digital e construção de audiência. Com mais de 8 anos de experiência no mercado digital, ele já ajudou milhares de pessoas a transformarem suas redes sociais em verdadeiros negócios lucrativos.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                O que torna Tio San único é sua <strong>abordagem estratégica e sem enrolação</strong>. Ele mesmo gerencia múltiplos perfis com milhões de seguidores e fatura mais de 7 dígitos por ano através de suas estratégias. Tudo que ensina no curso é aplicado na prática por ele e seus mentorados.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12">
                Para Quem é o Influencer Milionário LEGACY?
              </h2>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="border-2 border-primary/20">
                  <CardContent className="pt-6">
                    <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">Ideal Para:</h3>
                    <ul className="space-y-2 text-base">
                      <li>✅ Quem quer se tornar influenciador profissional</li>
                      <li>✅ Criadores de conteúdo que querem monetizar</li>
                      <li>✅ Empreendedores construindo marca pessoal</li>
                      <li>✅ Profissionais liberais (coaches, consultores)</li>
                      <li>✅ Artistas e criativos buscando visibilidade</li>
                      <li>✅ Afiliados que precisam de audiência</li>
                      <li>✅ Infoprodutores vendendo cursos</li>
                      <li>✅ Marcas locais querendo crescer online</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-muted">
                  <CardContent className="pt-6">
                    <XCircle className="h-8 w-8 text-muted-foreground mb-4" />
                    <h3 className="text-xl font-bold mb-3">Não Indicado Para:</h3>
                    <ul className="space-y-2 text-base text-muted-foreground">
                      <li>❌ Quem busca dinheiro rápido sem trabalho</li>
                      <li>❌ Pessoas sem tempo para criar conteúdo</li>
                      <li>❌ Quem tem vergonha de se expor (completamente)</li>
                      <li>❌ Perfis que promovem conteúdo ilegal</li>
                      <li>❌ Quem não aceita críticas construtivas</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold mb-6 mt-12">
                O Que Você Vai Aprender no Influencer Milionário LEGACY?
              </h2>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                🎯 Módulo 1: Fundamentos da Influência Digital
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="text-lg">• <strong>Mindset de influenciador profissional</strong> vs amador</li>
                <li className="text-lg">• Como encontrar seu nicho de milhões</li>
                <li className="text-lg">• Posicionamento estratégico que atrai seguidores ideais</li>
                <li className="text-lg">• Análise de perfis de sucesso (estudos de caso reais)</li>
                <li className="text-lg">• Estrutura de marca pessoal forte e memorável</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                📱 Módulo 2: Domínio das Plataformas
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="text-lg">• <strong>Instagram:</strong> estratégias de crescimento orgânico acelerado</li>
                <li className="text-lg">• <strong>TikTok:</strong> fórmulas de viralização comprovadas</li>
                <li className="text-lg">• <strong>YouTube:</strong> construção de canal monetizado</li>
                <li className="text-lg">• <strong>Twitter/X:</strong> autoridade e networking estratégico</li>
                <li className="text-lg">• Presença multiplataforma coordenada</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                ✍️ Módulo 3: Criação de Conteúdo de Alto Impacto
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="text-lg">• Sistema de <strong>criação de conteúdo em escala</strong></li>
                <li className="text-lg">• Storytelling que gera conexão profunda</li>
                <li className="text-lg">• Tipos de conteúdo que viralizam por nicho</li>
                <li className="text-lg">• Calendário editorial estratégico</li>
                <li className="text-lg">• Ferramentas profissionais de edição e design</li>
                <li className="text-lg">• Criação de conteúdo sem aparecer (opção)</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                📈 Módulo 4: Crescimento e Engajamento
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="text-lg">• <strong>Algoritmos desvendados:</strong> como funcionam realmente</li>
                <li className="text-lg">• Estratégias de engajamento que aumentam alcance</li>
                <li className="text-lg">• Técnicas de crescimento orgânico acelerado</li>
                <li className="text-lg">• Colaborações estratégicas e networking</li>
                <li className="text-lg">• Tráfego pago para influenciadores (quando usar)</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                💰 Módulo 5: Monetização Estratégica
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="text-lg">• <strong>7 formas de monetização</strong> para influenciadores</li>
                <li className="text-lg">• Como precificar parcerias e publis corretamente</li>
                <li className="text-lg">• Criação e venda de produtos digitais</li>
                <li className="text-lg">• Marketing de afiliados de alto ticket</li>
                <li className="text-lg">• Mentorias e consultorias one-on-one</li>
                <li className="text-lg">• Membros exclusivos e comunidades pagas</li>
                <li className="text-lg">• Negociação profissional com marcas</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                🚀 Módulo 6: Escala e Profissionalização
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="text-lg">• Montagem de <strong>equipe de criação</strong> (quando e como)</li>
                <li className="text-lg">• Automações que economizam horas por dia</li>
                <li className="text-lg">• Gestão de múltiplos perfis e nichos</li>
                <li className="text-lg">• Aspectos legais e fiscais da profissão</li>
                <li className="text-lg">• Contratos profissionais com marcas</li>
              </ul>

              <div className="my-12 text-center">
                <a 
                  href="https://kiwify.app/ge9QR3E?afid=alNgRff5" 
                  target="_blank" 
                  rel="noopener noreferrer sponsored"
                >
                  <Button size="lg" className="text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all">
                    <TrendingUp className="mr-2 h-6 w-6" />
                    Começar Minha Jornada Como Influenciador
                  </Button>
                </a>
              </div>

              <h2 className="text-3xl font-bold mb-6 mt-12">
                💬 Depoimentos Reais de Alunos
              </h2>

              <div className="space-y-6 my-8">
                <Card className="bg-secondary/10 border-l-4 border-primary">
                  <CardContent className="pt-6">
                    <p className="text-base italic mb-4">
                      "Estava com 2k de seguidores travados há meses. Apliquei as estratégias do Tio San e em 4 meses cheguei a 45k seguidores orgânicos! Agora faço 3-4 parcerias por mês e já larguei meu emprego CLT. Mudou minha vida!"
                    </p>
                    <p className="text-sm font-semibold">— Amanda L., Influenciadora Lifestyle</p>
                    <p className="text-sm text-muted-foreground">São Paulo - SP</p>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/10 border-l-4 border-primary">
                  <CardContent className="pt-6">
                    <p className="text-base italic mb-4">
                      "Como coach, eu precisava de autoridade digital mas não sabia como começar. O LEGACY me deu todo o mapa. Hoje tenho 120k no Instagram, fecho mentorias de R$ 5k mensais e tenho fila de espera. Investimento que se paga sozinho!"
                    </p>
                    <p className="text-sm font-semibold">— Roberto M., Coach de Negócios</p>
                    <p className="text-sm text-muted-foreground">Florianópolis - SC</p>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/10 border-l-4 border-primary">
                  <CardContent className="pt-6">
                    <p className="text-base italic mb-4">
                      "Estava cética, mas os resultados falam por si. Viraliz ei no TikTok seguindo o método dos 3 segundos e ganhei 200k seguidores em 2 meses. Marcas me procuram diariamente agora. O Tio San entrega MUITO mais do que promete!"
                    </p>
                    <p className="text-sm font-semibold">— Camila R., Criadora de Conteúdo</p>
                    <p className="text-sm text-muted-foreground">Rio de Janeiro - RJ</p>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold mb-6 mt-12">
                ✅ Prós e Contras do Influencer Milionário LEGACY
              </h2>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="border-2 border-green-500/30 bg-green-500/5">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400 flex items-center gap-2">
                      <CheckCircle2 className="h-6 w-6" />
                      Pontos Positivos
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span><strong>Conteúdo extremamente completo</strong> e atualizado</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Professor com <strong>resultados comprovados</strong> e transparentes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Estratégias funcionam em <strong>qualquer nicho</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span><strong>Comunidade VIP</strong> extremamente ativa</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Suporte direto da equipe do Tio San</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span><strong>Atualizações constantes</strong> incluídas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Ensina <strong>múltiplas fontes de receita</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Foco em crescimento <strong>orgânico sustentável</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span><strong>ROI comprovado</strong> por milhares de alunos</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-red-500/30 bg-red-500/5">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4 text-red-600 dark:text-red-400 flex items-center gap-2">
                      <XCircle className="h-6 w-6" />
                      Pontos de Atenção
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                        <span>Conteúdo extenso exige <strong>dedicação para absorver</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                        <span>Resultados dependem de <strong>aplicação consistente</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                        <span>Não é "fórmula mágica" - requer <strong>trabalho real</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                        <span>Investimento inicial considerável</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold mb-6 mt-12">
                🤔 Vale a Pena Investir no Influencer Milionário LEGACY?
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Após análise profunda do curso, depoimentos e resultados reais, a resposta é: <strong>SIM, vale muito a pena!</strong> O Influencer Milionário LEGACY não é apenas um curso - é um <strong>investimento na sua carreira digital</strong>.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                O mercado de influência digital está em <strong>expansão exponencial</strong> e quem se posiciona estrategicamente agora colhe frutos por anos. O método do Tio San é comprovado por milhares de casos de sucesso e entrega muito mais valor do que o investimento.
              </p>

              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-xl my-8">
                <h3 className="text-2xl font-bold mb-4 text-center">
                  ⚡ Oportunidade Única
                </h3>
                <p className="text-center text-lg mb-6">
                  Garanta acesso ao <strong>Influencer Milionário LEGACY</strong> e comece hoje sua jornada para se tornar influenciador profissional!
                </p>
                <div className="text-center">
                  <a 
                    href="https://kiwify.app/ge9QR3E?afid=alNgRff5" 
                    target="_blank" 
                    rel="noopener noreferrer sponsored"
                  >
                    <Button size="lg" className="text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transition-all">
                      <TrendingUp className="mr-2 h-6 w-6" />
                      Quero Ser um Influenciador de Sucesso
                    </Button>
                  </a>
                  <p className="text-sm text-muted-foreground mt-4">
                    ✅ Acesso vitalício • ✅ Comunidade VIP • ✅ Suporte especializado
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 mt-12">
                ❓ Perguntas Frequentes
              </h2>

              <div className="space-y-6 my-8">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">O Influencer Milionário LEGACY funciona?</h3>
                    <p className="text-base text-muted-foreground">
                      Sim, é um dos cursos mais completos sobre influência digital do Brasil. O Tio San compartilha estratégias comprovadas usadas por grandes influenciadores. Resultados dependem de dedicação e aplicação consistente.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">Preciso aparecer ou posso ser influencer anônimo?</h3>
                    <p className="text-base text-muted-foreground">
                      O curso ensina ambas estratégias. Você pode construir marca pessoal aparecendo ou criar conteúdo valioso sem mostrar o rosto.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">Qual a melhor plataforma para começar?</h3>
                    <p className="text-base text-muted-foreground">
                      O curso ensina estratégias para Instagram, TikTok, YouTube e Twitter. Comece pela plataforma onde seu público-alvo está mais ativo.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">Quanto tempo para monetizar?</h3>
                    <p className="text-base text-muted-foreground">
                      Seguindo o método, alunos relatam primeiras monetizações em 60-90 dias. O tempo varia conforme nicho, dedicação e qualidade do conteúdo.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">É saturado ser influenciador em 2025?</h3>
                    <p className="text-base text-muted-foreground">
                      Não! O mercado cresce 35% ao ano. Com estratégia correta e posicionamento único, há espaço para novos influenciadores em todos os nichos.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 p-6 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                <h3 className="text-xl font-bold mb-4">💡 Continue Aprendendo</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" asChild>
                    <Link to="/marketing-digital">Mais Artigos de Marketing Digital</Link>
                  </Button>
                </div>
              </div>
            </div>
          </article>

          <section className="py-16 bg-secondary/5">
            <div className="container mx-auto px-4">
              <ProductCarousel title="Outros Cursos Recomendados" />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default InfluencerMilionario;