import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock, Users, BookOpen, Target } from 'lucide-react';
import ndaImage from '@/assets/course-nda.jpg';
import cdsImage from '@/assets/course-cds.jpg';
import afcatImage from '@/assets/course-afcat.jpg';
import ssbImage from '@/assets/course-ssb.jpg';

interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  batchSize: string;
  features: string[];
  syllabus: string[];
  fees: string;
  nextBatch: string;
}

const courses: Course[] = [
  {
    id: 'nda',
    title: 'NDA Preparation',
    description: 'National Defence Academy - Gateway to Army, Navy & Air Force',
    image: ndaImage,
    duration: '12 Months',
    batchSize: '25 Students',
    features: ['Complete Syllabus Coverage', 'Mock Tests & Analysis', 'Physical Training', 'Personality Development'],
    syllabus: ['Mathematics', 'General Ability Test', 'English', 'General Knowledge', 'Current Affairs', 'Physical Fitness'],
    fees: '₹85,000 (Complete Course)',
    nextBatch: 'January 15, 2024'
  },
  {
    id: 'cds',
    title: 'CDS Training',
    description: 'Combined Defence Services - Officer Training Academy',
    image: cdsImage,
    duration: '8 Months',
    batchSize: '30 Students',
    features: ['Expert Faculty', 'Regular Assessments', 'Interview Preparation', 'Current Affairs Updates'],
    syllabus: ['Elementary Mathematics', 'General Knowledge', 'English', 'Essay Writing', 'Leadership Qualities'],
    fees: '₹65,000 (Complete Course)',
    nextBatch: 'February 1, 2024'
  },
  {
    id: 'afcat',
    title: 'AFCAT Coaching',
    description: 'Air Force Common Admission Test - Flying & Ground Duty',
    image: afcatImage,
    duration: '6 Months',
    batchSize: '20 Students',
    features: ['Technical Knowledge', 'Reasoning & GA', 'English Proficiency', 'Aviation Awareness'],
    syllabus: ['General Awareness', 'Verbal Ability', 'Numerical Ability', 'Reasoning', 'Military History'],
    fees: '₹55,000 (Complete Course)',
    nextBatch: 'January 20, 2024'
  },
  {
    id: 'ssb',
    title: 'SSB Interview',
    description: 'Services Selection Board - Psychology & Personality Tests',
    image: ssbImage,
    duration: '3 Months',
    batchSize: '15 Students',
    features: ['Mock Interviews', 'Group Discussions', 'Psychological Tests', 'Confidence Building'],
    syllabus: ['Officer Like Qualities', 'Group Testing', 'Psychology Tests', 'Personal Interview', 'Conference'],
    fees: '₹45,000 (Complete Course)',
    nextBatch: 'Ongoing Batches'
  }
];

const CoursesSection = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-secondary-foreground">
            Our Courses
          </Badge>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Path to
            <span className="text-primary"> Defence Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive training programs designed to prepare you for India's premier defence examinations
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="group hover:shadow-elegant transition-smooth border-border">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {course.duration}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="font-heading text-xl group-hover:text-primary transition-smooth">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {course.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.batchSize}
                  </div>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full group-hover:shadow-primary transition-smooth"
                      onClick={() => setSelectedCourse(course)}
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="font-heading text-2xl">{course.title}</DialogTitle>
                      <DialogDescription className="text-base">
                        {course.description}
                      </DialogDescription>
                    </DialogHeader>
                    
                    {selectedCourse && (
                      <div className="space-y-6">
                        <img
                          src={selectedCourse.image}
                          alt={selectedCourse.title}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <h4 className="font-semibold flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-primary" />
                              Duration
                            </h4>
                            <p className="text-muted-foreground">{selectedCourse.duration}</p>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-semibold flex items-center">
                              <Users className="h-4 w-4 mr-2 text-primary" />
                              Batch Size
                            </h4>
                            <p className="text-muted-foreground">{selectedCourse.batchSize}</p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-semibold flex items-center">
                            <Target className="h-4 w-4 mr-2 text-primary" />
                            Key Features
                          </h4>
                          <ul className="grid grid-cols-2 gap-2">
                            {selectedCourse.features.map((feature, index) => (
                              <li key={index} className="flex items-center text-sm">
                                <div className="h-2 w-2 bg-success rounded-full mr-2"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-semibold flex items-center">
                            <BookOpen className="h-4 w-4 mr-2 text-primary" />
                            Syllabus Coverage
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedCourse.syllabus.map((subject, index) => (
                              <Badge key={index} variant="outline">
                                {subject}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="bg-accent p-4 rounded-lg space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold">Course Fee:</span>
                            <span className="text-lg font-bold text-primary">{selectedCourse.fees}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="font-semibold">Next Batch:</span>
                            <span className="text-success font-medium">{selectedCourse.nextBatch}</span>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button className="flex-1 saffron-gradient text-white">
                            Join This Course
                          </Button>
                          <Button variant="outline" className="flex-1">
                            Download Brochure
                          </Button>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Courses & Fees
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;