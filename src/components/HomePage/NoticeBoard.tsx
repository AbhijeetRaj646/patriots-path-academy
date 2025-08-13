import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bell, Calendar, Clock, X, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface Notice {
  id: string;
  title: string;
  content: string;
  type: 'urgent' | 'exam' | 'admission' | 'event';
  date: string;
  isNew: boolean;
}

const notices: Notice[] = [
  {
    id: '1',
    title: 'NDA Exam Date Announced',
    content: 'NDA (I) 2024 examination will be conducted on April 21, 2024. Last date for application is January 30, 2024. Prepare now with our comprehensive course.',
    type: 'exam',
    date: '2024-01-15',
    isNew: true
  },
  {
    id: '2',
    title: 'New Batch Starting Soon',
    content: 'CDS preparation batch starting from February 1, 2024. Limited seats available. Early bird discount of 20% for registrations before January 25.',
    type: 'admission',
    date: '2024-01-14',
    isNew: true
  },
  {
    id: '3',
    title: 'SSB Interview Workshop',
    content: 'Free SSB interview workshop for all enrolled students on January 28, 2024. Learn from ex-military officers and boost your confidence.',
    type: 'event',
    date: '2024-01-13',
    isNew: false
  },
  {
    id: '4',
    title: 'AFCAT 2024 Notification Released',
    content: 'Indian Air Force has released AFCAT (1) 2024 notification. Online applications start from December 1, 2023. Join our AFCAT course now.',
    type: 'urgent',
    date: '2024-01-12',
    isNew: false
  }
];

const NoticeBoard = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  // Show popup for urgent notices on component mount
  useEffect(() => {
    const urgentNotices = notices.filter(notice => notice.type === 'urgent' && notice.isNew);
    if (urgentNotices.length > 0) {
      setSelectedNotice(urgentNotices[0]);
      setShowPopup(true);
    }
  }, []);

  const getTypeColor = (type: Notice['type']) => {
    switch (type) {
      case 'urgent':
        return 'bg-destructive text-destructive-foreground';
      case 'exam':
        return 'bg-primary text-primary-foreground';
      case 'admission':
        return 'bg-success text-success-foreground';
      case 'event':
        return 'bg-secondary text-secondary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeIcon = (type: Notice['type']) => {
    switch (type) {
      case 'urgent':
        return '🚨';
      case 'exam':
        return '📝';
      case 'admission':
        return '🎓';
      case 'event':
        return '📅';
      default:
        return '📢';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <>
      <section className="py-16 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Bell className="h-6 w-6 text-primary mr-2" />
              <h2 className="font-heading text-3xl font-bold text-foreground">
                Notice Board
              </h2>
            </div>
            <p className="text-muted-foreground">
              Stay updated with latest exam notifications and academy announcements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {notices.map((notice) => (
              <Card 
                key={notice.id} 
                className="hover:shadow-lg transition-smooth cursor-pointer border-l-4 border-l-primary"
                onClick={() => {
                  setSelectedNotice(notice);
                  setShowPopup(true);
                }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{getTypeIcon(notice.type)}</span>
                      <Badge className={getTypeColor(notice.type)}>
                        {notice.type.toUpperCase()}
                      </Badge>
                      {notice.isNew && (
                        <Badge variant="outline" className="text-destructive border-destructive animate-pulse">
                          NEW
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(notice.date)}
                    </div>
                  </div>
                  <CardTitle className="font-heading text-lg line-clamp-2 hover:text-primary transition-smooth">
                    {notice.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3 mb-3">
                    {notice.content}
                  </p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    Read More
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All Notifications
            </Button>
          </div>
        </div>
      </section>

      {/* Notice Popup */}
      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <span className="text-xl">{selectedNotice && getTypeIcon(selectedNotice.type)}</span>
              <span className="font-heading">{selectedNotice?.title}</span>
            </DialogTitle>
          </DialogHeader>
          
          {selectedNotice && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge className={getTypeColor(selectedNotice.type)}>
                  {selectedNotice.type.toUpperCase()}
                </Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  {formatDate(selectedNotice.date)}
                </div>
              </div>
              
              <p className="text-foreground leading-relaxed">
                {selectedNotice.content}
              </p>
              
              <div className="flex gap-3 pt-4">
                <Button 
                  className="flex-1 saffron-gradient text-white"
                  onClick={() => setShowPopup(false)}
                >
                  Take Action
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setShowPopup(false)}
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NoticeBoard;