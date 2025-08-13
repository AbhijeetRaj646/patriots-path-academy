import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 hero-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="bg-white/20 text-white mb-6">
              Blog & News
            </Badge>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Defence Updates &
              <span className="block saffron-gradient bg-clip-text text-transparent">
                Expert Insights
              </span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Stay informed with latest defence news, exam updates, and preparation tips
            </p>
          </div>
        </section>

        {/* Blog Content - Placeholder */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-accent/30 rounded-2xl p-12">
              <h2 className="font-heading text-2xl font-bold mb-4">Blog Coming Soon</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're preparing valuable content including exam preparation tips, defence news updates, 
                success strategies, and insights from military experts to help you in your journey.
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

export default Blog;