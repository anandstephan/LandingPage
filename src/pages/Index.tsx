import { ProductCard } from "@/components/ProductCard";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-battery.jpg";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      icon: "🔋",
      title: "Lithium Batteries for EVs",
      description: "High-performance batteries for e-rickshaws, scooters, and fleet vehicles.",
      features: [
        "Extended lifecycle (3000+ cycles)",
        "Fast charging capability",
        "Lightweight design",
        "3-5 year warranty"
      ]
    },
    {
      icon: "⚡",
      title: "Lithium Battery Inverters",
      description: "Smart energy backup solutions for home & business.",
      features: [
        "Seamless power backup",
        "Solar integration ready",
        "Smart battery management",
        "10+ years lifespan"
      ]
    },
    {
      icon: "☀️",
      title: "Solar Batteries",
      description: "Reliable, long-cycle batteries for solar applications.",
      features: [
        "Deep discharge capability",
        "Weather-resistant design",
        "Maximum solar efficiency",
        "Maintenance-free operation",
        "Maintenance-free operation"
      ]
    },
    {
      icon: "🧰",
      title: "Accessories & BMS Units",
      description: "Battery management systems, chargers, and connectors.",
      features: [
        "Advanced BMS protection",
        "Smart monitoring systems",
        "Universal compatibility",
        "Technical support included"
      ]
    },
   {
    icon: "🛺",
    title: "E-Rickshaw",
    description: "Durable and efficient battery packs designed for e-rickshaws and cargo vehicles.",
    features: [
      "Optimized for long daily routes",
      "High load-bearing capacity",
      "Fast-charging with extended life",
      "Low maintenance and reliable performance"
    ]
  }

  ];

  const benefits = [
    "Authorized Dealer for Top Lithium Brands",
    "Ready Stock for Fast Delivery",
    "Trained Technical Support Team",
    "End-to-End Solutions (Battery + Inverter Setup)",
    "Transparent Pricing"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-accent/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Powering the Future with<br />Advanced Lithium Batteries
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-primary-foreground/90">
            Trusted dealer for top lithium battery brands & inverter solutions. Delivering high-performance, 
            long-life energy systems for homes, EVs, and industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('products')}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6"
            >
              Explore Products
            </Button>
            {/* <Button 
              size="lg"
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-2 border-primary-foreground bg:black text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6"
            >
              Get a Quote
            </Button> */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Your Reliable Lithium Battery Partner
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With years of experience in battery distribution, we are an authorized dealer for premium 
              lithium battery brands. From EV applications to solar and inverter solutions, our mission 
              is to provide efficient, eco-friendly, and durable energy systems that keep your world 
              running without interruption.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="p-6 bg-card rounded-lg shadow-[var(--shadow-card)]">
                <div className="text-4xl mb-3">✓</div>
                <h3 className="font-semibold text-foreground mb-2">100% Genuine</h3>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-[var(--shadow-card)]">
                <div className="text-4xl mb-3">🔧</div>
                <h3 className="font-semibold text-foreground mb-2">Technical</h3>
                <p className="text-sm text-muted-foreground">Expertise</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-[var(--shadow-card)]">
                <div className="text-4xl mb-3">📦</div>
                <h3 className="font-semibold text-foreground mb-2">Bulk Stock</h3>
                <p className="text-sm text-muted-foreground">Availability</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-[var(--shadow-card)]">
                <div className="text-4xl mb-3">🚚</div>
                <h3 className="font-semibold text-foreground mb-2">Pan-India</h3>
                <p className="text-sm text-muted-foreground">Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Products & Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive range of lithium battery solutions for every application
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Why Customers Trust Us
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20"
                >
                  <div className="text-3xl">✅</div>
                  <p className="text-lg font-medium text-left">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Let's Power Up Your Project!
            </h2>
            <p className="text-lg text-muted-foreground">
              Get in touch with our team for expert guidance and competitive quotes
            </p>
          </div>
          
          <ContactForm />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-card rounded-lg shadow-[var(--shadow-card)]">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-semibold text-foreground mb-2">Address</h3>
              <p className="text-sm text-muted-foreground">Industrial Area, Sector 15<br />Your City, State - 110001</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-[var(--shadow-card)]">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-semibold text-foreground mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground">+91 98765 43210<br />+91 98765 43211</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-[var(--shadow-card)]">
              <div className="text-3xl mb-3">✉️</div>
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">info@lithiumbattery.com<br />sales@lithiumbattery.com</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-[var(--shadow-card)]">
              <div className="text-3xl mb-3">🕒</div>
              <h3 className="font-semibold text-foreground mb-2">Working Hours</h3>
              <p className="text-sm text-muted-foreground">Mon - Sat: 9AM - 7PM<br />Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2025 Lithium Battery Solutions. All rights reserved. | Authorized Dealer for Premium Battery Brands
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
