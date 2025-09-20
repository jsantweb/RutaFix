import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <nav className="bg-secondary/50 py-4">
      <div className="max-w-6xl mx-auto px-5 lg:px-10">
        <div className="flex items-center space-x-2 text-sm">
          <Home className="h-4 w-4 text-muted-foreground" />
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              {item.onClick ? (
                <button
                  onClick={item.onClick}
                  className="text-primary hover:text-accent transition-colors"
                >
                  {item.label}
                </button>
              ) : (
                <span className="text-muted-foreground">{item.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}