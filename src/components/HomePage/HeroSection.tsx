import { Button } from '@/components/ui/button';
import { Play, Shield, Users, Award } from 'lucide-react';
import heroImage from '@/assets/hero-defence.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Defence Academy Training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-85"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-primary/60"></div>
      </div>

      {/* Tricolor Accent */}
      <div className="absolute top-0 left-0 w-full h-2 tricolor-gradient animate-tricolor-wave"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6">
            <Shield className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">India's Premier Defence Academy</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Forge Your Path to
            <span className="block saffron-gradient bg-clip-text text-transparent animate-pulse-patriotic">
              Defense Excellence
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join the elite ranks of India's defenders through comprehensive NDA, CDS, AFCAT & SSB preparation at Patriot's Path Defence Academy
          </p>

          {/* Motivational Quote */}
          <blockquote className="font-quote text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto italic">
            "The safety, honour and welfare of your country come first, always and every time."
            <cite className="block text-sm mt-2 text-white/70">- Indian Military Academy Motto</cite>
          </blockquote>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="saffron-gradient text-white shadow-saffron hover:scale-105 transition-bounce font-semibold px-8 py-3">
              Start Your Journey
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary transition-smooth px-8 py-3"
            >
              <Play className="h-5 w-5 mr-2" />
              Watch Success Stories
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center animate-float">
              <Users className="h-8 w-8 text-secondary mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">2000+</div>
              <div className="text-white/80">Successful Candidates</div>
            </div>
            <div className="text-center animate-float" style={{ animationDelay: '1s' }}>
              <Award className="h-8 w-8 text-secondary mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">95%</div>
              <div className="text-white/80">Success Rate</div>
            </div>
            <div className="text-center animate-float" style={{ animationDelay: '2s' }}>
              <Shield className="h-8 w-8 text-secondary mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-white/80">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;