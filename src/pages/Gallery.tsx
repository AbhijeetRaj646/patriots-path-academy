import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Badge } from '@/components/ui/badge';

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 hero-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="bg-white/20 text-white mb-6">
              Gallery
            </Badge>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Moments of
              <span className="block saffron-gradient bg-clip-text text-transparent">
                Pride & Achievement
              </span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Witness the journey of our cadets and celebrate their success stories
            </p>
          </div>
        </section>

        {/* Gallery Content - Placeholder */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-accent/30 rounded-2xl p-12">
              <h2 className="font-heading text-2xl font-bold mb-4">Gallery Coming Soon</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're preparing an inspiring collection of photos and videos showcasing our academy life, 
                training sessions, success celebrations, and proud moments of our cadets.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Gallery;