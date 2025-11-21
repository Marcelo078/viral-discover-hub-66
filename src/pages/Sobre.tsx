import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container py-16 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Sobre o GERA RENDA</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-xl text-muted-foreground">
              O <strong>GERA RENDA</strong> nasceu da missão de ajudar pessoas a encontrarem os melhores produtos digitais 
              para alcançar seus objetivos pessoais e profissionais.
            </p>

            <div className="my-8 p-6 bg-muted/50 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
              <p>
                Fornecer análises honestas, completas e imparciais de produtos digitais, cursos online e treinamentos, 
                ajudando nossos leitores a tomar decisões informadas e investir em produtos que realmente entregam resultados.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">O Que Fazemos</h2>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Análises Detalhadas</h3>
                  <p className="text-muted-foreground">
                    Testamos e analisamos cada produto de forma minuciosa, avaliando conteúdo, metodologia e resultados reais.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Depoimentos Verificados</h3>
                  <p className="text-muted-foreground">
                    Coletamos e verificamos depoimentos de alunos reais para garantir a credibilidade das informações.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Comparações Honestas</h3>
                  <p className="text-muted-foreground">
                    Comparamos produtos similares para ajudar você a escolher a melhor opção para seu perfil e objetivos.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Conteúdo Atualizado</h3>
                  <p className="text-muted-foreground">
                    Mantemos nossas análises sempre atualizadas com as últimas versões e mudanças dos produtos.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Nossa Metodologia</h2>
            
            <p>
              Cada análise publicada no GERA RENDA passa por um rigoroso processo de avaliação que inclui:
            </p>

            <ol className="space-y-4 list-decimal list-inside ml-4">
              <li><strong>Pesquisa Aprofundada:</strong> Investigamos a reputação do criador, histórico do produto e feedbacks de alunos.</li>
              <li><strong>Análise de Conteúdo:</strong> Avaliamos a qualidade do material, metodologia de ensino e aplicabilidade prática.</li>
              <li><strong>Verificação de Resultados:</strong> Buscamos casos de sucesso comprovados e resultados mensuráveis.</li>
              <li><strong>Custo-Benefício:</strong> Analisamos se o investimento é justificável pelos benefícios oferecidos.</li>
              <li><strong>Suporte e Garantias:</strong> Verificamos a qualidade do suporte oferecido e as garantias disponíveis.</li>
            </ol>

            <div className="my-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Transparência e Ética</h2>
              <p>
                Este site contém links de afiliados. Isso significa que podemos receber uma comissão quando você compra 
                um produto através dos nossos links, sem custo adicional para você. Essa comissão nos ajuda a manter o site 
                ativo e continuar produzindo conteúdo de qualidade.
              </p>
              <p className="mt-4">
                <strong>Importante:</strong> Nossas análises são sempre honestas e imparciais. Recomendamos apenas produtos 
                que acreditamos genuinamente que podem trazer valor aos nossos leitores.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Entre em Contato</h2>
            
            <p>
              Tem dúvidas, sugestões ou quer nos enviar seu depoimento sobre algum produto? 
              Estamos sempre abertos ao diálogo e adoraríamos ouvir sua opinião!
            </p>

            <div className="mt-8 p-6 bg-muted/50 rounded-lg">
              <p className="font-medium">
                Email: contato@gerarenda.com.br
              </p>
              <p className="text-sm text-muted-foreground mt-2">
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

export default Sobre;
