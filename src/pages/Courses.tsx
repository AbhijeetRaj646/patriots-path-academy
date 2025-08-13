import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, BookOpen, Target, CheckCircle, Star } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 'nda',
      title: 'NDA Preparation Course',
      subtitle: 'National Defence Academy - Gateway to Tri-Services',
      duration: '12 Months',
      batchSize: '25 Students',
      fees: '₹85,000',
      rating: 4.9,
      features: [
        'Complete Mathematics Coverage',
        'General Ability Test Training',
        'English Language Enhancement',
        'Current Affairs Updates',
        'Physical Training Sessions',
        'Personality Development',
        'Mock Tests & Analysis',
        'Individual Attention'
      ],
      syllabus: [
        'Mathematics: Algebra, Trigonometry, Geometry, Statistics',
        'General Ability: Physics, Chemistry, General Science',
        'English: Grammar, Comprehension, Essay Writing',
        'General Knowledge: History, Geography, Current Affairs',
        'Physical Fitness: Running, Push-ups, Sit-ups',
        'Personality Development: Communication, Leadership'
      ],
      nextBatch: 'January 15, 2024',
      eligibility: 'Class 12th passed (PCM/PCB)',
      ageLimit: '16.5 - 19.5 years'
    },
    {
      id: 'cds',
      title: 'CDS Training Program',
      subtitle: 'Combined Defence Services - Officer Training Academy',
      duration: '8 Months',
      batchSize: '30 Students',
      fees: '₹65,000',
      rating: 4.8,
      features: [
        'Elementary Mathematics',
        'General Knowledge Mastery',
        'English Proficiency',
        'Essay Writing Techniques',
        'Interview Preparation',
        'Current Affairs Analysis',
        'Time Management Skills',
        'Comprehensive Study Material'
      ],
      syllabus: [
        'Elementary Mathematics: Arithmetic, Algebra, Geometry',
        'General Knowledge: History, Geography, Polity, Economics',
        'English: Vocabulary, Grammar, Comprehension, Essay',
        'Current Affairs: National & International Events',
        'Interview Skills: Communication, Confidence Building',
        'Personality Assessment: Leadership Qualities'
      ],
      nextBatch: 'February 1, 2024',
      eligibility: 'Graduation in any discipline',
      ageLimit: '19 - 25 years (varies by entry)'
    },
    {
      id: 'afcat',
      title: 'AFCAT Coaching',
      subtitle: 'Air Force Common Admission Test - Flying & Ground Duty',
      duration: '6 Months',
      batchSize: '20 Students',
      fees: '₹55,000',
      rating: 4.9,
      features: [
        'General Awareness Training',
        'Verbal Ability Enhancement',
        'Numerical Ability Practice',
        'Reasoning & Military Aptitude',
        'Aviation Knowledge',
        'Technical Concepts',
        'Mock Tests & Analysis',
        'Interview Preparation'
      ],
      syllabus: [
        'General Awareness: History, Geography, Civics, Physics, Chemistry',
        'Verbal Ability: English Grammar, Reading Comprehension',
        'Numerical Ability: Mathematics, Data Interpretation',
        'Reasoning: Logical, Spatial, Military Aptitude',
        'Aviation: Basic Aerodynamics, Aircraft Systems',
        'Technical: For Technical Branch candidates'
      ],
      nextBatch: 'January 20, 2024',
      eligibility: 'Graduation with 60% marks',
      ageLimit: '20 - 24 years (varies by branch)'
    },
    {
      id: 'ssb',
      title: 'SSB Interview Preparation',
      subtitle: 'Services Selection Board - Psychology & Personality Tests',
      duration: '3 Months',
      batchSize: '15 Students',
      fees: '₹45,000',
      rating: 5.0,
      features: [
        'Psychological Test Training',
        'Group Testing Exercises',
        'Personal Interview Preparation',
        'Group Discussion Practice',
        'Progressive Picture Perception',
        'Thematic Apperception Test',
        'Situation Reaction Test',
        'Command Task Practice'
      ],
      syllabus: [
        'Officer Like Qualities: 15 OLQs Development',
        'Psychological Tests: TAT, WAT, SRT, SDT',
        'Group Testing: GD, GPE, PGT, HGT, Command Task',
        'Personal Interview: Communication, Knowledge, Personality',
        'Conference: Final Assessment & Interaction',
        'Outdoor Tasks: Physical & Mental Challenges'
      ],
      nextBatch: 'Ongoing Batches',
      eligibility: 'Qualified written exam candidates',
      ageLimit: 'As per respective service requirements'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 hero-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="bg-white/20 text-white mb-6">
              Our Courses
            </Badge>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Choose Your Path to
              <span className="block saffron-gradient bg-clip-text text-transparent">
                Defence Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Comprehensive training programs designed by experts to ensure your success in defence examinations
            </p>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {courses.map((course, index) => (
                <Card key={course.id} className="overflow-hidden border-border shadow-elegant">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Course Info */}
                    <div className="lg:col-span-2 p-8">
                      <CardHeader className="p-0 mb-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="font-heading text-2xl md:text-3xl mb-2">
                              {course.title}
                            </CardTitle>
                            <CardDescription className="text-lg text-muted-foreground">
                              {course.subtitle}
                            </CardDescription>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-5 w-5 fill-secondary text-secondary" />
                            <span className="font-semibold">{course.rating}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 mt-4">
                          <div className="flex items-center text-muted-foreground">
                            <Clock className="h-4 w-4 mr-2" />
                            {course.duration}
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Users className="h-4 w-4 mr-2" />
                            {course.batchSize}
                          </div>
                          <Badge className="bg-success text-success-foreground">
                            Next Batch: {course.nextBatch}
                          </Badge>
                        </div>
                      </CardHeader>

                      <CardContent className="p-0 space-y-6">
                        {/* Key Features */}
                        <div>
                          <h4 className="font-heading font-semibold text-lg mb-3 flex items-center">
                            <Target className="h-5 w-5 text-primary mr-2" />
                            Key Features
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {course.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center text-sm">
                                <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Syllabus */}
                        <div>
                          <h4 className="font-heading font-semibold text-lg mb-3 flex items-center">
                            <BookOpen className="h-5 w-5 text-primary mr-2" />
                            Syllabus Coverage
                          </h4>
                          <ul className="space-y-2">
                            {course.syllabus.map((topic, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground">
                                • {topic}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Eligibility */}
                        <div>
                          <h4 className="font-heading font-semibold text-lg mb-3">
                            Eligibility & Age
                          </h4>
                          <div className="space-y-1 text-sm">
                            <p><strong>Education:</strong> {course.eligibility}</p>
                            <p><strong>Age Limit:</strong> {course.ageLimit}</p>
                          </div>
                        </div>
                      </CardContent>
                    </div>

                    {/* Pricing & CTA */}
                    <div className="bg-accent/30 p-8 flex flex-col justify-center">
                      <div className="text-center mb-6">
                        <div className="text-4xl font-bold text-primary mb-2">
                          {course.fees}
                        </div>
                        <p className="text-muted-foreground">Complete Course Fee</p>
                        <Badge variant="outline" className="mt-2">
                          EMI Options Available
                        </Badge>
                      </div>

                      <div className="space-y-4">
                        <Button className="w-full saffron-gradient text-white shadow-saffron">
                          Join This Course
                        </Button>
                        <Button variant="outline" className="w-full border-primary text-primary">
                          Download Brochure
                        </Button>
                        <Button variant="ghost" className="w-full text-muted-foreground">
                          Schedule Free Demo
                        </Button>
                      </div>

                      <div className="mt-6 p-4 bg-background rounded-lg">
                        <h5 className="font-semibold mb-2">What's Included:</h5>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Study Materials & Books</li>
                          <li>• Online Test Series</li>
                          <li>• Doubt Clearing Sessions</li>
                          <li>• Mock Interviews</li>
                          <li>• Progress Tracking</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Additional Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive support beyond classroom training
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Physical Training',
                  description: 'Fitness coaching and endurance building for defence standards',
                  price: '₹15,000/6 months'
                },
                {
                  title: 'Personality Development',
                  description: 'Communication skills, leadership training, and confidence building',
                  price: '₹20,000/3 months'
                },
                {
                  title: 'Medical Exam Guidance',
                  description: 'Medical fitness preparation and health assessment support',
                  price: '₹10,000/package'
                }
              ].map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-smooth">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="text-lg font-bold text-primary mb-4">{service.price}</div>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Courses;