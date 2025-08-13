import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+919876543210'; // Replace with actual WhatsApp number
    const message = encodeURIComponent('Hi! I\'m interested in joining Patriot\'s Path Defence Academy. Please provide more information.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-patriotic"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-16 right-0 bg-background border border-border rounded-lg px-3 py-2 shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        <p className="text-sm font-medium">Chat with us on WhatsApp</p>
        <div className="absolute -bottom-1 right-4 w-2 h-2 bg-background border-r border-b border-border transform rotate-45"></div>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;