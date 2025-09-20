import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { ServicesPage } from './components/pages/ServicesPage';
import { TowingPage } from './components/pages/TowingPage';
import { MechanicsPage } from './components/pages/MechanicsPage';
import { BlogPage } from './components/pages/BlogPage';
import { ContactPage } from './components/pages/ContactPage';
import { LoginPage } from './components/pages/LoginPage';
import { RegisterPage } from './components/pages/RegisterPage';

type PageType = 'inicio' | 'servicios' | 'gruas' | 'mecanicos' | 'blog' | 'contacto' | 'login' | 'registro';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('inicio');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as PageType);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'inicio':
        return <HomePage onNavigate={handleNavigate} />;
      case 'servicios':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'gruas':
        return <TowingPage onNavigate={handleNavigate} />;
      case 'mecanicos':
        return <MechanicsPage onNavigate={handleNavigate} />;
      case 'blog':
        return <BlogPage onNavigate={handleNavigate} />;
      case 'contacto':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'login':
        return <LoginPage onNavigate={handleNavigate} />;
      case 'registro':
        return <RegisterPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  // Don't show header and footer on login and register pages
  const isAuthPage = currentPage === 'login' || currentPage === 'registro';

  return (
    <div className="min-h-screen flex flex-col">
      {!isAuthPage && (
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
      )}
      
      <div className="flex-1">
        {renderPage()}
      </div>
      
      {!isAuthPage && (
        <Footer />
      )}
    </div>
  );
}