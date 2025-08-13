import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Academy Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-secondary" />
              <div>
                <h3 className="font-heading font-bold text-lg">Patriot's Path</h3>
                <p className="text-sm opacity-90">Defence Academy</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Empowering India's future defenders through comprehensive coaching for NDA, CDS, AFCAT, and SSB interviews. Join the journey of honor and service.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-secondary">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Courses & Fees', path: '/courses' },
                { name: 'Success Stories', path: '/gallery' },
                { name: 'Blog & News', path: '/blog' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-secondary">Our Courses</h4>
            <ul className="space-y-2">
              {[
                'NDA Preparation',
                'CDS Training',
                'AFCAT Coaching',
                'SSB Interview',
                'Physical Training',
                'Personality Development',
              ].map((course) => (
                <li key={course}>
                  <span className="text-sm opacity-90">{course}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-secondary">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">+91 9876543210</p>
                  <p className="text-xs opacity-80">Mon-Sat, 9:00 AM - 7:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">info@patriotspath.in</p>
                  <p className="text-xs opacity-80">admissions@patriotspath.in</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">123 Defence Colony</p>
                  <p className="text-xs opacity-80">New Delhi - 110024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-80">
              © 2024 Patriot's Path Defence Academy. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="opacity-80 hover:opacity-100 transition-smooth">
                Privacy Policy
              </Link>
              <Link to="/terms" className="opacity-80 hover:opacity-100 transition-smooth">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="opacity-80 hover:opacity-100 transition-smooth">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;