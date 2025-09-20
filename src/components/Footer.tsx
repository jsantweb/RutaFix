import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-5 lg:px-10 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span>contacto@rutafix.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span>Carrera 1 #49a-18</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <div className="space-y-2">
              <div><a href="#" className="hover:text-accent transition-colors">Servicios</a></div>
              <div><a href="#" className="hover:text-accent transition-colors">Grúas</a></div>
              <div><a href="#" className="hover:text-accent transition-colors">Mecánicos</a></div>
              <div><a href="#" className="hover:text-accent transition-colors">Blog</a></div>
              <div><a href="#" className="hover:text-accent transition-colors">Contacto</a></div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm opacity-80">
                Horarios de atención:<br />
                Lunes a Viernes: 7:00 AM - 10:00 PM<br />
                Sábados y Domingos: 8:00 AM - 8:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 RutaFix. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}