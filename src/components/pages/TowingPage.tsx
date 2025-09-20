import { useState } from 'react';
import { BreadcrumbNav } from '../BreadcrumbNav';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { MapPin, Clock, Star, Phone } from 'lucide-react';

interface TowingPageProps {
  onNavigate: (page: string) => void;
}

export function TowingPage({ onNavigate }: TowingPageProps) {
  const [selectedService, setSelectedService] = useState('');

  const towingServices = [
    {
      id: 1,
      name: "Grúas Express 24h",
      rating: 4.8,
      distance: "2.3 km",
      responseTime: "15-20 min",
      price: "$50 - $120",
      phone: "+1 (555) 111-2222",
      services: ["Remolque ligero", "Remolque pesado", "Transporte de vehículos"]
    },
    {
      id: 2,
      name: "RescateVial Pro",
      rating: 4.9,
      distance: "3.1 km",
      responseTime: "20-25 min",
      price: "$60 - $150",
      phone: "+1 (555) 333-4444",
      services: ["Rescate de vehículos", "Plataforma", "Servicio nocturno"]
    },
    {
      id: 3,
      name: "Grúas del Centro",
      rating: 4.7,
      distance: "4.2 km",
      responseTime: "25-30 min",
      price: "$45 - $100",
      phone: "+1 (555) 555-6666",
      services: ["Remolque urbano", "Auxilio vial", "Transporte especializado"]
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Solicitud de grúa enviada. Te contactaremos en breve.');
  };

  return (
    <main className="min-h-screen bg-secondary/20">
      <BreadcrumbNav 
        items={[
          { label: "Inicio", onClick: () => onNavigate('inicio') },
          { label: "Servicios", onClick: () => onNavigate('servicios') },
          { label: "Grúas" }
        ]} 
      />

      <div className="py-12">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Servicio de Grúas</h1>
            <p className="text-lg text-muted-foreground">
              Solicita asistencia de grúa inmediata o programa un servicio
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Request Form */}
            <Card>
              <CardHeader>
                <CardTitle>Solicitar Grúa</CardTitle>
                <CardDescription>
                  Completa el formulario y te conectaremos con el servicio más cercano
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nombre completo</Label>
                      <Input id="name" placeholder="Tu nombre" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" type="tel" placeholder="Tu teléfono" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="location">Ubicación actual</Label>
                    <Input id="location" placeholder="Dirección o punto de referencia" required />
                  </div>

                  <div>
                    <Label htmlFor="destination">Destino</Label>
                    <Input id="destination" placeholder="¿A dónde necesitas el remolque?" />
                  </div>

                  <div>
                    <Label htmlFor="serviceType">Tipo de servicio</Label>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el tipo de servicio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="remolque-ligero">Remolque ligero (hasta 3.5 ton)</SelectItem>
                        <SelectItem value="remolque-pesado">Remolque pesado (más de 3.5 ton)</SelectItem>
                        <SelectItem value="plataforma">Plataforma de transporte</SelectItem>
                        <SelectItem value="rescate">Rescate de vehículo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="vehicleInfo">Información del vehículo</Label>
                    <Input id="vehicleInfo" placeholder="Marca, modelo, año, color" />
                  </div>

                  <div>
                    <Label htmlFor="description">Descripción del problema</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Describe qué le ocurre a tu vehículo"
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-accent">
                    Solicitar Grúa Ahora
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Available Services */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Grúas Disponibles</h2>
              <div className="space-y-4">
                {towingServices.map((service) => (
                  <Card key={service.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{service.name}</h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-500 mr-1" />
                              {service.rating}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {service.distance}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {service.responseTime}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-primary">{service.price}</div>
                          <Button
                            size="sm"
                            className="mt-2 bg-accent hover:bg-accent/90"
                          >
                            <Phone className="h-4 w-4 mr-1" />
                            Llamar
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {service.services.map((serviceType, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-secondary text-xs rounded-full"
                          >
                            {serviceType}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pricing Info */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Información de Precios</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Remolque ligero (hasta 10 km):</span>
                      <span className="font-semibold">$50 - $80</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Remolque pesado (hasta 10 km):</span>
                      <span className="font-semibold">$80 - $120</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Kilómetro adicional:</span>
                      <span className="font-semibold">$3 - $5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Servicio nocturno (recargo):</span>
                      <span className="font-semibold">+25%</span>
                    </div>
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