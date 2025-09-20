import { useState } from 'react';
import { BreadcrumbNav } from '../BreadcrumbNav';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { MapPin, Clock, Star, Phone, Calendar, Wrench } from 'lucide-react';

interface MechanicsPageProps {
  onNavigate: (page: string) => void;
}

export function MechanicsPage({ onNavigate }: MechanicsPageProps) {
  const [selectedZone, setSelectedZone] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const mechanics = [
    {
      id: 1,
      name: "Carlos Rodríguez",
      rating: 4.9,
      experience: "15 años",
      distance: "1.8 km",
      specialties: ["Mecánica general", "Transmisión", "Frenos"],
      price: "$40 - $80/hora",
      phone: "+1 (555) 777-8888",
      availability: "Disponible hoy",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&face"
    },
    {
      id: 2,
      name: "María Fernández",
      rating: 4.8,
      experience: "12 años",
      distance: "2.5 km",
      specialties: ["Sistemas eléctricos", "Diagnóstico", "Aire acondicionado"],
      price: "$45 - $90/hora",
      phone: "+1 (555) 999-0000",
      availability: "Disponible mañana",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b566?w=150&h=150&fit=crop&face"
    },
    {
      id: 3,
      name: "Roberto Silva",
      rating: 4.7,
      experience: "20 años",
      distance: "3.2 km",
      specialties: ["Motor", "Inyección", "Mecánica general"],
      price: "$50 - $100/hora",
      phone: "+1 (555) 111-2222",
      availability: "Disponible hoy",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&face"
    },
    {
      id: 4,
      name: "Ana Torres",
      rating: 4.9,
      experience: "10 años",
      distance: "2.1 km",
      specialties: ["Suspensión", "Alineación", "Frenos"],
      price: "$35 - $75/hora",
      phone: "+1 (555) 333-4444",
      availability: "Disponible hoy",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&face"
    }
  ];

  const zones = [
    "Centro", "Norte", "Sur", "Este", "Oeste", "Zona Industrial"
  ];

  const specialties = [
    "Mecánica general", "Sistemas eléctricos", "Transmisión", 
    "Frenos", "Suspensión", "Motor", "Aire acondicionado", 
    "Diagnóstico", "Inyección", "Alineación"
  ];

  return (
    <main className="min-h-screen bg-secondary/20">
      <BreadcrumbNav 
        items={[
          { label: "Inicio", onClick: () => onNavigate('inicio') },
          { label: "Servicios", onClick: () => onNavigate('servicios') },
          { label: "Mecánicos" }
        ]} 
      />

      <div className="py-12">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Mecánicos Certificados</h1>
            <p className="text-lg text-muted-foreground">
              Encuentra el mecánico perfecto para tu vehículo
            </p>
          </div>

          {/* Search Filters */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wrench className="h-5 w-5 mr-2" />
                Buscar Mecánicos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="search">Buscar por nombre</Label>
                  <Input id="search" placeholder="Nombre del mecánico" />
                </div>
                <div>
                  <Label htmlFor="zone">Zona</Label>
                  <Select value={selectedZone} onValueChange={setSelectedZone}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar zona" />
                    </SelectTrigger>
                    <SelectContent>
                      {zones.map((zone) => (
                        <SelectItem key={zone} value={zone.toLowerCase()}>
                          {zone}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="specialty">Especialidad</Label>
                  <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                    <SelectTrigger>
                      <SelectValue placeholder="Especialidad" />
                    </SelectTrigger>
                    <SelectContent>
                      {specialties.map((specialty) => (
                        <SelectItem key={specialty} value={specialty.toLowerCase()}>
                          {specialty}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <Button className="w-full">Buscar</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mechanics Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {mechanics.map((mechanic) => (
              <Card key={mechanic.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={mechanic.image}
                      alt={mechanic.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-semibold">{mechanic.name}</h3>
                          <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-500 mr-1" />
                              {mechanic.rating}
                            </div>
                            <span>{mechanic.experience}</span>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {mechanic.distance}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-primary">
                            {mechanic.price}
                          </div>
                          <div className="text-xs text-green-600 mt-1">
                            {mechanic.availability}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {mechanic.specialties.map((specialty, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          Agendar Cita
                        </Button>
                        <Button size="sm" variant="outline">
                          <Phone className="h-4 w-4 mr-1" />
                          Llamar
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Service Types */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Tipos de Servicio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Diagnóstico general</span>
                    <span className="font-semibold">$30 - $50</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Cambio de aceite</span>
                    <span className="font-semibold">$25 - $40</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Reparación de frenos</span>
                    <span className="font-semibold">$80 - $200</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Alineación y balanceo</span>
                    <span className="font-semibold">$40 - $80</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>Reparación eléctrica</span>
                    <span className="font-semibold">$60 - $150</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>¿Cómo funciona?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">Busca y selecciona</h4>
                      <p className="text-sm text-muted-foreground">
                        Encuentra el mecánico que mejor se adapte a tus necesidades
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Agenda tu cita</h4>
                      <p className="text-sm text-muted-foreground">
                        Coordina fecha y hora que te convenga
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Recibe el servicio</h4>
                      <p className="text-sm text-muted-foreground">
                        El mecánico te visitará o podrás ir a su taller
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}