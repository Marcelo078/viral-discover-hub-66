import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle, TrendingUp, Clock, Eye, Award, ChefHat } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCarousel from "@/components/ProductCarousel";

const ReceitasBolosTortas = () => {
  return (
    <>
      <Helmet>
        <title>700 Receitas de Bolos e Tortas Vale a Pena? Análise Completa 2025</title>
        <meta name="description" content="Análise completa do produto 700 Receitas de Bolos e Tortas. Descubra se vale a pena para seu negócio de confeitaria caseira." />
        <link rel="canonical" href="https://guiaprodutosdigitais.com/artigos/700-receitas-bolos-tortas" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/gastronomia" className="hover:text-primary transition-colors">Gastronomia</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">700 Receitas</span>
            </nav>
          </div>

          <section className="relative py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  700 Receitas de Bolos e Tortas Vale a Pena? Análise Completa 2025
                </h1>
                <a href="https://kiwify.app/Ae5oNZe?afid=eDWLErf4" target="_blank" rel="noopener noreferrer sponsored">
                  <Button size="lg">
                    <ChefHat className="mr-2 h-5 w-5" />
                    Ver Receitas Agora
                  </Button>
                </a>
              </div>
            </div>
          </section>

          <article className="container mx-auto px-4 pb-16">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <p className="text-lg">Análise completa do produto 700 Receitas de Bolos e Tortas...</p>
            </div>
          </article>

          <section className="py-16 bg-secondary/5">
            <div className="container mx-auto px-4">
              <ProductCarousel title="Outros Produtos Recomendados" />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ReceitasBolosTortas;