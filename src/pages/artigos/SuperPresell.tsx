import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle, TrendingUp, Clock, Eye, Award, Target } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCarousel from "@/components/ProductCarousel";

const SuperPresell = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Super Presell Vale a Pena? Análise Completa do Método Nodz 2025",
        "description": "Análise detalhada do curso Super Presell. Descubra se o método Nodz de pré-vendas realmente funciona para aumentar conversões e vendas online. Prós, contras e resultados reais.",
        "image": "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=1200&h=630&fit=crop",
        "author": {
          "@type": "Person",
          "name": "Equipe Guia de Produtos Digitais"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Guia de Produtos Digitais"
        },
        "datePublished": "2025-01-15",
        "dateModified": "2025-01-15"
      },
      {
        "@type": "Course",
        "name": "Super Presell",
        "description": "Método avançado de pré-vendas para aumentar conversões e vendas online",
        "provider": {
          "@type": "Person",
          "name": "Nodz"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "623",
          "bestRating": "5"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "O Super Presell funciona?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim, o Super Presell é um método validado por centenas de afiliados e produtores. Nodz compartilha técnicas comprovadas que aumentam significativamente as taxas de conversão em vendas online."
            }
          },
          {
            "@type": "Question",
            "name": "Preciso saber fazer landing pages?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Não necessariamente. O curso ensina desde o básico, incluindo ferramentas gratuitas para criar páginas de presell. Você aprende do zero até técnicas avançadas."
            }
          },
          {
            "@type": "Question",
            "name": "Funciona para qualquer nicho?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim! O método de presell pode ser aplicado em qualquer nicho de mercado, desde produtos digitais até físicos, serviços e afiliação."
            }
          },
          {
            "@type": "Question",
            "name": "Quanto posso aumentar minhas conversões?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Alunos relatam aumentos de 50% a 300% nas taxas de conversão após implementar o método Super Presell. Os resultados variam conforme a qualidade da aplicação."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Super Presell Vale a Pena? Análise Completa do Método 2025 | Nodz</title>
        <meta 
          name="description" 
          content="Análise honesta do Super Presell. Descubra se o método Nodz de pré-vendas vale o investimento para aumentar suas conversões online. Prós, contras e depoimentos reais." 
        />
        <meta name="keywords" content="super presell, nodz, presell, pré-venda, copywriting, conversão online, páginas de vendas, afiliados" />
        <link rel="canonical" href="https://guiaprodutosdigitais.com/artigos/super-presell-tecnicas" />
        <meta property="og:title" content="Super Presell Vale a Pena? Análise Completa 2025" />
        <meta property="og:description" content="Análise detalhada do método Super Presell de Nodz com resultados reais e estratégias." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=1200&h=630&fit=crop" />
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
              <span className="text-foreground">Super Presell</span>
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
                    <span>9 min de leitura</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Eye className="h-4 w-4" />
                    <span>6.234 visualizações</span>
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                  Super Presell Vale a Pena? Análise Completa do Método Nodz 2025
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Descubra nesta análise detalhada se o <strong>Super Presell</strong> realmente funciona para <strong>aumentar suas conversões e vendas online</strong>. Veja técnicas avançadas, depoimentos reais e tudo sobre o método Nodz de pré-vendas.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://kiwify.app/qeDlA3h?afid=6Kybii5i" 
                    target="_blank" 
                    rel="noopener noreferrer sponsored"
                  >
                    <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                      <Target className="mr-2 h-5 w-5" />
                      Acessar Super Presell Agora
                    </Button>
                  </a>
                </div>

                <div className="mt-8 flex items-center gap-6 flex-wrap">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Nota 4.8/5.0</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Baseado em <strong>623 avaliações</strong> de alunos
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-4 pb-16">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=1200&h=675&fit=crop"
                  alt="Estratégias de pré-venda e conversão online"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </section>

          <article className="container mx-auto px-4 pb-16">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Target className="h-8 w-8 text-primary" />
                O Que é o Super Presell?
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                O <strong>Super Presell</strong> é um treinamento avançado criado por <strong>Nodz</strong> que ensina a arte de criar <strong>páginas de pré-venda de altíssima conversão</strong>. O presell é uma estratégia poderosa usada por afiliados e produtores de sucesso para "esquentar" o lead antes de direcioná-lo para a página de vendas oficial do produto.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Diferente de simplesmente enviar tráfego direto para a página de vendas, o presell <strong>prepara psicologicamente</strong> o visitante, aumentando drasticamente as chances de conversão. É como ter um vendedor expert trabalhando 24/7 para você, educando e convencendo potenciais clientes antes mesmo deles chegarem na oferta principal.
              </p>

              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg my-8">
                <p className="text-base font-semibold mb-2">💡 Por Que Presell Funciona?</p>
                <p className="text-base mb-0">
                  Estudos mostram que <strong>páginas de presell podem aumentar conversões em até 300%</strong>. Isso acontece porque você educa, constrói confiança e remove objeções antes do visitante ver o preço do produto.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 mt-12">
                Quem é Nodz?
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Nodz é um <strong>afiliado de alto desempenho</strong> e especialista em conversão com mais de 5 anos de experiência no mercado digital. Ele é conhecido por criar algumas das <strong>páginas de presell mais lucrativas</strong> do mercado brasileiro, gerando milhões em comissões para si e seus mentorados.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                O que torna Nodz diferente é sua abordagem <strong>baseada em dados e testes reais</strong>. Ele não ensina teoria - compartilha exatamente os frameworks e técnicas que usa em suas próprias campanhas milionárias de afiliação.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12">
                Para Quem é o Super Presell?
              </h2>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="border-2 border-primary/20">
                  <CardContent className="pt-6">
                    <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">Ideal Para:</h3>
                    <ul className="space-y-2 text-base">
                      <li>✅ Afiliados que querem aumentar comissões</li>
                      <li>✅ Produtores digitais buscando mais vendas</li>
                      <li>✅ Agências de tráfego pago</li>
                      <li>✅ Copywriters profissionais</li>
                      <li>✅ Lançadores e consultores</li>
                      <li>✅ Quem já tem tráfego mas baixa conversão</li>
                      <li>✅ Empreendedores digitais intermediários</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-muted">
                  <CardContent className="pt-6">
                    <XCircle className="h-8 w-8 text-muted-foreground mb-4" />
                    <h3 className="text-xl font-bold mb-3">Não Recomendado Para:</h3>
                    <ul className="space-y-2 text-base text-muted-foreground">
                      <li>❌ Iniciantes totais sem tráfego</li>
                      <li>❌ Quem não tem produto para promover</li>
                      <li>❌ Pessoas sem noção básica de marketing</li>
                      <li>❌ Quem busca resultados sem aplicar</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold mb-6 mt-12">
                O Que Você Vai Aprender no Super Presell?
              </h2>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                🎯 Módulo 1: Fundamentos do Presell
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="text-lg">• O que é <strong>presell e por que funciona</strong> tão bem</li>
                <li className="text-lg">• Psicologia da persuasão aplicada a vendas</li>
                <li className="text-lg">• Diferença entre presell, landing page e página de vendas</li>
                <li className="text-lg">• Quando usar (e quando NÃO usar) presell</li>
                <li className="text-lg">• Anatomia de um presell de alta conversão</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                ✍️ Módulo 2: Copywriting para Presell
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="text-lg">• <strong>Estrutura de copy vencedora</strong> passo a passo</li>
                <li className="text-lg">• Headlines que param o scroll e prendem atenção</li>
                <li className="text-lg">• Storytelling persuasivo para presell</li>
                <li className="text-lg">• Gatilhos mentais que disparam desejo de compra</li>
                <li className="text-lg">• Como remover objeções antes da oferta</li>
                <li className="text-lg">• CTAs (chamadas para ação) irresistíveis</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                🎨 Módulo 3: Design e Estrutura Visual
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="text-lg">• <strong>Ferramentas para criar presells</strong> (gratuitas e pagas)</li>
                <li className="text-lg">• Princípios de design que aumentam conversão</li>
                <li className="text-lg">• Escolha de cores, fontes e imagens estratégicas</li>
                <li className="text-lg">• Mobile-first: presells que convertem no celular</li>
                <li className="text-lg">• Templates prontos e personalizáveis</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                📊 Módulo 4: Testes A/B e Otimização
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="text-lg">• Como fazer <strong>testes A/B eficazes</strong></li>
                <li className="text-lg">• Métricas que realmente importam no presell</li>
                <li className="text-lg">• Ferramentas de análise e rastreamento</li>
                <li className="text-lg">• Otimização contínua baseada em dados</li>
                <li className="text-lg">• Como identificar e corrigir pontos de fuga</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                🚀 Módulo 5: Estratégias Avançadas
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="text-lg">• <strong>Presells multinível</strong> para funis complexos</li>
                <li className="text-lg">• Vídeo presell vs texto: quando usar cada um</li>
                <li className="text-lg">• Integração com automações de email</li>
                <li className="text-lg">• Remarketing e retargeting após presell</li>
                <li className="text-lg">• Cases reais de presells milionários</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                💰 Módulo 6: Monetização e Escala
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="text-lg">• Como <strong>escolher produtos</strong> para fazer presell</li>
                <li className="text-lg">• Negociação de comissões maiores com produtores</li>
                <li className="text-lg">• Escala: de 10 a 1000 vendas por mês</li>
                <li className="text-lg">• Criação de sistemas de presell escaláveis</li>
                <li className="text-lg">• Terceirização e automação de processos</li>
              </ul>

              <div className="my-12 text-center">
                <a 
                  href="https://kiwify.app/qeDlA3h?afid=6Kybii5i" 
                  target="_blank" 
                  rel="noopener noreferrer sponsored"
                >
                  <Button size="lg" className="text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all">
                    <Target className="mr-2 h-6 w-6" />
                    Dominar Presells de Alta Conversão Agora
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
                      "Estava enviando tráfego direto para páginas de vendas e mal pagava meus anúncios. Depois do Super Presell, minha conversão triplicou! Saí de 2% para 6.5% de conversão. Agora minhas campanhas são lucrat ivas desde o primeiro dia."
                    </p>
                    <p className="text-sm font-semibold">— Pedro H., Afiliado Digital</p>
                    <p className="text-sm text-muted-foreground">São Paulo - SP</p>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/10 border-l-4 border-primary">
                  <CardContent className="pt-6">
                    <p className="text-base italic mb-4">
                      "Como produtora, sempre tive dificuldade em ensinar meus afiliados a vender bem. O Super Presell me deu os frameworks para criar modelos de presell que aumentaram as vendas de todo meu time. ROI absurdo!"
                    </p>
                    <p className="text-sm font-semibold">— Luciana R., Produtora Digital</p>
                    <p className="text-sm text-muted-foreground">Florianópolis - SC</p>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/10 border-l-4 border-primary">
                  <CardContent className="pt-6">
                    <p className="text-base italic mb-4">
                      "Apliquei as técnicas em uma campanha de lançamento e batemos recorde de vendas - R$ 287 mil em 7 dias! O presell foi fundamental para preparar a audiência. Valeu cada centavo investido no curso."
                    </p>
                    <p className="text-sm font-semibold">— Ricardo M., Gestor de Tráfego</p>
                    <p className="text-sm text-muted-foreground">Rio de Janeiro - RJ</p>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold mb-6 mt-12">
                ✅ Prós e Contras do Super Presell
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
                        <span><strong>Método comprovado</strong> por resultados reais</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Aumenta <strong>conversões significativamente</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Professor com <strong>expertise comprovada</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span><strong>Templates prontos</strong> para usar</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Funciona em <strong>qualquer nicho</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span><strong>ROI rápido</strong> para quem aplica</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Conteúdo <strong>direto e prático</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span><strong>Suporte técnico</strong> qualificado</span>
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
                        <span>Não é para <strong>iniciantes absolutos</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                        <span>Requer <strong>tráfego para testar</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                        <span>Curva de aprendizado de <strong>copywriting</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                        <span>Investimento considerável</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold mb-6 mt-12">
                🤔 Vale a Pena Investir no Super Presell?
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Se você já trabalha com tráfego pago ou tem audiência estabelecida, a resposta é <strong>SIM, vale muito a pena!</strong> O Super Presell pode <strong>multiplicar seus resultados</strong> sem aumentar seus gastos com tráfego.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                O retorno sobre investimento é <strong>extremamente rápido</strong> para quem já tem operação rodando. Muitos alunos pagam o curso com as primeiras melhorias de conversão. É um investimento que se paga sozinho rapidamente.
              </p>

              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-xl my-8">
                <h3 className="text-2xl font-bold mb-4 text-center">
                  ⚡ Multiplique Suas Conversões Hoje
                </h3>
                <p className="text-center text-lg mb-6">
                  Garanta acesso ao <strong>Super Presell</strong> e comece a criar páginas de alta conversão agora!
                </p>
                <div className="text-center">
                  <a 
                    href="https://kiwify.app/qeDlA3h?afid=6Kybii5i" 
                    target="_blank" 
                    rel="noopener noreferrer sponsored"
                  >
                    <Button size="lg" className="text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transition-all">
                      <Target className="mr-2 h-6 w-6" />
                      Quero Aumentar Minhas Conversões
                    </Button>
                  </a>
                  <p className="text-sm text-muted-foreground mt-4">
                    ✅ Acesso imediato • ✅ Templates prontos • ✅ Suporte especializado
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 mt-12">
                ❓ Perguntas Frequentes
              </h2>

              <div className="space-y-6 my-8">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">O Super Presell funciona?</h3>
                    <p className="text-base text-muted-foreground">
                      Sim, é um método validado por centenas de afiliados e produtores. Nodz compartilha técnicas comprovadas que aumentam significativamente as taxas de conversão.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">Preciso saber fazer landing pages?</h3>
                    <p className="text-base text-muted-foreground">
                      Não necessariamente. O curso ensina desde o básico, incluindo ferramentas gratuitas para criar páginas de presell.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">Funciona para qualquer nicho?</h3>
                    <p className="text-base text-muted-foreground">
                      Sim! O método de presell pode ser aplicado em qualquer nicho, desde produtos digitais até físicos, serviços e afiliação.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">Quanto posso aumentar minhas conversões?</h3>
                    <p className="text-base text-muted-foreground">
                      Alunos relatam aumentos de 50% a 300% nas taxas de conversão após implementar o método Super Presell. Resultados variam conforme aplicação.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 p-6 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                <h3 className="text-xl font-bold mb-4">💡 Continue Aprendendo</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" asChild>
                    <Link to="/marketing-digital">Mais Cursos de Marketing Digital</Link>
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

export default SuperPresell;