import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageCircle, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 hero-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="bg-white/20 text-white mb-6">
              Contact Us
            </Badge>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Get in Touch with
              <span className="block saffron-gradient bg-clip-text text-transparent">
                Our Team
              </span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Ready to start your defence career journey? We're here to guide you every step of the way
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-3xl font-bold mb-6">
                    Let's Connect
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Have questions about our courses, admission process, or need guidance for your defence preparation? 
                    Our expert counselors are here to help you make the right choice for your career.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  <Card className="border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Phone Number</h3>
                          <p className="text-muted-foreground mb-2">Call us for immediate assistance</p>
                          <p className="font-medium text-primary">+91 9876543210</p>
                          <p className="text-sm text-muted-foreground">Mon-Sat, 9:00 AM - 7:00 PM</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-secondary/20">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-secondary/10 p-3 rounded-lg">
                          <Mail className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Email Address</h3>
                          <p className="text-muted-foreground mb-2">Send us your queries anytime</p>
                          <p className="font-medium text-secondary">info@patriotspath.in</p>
                          <p className="text-sm text-muted-foreground">admissions@patriotspath.in</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-success/20">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-success/10 p-3 rounded-lg">
                          <MapPin className="h-6 w-6 text-success" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Academy Address</h3>
                          <p className="text-muted-foreground mb-2">Visit us for campus tour</p>
                          <p className="font-medium">123 Defence Colony</p>
                          <p className="text-sm text-muted-foreground">New Delhi - 110024, India</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Operating Hours */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="h-5 w-5 text-primary mr-2" />
                      Operating Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Linkedin className="h-5 w-5 mr-2" />
                      LinkedIn
                    </Button>
                    <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
                      <Instagram className="h-5 w-5 mr-2" />
                      Instagram
                    </Button>
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl">
                      Send us a Message
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name *</label>
                        <Input placeholder="Enter your first name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name *</label>
                        <Input placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input type="email" placeholder="Enter your email" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number *</label>
                      <Input type="tel" placeholder="Enter your phone number" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Course of Interest</label>
                      <select className="w-full p-2 border border-border rounded-md bg-background">
                        <option value="">Select a course</option>
                        <option value="nda">NDA Preparation</option>
                        <option value="cds">CDS Training</option>
                        <option value="afcat">AFCAT Coaching</option>
                        <option value="ssb">SSB Interview</option>
                        <option value="all">All Courses</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea 
                        placeholder="Tell us about your goals, questions, or how we can help you..."
                        rows={4}
                      />
                    </div>

                    <Button className="w-full saffron-gradient text-white shadow-saffron">
                      Send Message
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to receive communication from Patriot's Path Defence Academy
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-16 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold mb-4">
                Need Immediate Assistance?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose the quickest way to connect with us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-smooth">
                <CardContent className="p-8">
                  <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-semibold mb-2">WhatsApp Chat</h3>
                  <p className="text-muted-foreground mb-4">
                    Get instant responses to your queries
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-smooth">
                <CardContent className="p-8">
                  <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-semibold mb-2">Schedule a Call</h3>
                  <p className="text-muted-foreground mb-4">
                    Book a free counseling session
                  </p>
                  <Button variant="outline" className="border-primary text-primary">
                    Book Call
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-smooth">
                <CardContent className="p-8">
                  <MapPin className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-semibold mb-2">Visit Campus</h3>
                  <p className="text-muted-foreground mb-4">
                    Take a tour of our facilities
                  </p>
                  <Button className="saffron-gradient text-white">
                    Schedule Visit
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Contact;