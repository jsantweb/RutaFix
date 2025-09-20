import { useState } from 'react';
import { BreadcrumbNav } from '../BreadcrumbNav';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Search, Calendar, User, Clock, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface BlogPageProps {
  onNavigate: (page: string) => void;
}

export function BlogPage({ onNavigate }: BlogPageProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const featuredArticles = [
    {
      id: 1,
      title: "10 Consejos para el Mantenimiento Preventivo de tu Vehículo",
      excerpt: "Aprende cómo mantener tu auto en perfectas condiciones y evitar reparaciones costosas con estos consejos esenciales.",
      category: "Mantenimiento",
      author: "Carlos Méndez",
      date: "15 Mar 2024",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Qué Hacer Cuando tu Auto se Sobrecalienta en la Carretera",
      excerpt: "Guía paso a paso para manejar una emergencia de sobrecalentamiento y evitar daños mayores al motor.",
      category: "Tips de Conducción",
      author: "María González",
      date: "12 Mar 2024",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Nuevas Tecnologías en Diagnóstico Automotriz 2024",
      excerpt: "Descubre las últimas innovaciones en herramientas de diagnóstico que están revolucionando la industria automotriz.",
      category: "Noticias",
      author: "Roberto Silva",
      date: "10 Mar 2024",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=250&fit=crop"
    }
  ];

  const recentArticles = [
    {
      id: 4,
      title: "Cómo Cambiar el Aceite de tu Motor: Guía Completa",
      category: "Mantenimiento",
      date: "8 Mar 2024",
      readTime: "4 min"
    },
    {
      id: 5,
      title: "Señales de que tus Frenos Necesitan Revisión",
      category: "Mantenimiento",
      date: "5 Mar 2024",
      readTime: "3 min"
    },
    {
      id: 6,
      title: "Conducción Segura en Época de Lluvias",
      category: "Tips de Conducción",
      date: "3 Mar 2024",
      readTime: "5 min"
    },
    {
      id: 7,
      title: "Autos Eléctricos: El Futuro del Transporte",
      category: "Noticias",
      date: "1 Mar 2024",
      readTime: "8 min"
    }
  ];

  const categories = [
    "Todos",
    "Mantenimiento",
    "Tips de Conducción", 
    "Noticias",
    "Reparaciones",
    "Tecnología"
  ];

  return (
    <main className="min-h-screen bg-secondary/20">
      <BreadcrumbNav 
        items={[
          { label: "Inicio", onClick: () => onNavigate('inicio') },
          { label: "Servicios", onClick: () => onNavigate('servicios') },
          { label: "Blog" }
        ]} 
      />

      <div className="py-12">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Blog RutaFix</h1>
            <p className="text-lg text-muted-foreground">
              Consejos, guías y noticias del mundo automotriz
            </p>
          </div>

          {/* Search and Categories */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Buscar artículos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button>Buscar</Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="secondary"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Featured Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Artículos Destacados</h2>
            <div className="grid lg:grid-cols-3 gap-6">
              {featuredArticles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-accent">
                      {article.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg leading-tight hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          {article.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {article.date}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <Button variant="ghost" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Leer más
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Articles */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Artículos Recientes</h2>
              <div className="space-y-4">
                {recentArticles.map((article) => (
                  <Card key={article.id} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">
                            {article.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <Badge variant="outline">{article.category}</Badge>
                            <div className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {article.date}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {article.readTime}
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Newsletter */}
              <Card>
                <CardHeader>
                  <CardTitle>Newsletter</CardTitle>
                  <CardDescription>
                    Recibe los mejores consejos y noticias automotrices
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Input placeholder="Tu email" type="email" />
                    <Button className="w-full">Suscribirse</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Popular Categories */}
              <Card>
                <CardHeader>
                  <CardTitle>Categorías Populares</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.slice(1).map((category) => (
                      <div key={category} className="flex justify-between items-center py-2 border-b last:border-b-0">
                        <span className="cursor-pointer hover:text-primary transition-colors">
                          {category}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {Math.floor(Math.random() * 20) + 5}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact CTA */}
              <Card className="bg-gradient-to-br from-primary to-[#4A7BA7] text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold mb-2">¿Necesitas ayuda?</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Nuestros expertos están listos para asistirte
                  </p>
                  <Button 
                    variant="secondary" 
                    className="w-full"
                    onClick={() => onNavigate('contacto')}
                  >
                    Contactar Ahora
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}