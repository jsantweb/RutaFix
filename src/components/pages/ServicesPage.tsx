import { ServiceCard } from '../ServiceCard';
import { Truck, Wrench, BookOpen, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <main className="min-h-screen bg-secondary/20">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-[#4A7BA7] text-primary-foreground py-16">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Soluciones completas para todas tus necesidades automotrices, 
              disponibles cuando y donde las necesites.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ServiceCard
              icon={Truck}
              title="Servicio de Grúas"
              description="Asistencia de grúa 24/7 para remolque, rescate y transporte de vehículos. Contamos con una flota moderna y operadores capacitados."
              buttonText="Acceder a Grúas"
              onAction={() => onNavigate('gruas')}
            />
            
            <ServiceCard
              icon={Wrench}
              title="Mecánicos Certificados"
              description="Red de mecánicos especializados para reparaciones, mantenimiento preventivo y diagnóstico vehicular con garantía de calidad."
              buttonText="Acceder a Mecánicos"
              onAction={() => onNavigate('mecanicos')}
            />
            
            <ServiceCard
              icon={BookOpen}
              title="Blog y Consejos"
              description="Artículos informativos, guías de mantenimiento, consejos de conducción y las últimas noticias del sector automotriz."
              buttonText="Acceder al Blog"
              onAction={() => onNavigate('blog')}
            />
          </div>

          {/* Additional Information */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <Truck className="h-5 w-5 text-primary" />
                  </div>
                  Tipos de Grúas Disponibles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-accent mr-2" />
                    Grúas ligeras (hasta 3.5 toneladas)
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-accent mr-2" />
                    Grúas medianas (hasta 10 toneladas)
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-accent mr-2" />
                    Grúas pesadas (más de 10 toneladas)
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-accent mr-2" />
                    Plataformas de remolque
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <Wrench className="h-5 w-5 text-primary" />
                  </div>
                  Especialidades de Mecánicos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-accent mr-2" />
                    Mecánica general
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-accent mr-2" />
                    Sistemas eléctricos
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-accent mr-2" />
                    Transmisión y embrague
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-accent mr-2" />
                    Aire acondicionado
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}