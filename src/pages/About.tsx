import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Users, Award, Target, Heart, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 hero-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="bg-white/20 text-white mb-6">
              About Patriot's Path
            </Badge>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Forging India's Future
              <span className="block saffron-gradient bg-clip-text text-transparent">
                Defenders
              </span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              For over 15 years, we've been nurturing young minds to serve the nation with honor, 
              integrity, and unwavering dedication.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="border-primary/20 shadow-elegant">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl flex items-center">
                    <Target className="h-6 w-6 text-primary mr-3" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide comprehensive and result-oriented coaching for defence examinations 
                    while instilling the values of patriotism, discipline, and leadership in every 
                    aspirant. We aim to create not just successful candidates, but future leaders 
                    who will serve the nation with distinction.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 shadow-saffron">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl flex items-center">
                    <Heart className="h-6 w-6 text-secondary mr-3" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To be India's most trusted defence coaching institute, recognized for our 
                    commitment to excellence, innovation in teaching methodologies, and our 
                    contribution to national security through quality officer preparation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide every aspect of our training and character development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Integrity',
                  description: 'Unwavering commitment to truth, honesty, and ethical conduct in all endeavors.'
                },
                {
                  icon: Users,
                  title: 'Excellence',
                  description: 'Pursuit of the highest standards in education, training, and personal development.'
                },
                {
                  icon: Star,
                  title: 'Service',
                  description: 'Dedication to serving the nation and contributing to the greater good of society.'
                }
              ].map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-smooth">
                  <CardContent className="p-8">
                    <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-heading text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Our Expert Faculty
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Learn from experienced military officers and subject matter experts
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Col. (Retd.) Vikram Singh',
                  position: 'Director & NDA Expert',
                  experience: '25 years Army experience, Ex-NDA instructor',
                  specialization: 'Mathematics & Leadership Training'
                },
                {
                  name: 'Wg. Cdr. (Retd.) Priya Sharma',
                  position: 'AFCAT Specialist',
                  experience: '20 years Air Force experience',
                  specialization: 'Aviation & Technical Knowledge'
                },
                {
                  name: 'Cdr. (Retd.) Rajesh Kumar',
                  position: 'SSB Training Head',
                  experience: '22 years Navy experience, Ex-SSB Assessor',
                  specialization: 'Psychology & Personality Development'
                }
              ].map((faculty, index) => (
                <Card key={index} className="hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                      {faculty.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-center mb-2">
                      {faculty.name}
                    </h3>
                    <p className="text-primary text-center font-medium mb-3">
                      {faculty.position}
                    </p>
                    <p className="text-sm text-muted-foreground text-center mb-2">
                      {faculty.experience}
                    </p>
                    <Badge variant="outline" className="w-full justify-center">
                      {faculty.specialization}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievement Stats */}
        <section className="py-16 hero-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Our Achievements
              </h2>
              <p className="opacity-90 max-w-2xl mx-auto">
                Numbers that reflect our commitment to excellence and success
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '2000+', label: 'Successful Candidates' },
                { number: '95%', label: 'Success Rate' },
                { number: '500+', label: 'Officers Commissioned' },
                { number: '15+', label: 'Years of Excellence' }
              ].map((stat, index) => (
                <div key={index} className="text-center animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                  <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                    {stat.number}
                  </div>
                  <div className="opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of successful candidates who chose Patriot's Path for their defence career
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 saffron-gradient text-white rounded-lg font-semibold hover:scale-105 transition-bounce shadow-saffron">
                Start Your Journey
              </button>
              <button className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-smooth">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default About;