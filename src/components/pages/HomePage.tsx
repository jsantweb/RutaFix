import { Button } from "../ui/button";
import { ServiceCard } from "../ServiceCard";
import { Truck, Wrench, BookOpen } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-[#4A7BA7] to-[#87CEEB] text-primary-foreground">
        <div className="max-w-6xl mx-auto px-5 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Tu solución integral en carretera
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Nombres: Victor Manuel Moya Castañeda, Jose
                Santiago Martinez, Santiago Andrés Babativa
                Castro Conectamos conductores con servicios de
                emergencia y mantenimiento las 24 horas del día,
                los 7 días de la semana.
              </p>
              <Button
                onClick={() => onNavigate("servicios")}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3"
              >
                Explorar Servicios
              </Button>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1595524110577-eb06af4d4fb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwcm9hZCUyMGNhcnMlMjBhdXRvbW90aXZlfGVufDF8fHx8MTc1NzM5MDE0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Carretera con vehículos"
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios para
              mantener tu vehículo en óptimas condiciones y
              brindarte asistencia cuando más lo necesites.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={Truck}
              title="Servicio de Grúas"
              description="Asistencia de grúa 24/7 para remolque, rescate y transporte de vehículos en cualquier situación de emergencia."
              buttonText="Ver Grúas"
              onAction={() => onNavigate("servicios")}
            />

            <ServiceCard
              icon={Wrench}
              title="Mecánicos Certificados"
              description="Red de mecánicos especializados disponibles para reparaciones, mantenimiento y diagnóstico vehicular."
              buttonText="Encontrar Mecánico"
              onAction={() => onNavigate("servicios")}
            />

            <ServiceCard
              icon={BookOpen}
              title="Blog y Consejos"
              description="Artículos informativos, consejos de mantenimiento y las últimas noticias del mundo automotriz."
              buttonText="Leer Blog"
              onAction={() => onNavigate("servicios")}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1708745427274-d5de5122fd57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pYyUyMHdvcmtpbmclMjBjYXIlMjByZXBhaXJ8ZW58MXx8fHwxNzU3MzkwMTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Mecánico trabajando"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                ¿Por qué elegir RutaFix?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-2 rounded-full">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      Servicio 24/7
                    </h3>
                    <p className="text-muted-foreground">
                      Disponible las 24 horas del día, todos los
                      días del año.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-2 rounded-full">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      Profesionales Certificados
                    </h3>
                    <p className="text-muted-foreground">
                      Todos nuestros técnicos están certificados
                      y capacitados.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-2 rounded-full">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      Respuesta Rápida
                    </h3>
                    <p className="text-muted-foreground">
                      Tiempo de respuesta promedio de 30 minutos
                      en zonas urbanas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}