import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { Separator } from '../ui/separator';
import { Eye, EyeOff, LogIn, ArrowLeft } from 'lucide-react';
import exampleImage from 'figma:asset/9f5420f224facaf0753fe0eff3caeaea78e2644a.png';

interface LoginPageProps {
  onNavigate: (page: string) => void;
}

export function LoginPage({ onNavigate }: LoginPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    alert('Funcionalidad de login pendiente de implementar');
  };

  return (
    <main className="min-h-screen bg-secondary/20 flex items-center justify-center py-12">
      <div className="max-w-md w-full mx-auto px-5">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => onNavigate('inicio')}
          className="mb-6 text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al inicio
        </Button>

        <Card className="shadow-lg">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <img 
                src={exampleImage} 
                alt="RutaFix Logo" 
                className="h-16 w-auto"
              />
            </div>
            <CardTitle className="text-2xl">Iniciar Sesión</CardTitle>
            <CardDescription>
              Accede a tu cuenta para gestionar tus servicios
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="password">Contraseña</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="remember" 
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  />
                  <Label htmlFor="remember" className="text-sm">
                    Recordarme
                  </Label>
                </div>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-sm text-primary hover:text-accent"
                >
                  ¿Olvidaste tu contraseña?
                </Button>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-accent">
                <LogIn className="h-4 w-4 mr-2" />
                Iniciar Sesión
              </Button>
            </form>

            <div className="mt-6">
              <Separator className="my-4" />
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  ¿No tienes una cuenta?{' '}
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-primary hover:text-accent"
                    onClick={() => onNavigate('registro')}
                  >
                    Regístrate aquí
                  </Button>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <Card className="mt-6 bg-gradient-to-r from-primary/5 to-accent/5">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-3">Beneficios de tener una cuenta</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                Solicita servicios más rápido
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                Historial de servicios utilizados
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                Descuentos exclusivos para miembros
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                Soporte prioritario 24/7
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}