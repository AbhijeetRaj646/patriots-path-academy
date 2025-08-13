import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

interface SuccessStory {
  id: string;
  name: string;
  achievement: string;
  service: string;
  year: string;
  story: string;
  image: string;
  rating: number;
}

const successStories: SuccessStory[] = [
  {
    id: '1',
    name: 'Lieutenant Arjun Sharma',
    achievement: 'Selected in NDA 152nd Course',
    service: 'Indian Army',
    year: '2023',
    story: 'Patriot\'s Path not only prepared me academically but also instilled the values of discipline and leadership. The comprehensive training and mentorship helped me secure my dream of serving the nation.',
    image: '/placeholder.svg',
    rating: 5
  },
  {
    id: '2',
    name: 'Flight Lieutenant Priya Nair',
    achievement: 'Cleared AFCAT & Became Fighter Pilot',
    service: 'Indian Air Force',
    year: '2023',
    story: 'The AFCAT preparation at Patriot\'s Path was exceptional. The technical knowledge and interview training gave me the confidence to pursue my dream of becoming a fighter pilot.',
    image: '/placeholder.svg',
    rating: 5
  },
  {
    id: '3',
    name: 'Sub Lieutenant Rajesh Kumar',
    achievement: 'Selected through CDS Exam',
    service: 'Indian Navy',
    year: '2022',
    story: 'The faculty at Patriot\'s Path understood my strengths and worked on my weaknesses. Their guidance during SSB preparation was invaluable in my success.',
    image: '/placeholder.svg',
    rating: 5
  },
  {
    id: '4',
    name: 'Captain Anita Singh',
    achievement: 'NDA Graduate & Commissioned Officer',
    service: 'Indian Army',
    year: '2022',
    story: 'From a small town girl to an Army officer - Patriot\'s Path made this journey possible. The academy\'s holistic approach to personality development was game-changing.',
    image: '/placeholder.svg',
    rating: 5
  }
];

const SuccessStories = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-secondary-foreground">
            Success Stories
          </Badge>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Heroes Born at
            <span className="text-primary"> Patriot's Path</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Inspiring journeys of our students who turned their dreams of serving the nation into reality
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {successStories.map((story, index) => (
            <Card 
              key={story.id} 
              className="hover:shadow-elegant transition-smooth border-border animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                      {story.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-heading font-semibold text-lg text-foreground">
                          {story.name}
                        </h3>
                        <p className="text-primary font-medium">{story.achievement}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge className="bg-success text-success-foreground">
                            {story.service}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            Batch {story.year}
                          </span>
                        </div>
                      </div>
                      
                      {/* Rating */}
                      <div className="flex items-center space-x-1">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                        ))}
                      </div>
                    </div>

                    {/* Story Quote */}
                    <div className="relative">
                      <Quote className="h-6 w-6 text-muted-foreground/30 absolute -top-2 -left-2" />
                      <blockquote className="font-quote text-muted-foreground italic leading-relaxed pl-4">
                        {story.story}
                      </blockquote>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 p-8 bg-primary/5 rounded-2xl">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2000+</div>
            <div className="text-muted-foreground">Success Stories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Officers Commissioned</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Years of Excellence</div>
          </div>
        </div>

        {/* Motivational Quote */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl">
          <blockquote className="font-quote text-xl md:text-2xl text-foreground italic mb-4">
            "Success is not just about clearing exams, it's about developing the character to serve the nation with honor and integrity."
          </blockquote>
          <cite className="text-muted-foreground">- Col. (Retd.) Vikram Singh, Director, Patriot's Path Defence Academy</cite>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;