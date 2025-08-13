import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import HeroSection from '@/components/HomePage/HeroSection';
import CoursesSection from '@/components/HomePage/CoursesSection';
import NoticeBoard from '@/components/HomePage/NoticeBoard';
import SuccessStories from '@/components/HomePage/SuccessStories';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <CoursesSection />
        <NoticeBoard />
        <SuccessStories />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
