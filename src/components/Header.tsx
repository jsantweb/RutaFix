import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import exampleImage from 'figma:asset/9f5420f224facaf0753fe0eff3caeaea78e2644a.png';

interface HeaderProps {
  currentPage?: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage = 'inicio', onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'servicios', label: 'Servicios' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => handleNavigation('inicio')}
          >
            <img 
              src={exampleImage} 
              alt="RutaFix Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`transition-colors hover:text-accent ${
                  currentPage === item.id 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={() => handleNavigation('login')}
              className="text-primary hover:text-accent"
            >
              Iniciar Sesión
            </Button>
            <Button 
              onClick={() => handleNavigation('registro')}
              className="bg-primary hover:bg-primary/90"
            >
              Registro
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`block w-full text-left px-4 py-2 rounded transition-colors ${
                    currentPage === item.id 
                      ? 'text-primary bg-secondary' 
                      : 'text-foreground hover:text-accent hover:bg-secondary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="space-y-2 pt-4 border-t border-border">
                <Button 
                  variant="ghost" 
                  onClick={() => handleNavigation('login')}
                  className="w-full justify-start text-primary hover:text-accent"
                >
                  Iniciar Sesión
                </Button>
                <Button 
                  onClick={() => handleNavigation('registro')}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Registro
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}