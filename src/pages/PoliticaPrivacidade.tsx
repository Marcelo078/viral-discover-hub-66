import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PoliticaPrivacidade = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container py-16 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Política de Privacidade</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <p>
              O <strong>GERA RENDA</strong> respeita sua privacidade e está comprometido em proteger seus dados pessoais. 
              Esta política de privacidade explica como coletamos, usamos, armazenamos e protegemos suas informações.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">1. Informações que Coletamos</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">1.1 Informações Fornecidas por Você</h3>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Nome e endereço de e-mail (se você se inscrever em nossa newsletter)</li>
              <li>Comentários e feedbacks enviados através do site</li>
              <li>Informações de contato fornecidas voluntariamente</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">1.2 Informações Coletadas Automaticamente</h3>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Endereço IP e localização geográfica aproximada</li>
              <li>Tipo de navegador e dispositivo utilizado</li>
              <li>Páginas visitadas e tempo de permanência no site</li>
              <li>Origem do tráfego (como você chegou ao nosso site)</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">2. Como Usamos Suas Informações</h2>
            
            <p>Utilizamos suas informações para:</p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Melhorar a experiência de navegação no site</li>
              <li>Enviar newsletters e atualizações (apenas se você optar por recebê-las)</li>
              <li>Responder a perguntas e solicitações</li>
              <li>Analisar o desempenho do site e otimizar o conteúdo</li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">3. Cookies e Tecnologias Similares</h2>
            
            <p>
              Utilizamos cookies e tecnologias similares para melhorar sua experiência de navegação. 
              Os cookies são pequenos arquivos de texto armazenados em seu dispositivo que nos ajudam a:
            </p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Lembrar suas preferências</li>
              <li>Entender como você usa nosso site</li>
              <li>Personalizar conteúdo e anúncios</li>
              <li>Analisar o tráfego do site</li>
            </ul>

            <p className="mt-4">
              Você pode configurar seu navegador para recusar cookies, mas isso pode afetar 
              a funcionalidade de algumas partes do site.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">4. Compartilhamento de Informações</h2>
            
            <p>
              Não vendemos suas informações pessoais. Podemos compartilhar suas informações apenas com:
            </p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li><strong>Prestadores de Serviços:</strong> Empresas que nos ajudam a operar o site (hospedagem, analytics)</li>
              <li><strong>Parceiros de Afiliados:</strong> Quando você clica em links de afiliados, podemos compartilhar informações anônimas</li>
              <li><strong>Autoridades Legais:</strong> Quando exigido por lei ou para proteger nossos direitos</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">5. Links de Afiliados</h2>
            
            <p>
              Nosso site contém links de afiliados para produtos de terceiros. Quando você clica nesses links, 
              pode ser redirecionado para sites externos. Não somos responsáveis pelas práticas de privacidade 
              desses sites. Recomendamos que você leia as políticas de privacidade de cada site que visitar.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">6. Segurança dos Dados</h2>
            
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra 
              acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão 
              pela internet é 100% seguro.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">7. Seus Direitos</h2>
            
            <p>De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem direito a:</p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos ou incorretos</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Revogar consentimento para uso de dados</li>
              <li>Solicitar portabilidade de dados</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">8. Retenção de Dados</h2>
            
            <p>
              Mantemos suas informações apenas pelo tempo necessário para cumprir os propósitos descritos 
              nesta política, a menos que um período de retenção mais longo seja exigido por lei.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">9. Alterações nesta Política</h2>
            
            <p>
              Podemos atualizar esta política de privacidade periodicamente. Notificaremos você sobre 
              mudanças significativas publicando a nova política nesta página e atualizando a data de 
              "última atualização".
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">10. Contato</h2>
            
            <p>
              Se você tiver dúvidas sobre esta política de privacidade ou quiser exercer seus direitos, 
              entre em contato conosco:
            </p>

            <div className="mt-6 p-6 bg-muted/50 rounded-lg">
              <p><strong>Email:</strong> privacidade@gerarenda.com.br</p>
              <p className="mt-2"><strong>Responsável:</strong> Equipe GERA RENDA</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaPrivacidade;
