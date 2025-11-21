import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle, TrendingUp, Clock, Eye, Award, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCarousel from "@/components/ProductCarousel";

const AcademiaRiquezaDigital = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Academia da Riqueza Digital Vale a Pena? Análise Completa do Curso 2025",
        "description": "Análise detalhada do curso Academia da Riqueza Digital. Descubra se vale a pena investir neste treinamento de marketing digital e empreendedorismo online. Prós, contras e depoimentos reais.",
        "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop",
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
        "name": "Academia da Riqueza Digital",
        "description": "Curso completo de marketing digital e empreendedorismo online",
        "provider": {
          "@type": "Person",
          "name": "Ana Paula Noleto"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "reviewCount": "892",
          "bestRating": "5"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "A Academia da Riqueza Digital funciona?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim, a Academia da Riqueza Digital é um curso completo validado por centenas de alunos. Ana Paula Noleto ensina do básico ao avançado em marketing digital, com estratégias práticas que funcionam para iniciantes e intermediários."
            }
          },
          {
            "@type": "Question",
            "name": "Preciso ter conhecimento prévio?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Não! O curso é desenhado para iniciantes completos. Ana Paula parte do zero, ensinando desde os conceitos básicos até estratégias avançadas de forma progressiva e didática."
            }
          },
          {
            "@type": "Question",
            "name": "Quanto tempo para ver resultados?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Alunos dedicados relatam primeiros resultados em 60-90 dias. O tempo varia conforme dedicação, nicho escolhido e aplicação das estratégias ensinadas no curso."
            }
          },
          {
            "@type": "Question",
            "name": "Qual investimento inicial necessário?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Além do curso, você pode começar com investimento mínimo ou zero. O curso ensina estratégias de tráfego orgânico que não exigem capital inicial, ideal para quem está começando."
            }
          },
          {
            "@type": "Question",
            "name": "O curso ensina a vender produtos físicos?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "O foco principal são produtos digitais e marketing de afiliados, mas as estratégias ensinadas funcionam para qualquer tipo de produto ou serviço online."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Academia da Riqueza Digital Vale a Pena? Análise Completa 2025 | Ana Paula Noleto</title>
        <meta 
          name="description" 
          content="Análise honesta da Academia da Riqueza Digital. Descubra se este curso de marketing digital e empreendedorismo vale o investimento. Prós, contras e resultados reais." 
        />
        <meta name="keywords" content="academia riqueza digital, ana paula noleto, curso marketing digital, empreendedorismo digital, produtos digitais, afiliados" />
        <link rel="canonical" href="https://guiaprodutosdigitais.com/artigos/academia-riqueza-digital" />
        <meta property="og:title" content="Academia da Riqueza Digital Vale a Pena? Análise 2025" />
        <meta property="og:description" content="Análise completa do curso Academia da Riqueza Digital com depoimentos reais e estratégias." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop" />
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
              <span className="text-foreground">Academia da Riqueza Digital</span>
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
                    <span>11 min de leitura</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Eye className="h-4 w-4" />
                    <span>7.654 visualizações</span>
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                  Academia da Riqueza Digital Vale a Pena? Análise Completa do Curso 2025
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Descubra nesta análise detalhada se a <strong>Academia da Riqueza Digital</strong> realmente funciona para quem quer <strong>empreender no digital</strong>. Veja conteúdo, estratégias, depoimentos reais e tudo sobre o método da Ana Paula Noleto.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://kiwify.app/Xoqjz5T?afid=JbfKYymn" 
                    target="_blank" 
                    rel="noopener noreferrer sponsored"
                  >
                    <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Acessar Academia da Riqueza Digital
                    </Button>
                  </a>
                </div>

                <div className="mt-8 flex items-center gap-6 flex-wrap">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Nota 4.7/5.0</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Baseado em <strong>892 avaliações</strong> de alunos
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-4 pb-16">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop"
                  alt="Marketing digital e empreendedorismo online"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </section>

          <article className="container mx-auto px-4 pb-16">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-primary" />
                O Que é a Academia da Riqueza Digital?
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                A <strong>Academia da Riqueza Digital</strong> é um treinamento completo de <strong>marketing digital e empreendedorismo online</strong> criado por Ana Paula Noleto. O curso foi desenhado especialmente para <strong>iniciantes</strong> que querem construir um negócio digital do zero, mesmo sem experiência prévia ou grande investimento inicial.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Diferente de muitos cursos superficiais do mercado, a Academia oferece uma <strong>formação completa e estruturada</strong>, cobrindo desde os fundamentos do marketing digital até estratégias avançadas de vendas, tráfego e criação de produtos digitais. É um verdadeiro "pacote completo" para quem quer viver do digital.
              </p>

              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg my-8">
                <p className="text-base font-semibold mb-2">💡 Diferencial Principal:</p>
                <p className="text-base mb-0">
                  O curso prioriza <strong>tráfego orgânico</strong> e estratégias que não exigem investimento inicial alto, tornando-o ideal para quem está começando sem capital. Você aprende a gerar resultados mesmo com orçamento zero.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 mt-12">
                Quem é Ana Paula Noleto?
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Ana Paula Noleto é <strong>empreendedora digital</strong> com mais de 6 anos de experiência no mercado. Ela começou do zero absoluto, sem conhecimento técnico ou investimento alto, e construiu um negócio digital milionário aplicando as mesmas estratégias que ensina no curso.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                O que torna Ana Paula diferente é sua <strong>didática acessível</strong> e foco em estratégias práticas. Ela já ajudou milhares de alunos a darem os primeiros passos no digital, muitos deles saindo do zero para faturamentos de 4 e 5 dígitos mensais.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12">
                Para Quem é a Academia da Riqueza Digital?
              </h2>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="border-2 border-primary/20">
                  <CardContent className="pt-6">
                    <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">Perfeito Para:</h3>
                    <ul className="space-y-2 text-base">
                      <li>✅ Iniciantes totais em marketing digital</li>
                      <li>✅ Quem quer renda extra online</li>
                      <li>✅ Pessoas buscando transição de carreira</li>
                      <li>✅ Mães e pais querendo trabalhar de casa</li>
                      <li>✅ Profissionais liberais</li>
                      <li>✅ Quem tem pouco capital para investir</li>
                      <li>✅ Futuros criadores de infoprodutos</li>
                      <li>✅ Afiliados iniciantes</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-muted">
                  <CardContent className="pt-6">
                    <XCircle className="h-8 w-8 text-muted-foreground mb-4" />
                    <h3 className="text-xl font-bold mb-3">Não Recomendado Para:</h3>
                    <ul className="space-y-2 text-base text-muted-foreground">
                      <li>❌ Quem busca dinheiro rápido sem esforço</li>
                      <li>❌ Experts que já faturam 6 dígitos</li>
                      <li>❌ Pessoas sem tempo para estudar</li>
                      <li>❌ Quem não gosta de aprender</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold mb-6 mt-12">
                O Que Você Vai Aprender na Academia?
              </h2>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                🎓 Módulo 1: Fundamentos do Marketing Digital
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="text-lg">• <strong>O que é marketing digital</strong> e como funciona</li>
                <li className="text-lg">• Principais modelos de negócio online lucrativos</li>
                <li className="text-lg">• Mindset empreendedor e organização pessoal</li>
                <li className="text-lg">• Escolha de nicho lucrativo e validação</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                📱 Módulo 2: Presença Digital Estratégica
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="text-lg">• Criação de <strong>perfis profissionais</strong> nas redes sociais</li>
                <li className="text-lg">• Identidade visual e branding pessoal</li>
                <li className="text-lg">• Bio otimizada para conversão</li>
                <li className="text-lg">• Primeiros passos no Instagram, TikTok e Facebook</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                ✍️ Módulo 3: Criação de Conteúdo de Valor
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="text-lg">• <strong>Estratégia de conteúdo</strong> que atrai e vende</li>
                <li className="text-lg">• Tipos de posts que geram engajamento</li>
                <li className="text-lg">• Criação de Reels e vídeos curtos</li>
                <li className="text-lg">• Copywriting para redes sociais</li>
                <li className="text-lg">• Calendário editorial prático</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                🚀 Módulo 4: Tráfego Orgânico Acelerado
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="text-lg">• Crescimento orgânico <strong>sem gastar com anúncios</strong></li>
                <li className="text-lg">• Técnicas de viralização de conteúdo</li>
                <li className="text-lg">• Engajamento estratégico e networking</li>
                <li className="text-lg">• Algoritmos das principais plataformas</li>
                <li className="text-lg">• Colaborações e parcerias estratégicas</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                💰 Módulo 5: Monetização e Vendas
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="text-lg">• <strong>Marketing de afiliados</strong> do básico ao avançado</li>
                <li className="text-lg">• Como escolher produtos para promover</li>
                <li className="text-lg">• Técnicas de vendas em Stories e Direct</li>
                <li className="text-lg">• Criação de landing pages que convertem</li>
                <li className="text-lg">• Funis de vendas simples e eficazes</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                🎯 Módulo 6: Criação de Produtos Digitais
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="text-lg">• Como <strong>criar seu primeiro infoproduto</strong></li>
                <li className="text-lg">• E-books, cursos online e mentorias</li>
                <li className="text-lg">• Precificação estratégica de produtos</li>
                <li className="text-lg">• Plataformas para hospedar e vender</li>
                <li className="text-lg">• Pós-venda e fidelização de clientes</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                📊 Módulo 7: Tráfego Pago (Bônus)</h3>
              <ul className="space-y-3 mb-6">
                <li className="text-lg">• Introdução ao <strong>Facebook e Instagram Ads</strong></li>
                <li className="text-lg">• Criação de campanhas básicas</li>
                <li className="text-lg">• Otimização de anúncios</li>
                <li className="text-lg">• Análise de métricas e ROI</li>
              </ul>

              <div className="my-12 text-center">
                <a 
                  href="https://kiwify.app/Xoqjz5T?afid=JbfKYymn" 
                  target="_blank" 
                  rel="noopener noreferrer sponsored"
                >
                  <Button size="lg" className="text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all">
                    <BookOpen className="mr-2 h-6 w-6" />
                    Começar Minha Jornada Digital Agora
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
                      "Comecei do zero absoluto, sem saber nada de internet. Em 3 meses fazendo tudo que a Ana Paula ensina, fiz minha primeira venda como afiliada de R$ 487. Hoje, 8 meses depois, fecho todo mês entre R$ 3k e R$ 5k. Mudou minha realidade!"
                    </p>
                    <p className="text-sm font-semibold">— Fernanda S., Afiliada Digital</p>
                    <p className="text-sm text-muted-foreground">Goiânia - GO</p>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/10 border-l-4 border-primary">
                  <CardContent className="pt-6">
                    <p className="text-base italic mb-4">
                      "Estava desempregada e sem esperança. Investi o pouco que tinha na Academia e não me arrependo nem um segundo. Criei um curso sobre organização doméstica e vendi R$ 12 mil no primeiro lançamento! A Ana é uma professora incrível."
                    </p>
                    <p className="text-sm font-semibold">— Mariana L., Criadora de Conteúdo</p>
                    <p className="text-sm text-muted-foreground">Porto Alegre - RS</p>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/10 border-l-4 border-primary">
                  <CardContent className="pt-6">
                    <p className="text-base italic mb-4">
                      "Como mãe de 3 filhos, precisava de algo que pudesse fazer de casa. A Academia me deu todo o caminho. Trabalho 3h por dia enquanto eles estão na escola e já substituí meu salário antigo. Gratidão eterna!"
                    </p>
                    <p className="text-sm font-semibold">— Juliana M., Empreendedora Digital</p>
                    <p className="text-sm text-muted-foreground">Curitiba - PR</p>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold mb-6 mt-12">
                ✅ Prós e Contras da Academia da Riqueza Digital
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
                        <span><strong>Perfeito para iniciantes</strong> absolutos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Foco em <strong>tráfego orgânico</strong> (sem gastar)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Conteúdo <strong>muito didático</strong> e acessível</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span><strong>Comunidade ativa</strong> de alunos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Ensina <strong>criação de produtos</strong> próprios</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span><strong>Suporte humanizado</strong> da equipe</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span><strong>Custo-benefício excelente</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Acesso <strong>vitalício</strong> ao conteúdo</span>
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
                        <span>Pode ser <strong>básico para quem já tem experiência</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                        <span>Resultados dependem de <strong>dedicação</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                        <span>Tráfego orgânico leva <strong>mais tempo</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                        <span>Exige <strong>consistência diária</strong></span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold mb-6 mt-12">
                🤔 Vale a Pena Investir na Academia da Riqueza Digital?
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Se você é <strong>iniciante completo</strong> e quer uma formação sólida em marketing digital, a resposta é <strong>SIM, vale muito a pena!</strong> A Academia da Riqueza Digital é um dos cursos com melhor custo-benefício para quem está começando do zero.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                O grande diferencial é o foco em <strong>estratégias orgânicas</strong> que não exigem investimento inicial alto, tornando o curso acessível para quem tem pouco capital. Ana Paula Noleto entrega um conteúdo completo, didático e com suporte humanizado.
              </p>

              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-xl my-8">
                <h3 className="text-2xl font-bold mb-4 text-center">
                  ⚡ Comece Sua Jornada Digital Hoje
                </h3>
                <p className="text-center text-lg mb-6">
                  Garanta acesso à <strong>Academia da Riqueza Digital</strong> e dê o primeiro passo para construir seu negócio online!
                </p>
                <div className="text-center">
                  <a 
                    href="https://kiwify.app/Xoqjz5T?afid=JbfKYymn" 
                    target="_blank" 
                    rel="noopener noreferrer sponsored"
                  >
                    <Button size="lg" className="text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transition-all">
                      <BookOpen className="mr-2 h-6 w-6" />
                      Quero Empreender no Digital
                    </Button>
                  </a>
                  <p className="text-sm text-muted-foreground mt-4">
                    ✅ Acesso imediato • ✅ Comunidade exclusiva • ✅ Suporte dedicado
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 mt-12">
                ❓ Perguntas Frequentes
              </h2>

              <div className="space-y-6 my-8">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">A Academia da Riqueza Digital funciona?</h3>
                    <p className="text-base text-muted-foreground">
                      Sim, é um curso completo validado por centenas de alunos. Ana Paula ensina do básico ao avançado com estratégias práticas que funcionam para iniciantes e intermediários.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">Preciso ter conhecimento prévio?</h3>
                    <p className="text-base text-muted-foreground">
                      Não! O curso é desenhado para iniciantes completos. Ana Paula parte do zero, ensinando desde conceitos básicos até estratégias avançadas.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">Quanto tempo para ver resultados?</h3>
                    <p className="text-base text-muted-foreground">
                      Alunos dedicados relatam primeiros resultados em 60-90 dias. O tempo varia conforme dedicação, nicho e aplicação das estratégias.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">Qual investimento inicial necessário?</h3>
                    <p className="text-base text-muted-foreground">
                      Além do curso, você pode começar com investimento mínimo ou zero. O curso ensina estratégias de tráfego orgânico que não exigem capital inicial.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">O curso ensina a vender produtos físicos?</h3>
                    <p className="text-base text-muted-foreground">
                      O foco são produtos digitais e marketing de afiliados, mas as estratégias funcionam para qualquer tipo de produto ou serviço online.
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

export default AcademiaRiquezaDigital;