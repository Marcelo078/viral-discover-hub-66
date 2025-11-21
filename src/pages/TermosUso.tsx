import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermosUso = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container py-16 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Termos de Uso</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <p>
              Bem-vindo ao <strong>GERA RENDA</strong>. Ao acessar e usar este site, você concorda em cumprir 
              e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com alguma parte 
              destes termos, não deve usar nosso site.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">1. Aceitação dos Termos</h2>
            
            <p>
              Ao acessar e usar o site GERA RENDA, você aceita e concorda em estar vinculado a estes Termos de Uso 
              e nossa Política de Privacidade. Reservamo-nos o direito de modificar estes termos a qualquer momento, 
              e seu uso contínuo do site constitui aceitação dessas mudanças.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">2. Descrição do Serviço</h2>
            
            <p>
              O GERA RENDA é um site de análises e recomendações de produtos digitais, cursos online e treinamentos. 
              Fornecemos informações, análises e opiniões sobre diversos produtos com o objetivo de ajudar nossos 
              usuários a tomar decisões informadas.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">3. Programa de Afiliados</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Divulgação de Afiliados</h3>
            <p>
              Este site participa de programas de afiliados e contém links de afiliados. Quando você clica em 
              um link de afiliado e faz uma compra, podemos receber uma comissão sem custo adicional para você.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Independência Editorial</h3>
            <p>
              Nossas análises e recomendações são baseadas em pesquisas honestas e independentes. A presença de 
              links de afiliados não influencia nossa avaliação imparcial dos produtos.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">4. Isenção de Responsabilidade</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">4.1 Conteúdo Informativo</h3>
            <p>
              O conteúdo deste site é fornecido apenas para fins informativos e educacionais. Não garantimos 
              resultados específicos com o uso dos produtos recomendados.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Decisões de Compra</h3>
            <p>
              Você é o único responsável por suas decisões de compra. Recomendamos que você faça sua própria 
              pesquisa e avaliação antes de comprar qualquer produto ou serviço.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.3 Produtos de Terceiros</h3>
            <p>
              Não somos responsáveis por produtos, serviços ou sites de terceiros vinculados em nosso site. 
              Qualquer transação que você realizar com terceiros é por sua conta e risco.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">5. Propriedade Intelectual</h2>
            
            <p>
              Todo o conteúdo deste site, incluindo textos, gráficos, logos, imagens e software, é propriedade 
              do GERA RENDA ou de seus fornecedores de conteúdo e está protegido por leis de direitos autorais.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">5.1 Uso Permitido</h3>
            <p>Você pode:</p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Visualizar e imprimir páginas para uso pessoal e não comercial</li>
              <li>Compartilhar links para nosso conteúdo nas redes sociais</li>
              <li>Citar trechos do nosso conteúdo com devida atribuição</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">5.2 Uso Proibido</h3>
            <p>Você não pode:</p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Copiar, reproduzir ou distribuir nosso conteúdo sem autorização</li>
              <li>Modificar ou criar trabalhos derivados do nosso conteúdo</li>
              <li>Usar nosso conteúdo para fins comerciais sem permissão</li>
              <li>Remover avisos de direitos autorais ou outras notações proprietárias</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">6. Conduta do Usuário</h2>
            
            <p>Ao usar nosso site, você concorda em não:</p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Violar qualquer lei ou regulamento aplicável</li>
              <li>Publicar conteúdo difamatório, obsceno ou ofensivo</li>
              <li>Transmitir vírus, malware ou código malicioso</li>
              <li>Interferir na operação do site ou servidores</li>
              <li>Coletar informações de outros usuários sem consentimento</li>
              <li>Fazer spam ou enviar comunicações não solicitadas</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">7. Garantias e Limitações</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">7.1 Garantias Limitadas</h3>
            <p>
              O site é fornecido "como está" e "conforme disponível". Não garantimos que o site será ininterrupto, 
              livre de erros ou livre de vírus ou outros componentes prejudiciais.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">7.2 Limitação de Responsabilidade</h3>
            <p>
              Na máxima extensão permitida por lei, o GERA RENDA não será responsável por quaisquer danos diretos, 
              indiretos, incidentais, consequenciais ou punitivos resultantes do uso ou incapacidade de usar o site.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">8. Links para Sites Externos</h2>
            
            <p>
              Nosso site pode conter links para sites de terceiros. Não controlamos e não somos responsáveis 
              pelo conteúdo, políticas de privacidade ou práticas de sites de terceiros. O acesso a esses sites 
              é por sua conta e risco.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">9. Modificações do Serviço</h2>
            
            <p>
              Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer parte do site a qualquer 
              momento, sem aviso prévio. Não seremos responsáveis por você ou terceiros por qualquer modificação, 
              suspensão ou descontinuação do site.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">10. Lei Aplicável</h2>
            
            <p>
              Estes termos são regidos e interpretados de acordo com as leis do Brasil. Qualquer disputa 
              relacionada a estes termos será resolvida nos tribunais competentes do Brasil.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">11. Contato</h2>
            
            <p>
              Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
            </p>

            <div className="mt-6 p-6 bg-muted/50 rounded-lg">
              <p><strong>Email:</strong> termos@gerarenda.com.br</p>
              <p className="mt-2"><strong>Site:</strong> www.gerarenda.com.br</p>
            </div>

            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="font-semibold">
                Ao continuar usando o GERA RENDA, você reconhece que leu, entendeu e concordou em estar 
                vinculado a estes Termos de Uso.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermosUso;
