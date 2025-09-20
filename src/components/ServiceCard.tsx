import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  onAction: () => void;
}

export function ServiceCard({ icon: Icon, title, description, buttonText, onAction }: ServiceCardProps) {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-accent/50 group">
      <CardHeader className="text-center">
        <div className="mx-auto p-4 bg-secondary rounded-full w-fit mb-4 group-hover:bg-accent/10 transition-colors">
          <Icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center flex-1">
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="justify-center">
        <Button 
          onClick={onAction}
          className="w-full bg-primary hover:bg-accent transition-colors"
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}