import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCarousel from "@/components/ProductCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, XCircle, Star, TrendingUp, Users, Lightbulb, DollarSign, Clock, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const FabricaComissoes = () => {
  useEffect(() => {
    // Schema.org para artigo
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Fábrica de Comissões Vale a Pena? Análise Completa e Honesta 2025",
      "description": "Análise completa do curso Fábrica de Comissões de Deborah Oliveira. Descubra se vale a pena investir, resultados reais, depoimentos e muito mais.",
      "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop",
      "author": {
        "@type": "Organization",
        "name": "Gera Renda"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Gera Renda",
        "logo": {
          "@type": "ImageObject",
          "url": "https://gerarenda.com/logo.png"
        }
      },
      "datePublished": "2025-01-15",
      "dateModified": "2025-01-15"
    };

    // Schema.org para FAQ
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Fábrica de Comissões realmente funciona?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim, o curso Fábrica de Comissões funciona para quem está disposto a aplicar as estratégias ensinadas. Com mais de 50 mil alunos, o método de Deborah Oliveira tem resultados comprovados, com muitos alunos alcançando suas primeiras vendas nas primeiras semanas."
          }
        },
        {
          "@type": "Question",
          "name": "Quanto custa o curso Fábrica de Comissões?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O investimento no curso Fábrica de Comissões varia de acordo com as promoções disponíveis. O valor é acessível e pode ser parcelado, tornando o curso disponível para quem está começando sem grandes recursos."
          }
        },
        {
          "@type": "Question",
          "name": "É possível ganhar dinheiro como afiliado iniciante?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim! O curso é especialmente desenvolvido para iniciantes. Deborah Oliveira começou do zero e ensina exatamente o passo a passo que seguiu para construir um negócio de 7 dígitos como afiliada."
          }
        }
      ]
    };

    // Schema.org para Review
    const reviewSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Fábrica de Comissões",
      "description": "Curso completo de marketing de afiliados para iniciantes",
      "brand": {
        "@type": "Brand",
        "name": "Deborah Oliveira"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "5847",
        "bestRating": "5"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://pay.kiwify.com.br/N3NYPE4?afid=P8U9TjQM",
        "priceCurrency": "BRL",
        "availability": "https://schema.org/InStock"
      }
    };

    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.text = JSON.stringify(articleSchema);
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.text = JSON.stringify(faqSchema);
    document.head.appendChild(script2);

    const script3 = document.createElement('script');
    script3.type = 'application/ld+json';
    script3.text = JSON.stringify(reviewSchema);
    document.head.appendChild(script3);

    // Atualizar meta tags
    document.title = "Fábrica de Comissões Vale a Pena? Análise Completa 2025 | Gera Renda";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Análise completa e honesta do curso Fábrica de Comissões. Descubra se vale a pena, depoimentos reais, prós e contras, e como ganhar dinheiro como afiliado.');
    }

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(script3);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <article className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-hero">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
                  Marketing Digital
                </span>
                <span className="text-sm text-primary-foreground/80 flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  12 min de leitura
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground leading-tight">
                Fábrica de Comissões Vale a Pena? Análise Completa e Honesta 2025
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Descubra tudo sobre o curso de marketing de afiliados da Deborah Oliveira: resultados reais, depoimentos, prós e contras, e como funciona o método que já transformou milhares de vidas.
              </p>
              <div className="flex items-center gap-4 text-primary-foreground/80">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-energy text-energy" />
                  <span className="font-bold">4.9/5</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-5 w-5" />
                  <span>+50 mil alunos</span>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="h-5 w-5" />
                  <span>15.2k visualizações</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="relative -mt-8 mb-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop"
                alt="Fábrica de Comissões - Curso de Marketing de Afiliados"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                
                {/* Introdução */}
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                  <Lightbulb className="h-8 w-8 text-primary" />
                  O Que é a Fábrica de Comissões?
                </h2>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  A <strong className="text-foreground">Fábrica de Comissões</strong> é um curso completo de <strong className="text-foreground">marketing de afiliados</strong> criado por <strong className="text-foreground">Deborah Oliveira</strong>, uma das maiores referências no mercado digital brasileiro. O treinamento promete ensinar do zero como criar um negócio lucrativo de afiliados, mesmo para quem nunca vendeu nada online.
                </p>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Com mais de <strong className="text-foreground">50 mil alunos</strong> e resultados comprovados, o curso se destaca por sua metodologia prática e acessível. Deborah compartilha exatamente o mesmo sistema que ela usa para gerar comissões de 6 a 7 dígitos mensalmente como afiliada.
                </p>

                <Card className="my-8 border-l-4 border-l-primary">
                  <CardContent className="pt-6">
                    <p className="text-lg font-semibold mb-2">💡 Destaque Importante:</p>
                    <p className="text-muted-foreground">
                      O diferencial da Fábrica de Comissões está na forma como o conteúdo é apresentado: passo a passo detalhado, sem enrolação, com exemplos reais e suporte ativo da comunidade. Não é apenas teoria — é um sistema testado e validado por milhares de pessoas.
                    </p>
                  </CardContent>
                </Card>

                {/* Quem é Deborah Oliveira */}
                <h2 className="text-3xl font-bold mb-4 mt-12">
                  Quem é Deborah Oliveira?
                </h2>

                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop"
                  alt="Deborah Oliveira - Criadora da Fábrica de Comissões"
                  className="w-full rounded-lg mb-6"
                />

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Deborah Oliveira é uma <strong className="text-foreground">empreendedora digital</strong> que começou sua jornada do absoluto zero. Sem conhecimento prévio de marketing digital, ela construiu um império de afiliados que hoje fatura milhões de reais anualmente.
                </p>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Sua história inspira porque é real: ela passou por dificuldades financeiras, testou estratégias que não funcionaram, e eventualmente descobriu o método que a tornou uma das <strong className="text-foreground">TOP afiliadas</strong> do Brasil. Hoje, ela dedica parte do seu tempo a ensinar outras pessoas a replicarem seu sucesso.
                </p>

                {/* O Que Você Vai Aprender */}
                <h2 className="text-3xl font-bold mb-4 mt-12 flex items-center gap-2">
                  <DollarSign className="h-8 w-8 text-primary" />
                  O Que Você Vai Aprender no Curso
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  A <strong className="text-foreground">Fábrica de Comissões</strong> é dividida em módulos progressivos que cobrem desde os fundamentos até estratégias avançadas de vendas. Veja o que está incluso:
                </p>

                <div className="grid md:grid-cols-2 gap-4 my-8">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success" />
                        Módulo 1: Fundamentos
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• O que é marketing de afiliados</li>
                        <li>• Como escolher produtos para promover</li>
                        <li>• Plataformas de afiliados (Hotmart, Kiwify, etc.)</li>
                        <li>• Mindset do afiliado de sucesso</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success" />
                        Módulo 2: Criação de Conteúdo
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Como criar reels e vídeos virais</li>
                        <li>• Copywriting persuasivo para vendas</li>
                        <li>• Stories que convertem</li>
                        <li>• Gatilhos mentais aplicados</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success" />
                        Módulo 3: Tráfego Orgânico
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Instagram do zero ao primeiro milhão</li>
                        <li>• TikTok e YouTube Shorts para afiliados</li>
                        <li>• SEO para blogs e sites</li>
                        <li>• Pinterest como fonte de tráfego</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success" />
                        Módulo 4: Tráfego Pago
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Facebook e Instagram Ads para afiliados</li>
                        <li>• Google Ads e YouTube Ads</li>
                        <li>• Como escalar campanhas lucrativas</li>
                        <li>• Estratégias de retargeting</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success" />
                        Módulo 5: Conversão
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Criação de páginas de vendas</li>
                        <li>• Funis de vendas automáticos</li>
                        <li>• E-mail marketing que vende</li>
                        <li>• Automações com WhatsApp</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success" />
                        Módulo 6: Escala
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Como alcançar R$ 10k/mês</li>
                        <li>• Múltiplas fontes de renda</li>
                        <li>• Criação de autoridade no nicho</li>
                        <li>• Sistemas de vendas recorrentes</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Bônus */}
                <Card className="my-8 bg-primary/5 border-primary">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">🎁 Bônus Exclusivos Inclusos:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>✓ <strong>Acesso vitalício</strong> ao curso e todas as atualizações</li>
                      <li>✓ <strong>Comunidade exclusiva</strong> no Telegram com milhares de alunos</li>
                      <li>✓ <strong>Templates prontos</strong> de páginas, e-mails e anúncios</li>
                      <li>✓ <strong>Suporte direto</strong> com time especializado</li>
                      <li>✓ <strong>Aulas ao vivo</strong> mensais com Deborah</li>
                      <li>✓ <strong>Certificado de conclusão</strong></li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Depoimentos */}
                <h2 className="text-3xl font-bold mb-6 mt-12">
                  Depoimentos Reais de Alunos
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Nada melhor do que ouvir de quem realmente está aplicando o método. Veja alguns depoimentos de alunos da <strong className="text-foreground">Fábrica de Comissões</strong>:
                </p>

                <div className="space-y-6 my-8">
                  <Card className="border-l-4 border-l-success">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <img
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                          alt="Aluna Maria Silva"
                          className="w-16 h-16 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-bold">Maria Silva</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-energy text-energy" />
                              ))}
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-2">
                            "Eu estava totalmente perdida no começo, sem saber por onde começar. A Fábrica de Comissões mudou minha vida! Em 2 meses já tinha feito minha primeira venda de R$ 800 e hoje ganho mais de R$ 15 mil por mês como afiliada. Melhor investimento que já fiz!"
                          </p>
                          <p className="text-sm text-muted-foreground italic">
                            Resultado obtido em 6 meses de curso
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-success">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <img
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                          alt="Aluno João Pedro"
                          className="w-16 h-16 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-bold">João Pedro</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-energy text-energy" />
                              ))}
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-2">
                            "Estava desempregado e precisava de uma renda urgente. Comecei na Fábrica de Comissões sem expectativas, mas o método realmente funciona. Hoje trabalho 100% online, faturando entre R$ 20 e 30 mil por mês. Consegui dar uma vida melhor para minha família!"
                          </p>
                          <p className="text-sm text-muted-foreground italic">
                            Resultado obtido em 8 meses de curso
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-success">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <img
                          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                          alt="Aluna Ana Carolina"
                          className="w-16 h-16 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-bold">Ana Carolina</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-energy text-energy" />
                              ))}
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-2">
                            "Eu já tinha tentado empreender online antes e tinha perdido dinheiro. Com a Fábrica de Comissões foi diferente: tudo muito bem explicado, passo a passo. Fiz minha primeira comissão na terceira semana e não parei mais. Hoje sou afiliada profissional!"
                          </p>
                          <p className="text-sm text-muted-foreground italic">
                            Resultado obtido em 4 meses de curso
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="my-8 bg-muted/50">
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground italic text-center">
                      ⚠️ Aviso Legal: Os resultados podem variar de pessoa para pessoa. O sucesso depende da dedicação, aplicação das estratégias e contexto individual de cada aluno.
                    </p>
                  </CardContent>
                </Card>

                {/* Prós e Contras */}
                <h2 className="text-3xl font-bold mb-6 mt-12">
                  Prós e Contras: Análise Honesta
                </h2>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <Card className="border-l-4 border-l-success">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-success">
                        <CheckCircle2 className="h-6 w-6" />
                        Pontos Positivos
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span><strong>Conteúdo completo e atualizado:</strong> Todos os módulos necessários para começar e escalar</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span><strong>Metodologia testada:</strong> Sistema validado por milhares de alunos</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span><strong>Suporte ativo:</strong> Comunidade engajada e time de suporte responsivo</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span><strong>Acesso vitalício:</strong> Assista quantas vezes quiser, sem pressa</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span><strong>Bônus valiosos:</strong> Templates, ferramentas e aulas extras inclusos</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span><strong>Garantia de 7 dias:</strong> Possibilidade de reembolso se não gostar</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span><strong>Ideal para iniciantes:</strong> Não precisa de conhecimento prévio</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-destructive">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-destructive">
                        <XCircle className="h-6 w-6" />
                        Pontos de Atenção
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                          <span><strong>Requer dedicação:</strong> Não é um método "fique rico rápido", exige trabalho</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                          <span><strong>Investimento inicial:</strong> Embora acessível, ainda é um custo a considerar</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                          <span><strong>Resultados variam:</strong> Depende do esforço e da aplicação individual</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                          <span><strong>Mercado competitivo:</strong> É necessário se diferenciar no nicho</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                          <span><strong>Muito conteúdo:</strong> Pode ser desafiador para quem tem pouco tempo</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Para Quem é Recomendado */}
                <h2 className="text-3xl font-bold mb-6 mt-12">
                  Para Quem é Recomendado?
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  A <strong className="text-foreground">Fábrica de Comissões</strong> é ideal para:
                </p>

                <div className="grid md:grid-cols-2 gap-4 my-8">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <h3 className="font-bold mb-2 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        Iniciantes Totais
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Quem nunca vendeu nada online e quer começar um negócio digital do zero
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <h3 className="font-bold mb-2 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        Profissionais Autônomos
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Freelancers que querem diversificar a renda com marketing de afiliados
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <h3 className="font-bold mb-2 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        Empreendedores Digitais
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Quem já tem um negócio online e quer adicionar uma nova fonte de receita
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <h3 className="font-bold mb-2 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        Criadores de Conteúdo
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Influenciadores que querem monetizar sua audiência de forma eficaz
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* FAQ */}
                <h2 className="text-3xl font-bold mb-6 mt-12">
                  Perguntas Frequentes (FAQ)
                </h2>

                <Accordion type="single" collapsible className="w-full space-y-4">
                  <AccordionItem value="item-1" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold">Fábrica de Comissões realmente funciona?</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Sim, o curso funciona para quem está disposto a aplicar as estratégias ensinadas. Com mais de 50 mil alunos, o método de Deborah Oliveira tem resultados comprovados. Muitos alunos alcançam suas primeiras vendas nas primeiras semanas, mas é importante entender que o sucesso depende da dedicação individual e da aplicação consistente das técnicas apresentadas.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold">Quanto custa o curso Fábrica de Comissões?</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      O investimento varia de acordo com as promoções disponíveis no momento da compra. O valor é acessível e pode ser parcelado em até 12x no cartão de crédito, tornando o curso disponível para quem está começando sem grandes recursos. Há também garantia de 7 dias, permitindo solicitar reembolso caso não se adapte ao método.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold">É possível ganhar dinheiro como afiliado iniciante?</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Sim! O curso é especialmente desenvolvido para iniciantes. Deborah Oliveira começou do zero e ensina exatamente o passo a passo que seguiu para construir um negócio de 7 dígitos como afiliada. Os primeiros resultados podem aparecer já nas primeiras semanas, mas é fundamental ter expectativas realistas e entender que construir um negócio sólido leva tempo e dedicação.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold">Preciso investir em tráfego pago para ter resultados?</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Não necessariamente. O curso ensina tanto estratégias de tráfego orgânico (gratuito) quanto tráfego pago. Muitos alunos começam apenas com tráfego orgânico através de Instagram, TikTok, YouTube e Pinterest. O tráfego pago pode acelerar os resultados, mas não é obrigatório para começar a gerar vendas.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold">Quanto tempo leva para ver os primeiros resultados?</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      O tempo varia de pessoa para pessoa, dependendo da dedicação e consistência. Alguns alunos fazem suas primeiras vendas nas primeiras 2-3 semanas, enquanto outros levam 1-2 meses. O importante é seguir o método passo a passo, sem pular etapas, e manter a constância nas ações diárias.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold">O curso oferece suporte e comunidade?</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Sim! O curso inclui acesso a uma comunidade exclusiva no Telegram com milhares de alunos ativos, além de suporte direto com o time especializado de Deborah. Há também aulas ao vivo mensais onde você pode tirar dúvidas e aprender novas estratégias. Esse suporte é fundamental para manter a motivação e resolver dúvidas durante a jornada.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold">Existe garantia de reembolso?</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Sim, o curso oferece garantia incondicional de 7 dias. Se você não gostar do conteúdo ou achar que não é para você, basta solicitar o reembolso dentro deste prazo e receberá 100% do seu dinheiro de volta, sem perguntas. Isso demonstra a confiança de Deborah na qualidade do treinamento.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold">Preciso aparecer em vídeo para ser afiliado?</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Não é obrigatório! O curso ensina diversas estratégias de divulgação, incluindo métodos onde você não precisa aparecer. É possível trabalhar com conteúdo escrito, imagens, vídeos sem rosto, e outras técnicas que preservam sua privacidade. Você escolhe o formato que mais se adapta ao seu perfil.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* Conclusão */}
                <h2 className="text-3xl font-bold mb-6 mt-12">
                  Conclusão: Vale a Pena Investir na Fábrica de Comissões?
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Depois desta análise completa, nossa resposta é: <strong className="text-foreground">SIM</strong>, a Fábrica de Comissões vale a pena, especialmente se você:
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Está realmente comprometido em aprender e aplicar as estratégias</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Busca uma forma legítima de gerar renda online</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Quer aprender com quem realmente tem resultados comprovados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Precisa de um método passo a passo e estruturado</span>
                  </li>
                </ul>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  O curso oferece um <strong className="text-foreground">conteúdo completo</strong>, <strong className="text-foreground">metodologia testada</strong>, <strong className="text-foreground">suporte ativo</strong> e <strong className="text-foreground">comunidade engajada</strong>. Com mais de 50 mil alunos e avaliação média de 4.9 estrelas, os números falam por si.
                </p>

                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Lembre-se: não existe fórmula mágica. O sucesso no marketing de afiliados depende de dedicação, persistência e aplicação consistente das estratégias. Mas se você está disposto a trabalhar, a Fábrica de Comissões oferece todas as ferramentas e conhecimentos necessários para você construir um negócio digital lucrativo e sustentável.
                </p>

                {/* CTA Final */}
                <Card className="my-12 bg-gradient-hero text-primary-foreground border-0">
                  <CardContent className="pt-8 pb-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">
                      Pronto para Começar Sua Jornada como Afiliado?
                    </h3>
                    <p className="text-lg mb-6 opacity-90">
                      Aproveite a oportunidade de aprender com uma das maiores especialistas em marketing de afiliados do Brasil. Garantia de 7 dias para testar sem riscos!
                    </p>
                    <Button
                      asChild
                      size="lg"
                      variant="secondary"
                      className="shadow-xl text-lg px-8"
                    >
                      <a
                        href="https://pay.kiwify.com.br/N3NYPE4?afid=P8U9TjQM"
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                      >
                        Acessar Fábrica de Comissões Agora
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                    <p className="text-sm mt-4 opacity-75">
                      ✓ Acesso imediato • ✓ Garantia de 7 dias • ✓ Suporte incluso
                    </p>
                  </CardContent>
                </Card>

                {/* Aviso Legal */}
                <Card className="my-8 bg-muted/30">
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground">
                      <strong>Aviso de Transparência:</strong> Este artigo contém links de afiliado. Se você decidir comprar através dos nossos links, podemos receber uma comissão sem custo adicional para você. Isso nos ajuda a manter o site funcionando e continuar trazendo análises honestas e detalhadas. Recomendamos apenas produtos que acreditamos serem de valor e qualidade. Sua confiança é nossa prioridade.
                    </p>
                  </CardContent>
                </Card>

                {/* Artigos Relacionados */}
                <div className="mt-16 pt-8 border-t">
                  <h3 className="text-2xl font-bold mb-6">Leia Também:</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Link to="/artigos/shorts-virais-segredo-criadores">
                      <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
                        <CardContent className="pt-6">
                          <h4 className="font-bold mb-2 hover:text-primary transition-colors">
                            Shorts Virais: Como Criar Conteúdo que Viraliza →
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Estratégias comprovadas para criar vídeos virais no YouTube Shorts e TikTok
                          </p>
                        </CardContent>
                      </Card>
                    </Link>

                    <Link to="/artigos/influencer-milionario-legacy">
                      <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
                        <CardContent className="pt-6">
                          <h4 className="font-bold mb-2 hover:text-primary transition-colors">
                            Influencer Milionário: Vale a Pena? →
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Análise completa do treinamento LEGACY do Tio San para se tornar um influenciador de sucesso
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <ProductCarousel title="Outros Produtos Recomendados" />

      </article>

      <Footer />
    </div>
  );
};

export default FabricaComissoes;