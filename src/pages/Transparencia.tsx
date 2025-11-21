import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Eye, Award, Heart } from "lucide-react";

const Transparencia = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container py-16 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Transparência e Isenção de Responsabilidade</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-xl text-muted-foreground">
              No <strong>GERA RENDA</strong>, acreditamos que a transparência é fundamental para construir 
              confiança com nossos leitores. Esta página explica como operamos e como você pode confiar 
              em nossas recomendações.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-12">
              <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Honestidade</h3>
                <p className="text-muted-foreground">
                  Todas as nossas análises são baseadas em pesquisas honestas e experiências reais.
                </p>
              </div>

              <div className="p-6 bg-success/5 border border-success/20 rounded-lg">
                <Eye className="h-12 w-12 text-success mb-4" />
                <h3 className="text-xl font-bold mb-2">Transparência</h3>
                <p className="text-muted-foreground">
                  Divulgamos claramente nossa relação com os produtos que recomendamos.
                </p>
              </div>

              <div className="p-6 bg-energy/5 border border-energy/20 rounded-lg">
                <Award className="h-12 w-12 text-energy mb-4" />
                <h3 className="text-xl font-bold mb-2">Qualidade</h3>
                <p className="text-muted-foreground">
                  Recomendamos apenas produtos que passam por nosso rigoroso processo de avaliação.
                </p>
              </div>

              <div className="p-6 bg-accent/5 border border-accent/20 rounded-lg">
                <Heart className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Compromisso</h3>
                <p className="text-muted-foreground">
                  Nosso compromisso é sempre com você, nosso leitor, não com os criadores de produtos.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Como Funcionam os Links de Afiliados</h2>
            
            <p>
              Este site é mantido através de um modelo de negócios baseado em <strong>marketing de afiliados</strong>. 
              Isso significa que:
            </p>

            <div className="my-6 p-6 bg-muted/50 rounded-lg space-y-4">
              <div>
                <h3 className="font-bold mb-2">🔗 O que são links de afiliados?</h3>
                <p className="text-muted-foreground">
                  São links especiais que rastreiam as compras feitas através do nosso site. Quando você clica em 
                  um desses links e faz uma compra, recebemos uma pequena comissão do vendedor.
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">💰 Você paga mais por isso?</h3>
                <p className="text-muted-foreground">
                  <strong>Não!</strong> O preço que você paga é exatamente o mesmo, independentemente de usar nosso 
                  link ou não. A comissão vem da margem do vendedor, não do seu bolso.
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">🎯 Por que usamos este modelo?</h3>
                <p className="text-muted-foreground">
                  As comissões de afiliados nos permitem manter o site gratuito para você e continuar produzindo 
                  análises detalhadas e conteúdo de qualidade.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Nossa Metodologia de Análise</h2>
            
            <p>
              Cada produto analisado no GERA RENDA passa por um processo rigoroso de avaliação:
            </p>

            <ol className="space-y-4 list-decimal list-inside ml-4">
              <li>
                <strong>Pesquisa Inicial:</strong> Investigamos o criador, histórico do produto e reputação no mercado
              </li>
              <li>
                <strong>Análise de Conteúdo:</strong> Avaliamos a qualidade do material, metodologia e aplicabilidade prática
              </li>
              <li>
                <strong>Verificação de Depoimentos:</strong> Buscamos e verificamos depoimentos reais de alunos
              </li>
              <li>
                <strong>Comparação de Mercado:</strong> Comparamos com produtos similares para avaliar diferenciais
              </li>
              <li>
                <strong>Análise de Custo-Benefício:</strong> Avaliamos se o investimento é justificável
              </li>
              <li>
                <strong>Suporte e Garantias:</strong> Verificamos a qualidade do suporte e garantias oferecidas
              </li>
            </ol>

            <h2 className="text-3xl font-bold mt-12 mb-6">Critérios de Recomendação</h2>
            
            <p>
              Recomendamos apenas produtos que atendem aos seguintes critérios:
            </p>

            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Conteúdo de alta qualidade e atualizado</li>
              <li>Metodologia clara e comprovada</li>
              <li>Criador com reputação positiva e histórico verificável</li>
              <li>Depoimentos verificados de alunos satisfeitos</li>
              <li>Suporte adequado aos alunos</li>
              <li>Garantia de satisfação ou devolução do dinheiro</li>
              <li>Custo-benefício justificável</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">O Que Não Recomendamos</h2>
            
            <p>
              Mantemos um padrão ético rígido e <strong>não recomendamos</strong> produtos que:
            </p>

            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Fazem promessas irrealistas ou enganosas</li>
              <li>Têm histórico de reclamações não resolvidas</li>
              <li>Não oferecem garantias adequadas</li>
              <li>Têm conteúdo desatualizado ou de baixa qualidade</li>
              <li>Não fornecem suporte adequado aos alunos</li>
              <li>Praticam preços abusivos sem justificativa</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Isenção de Responsabilidade</h2>
            
            <div className="my-6 p-6 bg-destructive/5 border border-destructive/20 rounded-lg">
              <h3 className="font-bold mb-4 text-lg">Importante: Leia Atentamente</h3>
              
              <ul className="space-y-4">
                <li>
                  <strong>Resultados Individuais:</strong> Os resultados obtidos com qualquer produto podem variar 
                  de pessoa para pessoa. Não garantimos resultados específicos, pois isso depende de diversos fatores 
                  individuais, incluindo dedicação, esforço e circunstâncias pessoais.
                </li>
                
                <li>
                  <strong>Responsabilidade pela Decisão:</strong> Você é o único responsável por suas decisões de 
                  compra. Nossas análises são opiniões baseadas em pesquisas, mas você deve fazer sua própria 
                  avaliação antes de investir em qualquer produto.
                </li>
                
                <li>
                  <strong>Produtos de Terceiros:</strong> Não somos responsáveis pelos produtos, serviços ou conteúdo 
                  oferecidos por terceiros. Qualquer problema relacionado à compra, entrega ou qualidade do produto 
                  deve ser resolvido diretamente com o vendedor.
                </li>
                
                <li>
                  <strong>Mudanças nos Produtos:</strong> Os produtos podem sofrer alterações após nossas análises. 
                  Embora nos esforcemos para manter o conteúdo atualizado, recomendamos verificar informações 
                  diretamente na página de venda do produto.
                </li>
                
                <li>
                  <strong>Links Externos:</strong> Quando você clica em um link de afiliado, é redirecionado para 
                  um site de terceiros. Não controlamos esses sites e não somos responsáveis por suas práticas, 
                  políticas ou conteúdo.
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Atualizações e Correções</h2>
            
            <p>
              Nos comprometemos a manter nossas análises atualizadas. Se você identificar informações desatualizadas 
              ou incorretas, por favor, entre em contato conosco imediatamente. Valorizamos o feedback de nossos 
              leitores e nos esforçamos para corrigir quaisquer erros rapidamente.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Como Você Pode Nos Ajudar</h2>
            
            <p>
              A confiança que você deposita no GERA RENDA é nossa maior conquista. Você pode nos ajudar a manter 
              nossos padrões de qualidade:
            </p>

            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Reportando informações incorretas ou desatualizadas</li>
              <li>Compartilhando sua experiência com produtos que analisamos</li>
              <li>Sugerindo produtos para análise</li>
              <li>Dando feedback sobre nosso conteúdo</li>
            </ul>

            <div className="mt-12 p-6 bg-gradient-primary rounded-lg text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Nossa Promessa para Você</h3>
              <p className="mb-4">
                No GERA RENDA, nos comprometemos a sempre colocar seus interesses em primeiro lugar. Continuaremos 
                produzindo análises honestas, detalhadas e imparciais, mantendo nossos padrões éticos elevados.
              </p>
              <p>
                Sua confiança é nosso ativo mais valioso, e trabalharemos incansavelmente para merecê-la todos os dias.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Contato</h2>
            
            <p>
              Tem dúvidas sobre nossa operação, metodologia ou quer reportar algo? Entre em contato:
            </p>

            <div className="mt-6 p-6 bg-muted/50 rounded-lg">
              <p><strong>Email:</strong> transparencia@gerarenda.com.br</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Respondemos todas as mensagens em até 48 horas úteis.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Transparencia;
