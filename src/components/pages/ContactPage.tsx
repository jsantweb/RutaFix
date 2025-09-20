import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
} from "lucide-react";

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Mensaje enviado correctamente. Te contactaremos pronto.",
    );
  };

  return (
    <main className="min-h-screen bg-secondary/20">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-[#4A7BA7] text-primary-foreground py-16">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Contacto
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Contáctanos por
              cualquier consulta o emergencia en carretera.
            </p>
          </div>
        </div>
      </section>

      <div className="py-12">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Envíanos un Mensaje
                </CardTitle>
                <CardDescription>
                  Completa el formulario y te responderemos a la
                  brevedad
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Nombre</Label>
                      <Input
                        id="firstName"
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Apellido</Label>
                      <Input
                        id="lastName"
                        placeholder="Tu apellido"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Tu teléfono"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Asunto</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un asunto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="grua">
                          Consulta sobre grúas
                        </SelectItem>
                        <SelectItem value="mecanico">
                          Consulta sobre mecánicos
                        </SelectItem>
                        <SelectItem value="servicio">
                          Problema con servicio
                        </SelectItem>
                        <SelectItem value="facturacion">
                          Consulta de facturación
                        </SelectItem>
                        <SelectItem value="sugerencia">
                          Sugerencia
                        </SelectItem>
                        <SelectItem value="otro">
                          Otro
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      placeholder="Describe tu consulta o problema"
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-accent"
                  >
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Información de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        Teléfono
                      </h3>
                      <p className="text-muted-foreground">
                        +1 (555) 123-4567
                      </p>
                      <p className="text-sm text-accent">
                        Emergencias 24/7
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        Email
                      </h3>
                      <p className="text-muted-foreground">
                        contacto@rutafix.com
                      </p>
                      <p className="text-muted-foreground">
                        soporte@rutafix.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        Dirección
                      </h3>
                      <p className="text-muted-foreground">
                        Calle 23 14-19
                        <br />
                        Bogotá, Cundinamarca
                        <br />
                        Colombia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        Horarios de Atención
                      </h3>
                      <div className="text-muted-foreground text-sm space-y-1">
                        <p>
                          Lunes a Viernes: 7:00 AM - 10:00 PM
                        </p>
                        <p>Sábados: 8:00 AM - 8:00 PM</p>
                        <p>Domingos: 9:00 AM - 6:00 PM</p>
                        <p className="text-accent font-medium">
                          Emergencias: 24/7
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle>Nuestra Ubicación</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-secondary rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p>Mapa interactivo</p>
                      <p className="text-sm">
                        Calle 23 14-19 Bogotá, Colombia
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-gradient-to-br from-accent to-[#FFB366] text-accent-foreground">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3">
                    ¿Necesitas ayuda inmediata?
                  </h3>
                  <div className="space-y-3">
                    <Button
                      variant="secondary"
                      className="w-full"
                      onClick={() => onNavigate("servicios")}
                    >
                      Solicitar Grúa Ahora
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-white text-white hover:bg-white hover:text-accent"
                    >
                      Llamar Emergencias
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}