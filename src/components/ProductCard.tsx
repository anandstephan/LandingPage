import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export const ProductCard = ({ icon, title, description, features }: ProductCardProps) => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Card className="group hover:shadow-[var(--shadow-energy)] transition-all duration-300 border-border bg-gradient-to-b from-card to-secondary/30">
      <CardHeader>
        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <CardTitle className="text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <ul className="space-y-2 text-sm text-muted-foreground">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-accent mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
        <Button 
          onClick={scrollToContact}
          className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          Enquire Now
        </Button>
      </CardContent>
    </Card>
  );
};
